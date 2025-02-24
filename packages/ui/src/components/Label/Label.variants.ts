import { compose, VariantProps } from "@busbud/tailwind-buddy";

interface LabelBaseProps extends React.HTMLAttributes<HTMLBaseElement> {
    [key: string]: unknown;
    /** The component used for the root node. Either a string to use a HTML element or a component. */
    as?: React.ElementType;
    disabled?: boolean;
}
  
type ComposeType = {
    "slots": ["root"],
    variants: {
        fontWeight: ["xxl"],
        size: ["small", "large"],
    },
    props: LabelBaseProps,
    screens: []
}

export const labelVariants = compose<ComposeType>({
  slots: {
    root: /** @tw */ "text-blue-500",
  },
  variants: {
    size: {
      small: /** @tw */ "text-xs",
      large: /** @tw */ "text-7xl",
    },
    fontWeight: {
      xxl: {
        root: /** @tw */ "font-extrabold",
      },
    },
  },
  defaultVariants: {
    size: "small",
    fontWeight: "xxl",
  },
  compoundVariants: [
    {
      conditions: {
        disabled: true,
      },
      classes: /** @tw */ "bg-red-500",
    },
  ],
  responsiveVariants: ["fontWeight"],
});

export type LabelProps = VariantProps<ComposeType["variants"]> & ComposeType["props"];
