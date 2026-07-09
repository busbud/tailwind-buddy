import { compose } from "../../src/tailwind-buddy";

/**
 * Fixture built exclusively from Tailwind v4-relevant class shapes:
 *  - stacked state variants (`hover:`, `focus:`) inside a responsive variant
 *  - v4-renamed utilities (`ring-3`, `shadow-sm`, `rounded-sm`)
 *  - v4 arbitrary CSS-variable syntax (`bg-(--brand)`)
 *  - important modifier (`!font-bold`)
 *  - arbitrary property (`[mask-type:luminance]`)
 *
 * tailwind-buddy never imports tailwindcss; it only composes class strings.
 * These fixtures let the tests assert that the *emitted strings* are
 * byte-identical regardless of the Tailwind engine version, and that the
 * breakpoint prefix is prepended outermost (v4 stacked-variant order).
 */
export const tailwindV4Component = compose<{
  slots: ["root"];
  variants: {
    intent: ["stateful"];
    tone: ["brand"];
  };
  props: {};
  screens: ["sm", "md"];
}>({
  slots: {
    root: "shadow-sm rounded-sm",
  },
  variants: {
    intent: {
      // Classes that already carry state variants + a v4-renamed utility.
      stateful: {
        root: "hover:bg-blue-500 focus:ring-3",
      },
    },
    tone: {
      // v4 CSS-variable arbitrary syntax + important modifier + arbitrary property.
      brand: {
        root: "bg-(--brand) !font-bold [mask-type:luminance]",
      },
    },
  },
  defaultVariants: {
    intent: "stateful",
    tone: "brand",
  },
  responsiveVariants: ["intent", "tone"],
});
