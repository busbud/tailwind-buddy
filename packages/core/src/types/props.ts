import type { ResponsiveVariant, ResponsiveVariants } from "./variants";

/**
 * The full props bag accepted by a slot function produced via `setupCompose`.
 *
 * It merges:
 * - `className` / `class` overrides,
 * - every declared variant (optionally responsive when listed in `R`),
 * - the consumer's own component props (`Props`),
 * - a string index signature so the runtime can iterate props generically.
 *
 * No explicit index signature is added: an all-optional-key intersection is
 * still assignable to `Record<string, unknown>` (so the shared core, which
 * constrains its props generic to `Record<string, unknown>`, can index it),
 * while specific variant keys keep their inferred literal unions for
 * `VariantsProps<typeof x>` consumers — matching the v2 behaviour exactly.
 */
export type MergedProps<
  Props,
  Sc extends string,
  V,
  R extends ResponsiveVariants<V> = ResponsiveVariants<V>
> = {
  className?: string;
  class?: string;
} & {
  [K in keyof V]?: K extends R[number]
    ? ResponsiveVariant<V, Sc, K> | keyof V[K]
    : keyof V[K];
} & {
  [K in keyof Props]?: Props[K];
};
