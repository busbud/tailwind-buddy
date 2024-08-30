import { setupCompose } from "@busbud/tailwind-buddy";

const compose = setupCompose(["md", "lg", "xl", "2xl"], {
  extraPerformanceEnabled: true,
});

const options = {
  slots: {
    root: "relative flex shrink-0 overflow-hidden rounded-full",
  },
  variants: {
    size: {
      xs: "h-6 w-6",
      sm: "h-8 w-8",
      md: "h-10 w-10",
      lg: "h-12 w-12",
      xl: "h-14 w-14",
    },
  },
  defaultVariants: {
    size: "md",
  },
  compoundVariants: [
    {
      conditions: {
        size: ["xs", "sm"],
      },
      class: "ring-1",
    },
    {
      conditions: {
        size: ["md", "lg", "xl", "2xl"],
      },
      class: "ring-2",
    },
  ],
};

export const noSlotsAndCompoundNoTwMergeNoResponsive = {
  avatar: compose(options)(),
};

export const slotsAndCompoundNoTwMergeNoResponsive = {
  avatar: compose({
    ...options,
    slots: {
      ...options.slots,
      label: "sr-only",
    },
  })(),
};
