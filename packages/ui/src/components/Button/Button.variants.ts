import { compose } from "@busbud/tailwind-buddy";

type ComposeType = {
  "slots": ["root", "label", "icon"],
  variants: {
    appearance: ["default", "primary", "destructive"],
    size: ["xs", "sm", "md"],
    variant: ["contained", "text"]
  },
  props: {
    isDisabled: boolean
  }
}

export const buttonVariants = compose<ComposeType>({
  slots: {
    root: /** @tw */ "bg-red-500",
    label: "bg-red-500",
    icon: "bg-red-500",
  },
  variants: {
    "appearance" : {
      "root": " bg-red",
    },
    "size": {
     "root": "bg-red-500",
    },
    "variant": {
     "root": "bg-red-500",
    }
  },
  compoundVariants: [
    {
      "class": {
        "root": "bg-red-500",
      },
      "conditions": {
        "isDisabled": false,
        "size": "sm",
      }
    }
  ],
  defaultVariants: {
    "appearance": "default",
    "size": "md",
    "variant": "contained"
  }
});

type VariantProps<T extends Record<string, string[]>> = {
  [K in keyof T]: T[K][number]; // Extracts only valid values from the variant array
};

// Combine variants and props into a single type for components
export type ButtonProps = VariantProps<ComposeType["variants"]> & ComposeType["props"];

