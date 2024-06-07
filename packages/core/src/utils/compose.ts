function compose(baseConfiguration: any, override: any) {
    const composed = {
        slots: {
            ...baseConfiguration.slots,
            ...override.slots,
        },
        variants: {
            ...baseConfiguration.variants,
            ...override.variants,
        },
        compoundVariants: baseConfiguration.compoundVariants || [],
    };
    if (baseConfiguration.compoundVariants && override.compoundVariants) {
        composed["compoundVariants"] = [
            ...baseConfiguration.compoundVariants,
            ...override.compoundVariants,
        ];
    }
    return composed;
}

export function composeWith(baseConfiguration:any, overrides: any[]) {
    let composed = baseConfiguration
    overrides.forEach(override => {
        composed = compose(composed, override)
    })
    return composed
}