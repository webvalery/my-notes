<template>
  <app-modal v-model="shown">
    <div class="auth" :class="{ 'sign-in': isSignIn }">
      <h2 class="auth-title">{{ title }}</h2>

      <div class="auth-inputs">
        <div class="auth-input">
          <app-input
            v-model="email"
            label="Email"
            placeholder="Введите Email"
          />
        </div>

        <div class="auth-input">
          <app-input
            v-model="password"
            label="Пароль"
            placeholder="Введите пароль"
            type="password"
          />
        </div>

        <div v-if="!isSignIn" class="auth-input">
          <app-input
            v-model="confirmPassword"
            label="Пароль ещё раз"
            placeholder="Введите пароль"
            type="password"
          />
        </div>
      </div>

      <div class="auth-offer">
        <span class="auth-offer-text">
          {{ isSignIn ? 'У вас нет аккаунта?' : 'У вас есть аккаунт?'}}

          <app-link @click="handleClickLink">
            {{ isSignIn ? 'Зарегистрируйтесь?' : 'Войдите'}}
          </app-link>
        </span>

        <app-button @click="handleClickAuth">
          {{ isSignIn ? 'Войти' : 'Зарегистрироваться'}}
        </app-button>
      </div>

      <p v-if="isError" class="auth-offer-error" v-html="message" />
    </div>
  </app-modal>
</template>

<script>
import AppModal from 'components/Modal/AppModal.vue'
import AppInput from 'components/Input/AppInput.vue'
import AppLink from 'components/Link/AppLink.vue'
import AppButton from 'components/Button/AppButton.vue'

export default {
  components: {
    AppModal,
    AppInput,
    AppLink,
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
      isSignIn: true,
      email: null,
      password: null,
      confirmPassword: null
    }
  },
  computed: {
    title () {
      return this.isSignIn ? 'Вход в ваш аккаунт' : 'Регистрация'
    },
    message () {
      return this.$store.getters['auth/error']
    },
    isError () {
      return this.message !== null && this.message.trim() !== ''
    }
  },
  methods: {
    handleClickLink (e) {
      this.isSignIn = !this.isSignIn
    },
    async handleClickAuth (e) {
      const type = this.isSignIn ? 'signin' : 'signup'

      try {
        const data = await this.$store.dispatch('auth/authUser', {
          type,
          authData: {
            email: this.email,
            password: this.password,
            confirm_password: this.confirmPassword
          }
        })

        if (data.status) {
          this.shown = false
          this.$router.push({ path: '/user' })
        }
      } finally {
        this.email = null
        this.password = null
        this.confirmPassword = null
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import 'styles/colors.less';

.auth-title,
.auth-inputs {
  margin-bottom: 40px;
}
.auth-input:not(:last-child) {
  margin-bottom: 24px;
}
.auth-offer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
.auth-offer-text {
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  color: @gray;
}
.auth-offer-error {
  color: #FF7461;
  background-color: #FF74611A;
  padding: 8px 20px;
  border-radius: 24px;
}
</style>
