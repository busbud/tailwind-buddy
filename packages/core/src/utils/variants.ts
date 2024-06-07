export const retrieveVariantsClasses = (variants: any, variantsProps: any = {}, slot: string) => {
    
    const defaultProps: Record<string, string> = {}

    const defaults = Object.entries(variants).reduce((acc: any, [variant, { values, default: defaultKey}]: any) => {
        const key = String(defaultKey)
        const slotDefaultValue = values[key]?.[slot] || ""
        if (slotDefaultValue.length) acc[variant] = slotDefaultValue
        defaultProps[variant] = typeof key == "boolean" ? String(key) : key
        return acc
    }, {})

    const overrides = Object.entries(variantsProps).reduce((acc: any, [key, value]: any) => {
        const val = variants[key]?.values[value]?.[slot] || ""
        if (val.length) acc[key] = val
        defaultProps[key] = typeof value == "boolean" ? String(value) : value
        return acc
    }, {})

    return [
        defaultProps,
        {
            ...defaults,
            ...overrides
        }
    ]
}