import { tca } from "../../src/tca";

interface MyComponent {
  disabled?: boolean
}

export const responsiveAndCompoundComponent = tca({
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
    }
  },
  "defaultVariants": {
    "size": "small"
  },
  "compoundVariants": [
    {
      "conditions": {
        "size": "extralarge",
      },
      "class": /** @tw */ "bg-red-500 text-blue-500"
    },
    {
      "conditions": {
        disabled: true,
        size: "small"
      },
      class: /** @tw */ "bg-gray-500 border-red-500"
    }
  ]
})<MyComponent>()