# Tailwind Buddy: Your Friendly Helper for Composing Tailwind Classes 🎨

You are at the good place if you are looking for:
- The Fastest tailwind variant utilty that you can ask [our benchmarks](./packages/benchmark/README.md) or [see here](#benchmarks)
- Building tailwind variant components powered by tailwind
- Wants to handle variants props responsivness
- Ease of use (We try to find the good balance between developer experience who will build the library and the ones who will use your ui library)
- Compound variants that works with responsivness (Compound can base their classes overrides based on variants values but also other random props you give)
- Framework agnostic (Even if we have build the library base on react it will works nicely with other frameworks)
- SSR friendly (we do generate the necessary classes you need both responsive and not)
- Want to be able to use slots (Sometimes you want to be able to cut down your component into smaller piece but want to use the same props)
- A package actively maintained as its used by our company to power our new design system

This library is opinonated inspired by [CVA](https://cva.style/docs) and [tailwind-variants](https://github.com/nextui-org/tailwind-variants). 

## Minimum setup  (no responsive values, no compounds)

### Vscode settings for tailwind auto complete

We do have experimented few path to have auto complete and we still looking for a better way. But for now we suggest you to setup your vscode settings like this.

`.vscode/settings.json`

```json
{
  "editor.quickSuggestions": {
    "strings": "on"
  },
  "css.validate": false,
  "editor.inlineSuggest.enabled": true,
  "tailwindCSS.classAttributes": [
    "class",
    "className",
    ".*Styles.",
    ".*Classes."
  ],
  "tailwindCSS.experimental.classRegex": [
    "@tw\\s\\*\/\\s+[\"'`]([^\"'`]*)"
  ]
}
```

The important part is `tailwindCSS.experimental.classRegex` that will autocomplete the string when you put `/** @tw */` in front. You will see in the label example how we do use it.

### Installation

```
pnpm add @busbud/tailwind-buddy
```

### Create your first component

Component typing:

``` tsx
export interface LabelBaseProps
  extends React.HTMLAttributes<HTMLBaseElement> {
  as?: React.ElementType;
  disabled?: boolean;
}
```

Component variant definition

``` tsx
import { compose } from "@busbud/tailwind-buddy"
import { LabelBaseProps } from "./Label.types"
import type { VariantsProps } from "@busbud/tailwind-buddy"

export const labelVariants = compose({
    "slots": { // you will always have at least the root slot to define
        "root": /** @tw */ "text-blue-500" // We do use /** @tw */ to be able to have auto complete from tailwind
    },
    "variants": {
        "size": {
            "small": /** @tw */ "text-xs",
            "large": /** @tw */ "text-7xl"
        },
        "fontWeight": {
            xxl: {
                "root": /** @tw */ "font-extrabold"
            }
        }
    },
    "defaultVariants": { // all variants should have a default values
        "size": "small",
        "fontWeight": "xxl"
    }
})<LabelBaseProps>()

export type LabelProps = VariantsProps<typeof labelVariants>
```

And that's it. The key take aways here are:
- You need at least on slot root
- You need to define every default variants
- We do have auto complete using special comments `/** @tw */`

If you want to benefits to the maximum we suggest you to use [tailwind merge](#adding-tailwind-merge-to-minify-the-string-generated)

## Adding tailwind merge to minify the string generated

Our package do not take care of giving you the smaller possible string. As `tailwind merge` is probably the best one you can find to handle this. We didn't wanted to create another one. 

We choose to not expose it from our package in case as for us you also wants to use tailwind merge outside of the design system itself but wants to control one version of it. With that you don't have to manage two versions of the same package.

### Install tailwind merge

`pnpm add tailwind-merge`

now you can use it in two ways

1) without updating tailwind merge

```tsx
import React from "react";

import { PropsWithChildren } from "react";
import { LabelProps, labelVariants } from "./Label.variants";
import { twMerge } from "tailwind-merge"

export const Label: React.FC<PropsWithChildren<LabelProps>> = ({
  as: Component = "span",
  className,
  children,
  fontWeight,
  size,
  disabled,
  ...restProps
}) => {
  const { root } = labelVariants

  return (
    <Component
      className={twMerge(root({
        fontWeight,
        size,
        className,
        disabled
      }))}
      {...restProps}
    >
      {children}
    </Component>
  );
};
```

2) By extending the default tailwind merge 

```tsx
import {extendTailwindMerge} from "tailwind-merge";

export const COMMON_UNITS = ["small", "medium", "large"];

export const twMergeConfig = {
    theme: {
      opacity: ["disabled"],
      spacing: [
        "divider",
        "unit",
      ],
      borderWidth: COMMON_UNITS,
      borderRadius: COMMON_UNITS,
    },
    classGroups: {
      shadow: [{shadow: COMMON_UNITS}],
      "font-size": [{text: ["tiny", ...COMMON_UNITS]}],
      "bg-image": ["bg-stripe-gradient"],
      "min-w": [
        {
          "min-w": ["unit", "unit-2", "unit-4", "unit-6", "unit-8", "unit-10", "unit-12", "unit-14"],
        },
      ],
    },
};
export const twMerge = extendTailwindMerge(twMergeConfig);
```

Then use it as the first example but instead of importing from `tailwind-merge` you would import from this file.

## Working with slots

## Working with compound variants

## Working with responsive Variants

## local development

## Contributing

## Benchmarks

TCA is our lib.

![](./packages/benchmark/benchmarks.png)