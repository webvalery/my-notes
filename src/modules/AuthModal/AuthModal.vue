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
        <span v-if="isSignIn" class="auth-offer-signup text text-small">
          У вас нет аккаунта?
          <app-link @click="handleClickLink">
            Зарегистрируйтесь
          </app-link>
        </span>

        <span v-else class="auth-offer-signin text text-small">
          У вас есть аккаунт?
          <app-link @click="handleClickLink">
            Войдите
          </app-link>
        </span>

        <div class="auth-button-container">
          <app-button
            :block="isWidthWindowSmall"
            @click="handleClickAuth"
          >
            {{ isSignIn ? 'Войти' : 'Зарегистрироваться'}}
          </app-button>
        </div>
      </div>

      <p v-if="isError" class="auth-offer-error text-small" v-html="message" />
    </div>
  </app-modal>
</template>

<script>
import windowSize from 'utils/windowSize'

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
  data () {
    return {
      shown: false,
      isSignIn: true,
      email: null,
      password: null,
      confirmPassword: null,
      windowSize: windowSize
    }
  },
  computed: {
    title () {
      return this.isSignIn ? 'Вход в ваш аккаунт' : 'Регистрация'
    },
    message () {
      const errors = this.$store.getters['auth/error']

      if (Array.isArray(errors)) {
        return errors.join('<br>')
      }

      return errors
    },
    isError () {
      return this.message !== null && this.message.trim() !== ''
    },
    isWidthWindowSmall () {
      return this.windowSize.width <= 530
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
  methods: {
    handleClickLink (e) {
      this.$store.commit('auth/SET_ERROR_MESSAGE', null)
      this.isSignIn = !this.isSignIn
    },
    async handleClickAuth (e) {
      const type = this.isSignIn ? 'signin' : 'signup'

      const { status } = await this.$store.dispatch('auth/authUser', {
        type,
        authData: {
          email: this.email,
          password: this.password,
          confirm_password: this.confirmPassword
        }
      })

      if (status) {
        this.shown = false
        this.$router.push({ path: '/user' })
      }

      this.email = null
      this.password = null
      this.confirmPassword = null
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
}
.auth-offer-signup,
.auth-offer-signin {
  color: @gray;
}
.auth-offer-error {
  color: #FF7461;
  background-color: #FF74611A;
  padding: 8px 20px;
  margin-top: 20px;
  border-radius: 24px;
}

@media (max-width: 1366px) {
  .auth-title {
    max-width: 400px;
  }
  .auth-offer-signup {
    display: flex;
    flex-direction: column;
  }
}
@media (max-width: 768px) {
  .auth-title {
    max-width: unset;
  }
  .auth-offer-signup  {
    display: block;
  }
}
@media (max-width: 530px) {
  .auth-title {
    font-size: 32px;
    line-height: 36px;
    margin-bottom: 28px;
  }
  .auth-inputs {
    margin-bottom: 28px;
  }
  .auth-input:not(:last-child) {
    margin-bottom: 16px;
  }
  .auth-offer {
    flex-direction: column-reverse;
  }
  .auth-button-container {
    width: 100%;
  }
  .auth-offer-signup {
    text-align: center;
    font-size: 14px;
    line-height: 24px;
    margin-top: 12px;
  }
  .auth-offer-signin {
    margin-top: 20px;
  }
}
@media (max-width: 360px) {
  .auth-offer-signup {
    text-align: unset;
  }
}
</style>
