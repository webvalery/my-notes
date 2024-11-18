<template>
  <div
    v-html="getSvgIcon(name)"
    class="svg-icon"
    :style="stylesBuild"
    @click="handleClick"
    @keydown="handleKeydown"
  />
</template>

<script>
import { getSvgIcon } from './loadIcons'

export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: null
    },
    width: {
      type: String,
      default: '24'
    },
    height: {
      type: String,
      default: 'auto'
    }
  },
  data () {
    return {
      getSvgIcon: getSvgIcon
    }
  },
  computed: {
    stylesBuild () {
      return {
        width: this.size ? `${this.size}px` : `${this.width}px`,
        height: this.size ? `${this.size}px` : `${this.height}px`
      }
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    },
    handleKeydown (e) {
      if (e.key === 'Enter' || e.code === 'Space') {
        e.preventDefault()
        this.handleClick(e)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.svg-icon {
  display: flex;
  justify-content: center;
  align-items: center;

  :deep(svg) {
    width: 100%;
    height: 100%;
  }
}
</style>
