---
editLink: true
---

# Handle responsivness to avoid flickering of the ui

It can happen for example typo components where you want to le the user to change the size of the font himself base of screen size.

> [!NOTE]
> This should not be use extensively as you will see we will use generateSafelist that force all css classes combinations for the variant and also compoundVariants into tailwind so it is aware of their existence.

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
