---
title: Tailwind buddy compound variants
editLink: true
---

# Compound Variants

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
      class: ["font-bold"],
    },
  ],
})();
```
