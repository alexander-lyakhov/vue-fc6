Y<template>
  <main>
    <section class="list-wrapper">
      <list :items="movies" :is-loading="isLoading">
        <template #list-title>
          <div class="list-title">Simple list</div>
        </template>

        <template #list-body="{ item }">
          <list-item-simple :item="item" />
        </template>

      <!--
        <template #list-footer>
          <list-paging v-model="pagingConfig" />
        </template>
      -->
      </list>
    </section>
    <!--
    <section class="list-wrapper">
      <list :items="movies.data" :is-loading="isLoading">
        <template #list-title>
          <div class="list-title">Detailed list</div>
        </template>

        <template #list-body="{ item }">
          <list-item-detailed :item="item" />
        </template>

        <template #list-footer>
          <list-paging v-model="pagingConfig" />
        </template>
      </list>
    </section>
    -->
  </main>
</template>

<script setup lang="ts">
  // @@@ js @@
  import { ref, reactive, computed, onMounted }          from 'vue'
  import list             from '@/components/list.vue'
  import listItemSimple   from '@/components/list-item-simple.vue'
  import listItemDetailed from '@/components/list-item-detailed.vue'
  import listPaging       from '@/components/list-paging.vue'

  type Movie = {
    id:    number;
    title: string;
    genre: string;
  }

  const isLoading = ref<boolean>(false)
  const movies = ref<Movie[] | null>(null)
  const params = reactive({
    offset: 0,
  })

  onMounted(getData)

  const url = computed(() => `https://my.api.mockaroo.com/movies.json?key=203c6440&offset={params.offset}`)

  async function getData() {
    isLoading.value = true
    movies.value = await fetch(url.value).then(res => res.json())
    // pagingConfig.total = this.movies.total
    isLoading.value = false

    console.log(movies.value)
  }

</script>