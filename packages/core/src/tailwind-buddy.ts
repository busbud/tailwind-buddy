import { MergedProps } from "./types/props";
import { Slots } from "./types/slots";
import {
  Variants,
  DefaultVariants,
  ResponsiveVariants,
  CompoundVariant,
  VariantValue,
} from "./types/variants";
import { cleanString } from "./utils/strings";

// Utility functions
const uniquifyClasses = (classes: string[]): string => {
  return [...new Set(classes.filter(Boolean))].join(" ");
};

const flattenVariant = <S extends Slots>(
  variant: VariantValue<S>,
  slotKey: keyof S
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

// Main function
export const setupCompose = <Sc extends string>(
  screens: Sc[],
  mergeClasses: (str: string) => string = (str) => str
) => {
  return <
    V extends Variants<S>,
    CV extends CompoundVariant<V, S>,
    DV extends DefaultVariants<V, S>,
    R extends ResponsiveVariants<V>,
    S extends Slots
  >({
    slots,
    variants,
    compoundVariants,
    responsiveVariants,
    defaultVariants,
  }: {
    slots: S;
    variants?: V;
    compoundVariants?: CV[];
    responsiveVariants?: R;
    defaultVariants: DV;
  }) => {
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
            const slotClasses = flattenVariant<S>(
              classes as VariantValue<S>,
              slotKey as keyof S
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
            new Set(flattenVariant<S>(cv.class, slotKey as keyof S)),
          ])
        ),
      })) || [];

    const variantCache = new Map<string, string>();

    return <Props>() => {
      type SlotFunctionMap = {
        [Slot in keyof S]: (props?: MergedProps<Props, Sc, V, R>) => string;
      };

      const slotFunctions: SlotFunctionMap = Object.entries(slots).reduce(
        (acc, [slotKey, baseClasses]) => {
          acc[slotKey as keyof S] = (props?: MergedProps<Props, Sc, V, R>) => {
            const cleanedProps: Record<string, any> = {}

            if (props) {
              Object.keys(props).forEach(key => {
                if (props[key]) {
                  cleanedProps[key] = props[key]
                }
              });
            }

            const cacheKey = JSON.stringify({ slot: slotKey, props: cleanedProps });
            if (variantCache.has(cacheKey)) {
              return variantCache.get(cacheKey) || "";
            }

            const classSet = new Set<string>();

            if (typeof baseClasses === "string") {
              classSet.add(cleanString(baseClasses));
            } else if (Array.isArray(baseClasses)) {
              baseClasses.forEach((cls) => classSet.add(cleanString(cls)));
            }

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
              if (key !== "className" && flattenedVariants.has(key)) {
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
                  const propValue = mergedProps[key as keyof V];
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

            const result = mergeClasses(uniquifyClasses(Array.from(classSet)));
            variantCache.set(cacheKey, result);
            return result;
          };
          return acc;
        },
        {} as SlotFunctionMap
      );

      return {
        ...slotFunctions,
        definition: () => ({
          slots,
          variants,
          compoundVariants: compoundVariants || [],
          responsiveVariants,
          defaultVariants,
          screens,
        }),
      };
    };
  };
};

export type VariantsProps<
  V extends Record<string, (...args: any[]) => unknown>
> = Parameters<V[keyof V]>[0];
