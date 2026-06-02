<template>
  <li class="list-item detailed" :key="item.id">
    <a href="#">
      <span class="line1">{{ item.title }}</span>
      <span class="line2">{{ item.genre.replace(/|/g, ', ') }}</span>
    </a>
  </li>
</template>

<script setup lang="ts">
  import type { Movie } from '@/types'
  const props = defineProps<{ item: Movie }>();
</script>
