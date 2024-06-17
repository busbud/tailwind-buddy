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

export function extractValue(value: any, slot: string) {
    if (typeof value === "string") return value;
    if (value?.[slot] && typeof value[slot] === "string") return value[slot];
    return undefined;
}

function transformConditionsToBeUsable(obj: any) {
    const acc: any = {};
    for (const [key, value] of Object.entries(obj)) {
        acc[key] = typeof value === "object" ? value : { "initial": value };
    }
    return acc;
}

export const tca: TCA = (variantDefinition) => (): any => {
    const slots = Object.keys(variantDefinition.slots);
    return slots.reduce((acc, slot: string) => {
        acc[slot] = (props: any) => {
            const className = props?.className || "";
            if (props?.className) delete props.className;
            const classesToReturn: string[] = [];

            const slotDefaultClass = variantDefinition.slots[slot] || "";
            const mergedPropsWithDefaults = {
                ...variantDefinition.defaultVariants,
                ...props
            };

            if (slotDefaultClass) classesToReturn.push(slotDefaultClass);

            const transformed = transformConditionsToBeUsable(mergedPropsWithDefaults);
            const transformed_breakpoints: any = { "initial": {} };
            const transformed_entries = Object.entries(transformed as { [key: string]: any });

            for (const [key, value] of transformed_entries) {
                const variant = variantDefinition.variants![key];
                if (!variant) continue;

                const variants_decomposed = Object.entries(value as { [key: string]: any });
                for (const [responsiveKey, val] of variants_decomposed) {
                    const variantValue = variant[val];
                    const classStr = extractValue(variantValue, slot);
                    if (classStr) {
                        if (responsiveKey === "initial") {
                            classesToReturn.push(classStr);
                        } else {
                            classStr.split(" ").forEach((v: string) => {
                                transformed_breakpoints[responsiveKey] = transformed_breakpoints[responsiveKey] || {};
                                classesToReturn.push(`${responsiveKey}:${v}`);
                            });
                        }
                    }
                }
            }

            for (const [key, value] of transformed_entries) {
                const isOnlyInitial = Object.keys(value).length === 1 && value["initial"];
                if (isOnlyInitial) {
                    for (const responsiveKey in transformed_breakpoints) {
                        transformed_breakpoints[responsiveKey][key] = value[responsiveKey] || value["initial"];
                    }
                } else {
                    for (const [responsiveKey, val] of Object.entries(value)) {
                        transformed_breakpoints[responsiveKey][key] = val;
                    }
                }
            }

            const transformed_breakpoints_entries = Object.entries(transformed_breakpoints) as [string, any][];

            if (variantDefinition.compoundVariants && variantDefinition.compoundVariants!.length > 0) {
                for (const compound of variantDefinition.compoundVariants) {
                    const classes = extractValue(compound.class, slot);
                    
                    for (const [breakpoint, value] of transformed_breakpoints_entries) {
                        let validated = true;
                        const conditions = Object.entries(compound.conditions as { [key: string]: any })
                        for (const [key, compoundConditionValue] of conditions) {
                            if (!validated) break;
                            if (Array.isArray(compoundConditionValue)) {
                                if (!compoundConditionValue.includes(value[key])) validated = false;
                            } else {
                                if (value[key] !== compoundConditionValue) validated = false;
                            }
                        }
                        if (validated && classes) {
                            const classStr = extractValue(classes, slot);
                            if (classStr) {
                                if (breakpoint === "initial") {
                                    classesToReturn.push(classStr);
                                } else {
                                    classStr.split(" ").forEach((v: string) => {
                                        classesToReturn.push(`${breakpoint}:${v}`);
                                    });
                                }
                            }
                        }
                    }
                }
            }

            if (className) classesToReturn.push(className);
            return classesToReturn.join(" ");
        };
        return acc;
    }, {
        definition: variantDefinition
    } as any);
};
