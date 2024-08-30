import { ResponsiveVariant, ResponsiveVariants } from "./variants";

export type MergedProps<
  Props,
  Sc extends string,
  V,
  R extends ResponsiveVariants<V>
> = {
  className?: string;
} & {
  [K in keyof V]?: R extends undefined
    ? keyof V[K]
    : K extends R[number]
    ? ResponsiveVariant<V, Sc, K> | keyof V[K]
    : keyof V[K];
} & {
  [K in keyof Props]?: Props[K];
};
