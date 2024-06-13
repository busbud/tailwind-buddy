import { tca } from "../../src/tca";

export const simpleResponsiveComponent = tca({
  "slots": {
      "root": /** @tw */ "text-red-100",
  },
  "variants": {
    "size": {
        "small": {
          "root": /** @tw */ "text-xl",
        },
        "large": /** @tw */ "text-4xl",
        "extralarge": /** @tw */ "text-5xl leading-tight",
    },
    "color": {
      "primary": /** @tw */ "text-red-200",
      "secondary": /** @tw */ "text-blue-200",
    }
  },
  defaultVariants: {
    "size": "small",
    "color": "primary"
  },
  "responsiveVariants": ["size"]
})()