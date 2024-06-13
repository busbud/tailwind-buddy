import { tca } from "../../src/tca";

export const simpleComponent = tca({
  "slots": {
      "root": "text-red-100",
  },
  "variants": {
    "color": {
        "primary": {
          "root": "text-red-200",
        },
        "secondary": "text-green-500"
    }
  },
  "defaultVariants": {
    "color": "primary"
  }
})