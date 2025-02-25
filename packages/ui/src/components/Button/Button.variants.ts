import { compose, VariantProps } from "@busbud/tailwind-buddy";
import { ReactNode } from "react";

type ComposeType = {
  "slots": ["root", "label", "icon"],
  variants: {
    appearance: ["default", "primary", "destructive"],
    size: ["xs", "sm", "md"],
    variant: ["contained", "text"]
  },
  props: {
    isDisabled?: boolean,
    children?: ReactNode,
    className?: string,
    iconEnd?: ReactNode,
    iconStart?: ReactNode,
  },
  screens: []
}

export const buttonVariants = compose<ComposeType>({
  slots: {
    root: /** @tw */ "bg-red-500 border rounded-full px-4 py-2",
    label: "bg-red-500",
    icon: "bg-red-500",
  },
  variants: {
    "appearance": {
      "destructive": "bg-red-500",
      "default": "bg-black-500",
      "primary": "bg-blue-500",
    },
    "size": {
      "md": "",
      "sm": "",
      "xs": ""
    },
    variant: {
      "contained": "",
      "text": ""
    }
  },
  compoundVariants: [
    {
      "classes": {
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

// Combine variants and props into a single type for components
export type ButtonProps = VariantProps<ComposeType["variants"]> & ComposeType["props"];

