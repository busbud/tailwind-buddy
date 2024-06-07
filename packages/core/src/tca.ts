import { extractSlots } from "./utils/extract-slots";
import { extendTailwindMerge } from "tailwind-merge"
import { retrieveVariantsClasses } from "./utils/variants";
import { retrieveCompoundClasses } from "./utils/compounds";
import { generateResponsive } from "./utils/generateResponsive";

export const defaultConfiguration = {
    screens: ["sm", "md", "lg", "xl"],
}

export const tca = (variantDefinition:any, tcaConfig: any = {}) => () => {
    const slots: any[] = extractSlots(variantDefinition);
    const variants = variantDefinition.variants || {};
    const twMerge = extendTailwindMerge(tcaConfig.tailwindMergeConfig || {});
    const isResponsive = tcaConfig.responsive || false

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

            if (tcaConfig.tailwindMergeDisabled) {
                if (isResponsive) return generateResponsive(str, defaultConfiguration.screens)
                return str
            }

            if (isResponsive) {
                return generateResponsive(twMerge(str), defaultConfiguration.screens)
            } else {
                return twMerge(str)
            }
        }
        return acc 
    }, {})
};

