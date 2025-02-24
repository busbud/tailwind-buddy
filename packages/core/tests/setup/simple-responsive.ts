import { compose } from "../../src/tailwind-buddy"

export const simpleResponsiveComponent = compose<{
    slots: ["root"],
    variants: {
        size: ["small", "large", "extralarge"],
        color: ["primary", "secondary"]
    },
    props: {},
    screens: ["sm", "md", "lg", "xl", "xxl"]
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
      extralarge: "text-5xl leading-tight bg-orange-500",
    },
    color: {
      primary: "text-red-200",
      secondary: "text-blue-200",
    },
  },
  defaultVariants: {
    size: "small",
    color: "primary",
  },
  responsiveVariants: ["size"],
});
