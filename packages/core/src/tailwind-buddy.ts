import { cleanString } from "./utils/strings";

const uniquifyClasses = (classes: string[]): string => {
  return [...new Set(classes.filter(Boolean))].join(" ");
};

const flattenVariant = (
  variant: Record<string, string>,
  slotKey: string
): string[] => {
  if (typeof variant === "string") return [variant];
  if (Array.isArray(variant)) return variant;
  if (typeof variant === "object" && variant !== null) {
    const slotValue = variant[slotKey];
    if (typeof slotValue === "string") return [slotValue];
    if (Array.isArray(slotValue)) return slotValue;
  }
  return [];
};

type SlotFunction<Props extends Record<string, unknown>> = (opt?: Props) => string;

interface Alias {
  slots: string[],
  variants: Record<string, readonly string[]>
  props: Record<string, any>;
  screens: string[]
}

export const compose = <Def extends Alias>(options: {
    slots: {
      [K in Def['slots'][number]]: string
    },
    variants?: {
      [K in keyof Def["variants"]]: {
        [key in Def["variants"][K][number]] : {
          [K in Def['slots'][number]]?: string
        }  | string
      }
    },
    compoundVariants?: {
      conditions: Def['props'] | {
        [K in keyof Def["variants"]]?: Def["variants"][K][number] | Def["variants"][K][number][];
      },
      classes: {
        [K in Def['slots'][number]]?: string
      } | string,
    }[],
    defaultVariants: {
      [K in keyof Def["variants"]]?: Def["variants"][K][number];
    },
    responsiveVariants?: (keyof Def["variants"])[]
}) => {

  const {
        slots,
        variants,
        compoundVariants,
        defaultVariants,
  } = options

  const flattenedVariants = new Map<
    string,
    Map<string, Map<string, Set<string>>>
  >();
    
  if (variants) {
    Object.entries(variants).forEach(([variantKey, variantValues]) => {
      const variantMap = new Map<string, Map<string, Set<string>>>();
      Object.entries(variantValues).forEach(([valueKey, classes]) => {
        const slotMap = new Map<string, Set<string>>();
        Object.keys(slots).forEach((slotKey) => {
          const slotClasses = flattenVariant(
            // @ts-ignore
            classes,
            slotKey
          );
          slotMap.set(slotKey, new Set(slotClasses));
        });
        variantMap.set(valueKey, slotMap);
      });
      flattenedVariants.set(variantKey, variantMap);
    });
  }

  const flattenedCompoundVariants =
  compoundVariants?.map((cv) => ({
    conditions: cv.conditions,
    classes: new Map(
      Object.entries(slots).map(([slotKey, _]) => [
        slotKey,
        // @ts-ignore
        new Set(flattenVariant(cv.classes, slotKey)),
      ])
    ),
  })) || [];

  const variantCache = new Map<string, string>();

  // @ts-ignore
  const ret: Record<
    Def['slots'][number],
    SlotFunction<Def['props'] | { [K in keyof Def["variants"]]?: Def["variants"][K][number] | {
      ["initial"]: Def["variants"][K][number]
    } | {
      [k in Def["screens"][number]]: Def["variants"][K][number]
    }} | {
      className?: string,
      class?: string
    }>
  > = {}

  Object.entries(slots).forEach((s) => {
      const [slotKey, baseClasses] = s

      ret[slotKey as Def['slots'][number]] = (props: Def['props'] | { [K in keyof Def["variants"]]?: Def["variants"][K][number] | {
        ["initial"]: Def["variants"][K][number]
      } | {
        [k in Def["screens"][number]]: Def["variants"][K][number]
      } | {
        className?: string,
        class?: string
      }
      } = {}) => {
        const cleanedProps: Record<string, any> = {}

        Object.keys(props).forEach(key => {
          if (props[key]) {
            cleanedProps[key] = props[key]
          }
        });

        const cacheKey = JSON.stringify({ slot: slotKey, props: cleanedProps });

        if (variantCache.has(cacheKey)) {
          return variantCache.get(cacheKey) || "";
        }

        const classSet = new Set<string>();

        classSet.add(cleanString(baseClasses as string));

        // Merge default variants with props, giving precedence to props
        const mergedProps = { ...defaultVariants, ...cleanedProps };


        // Get all breakpoints used in props
        const usedBreakpoints = new Set(["initial"]);
        Object.values(mergedProps).forEach((value) => {
          if (typeof value === "object" && value !== null) {
            Object.keys(value).forEach((bp) => usedBreakpoints.add(bp));
          }
        });
        // Apply variants (including overridden defaults)
        Object.entries(mergedProps).forEach(([key, value]) => {
          if (key !== "className" && key !== "class" && flattenedVariants.has(key)) {
            if (typeof value === "object" && value !== null) {
              // Handle responsive variants
              Object.entries(value).forEach(
                ([breakpoint, breakpointValue]) => {
                  const variantClasses = flattenedVariants
                    .get(key)
                    ?.get(breakpointValue as string)
                    ?.get(slotKey);
                  if (variantClasses) {
                    variantClasses.forEach((cls) => {
                      if (breakpoint === "initial") {
                        classSet.add(cleanString(cls));
                      } else {
                        const splitStr = cleanString(cls).split(" ");
                        splitStr.forEach((c) => {
                          classSet.add(`${breakpoint}:${c}`);
                        });
                      }
                    });
                  }
                }
              );
            } else {
              const variantClasses = flattenedVariants
                .get(key)
                ?.get(value as string)
                ?.get(slotKey);
              if (variantClasses) {
                variantClasses.forEach((cls) => classSet.add(cls));
              }
            }
          }
        });

        // Apply compound variants
        flattenedCompoundVariants.forEach(({ conditions, classes }) => {
          usedBreakpoints.forEach((breakpoint) => {
            let isMatch = true;
            Object.entries(conditions).forEach(([key, conditionValue]) => {
              const propValue = mergedProps[key];
              let valueToCheck: unknown;
              if (typeof propValue === "object" && propValue !== null) {
                // Handle responsive variant
                valueToCheck =
                  breakpoint === "initial"
                    ? (propValue as { initial: unknown }).initial
                    : (propValue as Record<string, unknown>)[breakpoint] ||
                      (propValue as { initial: unknown }).initial;
              } else {
                valueToCheck = propValue;
              }

              isMatch =
                isMatch &&
                (Array.isArray(conditionValue)
                  ? (conditionValue as Array<unknown>).includes(
                      valueToCheck
                    )
                  : conditionValue === valueToCheck);
            });
            if (isMatch) {
              classes.get(slotKey)?.forEach((cls) => {
                if (breakpoint === "initial") {
                  classSet.add(cleanString(cls));
                } else {
                  const splitStr = cleanString(cls).split(" ");
                  splitStr.forEach((c) => {
                    classSet.add(`${breakpoint}:${c}`);
                  });
                }
              });
            }
          });
        });

        // Add custom className if provided
        if (cleanedProps?.className) {
          cleanString(cleanedProps.className)
            .split(" ")
            .forEach((cls) => classSet.add(cls));
        }

        if (cleanedProps?.class) {
          cleanString(cleanedProps.class)
            .split(" ")
            .forEach((cls) => classSet.add(cls));
        }

        const result = uniquifyClasses(Array.from(classSet));
        variantCache.set(cacheKey, result);
        return result;
      }
  })

  return {
    slots: ret,
    options
  }
}