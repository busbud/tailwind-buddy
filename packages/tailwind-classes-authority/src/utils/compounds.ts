export const retrieveCompoundClasses = (compoundVariants: any[], mergedProps: any = {}, slot: string) => {

    const finalStringArray: string[] = []
    compoundVariants.forEach(compound => {
        let hasFailed = false;
        Object.entries(compound.conditions).forEach(([key, values]) => {
            if (hasFailed) return;
            let _values: string[] = []
            if (typeof values === "boolean") _values.push(values.toString())
            else if (typeof values === "string") _values.push(values)
            else if (Array.isArray(values)) _values = [...values]

            if (!mergedProps[key]) return hasFailed = true;
            if (!_values.includes(mergedProps[key])) return hasFailed = true;
        })

        if (!hasFailed) {
            if (typeof compound.class === "string" && compound.class.length) finalStringArray.push(compound.class)
            else if (compound.class[slot] && compound.class[slot].length) finalStringArray.push(compound.class[slot])

        }
    })
    
    return finalStringArray
}