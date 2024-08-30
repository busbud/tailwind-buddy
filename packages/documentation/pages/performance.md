---
title: Tailwind buddy performance
editLink: true
---

# disablePerformance

We do not support writing a variant definition using template string by default. You can enable it by updating your setupCompose:

```ts
export const compose = setupCompose<Screens>(screens, {
  disablePerformance: true,
});
```

::: danger
Take in consideration that this is going to drop the performance hard check the benchmarks for more information.
:::
