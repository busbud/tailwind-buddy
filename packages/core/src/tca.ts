import { extendTailwindMerge } from "tailwind-merge"
import { createSlotFunction } from "./utils/createSlotFunction";

type MergeConfig = Parameters<typeof extendTailwindMerge>[0];

export interface TCA_CONFIG {
    tailwindMergeConfig?: MergeConfig;
    tailwindMergeDisabled?: boolean;
}
export interface VARIANT<Slots extends string> {
    default: string;
    values: Record<string, string | Partial<Record<Slots, string>>>;
}

export interface TCA_VARIANT_DEFINITION<Slots extends string, Variants, Props extends Record<string, any> = {}> {
    slots: Record<Slots, string>;
    variants: Record<keyof Variants, VARIANT<Slots>>;
    compoundVariants: Array<{
        conditions: Partial<Record<keyof Variants | keyof Props, string | string[] | boolean>>;
        class: string | Partial<Record<Slots, string>>;
    }>;
}

export const defaultConfiguration = {
    screens: ["sm", "md", "lg", "xl", "xxl"],
}

export const tca = <Slots extends string, Variants, Props extends Record<string, any> = {}>(variantDefinition: TCA_VARIANT_DEFINITION<Slots, Variants, Props>, tcaConfig: TCA_CONFIG = {}) => (): Record<Slots, (variantsProps: Variants, otherProps: Props & { className?: string }) => string>=> {
    const slots = Object.keys(variantDefinition.slots)
    const variants = variantDefinition.variants || {};
    const twMerge = extendTailwindMerge(tcaConfig.tailwindMergeConfig || {});

    return slots.reduce((acc, slot) => {
        acc[slot as Slots] = createSlotFunction(variantDefinition, twMerge, slot, variants, tcaConfig)
        return acc 
    }, {} as Record<Slots, (variantsProps: Variants, otherProps: Props & { className?: string }) => string>)
};