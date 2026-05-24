<template>
  <main>
    <list :items="movies.data" :is-loading="isLoading">
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
  </main>
</template>

<script>

import list from '../components/list.vue'
import listNav from '../components/list-nav.vue'
import listItemSimple from '../components/list-item-simple.vue'
import listPaging from '../components/list-paging.vue'
import { listTypes } from '../defs'

export default {
  name: 'ex2',

  components: {
    list,
    listNav,
    listItemSimple,
    listItemDetailed: () => import('../components/list-item-detailed.vue'),
    listItemCard: () => import('../components/list-item-card.vue'),
    listPaging,
  },

  data() {
    return {
      movies: {},
      listTypes,
      selectedListTypeIndex: 0,
      isLoading: false,
      pagingConfig: {
        offset: 0,
        size: 12,
        total: 0
      }
    }
  },

  mounted() {
    this.$watch('pagingConfig', () => this.getData(), {
      deep: true,
      immediate: true
    })
  },

  computed: {
    listTitle() {
      return `${this.listTypes[this.selectedListTypeIndex].title || listTypes[0].title}`
    },

    url() {
      return `http://react-cdp-api.herokuapp.com/movies?search=&searchBy=title&sortBy=title&sortOrder=asc&offset=${this.pagingConfig.offset}&limit=${this.pagingConfig.size}`
    }
  },

  methods: {
    async getData() {
      this.isLoading = true
      this.movies = await fetch(this.url).then(res => res.json())
      this.pagingConfig.total = this.movies.total
      this.isLoading = false

      console.log(this.movies)
    },
  },
}
</script>