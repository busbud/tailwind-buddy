import type { TCA_VARIANT_DEFINITION } from "tailwind-classes-authority"

export interface RegularProps {
  disabled: boolean;
}

export type Slots = "root" | "label"
export interface Variants {
  fontWeight?: string
  size?: string
}

export type VariantConfiguration = TCA_VARIANT_DEFINITION<Slots, Variants, RegularProps>
export interface LabelProps
  extends React.HTMLAttributes<HTMLBaseElement>,
  VariantConfiguration,
  Variants {
  /** The component used for the root node. Either a string to use a HTML element or a component. */
  as?: React.ElementType;
}
