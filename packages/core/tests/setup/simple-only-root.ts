import { compose } from "../../tests/constants";

export const simpleComponent = compose({
  slots: {
    root: ["text-red-100"],
  },
  variants: {
    color: {
      primary: {
        root: ["text-red-200"],
      },
      secondary: ["text-green-500"],
    },
  },
  defaultVariants: {
    color: "primary",
  },
})();
