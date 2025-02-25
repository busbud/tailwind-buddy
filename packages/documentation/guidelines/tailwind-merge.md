---
title: With tailwind merge
editLink: true
---

# Add Tailwind merge

You can use any function, such as [tailwind-merge](https://www.npmjs.com/package/tailwind-merge). We recommend using tailwind-merge.

This function takes a string of classes and returns a modified string. The main goal is to merge Tailwind classes to avoid style conflicts.

As we just provide a string in a smart order. It is really easy for tailwind merge to merge the functions

```ts 
import { twMerge } from "tailwind-merge";

const { slots: { root } } = buttonVariants

twMerge(root({
    appearance: "primary"
}))
```
