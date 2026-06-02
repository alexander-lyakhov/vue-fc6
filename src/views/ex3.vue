<template>
  <main>
    <dataset v-slot="movies">
      <template v-if="movies">
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
              @next="movies.getNext"
              @prev="movies.getPrev"
            />
          </template>
        </list>
      </template>
    </dataset>
  </main>
</template>

<script setup lang="ts">
  // @@@ @js@
  import { reactive }  from 'vue';
  import list          from '@/components/list.vue'
  import ListNav       from '@/components/list-nav.vue'
  import ListPaging    from '@/components/list-paging.vue'
  import Dataset       from '@/components/dataset.vue'
  import useView       from '@/composable/use-view'
  import { listTypes } from '@/defs'

  const view = reactive(useView())
</script>
