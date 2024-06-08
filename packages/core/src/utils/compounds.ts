export const retrieveCompoundClasses = (compoundVariants: any, withDefaultProps: any, otherProps: any, slot: any) => {
    const validCompounds: any[] = []

    compoundVariants.forEach((compound: any) => {
        let hasFailed = false
        let tmpClasses: any[] = []
        Object.entries(compound.conditions).forEach(([key, value]: any) => {
            if (hasFailed) return
            if (typeof withDefaultProps[key] == "undefined") {
                if (otherProps[key] !== value) {
                    hasFailed = true
                }
            } else if (typeof withDefaultProps[key] === "string") {
                if (Array.isArray(value) && !value.includes(withDefaultProps[key])) hasFailed = true
                else if (typeof value === "string" && value !== withDefaultProps[key]) hasFailed = true
            } else if (typeof withDefaultProps[key] === "object") {
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
                        tmpClasses.push(`${_k}:${v}`)
                    })
                }
            } else if (typeof withDefaultProps[key] === "boolean") {
                if (value !== withDefaultProps[key]) hasFailed = true
                else {
                    if (typeof compound.class === "string") tmpClasses.push(compound.class)
                    else if (Array.isArray(compound.class)) tmpClasses.push(...compound.class)
                    else compound.class[slot] ? tmpClasses.push(compound.class[slot]) : ""
                }
            }
        })
        if (!hasFailed) tmpClasses.forEach(v => validCompounds.push(v))
    })

    return validCompounds
  
}