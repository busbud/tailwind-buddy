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

export type CompoundVariant<V extends Variants<S>, S extends Slots> = {
  conditions: {
    [K in keyof V]?:
      | (K extends keyof V ? keyof V[K] : never)
      | (K extends keyof V ? keyof V[K] : never)[]
      | boolean;
  } & {
    [K in string]?: string | string[] | boolean;
  };
  class: string | Record<string, string> | string[];
};

export type ResponsiveVariant<V, Sc extends string, K extends keyof V> = {
  ["initial"]: keyof V[K];
} & {
  [screen in Sc]?: keyof V[K];
};
