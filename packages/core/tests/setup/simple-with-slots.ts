import { compose } from "../../src/tailwind-buddy";

export const simpleComponent = compose<{
  slots: ["root", "label"],
  variants: {
    color: ["primary", "secondary"],
    size: ["small", "medium"],
  },
  props: {},
  screens: []
}>({
  slots: {
    root: "text-red-100 text-red-200",
    label: "text-blue-100 text-blue-200",
  },
  variants: {
    color: {
      primary: {
        "root": "bg-red-500",
        "label": "bg-green-500",
      },
      secondary: {
        "root": "bg-green-500"
      },
    },
    size: {
      small: {
        label: "text-sm",
        root: "text-lg",
      },
      medium: {
        root: "text-md"
      },
    },
  },
  defaultVariants: {
    color: "primary",
    size: "small",
  },
});
