---
title: Tailwind buddy working with slots
editLink: true
---

# Working with Slots

Slots allow you to break down components into smaller parts while using the same props. Here's an example:

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
    <div className={root({ size: "large" })}>
      <div className={header({ size: "large" })}>header</div>
      <div className={body()}>body</div>
    </div>
  );
};
```
