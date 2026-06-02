<template>
  <main>
    <fetch :url="url" v-slot="{ result, isLoading }">
      <list :items="result.data" :is-loading="isLoading">
        <template #list-title>
          <div class="list-title">{{ listTitle }}</div>
        </template>

        <template #list-header>
          <list-nav v-model="selectedListTypeIndex" :options="listTypes" />
        </template>

        <template #list-body="{ item }">
          <components :is="`list-item-${listTypes[selectedListTypeIndex].value}`" :item="item" />
        </template>

        <template #list-footer>
          <list-paging v-model="pagingConfig" />
        </template>
      </list>
    </fetch>
  </main>
</template>

<script>

import fetch from '../components/utils/fetch.js'
import list from '../components/list.vue'
import listNav from '../components/list-nav.vue'
import listItemSimple from '../components/list-item-simple.vue'
import listPaging from '../components/list-paging.vue'
import { listTypes } from '../defs'

export default {
  name: 'ex3',

  components: {
    fetch,
    list,
    listNav,
    listItemSimple,
    listPaging,
    listItemDetailed: () => import('../components/list-item-detailed.vue'),
    listItemCard: () => import('../components/list-item-card.vue')
  },

  data() {
    return {
      items: null,
      listTypes,
      selectedListTypeIndex: 0,
      pagingConfig: {
        offset: 0,
        size: 12,
        total: 3000
      }
    }
  },

  computed: {
    listTitle() {
      return `${this.listTypes[this.selectedListTypeIndex].title || listTypes[0].title}`
    },

    url() {
      return `http://react-cdp-api.herokuapp.com/movies?search=&searchBy=title&sortBy=title&sortOrder=asc&offset=${this.pagingConfig.offset}&limit=${this.pagingConfig.size}`
    }
  }
}
</script>