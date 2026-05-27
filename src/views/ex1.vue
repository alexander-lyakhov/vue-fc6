﻿<template>
    <section class="list-wrapper">
      <list :items="movies" :is-loading="isLoading">
        <template #list-title>
          Simple list
        </template>

        <template #list-body="{ item }">
          <list-item-simple :item="item" />
        </template>

        <template #list-footer>
          <list-paging
            v-model="paginationParams"
            @update:modelValue="getData"
          />
        </template>
      </list>
    </section>

    <section class="list-wrapper">
      <list :items="movies" :is-loading="isLoading">
        <template #list-title>
          Detailed list
        </template>

        <template #list-body="{ item }">
          <list-item-detailed :item="item" />
        </template>

        <template #list-footer>
          <list-paging
            v-model="paginationParams"
            @update:modelValue="getData"
          />
        </template>
      </list>
    </section>
</template>

<script setup lang="ts">
  // @@@ js @@
  import { ref, computed, onMounted }   from 'vue'
  import List                           from '@/components/list.vue'
  import ListItemSimple                 from '@/components/list-item-simple.vue'
  import ListItemDetailed               from '@/components/list-item-detailed.vue'
  import ListPaging                     from '@/components/list-paging.vue'
  import type { Movie, ListPagination } from '@/types'

  const isLoading        = ref<boolean>(false)
  const movies           = ref<Movie[] | null>(null)
  const paginationParams = ref<ListPagination>({
    offset: 0,
    limit: 12,
    total: 0
  })

  onMounted(getData)

  const url = computed(() => `https://my.api.mockaroo.com/movies.json?key=203c6440&offset=${paginationParams.value.offset}`)

  async function getData() {
    isLoading.value = true
    movies.value = await fetch(url.value).then(res => res.json())
    paginationParams.value.total = 128
    isLoading.value = false

    console.log(movies.value)
  }

</script>
