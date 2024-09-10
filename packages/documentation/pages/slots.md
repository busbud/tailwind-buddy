---
title: Tailwind buddy working with slots
editLink: true
---

# Working with Slots

Slots allow you to break down components into smaller parts while using the same props. Here's an example:

::: danger
Do not use template strings to define your classes if you want to support multine please use a combination of array and strings

like

```
[
  "rounded overflow-hidden",
  "p-4",
  "m-4 bg-gray-100"
]
```

:::

```tsx
export const cardVariants = compose({
  slots: {
    root: ["rounded overflow-hidden"],
    header: ["p-4 bg-gray-100"],
    body: ["p-4"],
  },
  variants: {
    size: {
      small: {
        root: ["max-w-sm"],
        header: ["text-sm"],
        body: ["text-base"],
      },
      large: {
        root: ["max-w-lg"],
        header: ["text-lg"],
        body: ["text-xl"],
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
