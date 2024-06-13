export function extractValue (value: any, slot: string) {
    if (typeof value === "string") return value
    if (value?.[slot]) {
        if (typeof value[slot] === "string") return value[slot]
    }
    return undefined
}

export function extractResponsivePropsFromVariant(value: any, variant: any, slot: string) {
    const classesToReturn: string[] = []
    Object.entries(value).forEach(([responsiveKey, val]: any) => {
        const variantValue = variant[val]
        if (responsiveKey === "initial") {
            const classStr = extractValue(variantValue, slot)
            if (classStr) classesToReturn.push(classStr)
        } else {
            extractValue(variantValue, slot).split(" ").forEach((v: string) => {
                classesToReturn.push(`${responsiveKey}:${v}`)
            })
        }
    })
    return classesToReturn.join(" ")
}