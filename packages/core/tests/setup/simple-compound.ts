import { compose } from "../../src/tailwind-buddy";

interface MyComponent {
  disabled?: boolean
}

export const simpleCompoundComponent = compose({
  "slots": {
    "root": /** @tw */ "text-red-100",
    "children": /** @tw */ "text-blue-100",
  },
  "variants": {
    "color": {
        "primary": {
          "root": /** @tw */ "text-red-200",
          "children": /** @tw */ "text-blue-200",
        },
        "secondary": /** @tw */ "text-green-100"
      }
  },
  "defaultVariants": {
    "color": "primary"
  },
  compoundVariants: [
    {
      "conditions": {
        "disabled": true,
      },
      class: {
        "root": /** @tw */ "text-red-300"
      }
    },
    {
      "conditions": {
        disabled: true,
        color: ["secondary", "primary"]
      },
      class: /** @tw */ "text-green-200"
    },
  ],
  responsiveVariants: ["color"]
})<MyComponent>()