
export interface TCA_CONFIG {
    responsive?: boolean;
}

export interface VARIANT_DEFINITION<S> {
    slots: S;
    variants: {
        [key: string]: {
            default: string;
            values: {
                [key: string]: Partial<S>;
            };
        };
    };
    compoundVariants?: Array<{
        [key: string]: any;
        class: Partial<S>;
    }>;
}

// Automatically infer the return type based on the keys of slots
type TCAReturn<S> = {
    [K in keyof S]: (variantProps?: Record<string, any>) => string;
};


const mappings = {
    "w-": "",
    "h-": "",
    "p-": "",
    "m-": "",
    "font-weight-": "",
    "text-size-": "",
    "text-color-": "",
    "text-icon-color-": "",
    "border-color-": "",
    "bg-color-": "",
    "fill-": ""
};

function mergeClasses(classString: string) {
    const classArray = classString.split(' ');

    classArray.forEach(className => {
        // Split the className into its parts
        // const parts = className.split('-');
        // let property = parts[0];
        // let value = parts.slice(1).join('-');

        // // Check if it has a pseudo-class prefix like "hover", "active", etc.
        // if (property.includes(':')) {
        //     const [pseudo, actualProperty] = property.split(':');
        //     property = `${pseudo}:${actualProperty}`;
        // }

        // Update the classMap with the latest value
        // mappings[property] = className;
    });

    // Convert the classMap back to a string
    return Object.values(mappings).join(' ');
}


export const tv = <S>(variantDefinition: VARIANT_DEFINITION<S>, tcaConfig?: TCA_CONFIG): (() => TCAReturn<S>) => {
    const returnObject = {} as TCAReturn<S>;

    Object.keys(variantDefinition.slots as {}).forEach(slot => {
        returnObject[slot as keyof S] = (variantProps = {}) => {
            const baseSlotClasses = variantDefinition.slots[slot as keyof S];

            let variantClasses = "";
            let variantsSlots: Record<string, string> = {}
            for (const [variant, { values }] of Object.entries(variantDefinition.variants)) {
                const variantValue = variantProps[variant] || variantDefinition.variants[variant].default;
                variantsSlots[variant] = variantValue
                if (values[variantValue] && values[variantValue][slot as keyof S]) {
                    variantClasses += ` ${values[variantValue][slot as keyof S]}`;
                }
            }

            let compoundClasses = "";

            for (const compound of variantDefinition.compoundVariants || []) {
                let conditionsMet: boolean | null = null

                Object.entries(compound).forEach(([key, values]) => {
                    if (key === "class") return;
                    if (conditionsMet == false) return
                    if (!variantProps[key]) conditionsMet = false
                    else if (Array.isArray(values) && values.includes(variantProps[key])) conditionsMet = true
                    else if (values === variantProps[key]) conditionsMet = true
                    else conditionsMet = false
                }) 

                if (conditionsMet && compound.class[slot as keyof S]) {
                    compoundClasses += ` ${compound.class[slot as keyof S]}`
                }
            }

            return mergeClasses(`${baseSlotClasses}${variantClasses}${compoundClasses}`.trim());
        };
    });

    return () => returnObject;
};

