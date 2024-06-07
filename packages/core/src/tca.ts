import { extractSlots } from "./utils/extract-slots";
import { extendTailwindMerge } from "tailwind-merge"
import { retrieveVariantsClasses } from "./utils/variants";

export const defaultConfiguration = {
    screens: ["sm", "md", "lg", "xl", "xxl"],
}

export const tca = (variantDefinition: any, tcaConfig: any = {}) => () => {
    const slots: any[] = extractSlots(variantDefinition);
    const variants = variantDefinition.variants || {};
    const twMerge = extendTailwindMerge(tcaConfig.tailwindMergeConfig || {});

    return slots.reduce((acc, slot) => {
        acc[slot] = (variantsProps: any = {}, otherProps: any = {}) => {
            const className = otherProps.className || ""
            const slotDefaultClasses = variantDefinition.slots[slot] ? [variantDefinition.slots[slot]] : []
            const slotVariantsClasses = retrieveVariantsClasses(variants, variantsProps, slot)
            const validCompounds: any[] = []
            if (variantDefinition.compoundVariants.length > 0) {
                variantDefinition.compoundVariants.forEach((compound: any) => {
                    let hasFailed = false
                    let tmpClasses: any[] = []
                    Object.entries(compound.conditions).forEach(([key, value]: any) => {
                        console.log(key, value)
                        if (hasFailed) return
                        if (!variantsProps[key]) {
                            if (otherProps[key] !== value) hasFailed = true
                        }
                        else if (typeof variantsProps[key] === "string") {
                            if (value !== variantsProps[key]) hasFailed = true
                            else tmpClasses.push(compound.class)
                        } else if (typeof variantsProps[key] === "object") {
                            let found = false
                            let _k = ""
                            Object.entries(variantsProps[key]).forEach(([k, v]: any) => {
                                if (value === v) {
                                    found = true
                                    _k = k
                                }
                            })
                            if (!found) hasFailed = true
                            else {
                                compound.class.split(" ").forEach((v: any) => {
                                    tmpClasses.push(`${_k}:${v}`)
                                })
                            }
                        }
                    })
                    if (!hasFailed) tmpClasses.forEach(v => validCompounds.push(v))
                })
            }
            const str = [
                ...slotDefaultClasses,
                ...Object.values(slotVariantsClasses),
                ...validCompounds,
                className
            ].join(" ")

            if (tcaConfig.tailwindMergeDisabled) {
                return str
            }
            return twMerge(str)
        }
        return acc 
    }, {})
};

