import { compose } from "../../tests/constants";

export const responsiveAndCompoundComponent = compose({
  slots: {
    root: ["text-red-100"],
  },
  variants: {
    size: {
      small: {
        root: ["text-xl"],
      },
      large: ["text-4xl"],
      extralarge: ["text-5xl", "leading-tight"],
    },
  },
  defaultVariants: {
    size: "small",
  },
  compoundVariants: [
    {
      conditions: {
        size: "extralarge",
      },
      class: ["bg-red-500", "text-blue-500"],
    },
    {
      conditions: {
        disabled: true,
        size: "small",
      },
      class: ["bg-gray-500", "border-red-500"],
    },
  ],
});
