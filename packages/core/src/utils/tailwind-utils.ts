import { generateResponsiveVariants } from "./generate-responsive-variants";
import { cleanString } from "./strings";

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const cleanClassPayload = (value: unknown): unknown => {
  if (typeof value === "string") {
    return cleanString(value);
  }

  if (Array.isArray(value)) {
    return value
      .filter((className): className is string => typeof className === "string")
      .map(cleanString);
  }

  if (isRecord(value)) {
    return Object.fromEntries(
      Object.entries(value).map(([key, classValue]) => [
        key,
        cleanClassPayload(classValue),
      ])
    );
  }

  return value;
};

const addClassTokens = (value: unknown, safelistClasses: Set<string>) => {
  if (typeof value === "string") {
    cleanString(value)
      .split(" ")
      .filter(Boolean)
      .forEach((className) => {
        safelistClasses.add(className);
      });
    return;
  }

  if (Array.isArray(value)) {
    value.forEach((classValue) => {
      addClassTokens(classValue, safelistClasses);
    });
    return;
  }

  if (isRecord(value)) {
    Object.values(value).forEach((classValue) => {
      addClassTokens(classValue, safelistClasses);
    });
  }
};

function cleanVariantsClasses<
  T extends Record<string, Record<string, unknown>> | undefined
>(variants: T): T {
  if (!variants) return variants;

  Object.values(variants).forEach((variantValues) => {
    Object.entries(variantValues).forEach(([key, value]) => {
      variantValues[key] = cleanClassPayload(value);
    });
  });

  return variants;
}

function cleanCompoundClasses(
  compoundClasses: {
    conditions: unknown;
    class?: unknown;
    classes?: unknown;
  }[]
) {
  return compoundClasses.map((compound) => {
    const { conditions } = compound;
    const classValue =
      compound.classes !== undefined ? compound.classes : compound.class;

    return { conditions, class: cleanClassPayload(classValue) };
  });
}

function extractVariantClasses(variant: any, safelistClasses: Set<string>) {
  addClassTokens(variant, safelistClasses);
}

function extractCompoundClasses(compound: any, safelistClasses: Set<string>) {
  addClassTokens(compound.class, safelistClasses);
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
          // `variants` is optional for v2 consumers; a component may declare
          // `responsiveVariants` without a `variants` map. Guard the access so
          // it does not throw (extractVariantClasses no-ops on undefined).
          definitionResult.variants?.[variant],
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
