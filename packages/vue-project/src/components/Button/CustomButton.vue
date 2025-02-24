<template>
    <button>
        <slot />
    </button>
</template>

<script setup lang="ts">
import { buttonVariants, type ButtonProps } from './Button.variants';
    
const props = defineProps<ButtonProps>()

const { slots: { root } } = buttonVariants

console.log(root(props))

</script>