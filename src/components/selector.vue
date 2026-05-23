<template>
  <slot v-bind="{ toggleSelect, isSelected }"></slot>
</template>

<script setup lang="ts">
  // @@@ @js@
  const emit = defineEmits<{
    change: [value: number]
  }>()
  const model = defineModel<number>()

  function isSelected(index = -1) {
    return model.value === index
  }

  function toggleSelect(value: number) {
    model.value = value;
    emit('change', value)
  }
</script>

<style lang="scss" scoped>
/* @@@ @SCSS@ */
</style>
