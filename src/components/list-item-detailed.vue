<template functional>
  <li class="list-item detailed" :key="props.item.id">
    <a href="#">
      <span class="line1">{{ props.item.title }}</span>
      <span class="line2">{{ props.item.genres.join(' / ') }}</span>
    </a>
  </li>
</template>

<script>

export default {
  name: 'list-item-detailed',

  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>