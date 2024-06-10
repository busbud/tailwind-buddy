import type { ResponsiveVariants, TCA_VARIANT_DEFINITION } from "tailwind-classes-authority"
import type { Screens } from "../../../tailwind.config"


export type Slots = "root"
export interface Variants {
  fontWeight?: string
  size?: ResponsiveVariants<"small" | "large", Screens>
}

export interface LabelProps
  extends React.HTMLAttributes<HTMLBaseElement>,
  Variants {
  /** The component used for the root node. Either a string to use a HTML element or a component. */
  as?: React.ElementType;
  disabled?: boolean;
}

export type VariantConfiguration = TCA_VARIANT_DEFINITION<Slots, Variants, LabelProps>
