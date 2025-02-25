import { compose } from "../../src/tailwind-buddy";

export interface LabelProps {
  as?: string;
  className?: string;
  disabled?: boolean;
}

export const labelVariants = compose<{
    slots: ["root", "icon", "container"],
    variants: {
        backgroundColor: ["blue", "green"],
        fontWeight: ["regular", "bold", "extraBold"],
        size: ["xxl", "xl", "lg", "md", "sm", "xs", "xxs"]
    },
    props: {},
    screens: []
}>({
  slots: {
    root: "inline-flex",
    icon: "shrink-0",
    container: "truncate",
  },
  variants: {
    backgroundColor: {
      blue: "bg-color-scheme-literal-blue-500",
      green: "bg-color-scheme-literal-green-500",
    },
    fontWeight: {
      regular: "",
      bold: {
        root: "font-weight-bold",
      },
      extraBold: {
        root: "font-weight-extra-bold",
      },
    },
    size: {
      xxl: {
        root: "text-size-150",
      },
      xl: {
        root: "text-size-112",
      },
      lg: {
        root: "text-size-100",
      },
      md: {
        root: "text-size-87",
      },
      sm: {
        root: "text-size-75",
      },
      xs: {
        root: "text-size-62",
      },
      xxs: {
        root: "text-size-56",
      },
    },
  },
  defaultVariants: {
    fontWeight: "regular",
    size: "md",
    backgroundColor: "blue",
  },
  compoundVariants: [
    {
      conditions: {
        disabled: true,
      },
      classes: "opacity-50",
    },
    {
      conditions: {
        fontWeight: ["bold", "extraBold"],
      },
      classes: "opacity-100",
    },
    {
      conditions: {
        fontWeight: ["bold", "extraBold"],
        size: "xl",
      },
      classes: "opacity-200",
    },
  ],
  responsiveVariants: ["fontWeight", "size", "backgroundColor"]
})

