import { extractSlots } from "./utils/extract-slots";
import { extendTailwindMerge } from "tailwind-merge"
import { retrieveVariantsClasses } from "./utils/variants";

type MergeConfig = Parameters<typeof extendTailwindMerge>[0];

export interface TCA_CONFIG {
    tailwindMergeConfig?: MergeConfig;
    tailwindMergeDisabled?: boolean;
}
export interface VARIANT<Slots extends string> {
    default: string;
    values: Record<string, string | string[] | Partial<Record<Slots, string | string[]>>>;
}

export interface TCA_VARIANT_DEFINITION<Slots extends string, Variants, Props extends Record<string, any> = {}> {
    slots: Record<Slots, string>;
    variants: Record<keyof Variants, VARIANT<Slots>>;
    compoundVariants: Array<{
        conditions: Partial<Record<keyof Variants | keyof Props, string | string[] | boolean>>;
        class: string | string[] | Partial<Record<Slots, string>>;
    }>;
}

export const defaultConfiguration = {
    screens: ["sm", "md", "lg", "xl", "xxl"],
}

export const tca = <Slots extends string, Variants, Props extends Record<string, any> = {}>(variantDefinition: TCA_VARIANT_DEFINITION<Slots, Variants, Props>, tcaConfig: TCA_CONFIG = {}) => () => {
    const slots: any[] = extractSlots(variantDefinition);
    const variants = variantDefinition.variants || {};
    const twMerge = extendTailwindMerge(tcaConfig.tailwindMergeConfig || {});

    return slots.reduce((acc, slot) => {
        acc[slot] = (variantsProps: any = {}, otherProps: any = {}) => {
            const className = otherProps.className || ""
            const slotDefaultClasses = variantDefinition.slots[slot] ? [variantDefinition.slots[slot]] : []
            const [defaultProps, slotVariantsClasses] = retrieveVariantsClasses(variants, variantsProps, slot)
            const validCompounds: any[] = []
            const withDefaultProps = {
                ...defaultProps,
                ...variantsProps
            }
            if (variantDefinition.compoundVariants.length > 0) {
                variantDefinition.compoundVariants.forEach((compound: any) => {
                    let hasFailed = false
                    let tmpClasses: any[] = []
                    Object.entries(compound.conditions).forEach(([key, value]: any) => {
                        if (hasFailed) return
                        if (typeof withDefaultProps[key] == "undefined") {
                            if (otherProps[key] !== value) {
                                hasFailed = true
                            }
                        } else if (typeof withDefaultProps[key] === "string") {
                            if (Array.isArray(value) && !value.includes(withDefaultProps[key])) hasFailed = true
                            else if (typeof value === "string" && value !== withDefaultProps[key]) hasFailed = true
                        } else if (typeof withDefaultProps[key] === "object") {
                            let found = false
                            let _k = ""
                            Object.entries(withDefaultProps[key]).forEach(([k, v]: any) => {
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
                        } else if (typeof withDefaultProps[key] === "boolean") {
                            if (value !== withDefaultProps[key]) hasFailed = true
                            else {
                                if (typeof compound.class === "string") tmpClasses.push(compound.class)
                                else if (Array.isArray(compound.class)) tmpClasses.push(...compound.class)
                                else compound.class[slot] ? tmpClasses.push(compound.class[slot]) : ""
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
            ].join(" ").trim()

            if (tcaConfig.tailwindMergeDisabled) {
                return str
            }
            return twMerge(str)
        }
        return acc 
    }, {})
};