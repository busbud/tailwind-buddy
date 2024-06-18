# Tailwind Buddy: Your Friendly Helper for Composing Tailwind Classes 🎨

Welcome! If you are looking for:

- The fastest Tailwind variant utility, as demonstrated in [our benchmarks](../benchmark/README.md) or [see here](#benchmarks)
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

## className override

Here the example

```tsx
<div className={twMerge(root({
  fontWeight,
  size,
  className,
  disabled
}))}>
  Root element
</div>
```

You will see here the `className` we pass here. This property will always be place at the end of the string. In terms of pure css and selectors this has no impact but whats matter its where its positionned in your css.

Tailwind is taking the order in count when creating its css. So we have decided to put className as a the latest override. We will explain in the next point how overrides are working with "How classes string is built"

## How classes string is built

Basically what you need to remember is this order:

- slot values define in slots object
- variants definition if no props passed for a variant it will take the default variant value (take not that the order of variant is not reliable)
- if responsive variants responsive defintion
- compound variants
- You will see later but for specific use case you may have compound responsive
- className override

If we have to create a mental class string it would be:

`slot-class variant-class md:variant-class compound-classes md:compound-classes className`

## Working with slots

Lets take our latest example and add one other slot.

```ts
export const labelVariants = compose({
    "slots": { 
        "root": /** @tw */ "text-blue-500",
        "otherSlot": /** @tw */ "text-blue-500" // here our new slot
    },
    "variants": {
        "size": {
            "small": /** @tw */ "text-xs",
            "large": {
              root: /** @tw */ "text-7xl",
              otherSlot: /** @tw */ "text-12xl"
            }
        },
        "fontWeight": {
            xxl: {
                "root": /** @tw */ "font-extrabold"
            }
        }
    },
    "defaultVariants": {
        "size": "small",
        "fontWeight": "xxl"
    }
})<LabelBaseProps>()
```

And lets update the usage

```tsx

const { root, otherSlot } = labelVariants

  return (
    <>
      <div className={twMerge(root({
        fontWeight,
        size,
        className,
        disabled
      }))}>
        Root element
      </div>
      <div className={twMerge(otherSlot({
        fontWeight,
        size,
        className,
        disabled
      }))}>
        Other slot
      </div>
    </>
  );
```

As you see its really easy to add and compose with slots as by default you will always have a root slot.

## Working with compound variants

Compound variant are conditions to apply when you have multiple variant values. But you can also pass any values you want. 

Note that for compound variants as its an array we do apply the classes in the same order in the array.

```ts
export const labelVariants = compose({
    "slots": { 
        "root": /** @tw */ "text-blue-500",
        "otherSlot": /** @tw */ "text-blue-500" // here our new slot
    },
    "variants": {
        "size": {
            "small": /** @tw */ "text-xs",
            "large": {
              root: /** @tw */ "text-7xl",
              otherSlot: /** @tw */ "text-12xl"
            }
        },
        "fontWeight": {
            xxl: {
                "root": /** @tw */ "font-extrabold"
            }
        }
    },
    "defaultVariants": {
        "size": "small",
        "fontWeight": "xxl"
    },
    "compoundVariants": [
      {
        "conditions": {
          "size": "large",
        },
        "class": /** @tw */ "bg-red-500 text-blue-500" // as soon as size is large it will apply this to all the slots
      },
      {
        "conditions": {
          fontWeight: "xxl",
          size: "small"
        },
        class: {
          otherSlot: /** @tw */ "bg-gray-500 border-red-500" // as soon as conditions are met it will apply this to only otherSlot
        }
      }
    ]
})<LabelBaseProps>()
```
By default if you do not pass `<LabelBaseProps>`  you will have only auto complete on the variant property when using the slot function

```tsx
<div className={twMerge(otherSlot({
  fontWeight,
  size,
  className
}))}>
```

If you want to have other props that are not variants you need to add the `<LabelBaseProps>` to be able to have the auto complete and not have typescript error.

```tsx
<div className={twMerge(otherSlot({
  fontWeight,
  size,
  className,
  disabled // the other props
}))}>
```

Note: We have an existing issue when you are creating conditions the other props are not auto complete, only variants are. But you won't have typescript issues as it accept any other key: string / boolean

## Working with responsive Variants

First you need to understand why we do have this feature. in SSR (server side rendering) when you render the page
to the user, you technically don't know the page of the user. And lets say you do mobile first. You can endup with some screen flickering if you do css in js.

To solve that we have added this feature that will generate the good tailwind responsive values base on what you want.

### Enable responsive

Before looking at usage, you will need to add two things:

1) add responsiveVariant definition

