<template>
  <div class="list-paging">
    <div>
      <a href="#" :class="{disabled: flags.BOF}" @click.prevent="prev">Prev</a>
      <span>{{ progress }}</span>
      <a href="#" :class="{disabled: flags.EOF}" @click.prevent="next">Next</a>
    </div>
  </div>
</template>

<script setup lang="ts">
  // @@@ @js@
  import { computed }            from 'vue'
  import type { ListPagination } from '@/types'

  const model = defineModel<ListPagination>()
  const emit = defineEmits<{
    (e: 'prev'): void,
    (e: 'next'): void,
  }>()

  /**
  *** @@@ Computed
  **/
  const flags = computed(() => {
    return {
      BOF: model.value!.offset === 0,
      EOF: model.value!.offset + model.value!.limit >= model.value!.total
    }
  })

  const progress = computed(() => {
    return `${model.value!.offset / model.value!.limit + 1} / ${Math.ceil(model.value!.total / model.value!.limit)}`
  })

  /**
  *** @@@ Methods
  **/
  // =============================================================================
  // @@@ [ M ] prev
  // =============================================================================
  function prev() {
    if (model.value && !flags.value.BOF) {
      const {offset, limit, total} = model.value

      model.value = {
        offset: offset - limit,
        limit,
        total,
      }
      emit('prev')
    }
  }

  // =============================================================================
  // @@@ [ M ] next
  // =============================================================================
  function next() {
    if (model.value && !flags.value.EOF) {
      const {offset, limit, total} = model.value

      model.value = {
        offset: offset + limit,
        limit,
        total,
      }
      emit('next')
    }
  }
</script>
