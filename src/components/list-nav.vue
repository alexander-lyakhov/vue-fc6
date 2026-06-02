<template>
  <div class="list-nav">
    <selector v-bind="$attrs" v-slot="{ isSelected, toggleSelect }">
      <div ref="list-nav" class="list-nav__menu">
        <span
          v-for="(item, index) in options" :key="index"
          :class="{selected: isSelected(index)}"
          @click="toggleSelect(index)"
        >
          {{ item.title }}
        </span>
      </div>
    </selector>
  </div>
</template>

<script setup lang="ts">
  import selector          from '@/components/selector.vue'
  import type { ListType } from '@/defs'

  const props = defineProps<{
    options: ListType[]
  }>();
</script>
