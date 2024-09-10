import { generateResponsiveVariants } from "./generate-responsive-variants";

export const generateSafeList = function (variantsArray: any[]) {
  const safelistClasses: Set<string> = new Set();
  const compoundClassesToTransform: Set<string> = new Set();
  let screens: string[] = [];
  if (variantsArray.length > 0) screens = variantsArray[0].definition().screens;
  variantsArray.forEach(({ definition }) => {
    const definitionResult = definition();
    if (
      definitionResult.responsiveVariants &&
      definitionResult.responsiveVariants.length > 0
    ) {
      const compounds = definitionResult.compoundVariants || [];
      definitionResult.responsiveVariants.forEach((variant: any) => {
        Object.entries(definitionResult.variants[variant]).forEach(
          ([key, value]: any) => {
            Object.entries(value).forEach(([rKey, values]: any) => {
              if (Array.isArray(values)) {
                values.forEach((v: any) => safelistClasses.add(v));
              } else {
                safelistClasses.add(values);
              }
            });
          }
        );

        const compoundFounds = compounds.filter((compound: any) => {
          return compound.conditions[variant];
        });

        compoundFounds.forEach((compoundFound: any) =>
          compoundClassesToTransform.add(compoundFound.class)
        );
      });
    }
  });

  if (safelistClasses.size === 0) return [];
  return generateResponsiveVariants(
    [...Array.from(safelistClasses), ...Array.from(compoundClassesToTransform)],
    screens
  );
};
