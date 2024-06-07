import { generateResponsive } from "./generateResponsive"

const safelistClasses = new Set()

function extractClassesFromVariants (variants: any) {
  Object.entries(variants).forEach(([variantKey, variant]: any) => {
    Object.entries(variant.values).forEach(([subKey, responsive]: any) => {
      if (typeof responsive === "string") {
        responsive.split(" ").forEach(v => {
          safelistClasses.add(v)
        })
      } else if (typeof responsive === "object") {
        Object.entries(responsive).forEach(([rKey, values]: any) => {
          if (Array.isArray(values)) {
            values.forEach(v => safelistClasses.add(v))
          } else {
            values.split(" ").forEach((v: any) => safelistClasses.add(v))
          }
        })
      }
    })
  })
}

function extractClassesFromDefaultSlots(defaultSlots: any)  {
  Object.entries(defaultSlots).forEach(([key, value]: any) => {
    safelistClasses.add(value)
  })
}

function extractClassesFromCompoundVariants(compoundVariants: any) {
  compoundVariants.forEach((compoundVariant: any) => {
    if (typeof compoundVariant.class === "string") {
      compoundVariant.class.split(" ").forEach((v: any) => safelistClasses.add(v))
    } else {
      Object.entries(compoundVariant.class).forEach(([key, val]: any) => {
        safelistClasses.add(val)
      })
    }
  })
}

export function generateAllSafeList(variantsArray: any[], screens: string[] = []) {
    variantsArray.forEach(variantDefinitions => {
      if (variantDefinitions.slots) extractClassesFromDefaultSlots(variantDefinitions.slots)
      if (variantDefinitions.variants) extractClassesFromVariants(variantDefinitions.variants)
      if (variantDefinitions.compoundVariants) extractClassesFromCompoundVariants(variantDefinitions.compoundVariants)
    })
    return generateResponsive(Array.from(safelistClasses).join(" "), screens)
}