﻿<template>
    <section class="list-wrapper">
      <list :items="movies.data" :is-loading="movies.isLoading">
        <template #list-title>
          Simple list
        </template>

        <template #list-body="{ item }">
          <list-item-simple :item="item" />
        </template>

        <template #list-footer>
          <list-paging
            v-model="movies.paginationParams"
            @update:modelValue="movies.getData"
          />
        </template>
      </list>
    </section>

    <section class="list-wrapper">
      <list :items="movies.data" :is-loading="movies.isLoading">
        <template #list-title>
          Detailed list
        </template>

        <template #list-body="{ item }">
          <list-item-detailed :item="item" />
        </template>

        <template #list-footer>
          <list-paging
            v-model="movies.paginationParams"
            @update:modelValue="movies.getData"
          />
        </template>
      </list>
    </section>
</template>

<script setup lang="ts">
  // @@@ js @@
  import { reactive, onMounted } from 'vue'
  import List                    from '@/components/list.vue'
  import ListItemSimple          from '@/components/list-item-simple.vue'
  import ListItemDetailed        from '@/components/list-item-detailed.vue'
  import ListPaging              from '@/components/list-paging.vue'
  import useMovies               from '@/composable/use-movies'

  const movies = reactive(useMovies())

  onMounted(movies.getData)
</script>
