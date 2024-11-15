<template>
  <div
    class="svg-icon"
    :style="stylesBuild"
    v-html="getSvgIcon(name)"
  />
</template>

<script>
import { getSvgIcon } from 'utils/icons'

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
