import { retrieveVariantsClasses } from "./utils/variants";
import { retrieveCompoundClasses } from "./utils/compounds";

type Slots = Record<string, string> | undefined;

// type TVBaseName = "base";

// type TVSlotsWithBase<S extends Slots, B extends string> = B extends undefined
//   ? keyof S
//   : keyof S | TVBaseName;

// type SlotsClassValue<S extends Slots, B extends string> = {
//     [K in TVSlotsWithBase<S, B>]?: string;
//   };

export type TVVariants<
    S extends Slots,
> = {
        [key: string]: {
            [key: string]: string | {
                [key in keyof S]?: string
            }
        };
    }

// export type StringToBoolean<T> = T extends "true" | "false" ? boolean : T;

export type TVDefaultVariants<
    V extends TVVariants<S>,
    S extends Slots,
> = {
    [K in keyof V]?: (K extends keyof V ? keyof V[K] : never)
    // [K in keyof V]?: (K extends keyof V ? StringToBoolean<keyof V[K]> : never)
  };

export type CompoundVariant<
    V extends TVVariants<S>,
    S extends Slots,
> = {
    conditions: {
        [K in keyof V]?: (K extends keyof V ? keyof V[K] : never) | (K extends keyof V ? keyof V[K] : never)[] | boolean
    }
    class: string | Record<string, string>;
}


export type TCA = {
    <
        V extends B extends string
            ? Record<string, Record<string, string>>
            : TVVariants<S>,
        CV extends CompoundVariant<V, S>,
        DV extends TVDefaultVariants<V, S>,
        B extends string | undefined = undefined,
        S extends Slots | undefined = undefined,
    >(
        options: (B extends string
            ? { base: B }
            : { slots: S } ) & {
            variants?: V;
            compoundVariants?: CV[];
            defaultVariants?: DV;
        }
    ): string
}


export const tca: TCA = (variantDefinition) => {
    return ""
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