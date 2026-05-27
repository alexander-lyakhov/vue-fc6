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
    <main>
      <keep-alive>
        <component :is="view" />
      </keep-alive>
    </main>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed, type Component } from 'vue';
  import headerNav                         from '@/components/header-nav.vue'
  import Home                              from '@/views/home.vue'
  import Ex1                               from '@/views/ex1.vue'
  import Ex2                               from '@/views/ex2.vue'
  import { pages}                          from '@/defs';

  const selectedPageIndex = ref<number>(0);

  const views: Record<string, Component> = {
    home: Home,
    ex1: Ex1,
    ex2: Ex2,
  }

  const selectedPage = computed(() => pages[selectedPageIndex.value])
  const view = computed(() => views[selectedPage.value!.value])
</script>
