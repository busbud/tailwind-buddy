import { compose } from "../../tailwind-buddy-interface";
import { LabelBaseProps } from "./Label.types";
import type { VariantsProps } from "@busbud/tailwind-buddy";

export const labelVariants = compose({
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
      class: /** @tw */ "bg-red-500",
    },
  ],
  responsiveVariants: ["fontWeight"],
})<LabelBaseProps>();

export type LabelProps = VariantsProps<typeof labelVariants>;
