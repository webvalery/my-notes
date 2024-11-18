<template>
  <a
    class="app-link text-small-bold"
    :href="url"
    :target="newWindow ? '_blank' : '_self'"
    @click="handleClickLink"
    @keydown="handleKeydown"
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    route: {
      type: String,
      default: null
    },
    newWindow: {
      type: Boolean,
      default () {
        return false
      }
    }
  },
  computed: {
    url () {
      return `${window.location.origin}${this.route}`
    }
  },
  methods: {
    handleClickLink (e) {
      e.preventDefault()

      if (this.newWindow) {
        window.open(this.url)
        return
      }

      if (this.route !== null) {
        this.$router.push(this.route)
      }

      this.$emit('click', e)
    },
    handleKeydown (e) {
      if (!this.disabled && (e.key === 'Enter' || e.code === 'Space')) {
        e.preventDefault()
        this.handleClickLink(e)
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import 'styles/colors.less';

.app-link {
  color: @green-light;
  cursor: pointer;
  text-decoration: none;
  transition: color .2s;

  &:hover {
    color: @white;
  }
}
</style>
