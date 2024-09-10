import { Slots } from "./slots";

export type ResponsiveVariants<V> = (keyof V)[];

export type Variants<S extends Slots> = {
  [variant: string]: {
    [kind: string]:
      | string
      | string[]
      | {
          [key in keyof S]?: string | string[];
        };
  };
};

export type DefaultVariants<V extends Variants<S>, S extends Slots> = {
  [K in keyof V]: K extends keyof V ? keyof V[K] : never;
};

export type VariantValue<S extends Slots> =
  | string
  | string[]
  | {
      [K in keyof S]?: string | string[];
    };

export type CompoundVariant<V extends Variants<S>, S extends Slots> = {
  conditions: {
    [K in keyof V]?: V[K] extends Record<string, any>
      ? keyof V[K] | (keyof V[K])[]
      : never;
  };
  class: VariantValue<S>;
};

export type ResponsiveVariant<V, Sc extends string, K extends keyof V> = {
  ["initial"]: keyof V[K];
} & {
  [screen in Sc]?: keyof V[K];
};
