import { compose, setupCompose } from "@busbud/tailwind-buddy";
import { twMerge } from "tailwind-merge";

// v2-style factory bound to tailwind-merge (mirrors a v2 consumer's setup).
const composeV2 = setupCompose(["sm", "md", "lg", "xl", "2xl"], twMerge);

export const options = {
  slots: {
    root: "relative flex shrink-0 overflow-hidden rounded-full",
  },
  variants: {
    size: {
      xs: {
        root: "h-6 w-6"
      },
      sm: {
        root: "h-8 w-8"
      },
      md: {
        root: "h-10 w-10"
      },
      lg: {
        root: "h-12 w-12"
      },
      xl: {
        root: "h-14 w-14"
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
  compoundVariants: [
    {
      conditions: {
        size: "xs",
      },
      classes: {
        root: "ring-1"
      },
    },
    {
      conditions: {
        size: "md",
      },
      classes: "ring-2"
    },
  ],
};

export const noSlotsAndCompoundNoTwMergeNoResponsive = {
  avatar: compose(options),
};

export const slotsAndCompoundNoTwMergeNoResponsive = {
  avatar: compose({
    ...options,
    slots: {
      ...options.slots,
      label: "sr-only",
    },
  }),
};

// v2 `setupCompose` path: tailwind-merge injected internally (v2 consumer pattern).
// Uses the v2 `class:` spelling to prove the compat path is exercised.
export const v2SetupComposeWithMerge = {
  avatar: composeV2({
    ...options,
    compoundVariants: [
      { conditions: { size: "xs" }, class: { root: "ring-1" } },
      { conditions: { size: "md" }, classes: "ring-2" },
    ],
  })(),
};
