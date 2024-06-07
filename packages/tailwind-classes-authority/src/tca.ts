import { extractSlots } from "./utils/extract-slots";
import { extendTailwindMerge } from "tailwind-merge"
import { retrieveVariantsClasses } from "./utils/variants";
import { retrieveCompoundClasses } from "./utils/compounds";

export const tca = (variantDefinition:any, tcaConfig: any = {}) => () => {
    const slots: any[] = extractSlots(variantDefinition);
    const variants = variantDefinition.variants || {};
    const twMerge = extendTailwindMerge(tcaConfig.tailwindMergeConfig || {});

    return slots.reduce((acc, slot) => {
        acc[slot] = (variantsProps: any = {}, otherProps: any = {}) => {

            const slotDefaultClasses = variantDefinition.slots[slot] ? [variantDefinition.slots[slot]] : []
            const [defaultProps, slotVariantsClasses] = retrieveVariantsClasses(variants, variantsProps, slot)
            const slotCompoundClasses = retrieveCompoundClasses(variantDefinition.compoundVariants, defaultProps, slot)

            const str = [
                ...slotDefaultClasses,
                ...Object.values(slotVariantsClasses),
                ...slotCompoundClasses
            ].join(" ")

            if (tcaConfig.tailwindMergeDisabled) return str
            return twMerge(str)
        }
        return acc 
    }, {})
};

