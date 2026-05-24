<template>
  <div class="list-paging">
    <div>
      <a href="#" :class="{disabled: flags.BOF}" @click.prevent="prev">Prev</a>
      <span>{{ progress }}</span>
      <a href="#" :class="{disabled: flags.EOF}" @click.prevent="next">Next</a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'list-paging',

  props: {
    value: {
      type: Object,
      default: () => ({})
    }
  },

  model: {
    value: 'value',
    event: 'change'
  },

  computed: {
    flags() {
      return {
        BOF: this.value.offset === 0,
        EOF: this.value.offset + this.value.size >= this.value.total
      }
    },

    progress() {
      return `${this.value.offset / this.value.size + 1} / ${Math.ceil(this.value.total / this.value.size)}`
    }
  },

  methods: {
    prev() {
      const {offset, size, total} = this.value

      !this.flags.BOF && this.$emit('change', {
        offset: offset - size,
        size,
        total
      })
    },

    next() {
      const {offset, size, total} = this.value

      !this.flags.EOF && this.$emit('change', {
        offset: offset + size,
        size,
        total
      })
    }
  }
}
</script>