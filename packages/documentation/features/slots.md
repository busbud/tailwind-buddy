---
editLink: true
---

# Split your component into smaller parts

Lets say we want a label where its design react base on parent configuration.

```ts [Simple.variants.ts].{4,12-13}
import { compose, VariantProps } from "@busbud/tailwind-buddy";

type ComposeType = {
  "slots": ["root", "label"], // [!code focus]
  variants: {},
  props: {},
  screens: []
}

export const simpleVariants = compose<ComposeType>({
    slots: {
        "root": /** @tw */ "p-4", // [!code focus]
        "label": "text-red-500" // [!code focus]
    },
    variants: {},
    defaultVariants: {}
})

// export type so we can use it in the component after
export type SimpleProps = VariantProps<ComposeType["variants"]> & ComposeType["props"];

```

```ts [Simple.tsx] .{4,7}
import { simpleVariants, SimpleProps } from "./Simple.variants.ts"

export const Simple: React.FC<SimpleProps> = (props) => {
  const { slots: { root, label } } = simpleVariants;// [!code focus]
  return (
    <div className={root()}>
        <div className={label()}> // [!code focus]
            Hello // [!code focus]
        </div> // [!code focus]
    </div>
  );
};
```
