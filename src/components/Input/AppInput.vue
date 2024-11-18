<template>
  <div class="app-input">
    <label class="app-input-label" @click="handleFocusInput">
      {{ label }}
    </label>

    <div class="app-input-container">
      <input
        class="app-input-root"
        :class="classes"
        ref="input"
        :value="value"
        :type="inputType"
        :placeholder="placeholder"
        :maxlength="maxLength"
        @input="handleInputChange"
      >

      <div v-if="isInputTypePassword" class="app-input-icon">
        <app-icon
          width="18"
          height="14"
          :name="iconInputPassword"
          :aria-label="isHiddenPassword ? 'Показать пароль' : 'Скрыть пароль'"
          @click="handleTogglePassword"
          @keydown="handleKeydownTogglePassword"
        />
      </div>
    </div>

    <div v-if="hasInputInfo" class="app-input-info">
      <span v-if="error" class="app-input-message">{{ message }}</span>
      <span v-if="hasMaxLength" class="app-input-char-counter text-small"> {{ currentLength }} / {{ maxLength }}</span>
    </div>
  </div>
</template>

<script>
import inputMixin from './inputMixin'

import AppIcon from 'components/Icon/AppIcon.vue'

export default {
  mixins: [inputMixin],
  components: {
    AppIcon
  },
  props: {
    type: {
      type: String,
      default: 'text'
    }
  },
  data () {
    return {
      isHiddenPassword: true
    }
  },
  computed: {
    inputType () {
      return this.isInputTypePassword && this.isHiddenPassword ? 'password' : 'text'
    },
    classes () {
      return {
        'visible-icon': this.isInputTypePassword
      }
    },
    iconInputPassword () {
      return this.isHiddenPassword ? 'off-password' : 'on-password'
    },
    isInputTypePassword () {
      return this.type === 'password'
    }
  },
  methods: {
    handleTogglePassword (e) {
      this.isHiddenPassword = !this.isHiddenPassword
    },
    handleKeydownTogglePassword (e) {
      if (e.key === 'Enter' || e.code === 'Space') {
        e.preventDefault()
        this.handleTogglePassword(e)
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import './input';
</style>
