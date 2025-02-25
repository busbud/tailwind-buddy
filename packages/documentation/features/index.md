---
editLink: true
---

# Create a Basic component

```ts [Simple.variants.ts]
import { compose, VariantProps } from "@busbud/tailwind-buddy";

type ComposeType = {
  "slots": ["root"],
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

```ts [Simple.tsx]
import { simpleVariants, SimpleProps } from "./Simple.variants.ts"

export const Simple: React.FC<SimpleProps> = (props) => {
  const { slots: { root } } = simpleVariants;
  return (
    <div className={root({
        variant: props.variant
    })}>
    Hello</div>
  );
};
```