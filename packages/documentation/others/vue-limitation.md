---
editLink: true
---

# A known limitation with VueJS and Vite


You can check any time inside our `packages/vuelib-tailwind4` or `packages/vuelib` how it is used.

The only difference with React is how Vite + Vue extract the types. The definition stays the same

But inside the component when you define the props, we need to manually extract the variants. Check `packages/vuelib/src/components/Button/Button.variants.ts` for more details

```vue
<template>
    <button :class="cn(root({
      appearance,
      isDisabled,
      size,
      variant
    }))">
      <slot />
    </button>
  </template>
  
<script setup lang="ts">
import { cn } from '../../lib/utils';
import { buttonVariants, type ButtonProps } from './Button.variants';
      
const { slots: { root } } = buttonVariants;
defineProps<{ // [!code focus]
  appearance?: ButtonProps['appearance']; // [!code focus]
  size?: ButtonProps['size']; // [!code focus]
  variant?: ButtonProps['variant']; // [!code focus]
} & ButtonBaseProps>(); // [!code focus]
</script>

```

