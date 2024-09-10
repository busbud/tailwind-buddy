import { MergedProps } from "./types/props";
import { Slots } from "./types/slots";
import {
  CompoundVariant,
  DefaultVariants,
  ResponsiveVariants,
  Variants,
} from "./types/variants";

const mergeClasses = (classes: string[]): string => {
  return [...new Set(classes.filter(Boolean))].join(" ");
};

const variantCache = new Map<string, string>();

const flattenVariant = (variant: any, slotKey: string): string[] => {
  if (typeof variant === "string") return [variant];
  if (Array.isArray(variant)) return variant;
  if (typeof variant === "object" && variant !== null) {
    return variant[slotKey] || [];
  }
  return [];
};

export const setupCompose = <Sc extends string>(screens: Sc[]) => {
  return <
    V extends Variants<S>,
    CV extends CompoundVariant<V, S>[],
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
    compoundVariants?: CV;
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
            const slotClasses = flattenVariant(classes, slotKey);
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
            new Set(flattenVariant(cv.class, slotKey)),
          ])
        ),
      })) || [];

    const slotFunctions = Object.entries(slots).reduce(
      (acc, [slotKey, baseClasses]) => {
        acc[slotKey] = (props?: MergedProps<any, Sc, V, R>) => {
          const cacheKey = JSON.stringify({ slot: slotKey, props });
          if (variantCache.has(cacheKey)) {
            return variantCache.get(cacheKey);
          }

          const classSet = new Set<string>(baseClasses);

          // Merge default variants with props, giving precedence to props
          const mergedProps = { ...defaultVariants, ...props };

          // Check if there are any responsive props
          const hasResponsiveProps = Object.values(mergedProps).some(
            (value) => typeof value === "object" && value !== null
          );

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
                          classSet.add(cls);
                        } else {
                          classSet.add(`${breakpoint}:${cls}`);
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
            let isMatch = true;
            Object.entries(conditions).forEach(([key, conditionValue]) => {
              const propValue = mergedProps[key];
              if (typeof propValue === "object" && propValue !== null) {
                // Handle responsive compound conditions
                isMatch =
                  isMatch &&
                  Object.entries(propValue).some(([, value]) => {
                    return Array.isArray(conditionValue)
                      ? conditionValue.includes(value)
                      : conditionValue === value;
                  });
              } else {
                isMatch =
                  isMatch &&
                  (Array.isArray(conditionValue)
                    ? conditionValue.includes(propValue)
                    : conditionValue === propValue);
              }
            });
            if (isMatch) {
              if (hasResponsiveProps) {
                ["initial", ...screens].forEach((breakpoint) => {
                  classes.get(slotKey)?.forEach((cls) => {
                    if (breakpoint === "initial") {
                      classSet.add(cls);
                    } else {
                      classSet.add(`${breakpoint}:${cls}`);
                    }
                  });
                });
              } else {
                classes.get(slotKey)?.forEach((cls) => classSet.add(cls));
              }
            }
          });

          // Add custom className if provided
          if (props?.className) {
            props.className.split(" ").forEach((cls) => classSet.add(cls));
          }

          const result = mergeClasses(Array.from(classSet));
          variantCache.set(cacheKey, result);
          return result;
        };
        return acc;
      },
      {} as Record<keyof S, (props?: MergedProps<any, Sc, V, R>) => string>
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

export type VariantsProps<
  V extends Record<string, (...args: any[]) => unknown>
> = Parameters<V[keyof V]>[0];
