import { compose, type VariantProps } from "@busbud/tailwind-buddy";

export type Screens = "sm" | "md";
export const screens: Screens[] = ["sm", "md"];

type ComposeType = {
  "slots": ["root", "label", "icon"],
  variants: {
    appearance: ["primary"],
    size: ["xs", "lg"],
    variant: ["contained"],
  },
  props: {
    isDisabled?: boolean
  },
  screens: typeof screens
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
      "xs": "w-[100px]",
      "lg": "w-[400px]",
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
  },
  responsiveVariants: ["size"]
});

export type ButtonProps =  VariantProps<ComposeType["variants"], ComposeType["screens"]> & ComposeType["props"];
