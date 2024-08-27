type Slots = {
  [slot: string]: string;
  root: string;
};

type ResponsiveVariants<V> = (keyof V)[];

export type Variants<S extends Slots> = {
  [variant: string]: {
    [kind: string]:
      | string
      | {
          [key in keyof S]?: string;
        };
  };
};

export type DefaultVariants<V extends Variants<S>, S extends Slots> = {
  [K in keyof V]: K extends keyof V ? keyof V[K] : never;
};

export type CompoundVariant<V extends Variants<S>, S extends Slots> = {
  conditions: {
    [K in keyof V]?:
      | (K extends keyof V ? keyof V[K] : never)
      | (K extends keyof V ? keyof V[K] : never)[]
      | boolean;
  } & {
    [K in string]?: string | string[] | boolean;
  };
  class: string | Record<string, string>;
};

// interface GlobalScreens {
//     screens: string[];
// }

export type Screens = ["sm", "md", "lg", "xl"];

export type ResponsiveVariant<V, K extends keyof V> = {
  ["initial"]: keyof V[K];
} & {
  [screen in Screens[number]]?: keyof V[K];
};

export type MergedProps<Props, V, R extends ResponsiveVariants<V>> = {
  className?: string;
} & {
  [K in keyof V]?: R extends undefined
    ? keyof V[K]
    : K extends R[number]
    ? ResponsiveVariant<V, K> | keyof V[K]
    : keyof V[K];
} & {
  [K in keyof Props]?: Props[K];
};

export type TB = <
  V extends Variants<S>,
  CV extends CompoundVariant<V, S>,
  DV extends DefaultVariants<V, S>,
  R extends ResponsiveVariants<V>,
  S extends Slots
>(options: {
  slots: S;
  variants?: V;
  compoundVariants?: CV[];
  responsiveVariants?: R;
  defaultVariants: DV;
}) => <Props>() => {
  [Slot in keyof S]: (props?: MergedProps<Props, V, R>) => string;
} & {
  definition: () => {
    slots: S;
    variants?: V;
    compoundVariants?: CV[];
    responsiveVariants?: R;
    defaultVariants: DV;
  };
};

export type VariantsProps<
  V extends Record<string, (...args: any[]) => unknown>
> = Parameters<V[keyof V]>[0];

export function extractValue(value: any, slot: string) {
  if (typeof value === "string") return value;
  if (value?.[slot] && typeof value[slot] === "string") return value[slot];
  return undefined;
}

function buildArrayWithResponsivesFromDefault(obj: Record<string, any>): any[] {
  const acc: any[] = [];
  for (const [key, value] of Object.entries(obj)) {
    if (value === undefined || value === null)
      throw new Error("value is missing");
    else if (typeof value === "object") {
      if (typeof value["initial"] === "undefined") {
        throw new Error(
          `initial value is missing for the variant ${key} ${value}`
        );
      } else {
        acc.push([key, value]);
      }
    } else {
      acc.push([key, { initial: value }]);
    }
  }
  return acc;
}

export const compose: TB = (variantDefinition) => (): any => {
  const slots = Object.keys(variantDefinition.slots);
  return slots.reduce(
    (acc, slot: string) => {
      acc[slot] = (props: any) => {
        const className = props?.className || "";
        // remove className afterward as we will use the props for compounds evaluations
        if (props?.className) delete props.className;

        // final list of classes to return we are going to populate as we go
        const classesToReturn: string[] = [];

        const slotDefaultClass = variantDefinition.slots[slot] || "";
        if (slotDefaultClass) classesToReturn.push(slotDefaultClass);

        const mergedPropsWithDefaultsProperties = {
          ...variantDefinition.defaultVariants,
          ...props,
        };

        /**
         * build the responsive object with the initial value
         * if the value is not an object, we assume it's a string and we wrap it in an object
         * [[mergedPropKey]: { initial: value, ...otherResponsive }]
         * */
        const responsiveArrayFromDefaults =
          buildArrayWithResponsivesFromDefault(
            mergedPropsWithDefaultsProperties
          );
        // final trasnformed responsive object
        const transformed_breakpoints: any = { initial: {} };

        //
        for (const [variantKey, value] of responsiveArrayFromDefaults) {
          // retrieve variant from definition. Continue when the key is not a variant but a props
          const variant = variantDefinition.variants![variantKey];
          if (!variant) continue;

          const variantsDecomposedFromDefault: [string | "initial", string][] =
            Object.entries(value);

          for (const [
            responsiveKey,
            variantSubKey,
          ] of variantsDecomposedFromDefault) {
            const variantValue = variant[variantSubKey];
            const classStr = extractValue(variantValue, slot);

            if (classStr) {
              if (responsiveKey === "initial") {
                classesToReturn.push(classStr);
              } else {
                classStr.split(" ").forEach((v: string) => {
                  transformed_breakpoints[responsiveKey] =
                    transformed_breakpoints[responsiveKey] || {};
                  classesToReturn.push(`${responsiveKey}:${v}`);
                });
              }
            } else {
              transformed_breakpoints[responsiveKey] =
                transformed_breakpoints[responsiveKey] || {};
            }
          }
        }

        for (const [key, value] of responsiveArrayFromDefaults) {
          const isOnlyInitial =
            Object.keys(value).length === 1 && value["initial"];
          if (isOnlyInitial) {
            for (const responsiveKey in transformed_breakpoints) {
              transformed_breakpoints[responsiveKey][key] =
                value[responsiveKey] || value["initial"];
            }
          } else {
            for (const [responsiveKey, val] of Object.entries(value)) {
              transformed_breakpoints[responsiveKey][key] = val;
            }
          }
        }

        const transformed_breakpoints_entries = Object.entries(
          transformed_breakpoints
        ) as [string, any][];

        if (
          variantDefinition.compoundVariants &&
          variantDefinition.compoundVariants!.length > 0
        ) {
          for (const compound of variantDefinition.compoundVariants) {
            const classes = extractValue(compound.class, slot);

            for (const [breakpoint, value] of transformed_breakpoints_entries) {
              let validated = true;
              const conditions = Object.entries(
                compound.conditions as { [key: string]: any }
              );
              for (const [key, compoundConditionValue] of conditions) {
                if (!validated) break;
                if (Array.isArray(compoundConditionValue)) {
                  if (!compoundConditionValue.includes(value[key]))
                    validated = false;
                } else {
                  if (value[key] !== compoundConditionValue) validated = false;
                }
              }
              if (validated && classes) {
                const classStr = extractValue(classes, slot);
                if (classStr) {
                  if (breakpoint === "initial") {
                    classesToReturn.push(classStr);
                  } else {
                    classStr.split(" ").forEach((v: string) => {
                      classesToReturn.push(`${breakpoint}:${v}`);
                    });
                  }
                }
              }
            }
          }
        }

        if (className) classesToReturn.push(className);
        return classesToReturn.join(" ").replace(/\s+/g, " ").trim();
      };
      return acc;
    },
    {
      definition: () => variantDefinition,
    } as any
  );
};
