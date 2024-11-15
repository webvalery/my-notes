<template>
  <div class="app-menu">
    <div class="logo" @click="handleClick">
      <img class="logo-image" src="@/assets/images/logo.svg" alt="logo">
    </div>

    <div class="actions">
      <app-button v-if="!isAuth" @click="handleClickLogin">
        <div class="login-icon">
          <app-icon name="login" size="32"/>
        </div>

        <span class="login-text">Вход</span>
      </app-button>

      <div v-else class="app-menu-profile">
        <span class="user-info text-small">{{ email }}</span>

        <div class="user-profile" :class="{ shown: isShownProfileMenu }" @click="handleClickProfile">
          <app-icon name="user" width="20" height="28" />

          <div class="user-profile-dropdown">
            <div class="user-profile-exit">
              <app-link @click="handleClickExit">Выйти</app-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { COLORS } from 'styles/colors.js'

import AppIcon from 'components/Icon/AppIcon.vue'
import AppButton from 'components/Button/AppButton.vue'
import AppLink from 'components/Link/AppLink.vue'

export default {
  components: {
    AppIcon,
    AppButton,
    AppLink
  },
  async created () {
    this.getUserInfo()
  },
  data () {
    return {
      email: null,
      isShownProfileMenu: false,
      COLORS: COLORS
    }
  },
  computed: {
    isAuth () {
      return this.$store.getters['auth/token']
    }
  },
  methods: {
    async getUserInfo () {
      try {
        const { data, status } = await this.$store.dispatch('auth/loadUserData')

        if (status) {
          this.email = data.email
        }
      } catch (error) {
        throw new Error('Не удалось получить данные пользователя')
      }
    },
    handleClick (e) {
      this.$router.push({ path: '/' })
    },
    handleClickLogin (e) {
      this.$emit('login', e)
    },
    handleClickProfile (e) {
      this.isShownProfileMenu = !this.isShownProfileMenu
    },
    handleClickExit (e) {
      this.$store.commit('auth/SET_CLEAR_DATA')
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style lang="less" scoped>
@import 'styles/colors.less';

.app-menu {
  height: 136px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  width: 219px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.logo-image {
  width: 100%;
  height: auto;
  max-width: 100%;
}
.actions {
  display: flex;
  align-items: center;
}
.login-icon {
  margin-right: 12px;
}
.app-menu-profile {
  display: flex;
  align-items: center;
}
.user-info {
  margin-right: 12px;
}
.user-profile {
  position: relative;
  padding: 14px 18px;
  border-radius: 100%;
  background-color: @dark-middle;
  cursor: pointer;
}
.user-profile-dropdown {
  position: absolute;
  top: calc(100% + 28px);
  left: 100%;
  display: none;
  transform: translateX(-100%);
  background-color: @dark-middle;
  pointer-events: none;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0px 15px 46px -10px rgba(0, 0, 0, 0.6);
}
.user-profile-dropdown::before {
  content: '';
  position: absolute;
  top: -15px;
  right: 20px;
  border-width: 8px;
  border-style: solid;
  border-color: transparent transparent @dark-middle transparent;
}
.user-profile.shown .user-profile-dropdown {
  display: block;
}
.user-profile-exit {
  pointer-events: all;
}
</style>
