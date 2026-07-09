import { compose } from "../../src/tailwind-buddy";

/**
 * Component whose compound variants are gated on falsy prop values. Guards the
 * behaviour that keeps explicitly-provided `false`/`0`/`""` props instead of
 * dropping them with a truthy-only filter (which would stop `{ disabled: false }`
 * compounds from ever matching).
 */
export const falsyCompoundComponent = compose<{
  slots: ["root"];
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  variants: {};
  props: { disabled?: boolean };
  screens: [];
}>({
  slots: { root: "base" },
  compoundVariants: [
    { conditions: { disabled: false }, classes: { root: "enabled" } },
    { conditions: { disabled: true }, classes: { root: "disabled" } },
  ],
  defaultVariants: {},
});
