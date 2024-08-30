---
title: Tailwind buddy performance
editLink: true
---

# extraPerformanceDisabled

We do not support writing a variant definition using template string. You can enable it by updating your setupCompose:

```ts
export const compose = setupCompose<Screens>(screens, {
  extraPerformanceDisabled: true,
});
```

::: danger
Take in consideration that this is going to drop the performance hard check the benchmarks for more information.
:::
