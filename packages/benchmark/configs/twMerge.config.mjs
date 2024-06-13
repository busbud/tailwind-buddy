import {extendTailwindMerge} from "tailwind-merge";

export const COMMON_UNITS = ["small", "medium", "large"];

export const twMergeConfig = {
    theme: {
      opacity: ["disabled"],
      spacing: [
        "divider",
        "unit",
        "unit-2",
        "unit-4",
        "unit-6",
        "unit-8",
        "unit-10",
        "unit-12",
        "unit-14",
      ],
      borderWidth: COMMON_UNITS,
      borderRadius: COMMON_UNITS,
    },
    classGroups: {
      shadow: [{shadow: COMMON_UNITS}],
      "font-size": [{text: ["tiny", ...COMMON_UNITS]}],
      "bg-image": ["bg-stripe-gradient"],
      "min-w": [
        {
          "min-w": ["unit", "unit-2", "unit-4", "unit-6", "unit-8", "unit-10", "unit-12", "unit-14"],
        },
      ],
    },
};
export const twMerge = extendTailwindMerge(twMergeConfig);