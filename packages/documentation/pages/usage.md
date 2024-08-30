---
title: Tailwind buddy usage
editLink: true
---

# Usage

Let's create a button component with two variants, featuring different background colors on mobile and desktop.

```tsx
import { compose } from "../tailwind-buddy-interface.ts";
import type { VariantsProps } from "@busbud/tailwind-buddy";

interface ButtonBaseProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: React.ElementType;
}

export const buttonVariants = compose({
  slots: {
    root: "px-4 py-2 rounded",
  },
  variants: {
    intent: {
      primary: "bg-blue-500 text-white",
      secondary: "bg-gray-200 text-black",
    },
    size: {
      small: "text-sm",
      large: "text-lg",
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "small",
  },
  responsiveVariants: ["intent"],
})<ButtonBaseProps>();

export type ButtonProps = VariantsProps<typeof buttonVariants>;

// Usage in a React component
import { twMerge } from "tailwind-merge";

export const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  as: Component = "button",
  intent,
  size,
  className,
  children,
  ...restProps
}) => {
  const { root } = buttonVariants;

  return (
    <Component
      className={twMerge(
        root({
          intent: {
            initial: "primary",
            md: "secondary",
          },
          size,
          className,
        })
      )}
      {...restProps}
    >
      {children}
    </Component>
  );
};
```

In this example, we've created a button component with `intent` and `size` variants. The `intent` variant is responsive, changing from `primary` on mobile to `secondary` on desktop.