```ts
export const labelVariants = compose({
    "slots": { 
        "root": /** @tw */ "text-blue-500",
        "otherSlot": /** @tw */ "text-blue-500" // here our new slot
    },
    "variants": {
        "size": {
            "small": /** @tw */ "text-xs",
            "large": {
              root: /** @tw */ "text-7xl",
              otherSlot: /** @tw */ "text-12xl"
            }
        },
        "fontWeight": {
            xxl: {
                "root": /** @tw */ "font-extrabold"
            }
        }
    },
    "defaultVariants": {
        "size": "small",
        "fontWeight": "xxl"
    },
    "responsiveVariants": ["size"]
})<LabelBaseProps>()
```

this is important you add responsiveVariants so we will be able to generate tailwind classes.

2) Update tailwind config to have safeList

Safelist in tailwind is a way to force tailwind to add the classes we need to be able to handle responsivness. As tailwind is doing static analysis to add the classes to the output or not. In our case we will not have those available in the code so we need to add them via safeList options:

```ts

export const screens: Screens[] = ["sm", "md", "lg", "xl"]

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens
    }
  },
  safelist: generateSafeList([labelVariants], screens) // import your variant definition the generateSafeList is taking care of the rest
};
```

Note: that we have added a screens property here. Make sure to add it here also. We have an on going issue to make the screens overridable in typescript and also in the config. Adding inside the config is easy but we do not have typescript auto complete working yet. So for now please use the default tailwind screen definition

3) Simple Usage

Now everything is defined and you understand how it works lets see the usage:

```ts
root({
  "size": {
      "initial": "small", // this is mandatory to have an intiial option to respect mobile first approach
      "md": "large"
  },
  "fontWeight": "xxl" // this would not accept a responsive value as you didnt' define it in the responsiveVariants array
})
```

With our latest definition

```ts
"slots": { 
  "root": /** @tw */ "text-blue-500",
  "otherSlot": /** @tw */ "text-blue-500" // here our new slot
},
"variants": {
    "size": {
        "small": /** @tw */ "text-xs",
        "large": {
          root: /** @tw */ "text-7xl",
          otherSlot: /** @tw */ "text-12xl"
        }
    },
    "fontWeight": {
        xxl: {
            "root": /** @tw */ "font-extrabold"
        }
    }
},
"defaultVariants": {
  "size": "small",
  "fontWeight": "xxl"
},
"responsiveVariants": ["size"]
```

This would produce a class string like

`text-blue-500 text-xs md:text-7xl font-extrabold`

As you see we do regroup the responsive values right after their initial values.

4) Complex usage 1. How one responsive work with Compound

here our definition with compound

```ts
"slots": { 
  "root": /** @tw */ "text-blue-500",
  "otherSlot": /** @tw */ "text-blue-500" // here our new slot
},
"variants": {
    "size": {
        "small": /** @tw */ "text-xs",
        "large": {
          root: /** @tw */ "text-7xl",
          otherSlot: /** @tw */ "text-12xl"
        }
    },
    "fontWeight": {
        xxl: {
            "root": /** @tw */ "font-extrabold"
        }
    }
},
"defaultVariants": {
  "size": "small",
  "fontWeight": "xxl"
},
"responsiveVariants": ["size"],
"compoundVariants": [
    {
      "conditions": {
        "size": "large",
      },
      "class": /** @tw */ "bg-red-500 text-blue-500"
    },
    {
      "conditions": {
        fontWeight: "xxl",
        size: "small"
      },
      class: /** @tw */ "bg-gray-500 border-red-500"
    }
]
```

