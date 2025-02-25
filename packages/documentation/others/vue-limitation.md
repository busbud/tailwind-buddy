---
editLink: true
---

# A known limitation to VueJS and vite


You can check any time inside our `packages/vue-project` how it is used.

But in comparaison with React we use it like this.

## React

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

## VueJS

There is not much differences but a bit more writing


```ts [Simple.variants.ts] .{1,30-35}
import { compose } from "@busbud/tailwind-buddy"; // [!code focus]

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

// we need to mannually extract the type as vite as a known issue handling poorly this type extraction
type VariantProps = { // [!code focus]
  variant?: ComposeType["variants"]["variant"][number]; // [!code focus]
}; // [!code focus]

// export type so we can use it in the component after
export type SimpleProps = VariantProps & ComposeType["props"]; // [!code focus]

```

