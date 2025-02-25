---
editLink: true
---

# Migrate from  Migratiom from 2.4.2 to 3.0.0

## Component configuration

### Previously

```ts [tailwind-buddy-interface.ts]
import { setupCompose } from "@busbud/tailwind-buddy";
import { twMerge } from "tailwind-merge";

export type Screens = "sm" | "md";
export const screens: Screens[] = ["sm", "md"];
export const compose = setupCompose<Screens>(screens, twMerge);

```

```ts [component.ts]
import { compose } from "../tailwind-buddy-interface";
import React from "react";
import { VariantsProps } from "@busbud/tailwind-buddy";

interface OtherProps {
    isDisabled?: boolean
}

export const fooVariants = compose({
  slots: {
    root: "group w-full"
  },
  defaultVariants: {},
})<OtherProps>();

export const Dumb: React.FC<any> = () => {
  const { root } = fooVariants;
  return <div className={root()}>Hello</div>;
};

export type FooProps = VariantsProps<typeof fooVariants> &
  OtherProps;

```

### Now

> [!NOTE]
> No more arrray of string to write the classes


```ts [tailwind-buddy-interface.ts]
export type Screens = "sm" | "md";
export const screens: Screens[] = ["sm", "md"];

```

```ts [component.ts]
import React from "react";
import { VariantsProps, compose } from "@busbud/tailwind-buddy";

type ComposeType = {
    slots: ["root"],
    variants: {}
    props: {
        isDisabled?: boolean
    },
    screens: []
}

export const fooVariants = compose<ComposeType>({
  slots: {
    root: "group w-full"
  },
  defaultVariants: {},
});

export const Dumb: React.FC<any> = () => {
  const { slots: { root } } = fooVariants;
  return <div className={root()}>Hello</div>;
};

export type FooProps = VariantProps<ComposeType["variants"]> & ComposeType["props"];

```

## Compound Variants classes key

### Previously

We we using class

```ts
compoundVariants: [
    {
      "class": {
        "root": "bg-red-500",
      },
      "conditions": {
        "isDisabled": false,
        "size": "sm",
      }
    }
]
```

### Now


```ts
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
]
```

## generateSafelist

### Previously

We didn't had to add the screens as it was passed from the setupCompose

```ts
import { screens } from "./src/tailwind-buddy-interface";
import { buttonVariants } from "./src/components/Button/Button.variants";
import { labelVariants } from "./src/components/Label/Label.variants";
import { generateSafeList } from "@busbud/tailwind-buddy";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: screens,
    },
  },
  safelist: generateSafeList([labelVariants, buttonVariants]),
};
```

### Now

Now we need to be eplicit here and also inside the component type alias explicitly say what is available. you will generally use the same type defined 

```ts
import { screens } from "./src/tailwind-buddy-interface";
import { buttonVariants } from "./src/components/Button/Button.variants";
import { labelVariants } from "./src/components/Label/Label.variants";
import { generateSafeList } from "@busbud/tailwind-buddy";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: screens,
    },
  },
  safelist: generateSafeList([labelVariants, buttonVariants], screens),
};

```