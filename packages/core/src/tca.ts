type Slots = {
    [slot: string]: string
    root: string;
};

type ResponsiveVariants<V> = (keyof V)[]

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

export type Screens = ["sm", "md", "lg", "xl"]

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
        },
    ) => <Props>() => {
        [Slot in keyof S]: (props?: MergedProps<Props, V, R>) => string
    } & {
        definition: {
            slots: S,
            variants?: V;
            compoundVariants?: CV[];
            responsiveVariants?: R;
            defaultVariants: DV;
        }
    }

export type VariantsProps<V extends Record<string, (...args: any[]) => unknown >> = Parameters<V[keyof V]>[0];

export function extractValue (value: any, slot: string) {
    if (typeof value === "string") return value
    if (value?.[slot]) {
        if (typeof value[slot] === "string") return value[slot]
    }
    return undefined
}

function transformConditionsToBeUsable(obj: any) {
    let acc: any = {}
    
    Object.entries(obj).forEach(([key, value]: any) => {
        if (typeof value !== "object") {
            acc[key] = { "initial": value }
        } else {
            acc[key] = value
        }
    })
    return acc
}

export const tca: TCA = (variantDefinition) => ():any => {
    const slots = Object.keys(variantDefinition.slots)
    return slots.reduce((acc, slot: string) => {
        acc[slot] = (props: any) => {
            const className = props?.className || ""
            if (props?.className) delete props.className
            const classesToReturn: string[] = []

            const slotDefaultClass = variantDefinition.slots[slot] ? variantDefinition.slots[slot] : ""
            const mergedPropsWithDefaults = {
                ...variantDefinition.defaultVariants,
                ...props
            }


            if (slotDefaultClass) classesToReturn.push(slotDefaultClass)

            const transformed = transformConditionsToBeUsable(mergedPropsWithDefaults)
            const transformed_breakpoints: any = {
                "initial": {}
            }

            Object.entries(transformed).forEach(([key, value]: any) => {
                const variant = variantDefinition.variants![key]
                if (!variant) return
                Object.entries(value).forEach(([responsiveKey, val]: any) => {
                    const variantValue = variant[val]
                    const classStr = extractValue(variantValue, slot)
                    if (responsiveKey === "initial" && classStr) classesToReturn.push(classStr)
                    else if (classStr) classStr.split(" ").forEach((v: string) => {
                        transformed_breakpoints[responsiveKey] = {}
                        classesToReturn.push(`${responsiveKey}:${v}`)
                    })
                })
            })

            Object.entries(transformed).forEach(([key, value]: any) => {
                const isOnlyInitial = Object.keys(value).length === 1 && value["initial"]
                if (isOnlyInitial) {
                    Object.keys(transformed_breakpoints).forEach((responsiveKey: any) => {
                        transformed_breakpoints[responsiveKey][key] = transformed[key][responsiveKey] ? transformed[key][responsiveKey] : transformed[key]["initial"]
                    })
                } else {
                    Object.entries(value).forEach(([responsiveKey, val]: any) => {
                        transformed_breakpoints[responsiveKey][key] = val
                    })
                }
            })
            if (variantDefinition.compoundVariants && variantDefinition.compoundVariants.length > 0) {
                variantDefinition.compoundVariants.forEach((compound: any) => {
                    const classes = extractValue(compound.class, slot)
                    Object.entries(transformed_breakpoints).forEach(([breakpoint, value]: any) => {
                        let validated = true
                        Object.entries(compound.conditions).forEach(([key, compoundConditionValue]: any) => {
                            if (validated === false) return
                            if (!Array.isArray(compoundConditionValue)) {
                                if (value[key] !== compoundConditionValue) {
                                    validated = false
                                }
                            } else {
                                if (!compoundConditionValue.includes(value[key])) validated = false
                            }
                        })
                        if (validated) {
                            const classStr = extractValue(classes, slot)
                            if (breakpoint === "initial") {
                                if (classStr) classesToReturn.push(classStr)
                            } else {
                                if (!classStr) return 
                                classStr.split(" ").forEach((v: string) => {
                                    classesToReturn.push(`${breakpoint}:${v}`)
                                })
                            }
                        }
                    })
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