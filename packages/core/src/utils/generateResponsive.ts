export const generateResponsive = (str: string, screens: string[]) => {
    const strArray: string[] = str.split(" ")

    let str_final: string[] = []

    strArray.forEach((str, index) => {
        screens.forEach(screen => {
            str_final.push(`${screen}:${str}`)
        })
    })

    return str_final
}
