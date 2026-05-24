<template functional>
  <div class="list" :class="{'is-loading': props.isLoading}">
    <slot name="list-title" />

    <slot name="list-header" />

    <ul class="list-body">
      <template v-for="item in props.items">
        <slot name="list-body" v-bind:item="item" />
      </template>
    </ul>

    <slot name="list-footer" />
  </div>
</template>

<script>

export default {
  name: 'list',

  props: {
    title: {
      type: String,
      default: 'The List'
    },
    items: {
      type: Array,
      default: () => ([])
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  }
}
</script>