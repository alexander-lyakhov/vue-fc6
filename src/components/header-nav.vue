<template>
  <selector v-bind="$attrs" v-slot="{ isSelected, toggleSelect }">
    <ul class="steps noselect">
      <li
        v-for="(item, index) in options" :key="index"
        :class="{selected: isSelected(index)}"
        @click="toggleSelect(index)"
      >
        {{ item.title}}
      </li>
    </ul>
  </selector>
</template>

<script setup lang="ts">
  // @@@ @js@
  import selector      from '@/components/selector.vue'
  import type { Page } from '@/defs';

  const props = defineProps<{options: Page[]}>();
</script>

<style lang="scss" scoped>
/* @@@ @SCSS@ */
</style>
