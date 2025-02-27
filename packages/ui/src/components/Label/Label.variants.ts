import { screens } from "@/tailwind-buddy-interface";
import { compose, VariantProps } from "@busbud/tailwind-buddy";
import { ReactNode } from "react";

interface LabelBaseProps {
    as?: React.ElementType;
    disabled?: boolean;
    className?: string,
    children?: ReactNode
}
  
type ComposeType = {
    "slots": ["root"],
    variants: {
        fontWeight: ["xxl"],
        size: ["small", "large"],
    },
    props: LabelBaseProps,
    screens: typeof screens
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

export type LabelProps = VariantProps<ComposeType["variants"], ComposeType["screens"]> & ComposeType["props"];
