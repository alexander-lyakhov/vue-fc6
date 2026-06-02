import { ref, computed }            from 'vue'
import type { Component }           from 'vue'
import { listTypes, type ListType } from '@/defs'
import ListItemSimple               from '@/components/list-item-simple.vue'
import ListItemDetailed             from '@/components/list-item-detailed.vue'

export default function useView() {
  const views: Record<string, Component> = {
    'list-item-simple':   ListItemSimple,
    'list-item-detailed': ListItemDetailed,
  }
  const selectedListTypeIndex = ref<number>(0)

  /***
  **** @@@ Computed
  ***/
  const component = computed(() => views[`list-item-${(listTypes[selectedListTypeIndex.value] as ListType).value}`])
  const title     = computed(() => `${(listTypes[selectedListTypeIndex.value] as ListType).title}`)

  return {
    selectedListTypeIndex,
    component,
    title
  }
}
