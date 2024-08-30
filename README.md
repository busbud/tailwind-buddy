# Tailwind Buddy: Your Friendly Helper for Composing Tailwind Classes 🎨

## What problem does Tailwind Buddy solve?

Tailwind Buddy addresses common challenges in managing Tailwind classes for complex, responsive designs. It offers a streamlined approach to:

- Organize and compose Tailwind classes for different component variants
- Handle responsive designs with ease, reducing potential screen flickering in SSR applications
- Manage compound variants that work responsively
- Utilize a slot-based system for breaking down components into smaller, manageable parts

## Key Features

- Tools for building Tailwind variant components
- Support for responsive variant props
- Framework-agnostic solutions (works well with frameworks other than React)
- SSR-friendly class generation, both responsive and non-responsive
- Ability to use slots for component composition
- Compound variants that work responsively, overriding classes based on variant values and other props
- High-performance variant utility, as demonstrated in [our benchmarks](./packages/benchmark/README.md)

This library is inspired by [CVA](https://cva.style/docs) and [tailwind-variants](https://github.com/nextui-org/tailwind-variants), offering our unique approach to solving common Tailwind challenges.

## Installation

```bash
pnpm add @busbud/tailwind-buddy
```

## Setup compose function

Tailwind buddy expose a `setupCompose` function. Create a `tailwind-buddy-interface.ts`

```ts
import { setupCompose } from "@busbud/tailwind-buddy";

export type Screens = "sm" | "md";
export const screens: Screens[] = ["sm", "md"];
export const compose = setupCompose<Screens>(screens);
```

## Usage

Let's create a button component with two variants, featuring different background colors on mobile and desktop.

```tsx
import { compose } from "../tailwind-buddy-interface.ts";
import type { VariantsProps } from "@busbud/tailwind-buddy";

interface ButtonBaseProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: React.ElementType;
}

export const buttonVariants = compose({
  slots: {
    root: "px-4 py-2 rounded",
  },
  variants: {
    intent: {
      primary: "bg-blue-500 text-white",
      secondary: "bg-gray-200 text-black",
    },
    size: {
      small: "text-sm",
      large: "text-lg",
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "small",
  },
  responsiveVariants: ["intent"],
})<ButtonBaseProps>();

export type ButtonProps = VariantsProps<typeof buttonVariants>;

// Usage in a React component
import { twMerge } from "tailwind-merge";

export const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  as: Component = "button",
  intent,
  size,
  className,
  children,
  ...restProps
}) => {
  const { root } = buttonVariants;

  return (
    <Component
      className={twMerge(
        root({
          intent: {
            initial: "primary",
            md: "secondary",
          },
          size,
          className,
        })
      )}
      {...restProps}
    >
      {children}
    </Component>
  );
};
```

In this example, we've created a button component with `intent` and `size` variants. The `intent` variant is responsive, changing from `primary` on mobile to `secondary` on desktop.

## Working with Slots

Slots allow you to break down components into smaller parts while using the same props. Here's an example:

```tsx
export const cardVariants = compose({
  slots: {
    root: "rounded overflow-hidden",
    header: "p-4 bg-gray-100",
    body: "p-4",
  },
  variants: {
    size: {
      small: {
        root: "max-w-sm",
        header: "text-sm",
        body: "text-base",
      },
      large: {
        root: "max-w-lg",
        header: "text-lg",
        body: "text-xl",
      },
    },
  },
  defaultVariants: {
    size: "small",
  },
})();

export const Card = () => {
  // Usage
  const { root, header, body } = cardVariants;

  return (
    <div className={twMerge(root({ size: "large" }))}>
      <div className={twMerge(header({ size: "large" }))}>header</div>
      <div className={twMerge(body())}>body</div>
    </div>
  );
};
```

## Compound Variants

Compound variants allow you to apply styles when multiple variant conditions are met:

```tsx
export const buttonVariants = compose({
  // ... previous definitions ...
  compoundVariants: [
    {
      conditions: {
        intent: "primary",
        size: "large",
      },
      class: "font-bold",
    },
  ],
})();
```

## Responsive Variants

To enable responsive variants:

1. Add the variant to the `responsiveVariants` array in your compose function.
2. Update your Tailwind config to include necessary classes in the safelist.

```tsx
// In your variant definition
export const buttonVariants = compose({
  // ... other configurations ...
  responsiveVariants: ["intent"],
})();

// Usage in a React component
import { twMerge } from "tailwind-merge";

// class .font-bold will be applied as the condition is fulfilled.
export const Button: React.FC<{}> = () => {
  const { root } = buttonVariants;

  return (
    <button
      className={twMerge(
        root({
          intent: "primary",
          size: large,
        })
      )}
    >
      Go
    </button>
  );
};

// In your Tailwind config
import { generateSafeList } from "@busbud/tailwind-buddy";
import { buttonVariants } from "./path-to-your-variants";

// As you now Expect responsive for this component make sure to import the buttonVariants
export default {
  // ... other Tailwind configurations ...
  theme: {
    screens: screens, // ["sm", "md"]
  },
  safelist: generateSafeList([buttonVariants]), // those values are required to align with tailwind breakpoints and make them available as in the example above
  //
};
```

## disablePerformance

We do not support writing a variant definition using template string. You can enable it by updating your setupCompose:

```ts
export const compose = setupCompose<Screens>(screens, {
  disablePerformance: true,
});
```

Take in consideration that this is going to drop the performance hard check the benchmarks for more information.

## Tailwind Autocomplete in VSCode (Optional)

For Tailwind class autocomplete in VSCode, add the following to your `.vscode/settings.json`:

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
  "tailwindCSS.experimental.classRegex": ["@tw\\s\\*/\\s+[\"'`]([^\"'`]*)"]
}
```

With this setup, you can use `/** @tw */` before your Tailwind classes to enable autocompletion.

## Local Development

1. Install pnpm: `npm i -g pnpm`
2. In the root folder:
   - `nvm use`
   - `pnpm install`
3. In the `core` folder:
   - `pnpm build -w`
   - For unit tests: `pnpm test:unit`

For a "real world example":

1. In the `ui` folder:
   - `pnpm install`
   - `pnpm build -w`
2. In the `sandbox` folder:
   - `pnpm install`
   - `pnpm dev`

## Contributing

First easy contribution would be to help on improving the documentation.

After that make sure to look at [good first issue label on github.](https://github.com/busbud/tailwind-buddy/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22)

## Benchmarks

![Screenshot 2024-08-30 at 10 20 51 AM](https://github.com/user-attachments/assets/152ca2a5-cc42-4987-adb1-65c052c8cd51)
