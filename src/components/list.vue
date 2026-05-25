<template>
  <div class="list" :class="{'is-loading': isLoading}">
    <div class="list-title" v-if="$slots['list-title']">
      <slot name="list-title" />
    </div>

    <slot name="list-header" />

    <ul class="list-body">
      <template v-for="item in items">
        <slot name="list-body" v-bind:item="item" />
      </template>
    </ul>

    <slot name="list-footer" />
  </div>
</template>

<script setup lang="ts">
  import type { Movie } from '@/types'

  const props = defineProps<{
    title?:    string;
    items:     Movie[] | null;
    isLoading: boolean;
  }>()
</script>
