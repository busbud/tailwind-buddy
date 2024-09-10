import { compose } from "../../tests/constants";

export const buttonVariants = compose({
  slots: {
    root: ["bg-red-100"],
    label: ["bg-red-300"],
    icon: ["bg-red-500"],
  },
  variants: {
    appearance: {
      default: ["bg-purple-100"],
      primary: ["bg-purple-300"],
      destructive: ["bg-purple-500"],
    },
    size: {
      xs: {
        root: ["bg-yellow-100"],
        label: ["bg-yellow-300"],
      },
      sm: {
        root: ["bg-blue-100"],
        label: ["bg-blue-300"],
      },
      md: {
        root: ["bg-orange-100"],
        label: ["bg-orange-300"],
      },
    },
    /** Sets the button variant. */
    variant: {
      contained: "",
      text: "",
    },
  },
  defaultVariants: {
    appearance: "default",
    size: "md",
    variant: "contained",
  },
  responsiveVariants: ["size"],
});
