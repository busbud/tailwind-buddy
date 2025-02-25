---
editLink: true
---

# Usage of custom screens

If you want to have custom screens with tailwind Create a `tailwind-buddy-interface.ts`.  

::: code-group

```ts [tailwind-buddy-interface.ts]
export type Screens = "sm" | "md";
export const screens: Screens[] = ["sm", "md"];
```

:::

Then update your `tailwind config` with those screens and where we demonstrate a simple component with the generic type screens add it here.


```ts [Simple.variants.ts] .{11}
import { compose, VariantProps } from "@busbud/tailwind-buddy";
import { Screens } from "tailwind-buddy-interface.ts" 

type ComposeType = {
  "slots": ["root"],
  variants: {
    variant: ["red", "blue"]
  },
  props: {
    isDisabled: boolean,
  },
  screens: Screens // [!code focus]
}

export const simpleVariants = compose<ComposeType>({
    slots: {
        "root": /** @tw */ "p-4"
    },
    variants: {
        variant: {
            "red": "bg-red-500",
            "blue": "bg-blue-500"
        }
    },
    defaultVariants: {
        variant: "red"
    }
})

// export type so we can use it in the component after
export type SimpleProps = VariantProps<ComposeType["variants"]> & ComposeType["props"];

```