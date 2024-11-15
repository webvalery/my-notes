<template>
  <app-modal v-model="shown">
    <div class="add-note">
      <h2 class="note-title">Добавление заметки</h2>

      <div class="note-name">
        <app-input
          v-model="name"
          label="Название заметки"
          placeholder="Введите название"
          :max-length="100"
        />
      </div>

      <div class="note-content">
        <app-textarea
          v-model="content"
          label="Текст заметки"
          placeholder="Введите текст"
          :max-length="500"
        />
      </div>

      <div class="note-add">
        <app-button @click="handleClickAdd">Добавить</app-button>
      </div>

      <p v-if="isError" class="add-note-error" v-html="message" />
    </div>
  </app-modal>
</template>

<script>
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
    }
  },
  watch: {
    value: {
      immediate: true,
      handler (val) {
        this.shown = val
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
      name: null,
      content: null
    }
  },
  computed: {
    message () {
      return this.$store.getters['auth/error']
    },
    isError () {
      return this.message !== null && this.message.trim() !== ''
    }
  },
  methods: {
    async handleClickAdd (e) {
      console.log(this.name, this.content)
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
  margin-bottom: 20px;
}
.add-note-error {
  color: #FF7461;
  background-color: #FF74611A;
  padding: 8px 20px;
  border-radius: 24px;
}
</style>
