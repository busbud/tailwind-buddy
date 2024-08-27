import { compose } from "../../src/tailwind-buddy";

export const buttonVariants = compose({
  slots: {
    root: /** @tw */ "bg-red-100",
    label: /** @tw */ "bg-red-300",
    icon: /** @tw */ "bg-red-500",
  },
  variants: {
    appearance: {
      default: /** @tw */ "bg-purple-100",
      primary: /** @tw */ "bg-purple-300",
      destructive: /** @tw */ "bg-purple-500",
    },
    size: {
      xs: {
        root: /** @tw */ "bg-yellow-100",
        label: /** @tw */ "bg-yellow-300",
      },
      sm: {
        root: /** @tw */ "bg-blue-100",
        label: /** @tw */ "bg-blue-300",
      },
      md: {
        root: /** @tw */ "bg-orange-100",
        label: /** @tw */ "bg-orange-300",
      },
    },
    /** Sets the button variant. */
    variant: {
      contained: /** @tw */ "",
      text: /** @tw */ "",
    },
  },
  defaultVariants: {
    appearance: "default",
    size: "md",
    variant: "contained",
  },
  responsiveVariants: ["size"],
})();
