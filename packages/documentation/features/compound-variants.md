---
editLink: true
---

# Go further with Compound Variants

Compound variants are here to help you avoid trees of IF ELSE statements in your code base. Also it can base its conditions base on variants or props you define.


```ts [Simple.variants.ts].{31-41}
import { compose, VariantProps } from "@busbud/tailwind-buddy";

type ComposeType = {
  "slots": ["root", "label"],
  variants: {
    variant: ["red", "blue"]
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
        }
    },
    defaultVariants: {
        variant: "red"
    },
    compoundVariants: [  // [!code focus]
      {  // [!code focus]
        conditions: {  // [!code focus]
          isDisabled: true,  // [!code focus]
          // this can be also just one string value  // [!code focus]
          variant: ["blue", "red"]  // [!code focus] 
        },  // [!code focus]
        // you can as for variants pass an Object of slots value as { root: "bg-purple"}  // [!code focus]
        classes: "bg-purple-500"  // [!code focus]
      }  // [!code focus]
    ]  // [!code focus]
})

// export type so we can use it in the component after
export type SimpleProps = VariantProps<ComposeType["variants"]> & ComposeType["props"];

```

```ts [Simple.tsx] .{7-8}
import { simpleVariants, SimpleProps } from "./Simple.variants.ts"

export const Simple: React.FC<SimpleProps> = (props) => {
  const { slots: { root, label } } = simpleVariants;
  return (
    <div className={root({ // [!code focus]
        variant: props.variant, // [!code focus]
        isDisabled: props.isDisabled || 100 > 0 // [!code focus]
    })}> // [!code focus]
        <div className={label({
            variant: props.variant
        })}>
            Hello
        </div>
    </div>
  );
};
```
