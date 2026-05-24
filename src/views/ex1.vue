<template>
  <main>
    <section class="list-wrapper">
      <!--
      <list :items="movies.data" :is-loading="isLoading">
        <template #list-title>
          <div class="list-title">Simple list</div>
        </template>

        <template #list-body="{ item }">
          <list-item-simple :item="item" />
        </template>

        <template #list-footer>
          <list-paging v-model="pagingConfig" />
        </template>
      </list>
      -->
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
  import { ref }          from 'vue'
  import list             from '@/components/list.vue'
  import listItemSimple   from '@/components/list-item-simple.vue'
  import listItemDetailed from '@/components/list-item-detailed.vue'
  import listPaging       from '@/components/list-paging.vue'

  const isLoading = ref<boolean>(false)

</script>