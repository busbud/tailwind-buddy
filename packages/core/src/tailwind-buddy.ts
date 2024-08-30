import { TB } from "./types/definition";
import { buildArrayWithResponsivesFromDefault } from "./utils/arrays";
import { extractValueFromVariantSlot } from "./utils/variants";

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
        if (slotDefaultClass)
          classesToReturn.push(slotDefaultClass.replace(/\s+/g, " ").trim());

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
            const classStr = extractValueFromVariantSlot(variantValue, slot);

            if (classStr && classStr.length > 0) {
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
            const classes = extractValueFromVariantSlot(compound.class, slot);

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
                const classStr = extractValueFromVariantSlot(classes, slot);
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
        return classesToReturn.join(" ");
      };
      return acc;
    },
    {
      definition: () => variantDefinition,
    } as any
  );
};
