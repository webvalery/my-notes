<template>
  <a
    class="app-link"
    :href="url"
    :target="newWindow ? '_blank' : '_self'"
    @click="handleClickLink"
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
    }
  }
}
</script>

<style lang="less" scoped>
@import 'styles/colors.less';

.app-link {
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  color: @green-light;
  cursor: pointer;
  text-decoration: none;
  transition: color .2s;

  &:hover {
    color: @white;
  }
}
</style>
