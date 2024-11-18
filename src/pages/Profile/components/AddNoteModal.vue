<template>
  <app-modal v-model="shown">
    <div class="add-note">
      <h2 class="note-title">Добавление заметки</h2>

      <div class="note-name">
        <app-input
          v-model="title"
          label="Название заметки"
          placeholder="Введите название"
          :max-length="64"
        />
      </div>

      <div class="note-content">
        <app-textarea
          v-model="content"
          label="Текст заметки"
          placeholder="Введите текст"
          :max-length="250"
        />
      </div>

      <div class="note-add">
        <app-button
          :block="isWidthWindowSmall"
          @click="handleClickAdd"
        >
          Добавить
        </app-button>
      </div>

      <p v-if="message" class="add-note-error" v-html="message" />
    </div>
  </app-modal>
</template>

<script>
import windowSize from 'utils/windowSize'

import AppModal from 'components/Modal/AppModal.vue'
import AppInput from 'components/Input/AppInput.vue'
import AppTextarea from 'components/Input/AppTextarea.vue'
import AppButton from 'components/Button/AppButton.vue'

export default {
  components: {
    AppModal,
    AppInput,
    AppTextarea,
    AppButton
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    message: {
      type: String,
      default: null
    }
  },
  watch: {
    value: {
      immediate: true,
      handler (val) {
        this.shown = val

        if (!val) {
          this.title = null
          this.content = null
        }
      }
    },
    shown (val) {
      this.isSignIn = true
      this.$emit('input', val)
    }
  },
  data () {
    return {
      shown: false,
      title: null,
      content: null,
      windowSize: windowSize
    }
  },
  computed: {
    isWidthWindowSmall () {
      return this.windowSize.width <= 530
    }
  },
  methods: {
    async handleClickAdd (e) {
      this.$emit('send-note', {
        title: this.title,
        content: this.content
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import 'styles/colors.less';

.note-title {
  margin-bottom: 40px;
}
.note-name {
  margin-bottom: 24px;
}
.note-content {
  margin-bottom: 40px;
}
.note-add {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.add-note-error {
  color: #FF7461;
  background-color: #FF74611A;
  padding: 8px 20px;
  margin-top: 20px;
  border-radius: 24px;
}

@media (max-width: 1366px) {
  .note-title {
    max-width: 50%;
  }
}
@media (max-width: 768px) {
  .note-title {
    max-width: unset;
  }
}
@media (max-width: 360px) {
  .note-title {
    margin-bottom: 28px;
  }
  .note-name {
    margin-bottom: 16px;
  }
  .note-content {
    margin-bottom: 28px;
  }
}
</style>
