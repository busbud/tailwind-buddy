import { compose } from "../../tests/constants";

interface MyComponent {
  disabled?: boolean;
}

export const simpleCompoundComponent = compose({
  slots: {
    root: ["text-red-100"],
    children: ["text-blue-100"],
  },
  variants: {
    color: {
      primary: {
        root: ["text-red-200"],
        children: ["text-blue-200"],
      },
      secondary: ["text-green-100"],
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
      class: {
        root: ["text-red-300"],
      },
    },
    {
      conditions: {
        disabled: true,
        color: ["secondary", "primary"],
      },
      class: ["text-green-200"],
    },
  ],
  responsiveVariants: ["color"],
})();
