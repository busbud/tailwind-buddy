import { generateResponsiveVariants } from "./generate-responsive-variants";
import { cleanString } from "./strings";

function cleanVariantsClasses(variants: any) {
  Object.entries(variants).forEach(([vKey, vValue]) => {
    // @ts-expect-error
    Object.entries(vValue).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        const ret: string[] = [];
        value.forEach((v) => {
          ret.push(cleanString(v));
        });
        variants[vKey][key] = ret;
      } else if (typeof value === "string") {
        variants[vKey][key] = cleanString(value);
      } else if (typeof value === "object") {
        // @ts-expect-error
        Object.entries(value).forEach(([rKey, values]) => {
          if (Array.isArray(values)) {
            const ret: string[] = [];
            values.forEach((v) => {
              ret.push(cleanString(v));
            });
            variants[vKey][key][rKey] = ret;
          } else {
            // @ts-expect-error
            variants[vKey][key][rKey] = cleanString(values);
          }
        });
      } else {
        console.log("type missmatch on safeList");
      }
    });
  });
}

function cleanCompoundClasses(
  compoundClasses: {
    conditions: any[];
    class: string | string[] | { [key: string]: string | string[] };
  }[]
) {
  return compoundClasses.map((compound) => {
    const { conditions, class: c } = compound;
    if (Array.isArray(c)) {
      const ret: string[] = [];
      c.forEach((v) => {
        ret.push(cleanString(v));
      });
      return { conditions, class: ret };
    } else if (typeof c === "string") {
      return { conditions, class: cleanString(c) };
    } else if (typeof c === "object") {
      const ret: { [key: string]: string | string[] } = {};
      Object.entries(c).forEach(([rKey, values]) => {
        if (Array.isArray(values)) {
          const retValues: string[] = [];
          values.forEach((v) => {
            retValues.push(cleanString(v));
          });
          ret[rKey] = retValues;
        } else {
          ret[rKey] = cleanString(values);
        }
      });
      return { conditions, class: ret };
    } else {
      console.log("type missmatch on safeList");
    }
  });
}

function extractVariantClasses(variant: any, safelistClasses: Set<string>) {
  Object.entries(variant).forEach(([_, values]: any) => {
    if (Array.isArray(values)) {
      values.forEach((v: any) => {
        const t = v.split(" ");
        t.forEach((_v: any) => safelistClasses.add(_v));
      });
    } else if (typeof values === "string") {
      const splitValues = values.split(" ");
      splitValues.forEach((values: any) => {
        safelistClasses.add(values);
      });
    } else if (typeof values === "object") {
      Object.entries(values).forEach(([_, values]: any) => {
        if (Array.isArray(values)) {
          values.forEach((v: any) => {
            const t = v.split(" ");
            t.forEach((_v: any) => safelistClasses.add(_v));
          });
        } else {
          const splitValues = values.split(" ");
          splitValues.forEach((values: any) => {
            safelistClasses.add(values);
          });
        }
      });
    } else {
      console.log("type missmatch on safeList");
    }
  });
}

function extractCompoundClasses(compound: any, safelistClasses: Set<string>) {
  const c = compound.class;
  if (Array.isArray(c)) {
    c.forEach((v: any) => {
      const t = v.split(" ");
      t.forEach((_v: any) => safelistClasses.add(_v));
    });
  } else if (typeof c === "string") {
    const splitValues = c.split(" ");
    splitValues.forEach((values: any) => {
      safelistClasses.add(values);
    });
  } else if (typeof c === "object") {
    Object.entries(c).forEach(([_, values]: any) => {
      if (Array.isArray(values)) {
        values.forEach((v: any) => {
          const t = v.split(" ");
          t.forEach((_v: any) => safelistClasses.add(_v));
        });
      } else {
        const splitValues = values.split(" ");
        splitValues.forEach((values: any) => {
          safelistClasses.add(values);
        });
      }
    });
  } else {
    console.log("type missmatch on safeList for variants");
  }
}

export const generateSafeList = function (variantsArray: any[]) {
  const safelistClasses: Set<string> = new Set();
  let screens: string[] = [];
  if (variantsArray.length > 0) screens = variantsArray[0].definition().screens;
  variantsArray.forEach(({ definition }) => {
    const definitionResult = definition();
    cleanVariantsClasses(definitionResult.variants);
    definitionResult.compoundVariants = cleanCompoundClasses(
      definitionResult.compoundVariants
    );
    if (
      definitionResult.responsiveVariants &&
      definitionResult.responsiveVariants.length > 0
    ) {
      const compounds = definitionResult.compoundVariants || [];
      definitionResult.responsiveVariants.forEach((variant: any) => {
        extractVariantClasses(
          definitionResult.variants[variant],
          safelistClasses
        );
        const compoundFounds = compounds.filter((compound: any) => {
          return typeof compound.conditions[variant] !== "undefined";
        });
        compoundFounds.forEach((compound: any) => {
          extractCompoundClasses(compound, safelistClasses);
        });
      });
    }
  });

  if (safelistClasses.size === 0) return [];
  return generateResponsiveVariants(Array.from(safelistClasses), screens);
};
