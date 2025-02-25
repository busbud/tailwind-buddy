import { compose } from "@busbud/tailwind-buddy";

type ComposeType = {
  "slots": ["root", "label", "icon"],
  variants: {
    appearance: ["primary"],
    size: ["xs"],
    variant: ["contained"],
  },
  props: {
    isDisabled?: boolean
  },
  screens: []
}

export const buttonVariants = compose<ComposeType>({
  slots: {
    root: "bg-red-500",
    label: "bg-red-500",
    icon: "bg-red-500",
  },
  variants: {
    "appearance" : {
      "primary": "bg-red-500"
    },
    "size": {
      "xs": "w-[100px]"
    },
    "variant": {
      "contained": "h-[100px]"
    }
  },
  compoundVariants: [
    {
      "classes": {
        "root": "bg-red-500",
      },
      "conditions": {
        "isDisabled": false,
        "size": "xs",
      }
    }
  ],
  defaultVariants: {
    "appearance": "primary",
    "size": "xs",
    "variant": "contained"
  }
});

type VariantProps = {
  appearance?: ComposeType["variants"]["appearance"][number];
  size?: ComposeType["variants"]["size"][number];
  variant?: ComposeType["variants"]["variant"][number];
};

export type ButtonProps =  ComposeType["props"] & VariantProps;


