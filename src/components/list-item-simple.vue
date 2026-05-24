<template>
  <li class="list-item simple" :key="props.item.id">
    <a href="#">{{ item.title }}</a>
  </li>
</template>

<script setup lang="ts">
  // @@@ @js@
  import { ref } from 'vue';

  const props = defineProps<{ item: object }>();
</script>

<style lang="scss" scoped>
/* @@@ @SCSS@ */
</style>
