<template>
  <div class="app-input">
    <label class="app-input-label" @click="handleFocusInput">
      {{ label }}
    </label>

    <div class="app-input-container">
      <textarea
        class="app-input-root app-textarea-root"
        ref="input"
        :value="value"
        :placeholder="placeholder"
        :maxlength="maxLength"
        @input="handleInputChange"
      />
    </div>

    <div v-if="hasInputInfo" class="app-input-info">
      <span v-if="error" class="app-input-message">{{ message }}</span>
      <span v-if="hasMaxLength" class="app-input-char-counter text-small"> {{ currentLength }} / {{ maxLength }}</span>
    </div>
  </div>
</template>

<script>
import inputMixin from './inputMixin'

export default {
  mixins: [inputMixin]
}
</script>

<style lang="less" scoped>
@import './input';

.app-textarea-root {
  height: 244px;
  padding: 14px 26px;
  resize: none;
}
</style>
