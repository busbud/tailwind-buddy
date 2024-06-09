import { generateResponsive } from "./generateResponsive"

function extractClassesFromVariants (variants: any, safelistClasses: Set<string>) {
  Object.entries(variants).forEach(([variantKey, variant]: any) => {
    Object.entries(variant.values).forEach(([subKey, value]: any) => {
      if (typeof value === "string") {
        value.split(" ").forEach(v => {
          safelistClasses.add(v)
        })
      } else if (typeof value === "object") {
        Object.entries(value).forEach(([rKey, values]: any) => {
          values.split(" ").forEach((v: any) => safelistClasses.add(v))
        })
      }
    })
  })
}

function extractClassesFromDefaultSlots(defaultSlots: any, safelistClasses: Set<string>)  {
  Object.entries(defaultSlots).forEach(([key, value]: any) => {
    safelistClasses.add(value)
  })
}

function extractClassesFromCompoundVariants(compoundVariants: any, safelistClasses: Set<string>) {
  compoundVariants.forEach((compoundVariant: any) => {
    if (typeof compoundVariant.class === "string") {
      compoundVariant.class.split(" ").forEach((v: any) => safelistClasses.add(v))
    }  else {
      Object.entries(compoundVariant.class).forEach(([key, val]: any) => {
        safelistClasses.add(val)
      })
    }
  })
}

export function generateSafeList(variantsArray: any[], screens: string[] = []) {

  const safelistClasses: Set<string> = new Set()

    variantsArray.forEach(variantDefinitions => {
      if (variantDefinitions.slots) extractClassesFromDefaultSlots(variantDefinitions.slots, safelistClasses)
      if (variantDefinitions.variants) extractClassesFromVariants(variantDefinitions.variants, safelistClasses)
      if (variantDefinitions.compoundVariants) extractClassesFromCompoundVariants(variantDefinitions.compoundVariants, safelistClasses)
    })
    return generateResponsive(Array.from(safelistClasses).join(" "), screens)
}