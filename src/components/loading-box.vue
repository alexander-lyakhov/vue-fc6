<template>
  <div style="position: relative" :class="{'is-loading': isLoading}">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    isLoading?: boolean;
  }>()
</script>
