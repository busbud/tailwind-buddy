import { Slots } from "@/types/slots";
import {
  Variants,
  CompoundVariant,
  DefaultVariants,
  ResponsiveVariants,
} from "@/types/variants";

function cleanString(str: string): string {
  // Remove comments
  const noComments = str.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, "");

  // Replace multiple whitespace characters (including newlines) with a single space
  const noExtraSpaces = noComments.replace(/\s+/g, " ");

  // Trim the string to remove leading and trailing spaces
  return noExtraSpaces.trim();
}

export function processStrings<
  V extends Variants<S>,
  CV extends CompoundVariant<V, S>,
  DV extends DefaultVariants<V, S>,
  R extends ResponsiveVariants<V>,
  S extends Slots
>(obj: {
  slots: S;
  variants?: V;
  compoundVariants?: CV[];
  responsiveVariants?: R;
  defaultVariants: DV;
}): {
  slots: S;
  variants?: V;
  compoundVariants?: CV[];
  responsiveVariants?: R;
  defaultVariants: DV;
} {
  if (typeof obj === "string") {
    // @ts-expect-error
    return cleanString(obj);
  } else if (Array.isArray(obj)) {
    // @ts-expect-error
    return obj.map(processStrings);
  } else if (typeof obj === "object" && obj !== null) {
    const processedObj = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        // @ts-expect-error
        processedObj[key] = processStrings(obj[key]);
      }
    }
    // @ts-expect-error
    return processedObj;
  } else {
    return obj;
  }
}
