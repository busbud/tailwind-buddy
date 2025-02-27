<script setup lang="ts">
import CustomButton from "./components/Button/CustomButton.vue"
</script>

<template>
    <CustomButton appearance="primary" :size="{
      'initial': 'xs',
      'md': 'lg'
    }">Hello world</CustomButton>
</template>