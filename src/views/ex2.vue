<template>
  <list :items="movies.data" :is-loading="movies.isLoading">
    <template #list-title>
      {{ title }}
    </template>

    <template #list-header>
      <list-nav v-model="selectedListTypeIndex" :options="listTypes" />
    </template>

    <template #list-body="{ item }">
      <component :is="view" :item="item" />
    </template>

    <template #list-footer>
      <list-paging v-model="movies.paginationParams" @update:modelValue="movies.getData" />
    </template>
  </list>
</template>

<script setup lang="ts">
  // @@@ @js@
  import { ref, reactive, computed, onMounted, type Component } from 'vue';
  import list                                                   from '@/components/list.vue'
  import ListNav                                                from '@/components/list-nav.vue'
  import ListPaging                                             from '@/components/list-paging.vue'
  import ListItemSimple                                         from '@/components/list-item-simple.vue'
  import ListItemDetailed                                       from '@/components/list-item-detailed.vue'
  import useMovies                                              from '@/composable/use-movies'
  import { listTypes, type ListType }                           from '@/defs'

  // @@@ data definition
  //--------------------------------------------------------------------------
  const movies = reactive(useMovies())

  const views: Record<string, Component> = {
    'list-item-simple':   ListItemSimple,
    'list-item-detailed': ListItemDetailed,
  }
  const selectedListTypeIndex = ref<number>(0)
  //--------------------------------------------------------------------------
  // end of data definition

  /***
  **** @@@ Hooks
  ***/
  onMounted(movies.getData)

  /***
  **** @@@ Computed
  ***/
  const view  = computed(() => views[`list-item-${(listTypes[selectedListTypeIndex.value] as ListType).value}`])
  const title = computed(() => `${(listTypes[selectedListTypeIndex.value] as ListType).title}`)
</script>

<style lang="scss" scoped>
/* @@@ @SCSS@ */
</style>
