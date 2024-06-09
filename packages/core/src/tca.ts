import { extendTailwindMerge } from "tailwind-merge"
import { retrieveVariantsClasses } from "./utils/variants";
import { retrieveCompoundClasses } from "./utils/compounds";

type MergeConfig = Parameters<typeof extendTailwindMerge>[0];

export interface TCA_CONFIG {
    tailwindMergeConfig?: MergeConfig;
    tailwindMergeDisabled?: boolean;
    responsive?: boolean;
}
export interface VARIANT<Slots extends string> {
    default: string;
    values: Record<string, string | Partial<Record<Slots, string>>>;
}

export interface TCA_VARIANT_DEFINITION<Slots extends string, Variants, Props extends Record<string, any> = {}> {
    slots: Record<Slots, string>;
    variants: Record<keyof Variants, VARIANT<Slots>>;
    compoundVariants?: Array<{
        conditions: Partial<Record<keyof Variants | keyof Props, string | string[] | boolean>>;
        class: string | Partial<Record<Slots, string>>;
    }>;
}

export type Screens = "sm" | "md" | "lg" | "xl" | "xxl"

export type ResponsiveVariants<T> = {
        [K in Screens]?: T;
    } & {
        "initial": T;
    } | T 

type OtherProps<Props> = {
        [key in keyof Props]?: Props;
} & {
        className?: string;
};

export const tca = <Slots extends string, Variants, Props extends Record<string, any> = {}>(variantDefinition: TCA_VARIANT_DEFINITION<Slots, Variants, Props>, tcaConfig: TCA_CONFIG = {}) => (): Record<Slots, (variantsProps?: Variants, otherProps?: Props & { className?: string }) => string>=> {
    const slots = Object.keys(variantDefinition.slots)
    const twMerge = extendTailwindMerge(tcaConfig.tailwindMergeConfig || {});
    const isResponsive = tcaConfig.responsive || false

    return slots.reduce((acc, slot) => {
        acc[slot as Slots] = (variantsProps, otherProps) => {
            const className = otherProps?.className || ""
            const slotDefaultClasses = variantDefinition.slots[slot as Slots] ? [variantDefinition.slots[slot as Slots]] : []
            const [defaultProps, slotVariantsClasses] = retrieveVariantsClasses(variantDefinition.variants, variantsProps, slot)
            let compoundClasses: any[] = []
            const withDefaultProps = {
                ...defaultProps,
                ...variantsProps,
                ...otherProps
            }

            if (variantDefinition.compoundVariants && variantDefinition.compoundVariants.length > 0) {
                compoundClasses = retrieveCompoundClasses(variantDefinition.compoundVariants, withDefaultProps, slot)
            }

            const str = [
                ...slotDefaultClasses,
                ...Object.values(slotVariantsClasses),
                ...compoundClasses,
                className
            ].join(" ").trim()
    
            if (tcaConfig.tailwindMergeDisabled) {
                return str
            }
            return twMerge(str)
        }
        return acc 
    }, {} as Record<Slots, (variantsProps?: Variants, otherProps?: OtherProps<Props>) => string>)
};