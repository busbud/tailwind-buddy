---
editLink: true
---

# Handle responsivness to avoid flickering of the ui

For our typography components, we want to allow the user to adjust the font size based on the screen size.

> [!NOTE]
> This should not be used excessively. As you'll see, we use [generateSafelist - safelist](https://v3.tailwindcss.com/docs/content-configuration#safelisting-classes), which forces Tailwind to recognize all possible CSS class combinations for variants and compoundVariants, ensuring they are included in the final build.

```ts [Simple.variants.ts].{28-35,49}
import { compose, VariantProps } from "@busbud/tailwind-buddy";

type ComposeType = {
  "slots": ["root", "label"],
  variants: {
    variant: ["red", "blue"],
    size: ["sm", "xl"]
  },
  props: { 
    isDisabled: boolean,
  },
  screens: []
}

export const simpleVariants = compose<ComposeType>({
    slots: {
        "root": /** @tw */ "p-4",
        "label": "text-red-500"
    },
    variants: {
        variant: {
            "red": {
                root: "bg-red-500",
                label: "text-white"
            },
            "blue": "bg-blue-500"
        },
        size: {  // [!code focus]
            "sm": {  // [!code focus]
                label: "text-sm border"  // [!code focus]
            },  // [!code focus]
            "xl": {  // [!code focus]
                label: "text-2xl border-2" // [!code focus]
            } // [!code focus]
        }
    },
    defaultVariants: {
        variant: "red"
    },
    compoundVariants: [
      {
        conditions: {
          isDisabled: true,
          variant: ["blue", "red"] 
        },
        classes: "bg-purple-500"
      }
    ]
    responsiveVariants: ["size"], // [!code focus]
})

// export type so we can use it in the component after
export type SimpleProps = VariantProps<ComposeType["variants"]> & ComposeType["props"];

```

```ts [Simple.tsx] .{12-16}
import { simpleVariants, SimpleProps } from "./Simple.variants.ts"

export const Simple: React.FC<SimpleProps> = (props) => {
  const { slots: { root, label } } = simpleVariants;
  return (
    <div className={root({
        variant: props.variant,
        isDisabled: props.isDisabled || 100 > 0 
    })}>
        <div className={label({
            variant: props.variant,
            size: {  // [!code focus]
                // default value like mobile to up those are tailwind breakpoints  // [!code focus]
                initial: "sm",  // [!code focus]
                "lg": "xl"  // [!code focus]
            } // [!code focus]
        })}>
            Hello
        </div>
    </div>
  );
};
```
