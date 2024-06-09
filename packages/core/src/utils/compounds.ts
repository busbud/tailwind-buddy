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
        
        Object.entries(compound.conditions).forEach(([key, value]: any) => {
            if (hasFailed) return
            if (withDefaultProps[key] !== value) return hasFailed = true
        })

        if (!hasFailed) {
            const val = extractValue(compound.class, slot)
            if (val !== " ") validCompounds.add(val)
        } 
    })

            // if (typeof withDefaultProps[key] == "undefined") {
            //     if (otherProps[key] !== value) {
            //         hasFailed = true
            //     }
            // } else if (typeof withDefaultProps[key] === "string") {
            //     if (Array.isArray(value) && !value.includes(withDefaultProps[key])) hasFailed = true
            //     else if (typeof value === "string" && value !== withDefaultProps[key]) hasFailed = true
            // } else if (typeof withDefaultProps[key] === "object") {
            //     let found = false
            //     let _k = ""
            //     Object.entries(withDefaultProps[key]).forEach(([k, v]: any) => {
            //         if (value === v) {
            //             found = true
            //             _k = k
            //         }
            //     })
            //     if (!found) hasFailed = true
            //     else {
            //         compound.class.split(" ").forEach((v: any) => {
            //             tmpClasses.push(`${_k}:${v}`)
            //         })
            //     }
            // } else if (typeof withDefaultProps[key] === "boolean") {
            //     if (value !== withDefaultProps[key]) hasFailed = true
            //     else {
            //         if (typeof compound.class === "string") tmpClasses.push(compound.class)
            //         else compound.class[slot] ? tmpClasses.push(compound.class[slot]) : ""
            //     }
            // }
    //     })

    //     if (tmpClasses.size > 1) tmpClasses.forEach(v => validCompounds.add(v))
        // if (!hasFailed) tmpClasses.forEach(v => {
        //     validCompounds.add(v)
        // })
    // })
    return Array.from(validCompounds)
}