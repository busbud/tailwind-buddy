import { compose } from "@busbud/tailwind-buddy";

type ComposeType = {
  "slots": ["root", "label", "icon"],
  variants: {
    appearance: ["default", "primary", "destructive"],
    size: ["xs", "sm", "md"],
    variant: ["contained", "text"],
  },
  props: {
    isDisabled?: boolean
  }
}

export const buttonVariants = compose<ComposeType>({
  slots: {
    root: "bg-red-500",
    label: "bg-red-500",
    icon: "bg-red-500",
  },
  variants: {
    "appearance" : {
      "root": "bg-red-500",
    },
    "size": {
      "label" :"bg-red-500"
    },
    "variant": {
      "label": "bg-red-500"
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

type VariantProps = {
  appearance?: ComposeType["variants"]["appearance"][number];
  size?: ComposeType["variants"]["size"][number];
  variant?: ComposeType["variants"]["variant"][number];
};

export type ButtonProps = VariantProps & ComposeType["props"];


