---
title: Tailwind buddy setup
editLink: true
---

# Installation

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

## Tailwind merge or similar

You can use any function, such as [tailwind-merge](https://www.npmjs.com/package/tailwind-merge). We recommend using tailwind-merge.

This function takes a string of classes and returns a modified string. The main goal is to merge Tailwind classes to avoid style conflicts.

Example:

```ts
import { twMerge } from "tailwind-merge";

export const compose = setupCompose<Screens>(screens, twMerge);
```
