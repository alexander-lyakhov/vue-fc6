<template>
  <pre>{{ selectedListTypeIndex }}</pre>
  <list :items="movies" :is-loading="isLoading">
    <!--
    <template #list-title>
      {{ listTitle }}
    </template>
    -->

    <template #list-header>
      <list-nav v-model="selectedListTypeIndex" :options="listTypes" />
    </template>

    <template #list-body="{ item }">
      <component :is="view" :item="item" />
    </template>

    <template #list-footer>
      <list-paging v-model="paginationParams" />
    </template>
  </list>
</template>

<script setup lang="ts">
  // @@@ @js@
  import { ref, computed, onMounted, type Component } from 'vue';
  import list                                         from '@/components/list.vue'
  import ListNav                                      from '@/components/list-nav.vue'
  import ListPaging                                   from '@/components/list-paging.vue'
  import ListItemSimple                               from '@/components/list-item-simple.vue'
  import ListItemDetailed                             from '@/components/list-item-detailed.vue'
  import { listTypes, type ListType }                                from '@/defs'
  import type {
    Movie,
    ListPagination,
    // ListType
  } from '@/types'

  const props = defineProps<{
  }>();

  // @@@ data definition
  //--------------------------------------------------------------------------
  const views: Record<string, Component> = {
    'list-item-simple':   ListItemSimple,
    'list-item-detailed': ListItemDetailed,
  }

  const isLoading        = ref<boolean>(false)
  const movies           = ref<Movie[] | null>(null)
  const paginationParams = ref<ListPagination>({
    offset: 0,
    limit: 12,
    total: 0
  })
  const selectedListTypeIndex = ref<number>(0)
  //--------------------------------------------------------------------------
  // end of data definition

  /***
  **** @@@ Hooks
  ***/
  onMounted(getData)

  /***
  **** @@@ Computed
  ***/
  const url  = computed(() => `https://my.api.mockaroo.com/movies.json?key=203c6440&offset=${paginationParams.value.offset}`)
  const view = computed(() => views[`list-item-${(listTypes[selectedListTypeIndex.value] as ListType).value}`])

  /***
  **** @@@ Methods
  ***/
  async function getData() {
    isLoading.value = true
    movies.value = await fetch(url.value).then(res => res.json())
    paginationParams.value.total = 128
    isLoading.value = false

    console.log(movies.value)
  }
</script>

<style lang="scss" scoped>
/* @@@ @SCSS@ */
</style>
