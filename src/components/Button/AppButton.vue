<template>
  <button
    class="app-button"
    :class="classes"
    @click="handleClick"
    :style="styles"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: null
    }
  },
  computed: {
    classes () {
      return {
        disabled: this.disabled,
        rounded: this.rounded,
        fixed: this.fixed,
        block: this.block
      }
    },
    styles () {
      return {
        'background-color': this.color
      }
    }
  },
  methods: {
    handleClick (e) {
      if (!this.disabled) {
        this.$emit('click', e)
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import 'styles/colors.less';

.app-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: @green-light;
  border: none;
  outline: none;
  padding: 12px 24px;
  border-radius: 32px;
  cursor: pointer;
  transition: .2s;
  font-family: Montserrat, sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  color: @white;

  &:hover {
    background-color: @green-middle;
  }
  &:active {
    background-color: @green-dark;
  }
  &.disabled {
    background-color: @gray;
    cursor: default;
  }
  &.rounded {
    padding: 20px;
    border-radius: 100%;
  }
  &.fixed {
    position: fixed;
    bottom: 40px;
    right: 40px;
    z-index: 10;
    box-shadow: 0px 15px 46px -10px rgba(0, 0, 0, 0.6);
  }
  &.block {
    width: 100%;
  }
}
</style>