When we do have responsive props what we would do generally is creating an object to all breakpoints you have defined.

Fill the values with their initial values if there is no other responsive props.

So in our use case

```ts
root({
  "size": {
      "initial": "small", // this is mandatory to have an intiial option to respect mobile first approach
      "md": "large"
  },
  "fontWeight": "xxl", // this would not accept a responsive value as you didnt' define it in the responsiveVariants array,
  className: "awesome-class"
})
```

would become

`text-blue-500 text-xs md:text-7xl md:bg-red-500 md:text-blue-500 bg-gray-500 border-red-500 awesome-class`

5) Complex usage 2. How multiple responsive work with Compound

here our definition with compound

```ts
"slots": { 
  "root": /** @tw */ "text-blue-500",
  "otherSlot": /** @tw */ "text-blue-500"
},
"variants": {
    "size": {
        "small": /** @tw */ "text-xs",
        "large": {
          root: /** @tw */ "text-7xl",
          otherSlot: /** @tw */ "text-12xl"
        }
    },
    "fontWeight": {
        md: /** @tw */ "super-small"
        xxl: {
            "root": /** @tw */ "font-extrabold"
        },
    }
},
"defaultVariants": {
  "size": "small",
  "fontWeight": "xxl"
},
"responsiveVariants": ["size", "fontWeight"], // note we have added also the fontWeight here
"compoundVariants": [
    {
      "conditions": {
        "size": "large",
      },
      "class": /** @tw */ "bg-red-500 text-blue-500"
    },
    {
      "conditions": {
        fontWeight: "xxl",
        size: "small"
      },
      class: /** @tw */ "bg-gray-500 border-red-500"
    }
]
```

Usage:

```ts
root({
  "size": {
      "initial": "small", // this is mandatory to have an intiial option to respect mobile first approach
      "md": "large"
  },
  "fontWeight": {
    "initial": "md",
    "md": "xxl",
  }, // this would not accept a responsive value as you didnt' define it in the responsiveVariants array,
  className: "awesome-class"
})
```

Before we show the ouput you need to understand how we will operate here. 

We do check if the conditions are met at the same breakpoint. If yes we put the breakpoint in front otherwise we do nothing.

So to the conditions to met we would need here conditions with

`size = large & fontWeight = md` or `size = large & fontWeight xxl`

here our conditions

```ts
{
  "conditions": {
    "size": "large",
    // as the fontWeight not defined here. we will take the initial
  },
  "class": /** @tw */ "bg-red-500 text-blue-500"
},
{
  "conditions": {
    fontWeight: "xxl",
    size: "large"
  },
  class: /** @tw */ "bg-gray-500 border-red-500"
}
```

Here only the the second condition will met and its a `md` breakpoint.

output

`text-blue-500 text-xs md:text-7xl super-small md:font-extrabold md:bg-gray-500 md:border-red-500 awesome-class`

## local development

Generally this is the way you will want to work

Make sure install pnpm if you don't have it `npm i -g pnpm`

at root folder:
- `nvm use`
- `pnpm install`

going to core folder

- `pnpm build -w`
- if you want to work with only unit tests. `pnpm test:unit`

if you want to work with a "real world example"

go to `ui` folder:
- `pnpm install`
- `pnpm build -w`

And if you want to see a usage of the lib consuming `tailwind-buddy`

go to `sandbox` folder:
- `pnpm install`
- `pnpm dev`


## Contributing

First easy contribution would be to help on improving the documentation.

After that make sure to look at [good first issue label on github.](https://github.com/busbud/tailwind-buddy/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22)

## Benchmarks

TCA is our lib.

![](../benchmark/benchmarks.png)