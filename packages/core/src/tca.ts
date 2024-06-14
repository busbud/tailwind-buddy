import { retrieveCompoundClasses } from "./utils/compounds";
import { extractResponsivePropsFromVariant, extractValue } from "./utils/values";

type Slots = {
    [slot: string]: string
    root: string;
};

type ResponsiveVariants<V> = [keyof V] | []

export type Variants<
    S extends Slots,
> = {
        [variant: string]: {
            [kind: string]: string | {
                [key in keyof S]?: string
            }
        };
    }

export type DefaultVariants<
    V extends Variants<S>,
    S extends Slots,
> = {
    [K in keyof V]: (K extends keyof V ? keyof V[K] : never)
  };

export type CompoundVariant<
    V extends Variants<S>,
    S extends Slots
> = {
    conditions: {
            [K in keyof V]?: (K extends keyof V ? keyof V[K] : never) | (K extends keyof V ? keyof V[K] : never)[] | boolean
        } & {
            [K in string]?: string | string[] | boolean
        }
    class: string | Record<string, string>;
}

// interface GlobalScreens {
//     screens: string[];
// }

export type Screens = ["sm", "md", "lg", "xl", "2xl"]

export type ResponsiveVariant<V, K extends keyof V> = {
    ["initial"]: keyof V[K]
} & {
    [screen in Screens[number]]?: keyof V[K]
}

export type MergedProps<Props, V, R extends ResponsiveVariants<V>> = {
    className?: string,
} & {
    [K in keyof V]?: R extends undefined ? keyof V[K] : (K extends R[number] ? ResponsiveVariant<V, K> | keyof V[K] : keyof V[K])
} & {
    [K in keyof Props]?: Props[K]
}

export type TCA = 
    <
        V extends Variants<S>,
        CV extends CompoundVariant<V, S>,
        DV extends DefaultVariants<V, S>,
        R extends ResponsiveVariants<V>,
        S extends Slots,
    >(
        options: {
            slots: S,
            variants?: V;
            compoundVariants?: CV[];
            responsiveVariants?: R;
            defaultVariants: DV;
        }
    ) => <Props>() => {
        [Slot in keyof S]: (props?: MergedProps<Props, V, R>) => string
    }

export type VariantsProps<V extends Record<string, (...args: any[]) => unknown >> = Parameters<V[keyof V]>[0];

export const tca: TCA = (variantDefinition) => ():any => {
    const slots = Object.keys(variantDefinition.slots)
    return slots.reduce((acc, slot: string) => {
        acc[slot] = (props: any) => {
            const className = props?.className || ""
            if (props?.className) delete props.className
            const classesToReturn: string[] = []

            const slotDefaultClass = variantDefinition.slots[slot] ? variantDefinition.slots[slot] : ""
            let compoundClasses: any[] = []
            const mergedPropsWithDefaults = {
                ...variantDefinition.defaultVariants,
                ...props
            }

            if (slotDefaultClass) classesToReturn.push(slotDefaultClass)

            Object.entries(mergedPropsWithDefaults).forEach(([key, value]: any) => {
                const variant = variantDefinition.variants![key]
                // responsive props
                if (typeof value === "object") {
                    classesToReturn.push(extractResponsivePropsFromVariant(value, variant, slot))
                } else if (typeof value === "string") {
                    if (variant?.[value]) {
                        const classStr = extractValue(variant[value], slot)
                        if (classStr) classesToReturn.push(classStr)
                    }
                }
            })

            if (variantDefinition.compoundVariants && variantDefinition.compoundVariants.length > 0) {
                retrieveCompoundClasses(variantDefinition.compoundVariants, mergedPropsWithDefaults, slot).forEach((v: any) => {
                    if (v) {
                        classesToReturn.push(v)
                    }
                })
            }

            if (className) classesToReturn.push(className)
            return classesToReturn.join(" ")
        }
        return acc 
    }, {
        definition: variantDefinition
    } as any)
};