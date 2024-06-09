function extractValue (value: any, slot: string) {
    if (typeof value === "string") return value
    if (value?.[slot]) {
        if (typeof value[slot] === "string") return value[slot]
    }
    return " "
}

export const retrieveCompoundClasses = (compoundVariants: any, withDefaultProps: any = {}, slot: any) => {
    const validCompounds = new Set()

    compoundVariants.forEach((compound: any) => {

        let hasFailed = false
        let tmpClasses = new Set()
        
        Object.entries(compound.conditions).forEach(([key, value]: any) => {
            if (hasFailed) return
            if (typeof withDefaultProps[key] === "object") {
                let found = false
                let _k = ""
                Object.entries(withDefaultProps[key]).forEach(([k, v]: any) => {
                    if (value === v) {
                        found = true
                        _k = k
                    }
                })
                if (!found) hasFailed = true
                else {
                    compound.class.split(" ").forEach((v: any) => {
                        tmpClasses.add(`${_k}:${v}`)
                    })
                }
            }
            else if (withDefaultProps[key] !== value) return hasFailed = true
        })

        if (!hasFailed) {
            if (tmpClasses.size > 0) {
                tmpClasses.forEach(v => validCompounds.add(v))
                tmpClasses.clear()
            }
            else { 
                const val = extractValue(compound.class, slot)
                if (val !== " ") validCompounds.add(val)
            }
        } 
    })
    return Array.from(validCompounds)
}