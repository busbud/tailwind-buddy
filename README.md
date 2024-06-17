# Tailwind Buddy: Your Friendly Helper for Composing Tailwind Classes 🎨

Welcome! If you are looking for:

- The fastest Tailwind variant utility, as demonstrated in [our benchmarks](./packages/benchmark/README.md) or [see here](#benchmarks)
- Tools for building Tailwind variant components
- Support for responsive variant props
- Ease of use, balancing developer experience for both library builders and users
- Compound variants that work responsively, overriding classes based on variant values and other props
- Framework-agnostic solutions (works well with frameworks other than React)
- SSR-friendly class generation, both responsive and non-responsive
- The ability to use slots (to break down components into smaller parts while using the same props)
- An actively maintained package used by our company for our new design system
- This library is opinionated and inspired by

This library is opinonated and inspired by [CVA](https://cva.style/docs) and [tailwind-variants](https://github.com/nextui-org/tailwind-variants). 

## Minimum setup  (no responsive values, no compounds)


### Vscode settings for Tailwind Autocomplete

For the best experience, set up your VSCode settings as follows:

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

The key part is `tailwindCSS.experimental.classRegex`, which autocompletes the string when you put `/** @tw */` in front. You will see how we use it in the label example.

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

Key Takeaways:

- You need at least one slot, root.
- You must define default values for all variants.
- We use `/** @tw */` for Tailwind autocomplete.

To maximize benefits, we recommend using [tailwind merge](#adding-tailwind-merge-to-minify-the-string-generated)



## Adding Tailwind Merge to Minify the Generated String

Our package does not optimize the class string size. As tailwind-merge is highly efficient for this purpose, we chose not to create another solution. This allows you to use tailwind-merge outside the design system and manage one version of it.

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