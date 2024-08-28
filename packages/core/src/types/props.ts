import { ResponsiveVariant, ResponsiveVariants } from "./variants";

export type MergedProps<Props, V, R extends ResponsiveVariants<V>> = {
  className?: string;
} & {
  [K in keyof V]?: R extends undefined
    ? keyof V[K]
    : K extends R[number]
    ? ResponsiveVariant<V, K> | keyof V[K]
    : keyof V[K];
} & {
  [K in keyof Props]?: Props[K];
};
