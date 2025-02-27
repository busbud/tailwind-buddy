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
defineProps<{
    appearance?: ButtonProps['appearance'];
    size?: ButtonProps['size'];
    variant?: ButtonProps['variant'];
    isDisabled?: ButtonProps["isDisabled"];
  }>();
  </script>