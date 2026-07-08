import type { Slots } from "./slots";

/**
 * The set of variant names that may receive responsive (`{ initial, ...screens }`) values.
 *
 * Defaults to `never[]` so that, when `responsiveVariants` is omitted, every
 * variant is treated as a plain scalar (resolves issue #31 — optionality).
 */
export type ResponsiveVariants<V> = (keyof V)[];

/**
 * A variant definition inferred from the `variants` object literal.
 *
 * Each variant maps its keys (e.g. `"primary"`, `"secondary"`) to either a
 * shared class string/array or a per-slot map `{ [slot]: classes }`.
 */
export type Variants<S extends Slots> = {
  [variant: string]: {
    [kind: string]: string | string[] | { [key in keyof S]?: string | string[] };
  };
};

/**
 * Optional defaults for each variant. Made optional (issue #31) so consumers
 * are not forced to specify a value for every variant.
 */
export type DefaultVariants<V extends Variants<S>, S extends Slots> = {
  [K in keyof V]?: keyof V[K];
};

/**
 * The class payload a single variant key (or compound variant) may carry.
 */
export type VariantValue<S extends Slots> =
  | string
  | string[]
  | { [key in keyof S]?: string | string[] };

/**
 * A compound variant. Both `class` (v2 spelling) and `classes` (v3 spelling)
 * are accepted as an alias so existing v2 configs compile unchanged while new
 * configs may use either.
 *
 * `conditions` accepts the declared variant keys (with literal/array values or
 * booleans) plus an arbitrary string index so ad-hoc props such as
 * `isDisabled: true` can be matched without being declared as variants.
 */
export type CompoundVariant<V extends Variants<S>, S extends Slots> = {
  conditions: {
    [K in keyof V]?: (keyof V[K]) | (keyof V[K])[] | boolean;
  } & { [K in string]?: string | string[] | boolean };
} & (
  | { class: VariantValue<S>; classes?: undefined }
  | { classes: VariantValue<S>; class?: undefined }
);

/**
 * A responsive value for variant `K`: an `initial` key plus optional per-screen
 * overrides.
 */
export type ResponsiveVariant<V, Sc extends string, K extends keyof V> = {
  initial: keyof V[K];
} & { [screen in Sc]?: keyof V[K] };
