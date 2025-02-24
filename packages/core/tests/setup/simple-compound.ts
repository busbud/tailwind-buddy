import { compose } from "../../src/tailwind-buddy"

export const simpleCompoundComponent = compose<{
  slots: ["root", "children"],
  variants: {
    color: ["primary", "secondary"]
  },
  props: {
    disabled?: boolean;
  },
  screens: []
}>({
  slots: {
    root: "text-red-100",
    children: "text-blue-100",
  },
  variants: {
    color: {
      primary:  "text-red-200",
      secondary: {
        "children": "text-green-100",
        "root": "text-green-100"
      },
    },
  },
  defaultVariants: {
    color: "primary",
  },
  compoundVariants: [
    {
      conditions: {
        disabled: true,
      },
      classes: {
        root: "text-red-300",
      },
    },
    {
      conditions: {
        disabled: true,
        color: ["primary", "secondary"]
      },
      classes: "text-purple-200",
    },
  ],
  responsiveVariants: ["color"],
});
