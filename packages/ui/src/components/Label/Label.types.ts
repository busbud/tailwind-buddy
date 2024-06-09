import type { ResponsiveVariants, TCA_VARIANT_DEFINITION } from "tailwind-classes-authority"
import type { Screens } from "../../../tailwind.config"

export interface Props {
  disabled: boolean;
}

export type Slots = "root"
export interface Variants {
  fontWeight?: string
  size?: ResponsiveVariants<"small" | "large", Screens>
}

export type VariantConfiguration = TCA_VARIANT_DEFINITION<Slots, Variants, Props>
export interface LabelProps
  extends React.HTMLAttributes<HTMLBaseElement>,
  Variants,
  Props {
  /** The component used for the root node. Either a string to use a HTML element or a component. */
  as?: React.ElementType;
}
