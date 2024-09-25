---
title: Tailwind buddy responsive variants
editLink: true
---

# Responsive Variants

**IMPORTANT**: If you are not using any responsive variants you can just not use all this configuration.

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
      className={root({
        intent: "primary",
        size: large,
      })}
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
