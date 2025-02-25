import { compose } from "../../src/tailwind-buddy";

export const responsiveAndCompoundComponent = compose<{
    slots: ["root"],
    variants: {
        "size": ["small", "large", "extralarge"],
    },
    props: {
        disabled?: boolean;
        className?: string
    },
    responsiveVariants: [],
    screens: []
}>({
  slots: {
    root: "text-red-100",
  },
  variants: {
    size: {
      small: {
        root: "text-xl",
      },
      large: "text-4xl",
      extralarge: "text-5xl leading-tight",
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
      classes: `
      
      
          bg-red-500 
          text-blue-500`,
    },
    {
      conditions: {
        disabled: true,
        size: "small",
      },
      classes: "bg-gray-500 border-red-500",
    },
  ],
});