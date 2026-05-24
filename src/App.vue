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
    <keep-alive>
      <component :is="view" />
    </keep-alive>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed, type Component } from 'vue';
  import headerNav                         from '@/components/header-nav.vue'
  import Home                              from '@/views/home.vue'
  import { pages}                          from '@/defs';

  const selectedPageIndex = ref<number>(0);

  const views: Record<string, Component> = {
    home: Home,
  }

  const selectedPage = computed(() => pages[selectedPageIndex.value])
  const view = computed(() => views[selectedPage.value!.value])
</script>
