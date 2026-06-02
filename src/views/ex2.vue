<template>
  <list :items="movies.data" :is-loading="movies.isLoading">
    <template #list-title>
      {{ view.title }}
    </template>

    <template #list-header>
      <list-nav v-model="view.selectedListTypeIndex" :options="listTypes" />
    </template>

    <template #list-body="{ item }">
      <component :is="view.component" :item="item" />
    </template>

    <template #list-footer>
      <list-paging
        v-model="movies.paginationParams"
        @update:modelValue="movies.getData"
      />
    </template>
  </list>
</template>

<script setup lang="ts">
  // @@@ @js@
  import { reactive, onMounted } from 'vue';
  import list                    from '@/components/list.vue'
  import ListNav                 from '@/components/list-nav.vue'
  import ListPaging              from '@/components/list-paging.vue'
  import useMovies               from '@/composable/use-movies'
  import useView                 from '@/composable/use-view'
  import { listTypes }           from '@/defs'

  // @@@ data definition
  //--------------------------------------------------------------------------
  const movies = reactive(useMovies())
  const view = reactive(useView())

  /***
  **** @@@ Hooks
  ***/
  onMounted(movies.getData)
</script>
