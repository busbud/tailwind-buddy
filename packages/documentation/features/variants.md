---
editLink: true
---

# Add specific classes base on your different slots

Now, we want to create a variation of the component that affects both the label and the root container.

> [!NOTE]
> As you can see, a variant can take a string, meaning it will apply to all slots. However, you can also define an object with the slot name and value to target specific slots.


> [!IMPORTANT]
> Make sure to include the defaultVariants property so that Tailwind Buddy recognizes the default values.


```ts [Simple.variants.ts].{7,19-24,26-28}
import { compose, VariantProps } from "@busbud/tailwind-buddy";

type ComposeType = {
  "slots": ["root", "label"],
  variants: {
    variant: ["red", "blue"]  // [!code focus]
  },
  props: {},
  screens: []
}

export const simpleVariants = compose<ComposeType>({
    slots: {
        "root": /** @tw */ "p-4",
        "label": "text-red-500"
    },
    variants: {
        variant: {
            "red": { // [!code focus]
                root: "bg-red-500", // [!code focus]
                label: "text-white" // [!code focus]
            }, // [!code focus]
            "blue": "bg-blue-500"  // [!code focus]
        }
    },
    defaultVariants: {  // [!code focus]
        variant: "red"  // [!code focus]
    }  // [!code focus]
})

// export type so we can use it in the component after
export type SimpleProps = VariantProps<ComposeType["variants"]> & ComposeType["props"];

```

```ts [Simple.tsx] .{4,6-11}
import { simpleVariants, SimpleProps } from "./Simple.variants.ts"

export const Simple: React.FC<SimpleProps> = (props) => {
  const { slots: { root, label } } = simpleVariants;// [!code focus]
  return (
    <div className={root({variant: props.variant})}> // [!code focus]
        <div className={label({ variant: props.variant })}> // [!code focus]
            Hello // [!code focus]
        </div> // [!code focus]
    </div>
  );
};
```
