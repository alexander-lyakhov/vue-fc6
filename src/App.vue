<template>
  <div class="page" :class="[selectedPage]">
    <header>
      <h1>
        <span v-if="selectedPage?.title !== 'home'">{{ selectedPage?.title }} </span>
        {{ selectedPage?.description }}
      </h1>
      <nav class="nav">
        <header-nav v-model="selectedPageIndex" :options="pages" />
      </nav>
    </header>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue';
  import headerNav         from './components/header-nav.vue'
  import { pages }         from './defs';

  const selectedPageIndex = ref<number>(0);

  const selectedPage = computed(() => pages[selectedPageIndex.value])
</script>

<style scoped></style>
