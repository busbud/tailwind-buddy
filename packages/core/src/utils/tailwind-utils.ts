import { generateResponsive } from "./generateResponsive"

export const generateSafeList = function (variantsArray: any[], screens: string[] = []) {

  const safelistClasses: Set<string> = new Set()
  const compoundClassesToTransform: Set<string> = new Set()
  variantsArray.forEach(({ definition }) => {
    const definitionResult = definition()
    if (definitionResult.responsiveVariants && definitionResult.responsiveVariants.length > 0) {
      const compounds = definitionResult.compoundVariants || []
      definitionResult.responsiveVariants.forEach((variant: any) => {
          Object.entries(definitionResult.variants[variant]).forEach(([key, value]: any) => {
            if (typeof value === "string") {
              value.split(" ").forEach((v: any) => safelistClasses.add(v))
            } else if (typeof value === "object") {
              Object.entries(value).forEach(([rKey, values]: any) => {
                values.split(" ").forEach((v: any) => safelistClasses.add(v))
              })
            }
          })

          const compoundFounds = compounds.filter((compound: any) => {
            return compound.conditions[variant]
          })

          compoundFounds.forEach((compoundFound: any) => compoundClassesToTransform.add(compoundFound.class))
      })
    }
  })

  if (safelistClasses.size === 0) return []
  return generateResponsive(
    [
      ...Array.from(safelistClasses),
      ...Array.from(compoundClassesToTransform)
    ], screens)
}