<template>
  <li class="list-item simple" :key="item.id">
    <a href="#">{{ item.title }}</a>
  </li>
</template>

<script setup lang="ts">
  // @@@ @js@
  import type { Movie } from '@/types'
  const props = defineProps<{ item: Movie }>();
</script>

<style lang="scss" scoped>
/* @@@ @SCSS@ */
</style>
