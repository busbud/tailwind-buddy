import { generateResponsiveVariants } from "./generate-responsive-variants";
import { cleanString } from "./strings";

function cleanVariantsClasses(variants: {
  [k in string]: {
    [k in string]: string
  } | {
    [k in string]: string
  }
}) {
  const _variants = variants
  Object.entries(_variants).forEach(([vKey, vValue]) => {
    Object.entries(vValue).forEach(([key, value]) => {
      if (typeof value === "string") {
        _variants[vKey][key] = cleanString(value);
      } else if (typeof value === "object") {
        Object.entries(value).forEach(([rKey, values]) => {
          // @ts-ignore
          _variants[vKey][key][rKey] = cleanString(values);
        });
      } else {
        console.log("cleanVariantsClasses: type missmatch on safeList");
      }
    });
  });

  return _variants
}

function cleanCompoundClasses(
  compoundClasses: {
    conditions: any[];
    classes: string | string[] | { [key: string]: string | string[] };
  }[]
) {
  return compoundClasses.map((compound) => {
    const { conditions, classes: c } = compound;
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
      console.log("cleanCompoundClasses: type missmatch on safeList");
    }
  });
}

function extractVariantClasses(variant: any, safelistClasses: Set<string>) {
  Object.entries(variant).forEach(([_, values]: any) => {
    if (typeof values === "string") {
      const splitValues = values.split(" ");
      splitValues.forEach((values: any) => {
        safelistClasses.add(values);
      });
    } else if (typeof values === "object") {
      Object.entries(values).forEach(([_, values]: any) => {
        const splitValues = values.split(" ");
        splitValues.forEach((values: any) => {
          safelistClasses.add(values);
        });
      });
    } else {
      console.log("extractVariantClasses: type missmatch on safeList");
    }
  });
}

function extractCompoundClasses(compound: any, safelistClasses: Set<string>) {
  const c = compound.class;
   if (typeof c === "string") {
    const splitValues = c.split(" ");
    splitValues.forEach((values: any) => {
      safelistClasses.add(values);
    });
  } else if (typeof c === "object") {
    Object.entries(c).forEach(([_, values]: any) => {
      const splitValues = values.split(" ");
      splitValues.forEach((values: any) => {
        safelistClasses.add(values);
      });
    });
  } else {
    // @ts-ignore
    console.log("extractCompoundClasses: type missmatch on safeList for variants");
  }
}

export const generateSafeList = function (variantsArray: any[], screens = ["sm", "md", "lg", "xl", "xxl"]) {
  const safelistClasses: Set<string> = new Set();
  variantsArray.forEach(({ options }) => {
    const definitionResult = options;
    definitionResult.variants = cleanVariantsClasses(definitionResult.variants)
    definitionResult.compoundVariants = cleanCompoundClasses(
      definitionResult.compoundVariants ?? []
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
          return typeof compound?.conditions[variant] !== "undefined";
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