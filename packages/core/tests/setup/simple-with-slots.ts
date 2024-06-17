import { compose } from "../../src/tailwind-buddy";

export const simpleComponent = compose({
    slots: {
      root: "text-red-100 text-red-200",
      label: "text-blue-100 text-blue-200"
    },
    "variants": {
      "color": {
        "primary": "bg-red-500",
        "secondary": "bg-green-500"
      },
      size: {
        "small": {
          "label": "text-sm",
          "root": "text-lg"
        },
        "medium": "text-md",
      }
    },
    defaultVariants: {
      color: "primary",
      size: "small"
    }
})()