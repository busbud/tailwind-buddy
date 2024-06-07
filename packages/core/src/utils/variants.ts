function extractValue (value: any, slot: string) {
    if (typeof value === "string") return value
    if (Array.isArray(value)) return value.join(" ")
    if (value[slot]) {
        if (typeof value[slot] === "string") return value[slot]
        if (Array.isArray(value[slot])) return value[slot].join(" ")
    }
    return ""
}

function retrieveFromResponsiveProps(variants: any, key: string, value: any, slot: string) {
    let strArray: string[] = []
    Object.entries(value).forEach(([breakpoint, val]: any) => {
        const toExtract = variants[key]?.values[val]
        if (breakpoint === "initial") {
            strArray.push(extractValue(toExtract, slot))
        } else {
            extractValue(toExtract, slot).split(" ").forEach((v: string) => {
                strArray.push(`${breakpoint}:${v}`)
            })
        }
    })
    return strArray
}

export const retrieveVariantsClasses = (variants: any, variantsProps: any = {}, slot: string) => {
    
    const defaultProps: Record<string, string> = {}

    const defaults = Object.entries(variants).reduce((acc: any, [variant, { values, default: defaultKey}]: any) => {
        const key = String(defaultKey)
        let slotDefaultValue = ""
        slotDefaultValue = extractValue(values[key], slot)
        if (slotDefaultValue.length) acc[variant] = slotDefaultValue
        defaultProps[variant] = typeof key == "boolean" ? String(key) : key
        return acc
    }, {})

    const overrides = Object.entries(variantsProps).reduce((acc: any, [key, value]: any) => {
        let val = ""
        const isResponsive = typeof value === "object"
        if (isResponsive) {
            val = retrieveFromResponsiveProps(variants, key, value, slot).join(" ")
        } else {
            val = extractValue(variants[key]?.values[value], slot)
        }
        if (val.length) acc[key] = val
        defaultProps[key] = typeof value == "boolean" ? String(value) : value
        return acc
    }, {})

    return {
        ...defaults,
        ...overrides
    }
}