<template functional>
  <li class="list-item simple" :key="props.item.id">
    <a href="#">{{ props.item.title }}</a>
  </li>
</template>

<script>

export default {
  name: 'list-item',

  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>