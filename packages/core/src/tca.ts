import { retrieveVariantsClasses } from "./utils/variants";
import { retrieveCompoundClasses } from "./utils/compounds";

type Slots = {
    [slot: string]: string
    root: string;
};

export type Variants<
    S extends Slots,
> = {
        [variant: string]: {
            [kind: string]: string | {
                [key in keyof S]?: string
            }
        };
    }

export type TVDefaultVariants<
    V extends Variants<S>,
    S extends Slots,
> = {
    [K in keyof V]?: (K extends keyof V ? keyof V[K] : never)
  };

export type CompoundVariant<
    V extends Variants<S>,
    S extends Slots,
> = {
    conditions: {
        [K in keyof V]?: (K extends keyof V ? keyof V[K] : never) | (K extends keyof V ? keyof V[K] : never)[] | boolean
    }
    class: string | Record<string, string>;
}


export type TCA = {
    <
        V extends Variants<S>,
        CV extends CompoundVariant<V, S>,
        DV extends TVDefaultVariants<V, S>,
        S extends Slots,
    >(
        options: {
            slots: S,
            variants?: V;
            compoundVariants?: CV[];
            defaultVariants?: DV;
        }
    ): {
        [K in keyof S]: (props) => string
    }
}


export const tca: TCA = (variantDefinition) => {
    return {
        
    }
    // const slots = Object.keys(variantDefinition.slots)
    // if (slots.length <= 1) {
    //     const className = otherProps?.className || ""
    //     const slotDefaultClasses: string = variantDefinition.slots["root"] ?? ""
    //     const [defaultProps, slotVariantsClasses] = retrieveVariantsClasses(variantDefinition.variants, variantsProps, "root")
    //     let compoundClasses: any[] = []
    //     const withDefaultProps = {
    //         ...defaultProps,
    //         ...variantsProps,
    //         ...otherProps
    //     }

    //     if (variantDefinition.compoundVariants && variantDefinition.compoundVariants.length > 0) {
    //         compoundClasses = retrieveCompoundClasses(variantDefinition.compoundVariants, withDefaultProps, "root")
    //     }

    //     const str = [
    //         slotDefaultClasses,
    //         ...Object.values(slotVariantsClasses),
    //         ...compoundClasses,
    //         className
    //     ].join(" ").trim()

    //     return str
    // }

    // return slots.reduce((acc, slot) => {
    //     acc[slot as Slots] = (variantsProps, otherProps) => {
    //         const className = otherProps?.className || ""
    //         const slotDefaultClasses = variantDefinition.slots[slot as Slots] ? [variantDefinition.slots[slot as Slots]] : []
    //         const [defaultProps, slotVariantsClasses] = retrieveVariantsClasses(variantDefinition.variants, variantsProps, slot)
    //         let compoundClasses: any[] = []
    //         const withDefaultProps = {
    //             ...defaultProps,
    //             ...variantsProps,
    //             ...otherProps
    //         }

    //         if (variantDefinition.compoundVariants && variantDefinition.compoundVariants.length > 0) {
    //             compoundClasses = retrieveCompoundClasses(variantDefinition.compoundVariants, withDefaultProps, slot)
    //         }

    //         const str = [
    //             ...slotDefaultClasses,
    //             ...Object.values(slotVariantsClasses),
    //             ...compoundClasses,
    //             className
    //         ].join(" ").trim()
    
    //         // if (tcaConfig.tailwindMergeDisabled) {
    //         return str
    //         // }
    //         // return twMerge(str)
    //     }
    //     return acc 
    // }, {} as Record<Slots, (variantsProps?: Variants, otherProps?: OtherProps<Props>) => string>)
};