import type { MergedProps } from "./props";
import type { Slots } from "./slots";
import type {
  Variants,
  CompoundVariant,
  DefaultVariants,
  ResponsiveVariants,
} from "./variants";

export type TB = <
  V extends Variants<S>,
  CV extends CompoundVariant<V, S>,
  DV extends DefaultVariants<V, S>,
  R extends ResponsiveVariants<V>,
  S extends Slots
>(options: {
  slots: S;
  variants?: V;
  compoundVariants?: CV[];
  responsiveVariants?: R;
  defaultVariants: DV;
}) => <Props>() => {
  [Slot in keyof S]: (props?: MergedProps<Props, V, R>) => string;
} & {
  definition: () => {
    slots: S;
    variants?: V;
    compoundVariants?: CV[];
    responsiveVariants?: R;
    defaultVariants: DV;
  };
};

export type VariantsProps<
  V extends Record<string, (...args: any[]) => unknown>
> = Parameters<V[keyof V]>[0];
