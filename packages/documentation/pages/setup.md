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
