---
editLink: true
---

# Handle responsivness to avoid flickering of the ui

> [!NOTE]
> This should not be used excessively. As you'll see, we use [safelist](https://v3.tailwindcss.com/docs/content-configuration#safelisting-classes), which forces Tailwind to recognize all possible CSS class combinations for variants and compoundVariants, ensuring they are included in the final build.


Use case: We want to let the user define what size of the button he wants base on the breakpoints.

To use repsonsive variants we will setup things like this:


## Create `tailwind-buddy-interface.ts`

```ts [tailwind-buddy-interface.ts]
export type Screens = "sm" | "md";
export const screens: Screens[] = ["sm", "md"]; // or use tailwind default screns

```

## In your `tailwind.config.ts` Make sure to update the config

```ts [tailwind.config.ts].{10,12}
import { screens } from "./tailwind-buddy-interface";
import { buttonVariants } from "./src/components/Button/Button.variants";
import { labelVariants } from "./src/components/Label/Label.variants";
import { generateSafeList } from "@busbud/tailwind-buddy";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens,  // [!code focus]
  },
  safelist: generateSafeList([labelVariants, buttonVariants], screens),  // [!code focus]
};
```

## Update now your component definition

```ts [Simple.variants.ts].{9,25,28}
import { compose, VariantProps } from "@busbud/tailwind-buddy";

type ComposeType = {
  "slots": ["root"],
  variants: {
    size: ["small", "big"]
  },
  props: {},
  screens: typeof screens // [!code focus]
}

export const simpleVariants = compose<ComposeType>({
    slots: {
        "root": /** @tw */ "p-4"
    },
    variants: {
        size: {
            "small": "w-[400px] h-[200px]",
            "big": "w-[1000px] h-[600px]",
        }
    },
    defaultVariants: {
        variant: "small"
    },
    responsiveVariants: ["size"]  // [!code focus]
})

export type SimpleProps = VariantProps<ComposeType["variants"], ComposeType["screens"]>; // make sure to now pass the screens to the generic type // [!code focus]
``` 

## See usage

```tsx [Simple.tsx] .{12-16}

<div>
  <SimpleComponent size="small" />
  <SimpleComponent size={{
    initial: "sm", // initial should always be defined in this case
    lg: "big" // at the end will generate the string p-4 w-[400px] h-[200px] lg:w-[1000px] lg:h-[600px]
  }} />
</div>

```

## Specificity for TAILWIND 4

We do have a project example using [tailwind v4](../../vuelib-tailwind4/). As you know for now tailwind4 don't plan to support the safelist from tailwind 3. In that case we need to generate the file so
tailwind will know which css classes used.


To achieve that you can use our technic:
- Create `generate-safelist.ts`
```ts [generate-safelist.ts]
import { generateSafeList } from "@busbud/tailwind-buddy";
import { screens, buttonVariants } from "./src/components/Button/Button.variants.js";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const safelist = generateSafeList([buttonVariants], screens);

const fileContent = `// Auto-generated file - DO NOT EDIT
// Generated on: ${new Date().toISOString()}

export default ${JSON.stringify(safelist, null, 2)};
`;

fs.writeFileSync(
  path.resolve(__dirname, 'generated-safelist.ts'),
  fileContent,
  'utf-8'
);

console.log('Safelist generated successfully!');
```
- Update your package json

```json
scripts: {
  "safelist-generation": "node --import=tsx ./safelist-generation.ts",
  "prebuild": "pnpm safelist-generation",
  // ...
}
```

This should achieve the exact same as using the safelist