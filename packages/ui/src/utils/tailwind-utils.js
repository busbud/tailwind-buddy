const safelistClasses = new Set()
const screens = ["sm", "md", "lg", "xl"]

function generateSafelistClasses (variants) {
  Object.entries(variants).forEach(([variantKey, variant]) => { 
    Object.entries(variant).forEach(([subKey, responsive]) => {
      if (typeof responsive === "string") {
        responsive.split(" ").forEach(v => {
          safelistClasses.add(v)
        })
      } else if (typeof responsive === "object") {
        Object.entries(responsive).forEach(([rKey, values]) => {
          if (Array.isArray(values)) {
            values.forEach(v => safelistClasses.add(v))
          } else {
            values.split(" ").forEach(v => safelistClasses.add(v))
          }
        })
      }
    })
  })
}

function safeListWithScreens(safeList) {
  return safeList.reduce((acc, currentValue) => {
    screens.forEach(s => acc.push(`${s}:${currentValue}`))
    return acc;
  }, [])
}

export function generateAllSafeList(variantsArray) {
    variantsArray.forEach(variants => {
      generateSafelistClasses(variants)
    })
    return safeListWithScreens(Array.from(safelistClasses))
}