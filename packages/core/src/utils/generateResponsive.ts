export const generateResponsive = (str: string, screens: string[]) => {
    const strArray: string[] = str.split(" ")

    let str_final = str

    strArray.forEach((str, index) => {
        screens.forEach(screen => {
            str_final += ` ${screen}:${str}`
        })
    })

    return str_final.split(" ")
}
