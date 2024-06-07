// import { type VariantProps } from "tailwind-variants";
// import { labelVariants } from "./Label.variants";

export interface LabelProps
  extends React.HTMLAttributes<HTMLBaseElement> {
    // VariantProps<typeof labelVariants> {
  /** The component used for the root node. Either a string to use a HTML element or a component. */
  as?: React.ElementType;
  fontWeight?: "regular" | "bold" | "extraBold";
  size?: "xxl" | "xl" | "lg" | "md" | "sm" | "xs" | "xxs";
}
