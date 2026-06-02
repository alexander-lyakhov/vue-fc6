<template>
  <slot v-bind="movies"></slot>
</template>

<script setup lang="ts">
  // @@@ @js@
  import { reactive, onMounted } from 'vue';
  import useMovies                    from '@/composable/use-movies'

  const movies = reactive(useMovies())

  /***
  **** @@@ Hooks
  ***/
  onMounted(movies.getData)
</script>
