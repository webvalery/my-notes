<template>
  <div class="app-menu">
    <slot name="logo" :handleClickLogo="handleClickLogo">
      <div class="logo" @click="handleClickLogo">
        <img class="logo-image" src="@/assets/images/logo.svg" alt="logo">
      </div>
    </slot>

    <div class="actions">
      <slot name="actions"></slot>

      <app-button v-if="!token" @click="handleClickLogin">
        <div class="login-icon">
          <app-icon name="login" size="32"/>
        </div>

        <span class="login-text">Вход</span>
      </app-button>

      <div v-else class="app-menu-profile">
        <span class="user-info text-small">{{ email }}</span>

        <div
          ref="userProfile"
          class="user-profile"
          :class="classesUserProfile"
          @click="handleToggleProfile"
        >
          <app-icon name="user" :width="widthIconUser" :height="heightIconUser" />

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
import { loadUserInfoApi } from 'api/user'
import { COLORS } from 'styles/colors.js'
import windowSize from 'utils/windowSize.js'

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
    if (this.token) {
      await this.getUserInfo()
    }
  },
  data () {
    return {
      email: null,
      isShownProfileMenu: false,

      windowSize: windowSize,
      COLORS: COLORS
    }
  },
  computed: {
    classesUserProfile () {
      return { shown: this.isShownProfileMenu }
    },
    widthIconUser () {
      return !this.isWidthWindowSmall ? '20' : '13'
    },
    heightIconUser () {
      return !this.isWidthWindowSmall ? '28' : '18'
    },
    token () {
      return this.$store.getters['auth/token']
    },
    isWidthWindowSmall () {
      return this.windowSize.width <= 360
    }
  },
  methods: {
    async getUserInfo () {
      const { data, status } = await loadUserInfoApi(this.token)

      if (status) {
        this.email = data.email
      }
    },
    handleClickLogo (e) {
      this.$router.push({ path: '/' })
    },
    handleClickLogin (e) {
      this.$emit('login', e)
    },
    handleClickProfile (e) {
      this.isShownProfileMenu = !this.isShownProfileMenu
    },
    handleToggleProfile (e) {
      this.isShownProfileMenu = !this.isShownProfileMenu

      if (this.isShownProfileMenu) {
        document.addEventListener('click', this.handleClickOutside)
      } else {
        document.removeEventListener('click', this.handleClickOutside)
      }
    },
    handleClickOutside (e) {
      const userProfile = this.$refs.userProfile

      if (userProfile && !userProfile.contains(e.target)) {
        this.isShownProfileMenu = false
        document.removeEventListener('click', this.handleClickOutside)
      }
    },
    async handleClickExit (e) {
      await this.$store.dispatch('auth/logout')
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style lang="less" scoped>
@import 'styles/colors.less';

.app-menu {
  height: var(--height-app-menu, 136px);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  width: 219px;
  height: auto;
  margin-right: 22px;
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
  max-width: 300px;
  display: flex;
  align-items: center;
}
.user-info {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 12px;
}
.user-profile {
  position: relative;
  padding: 14px 18px;
  border-radius: 100%;
  background-color: @dark-middle;
  cursor: pointer;
  user-select: none;
}
.user-profile-dropdown {
  position: absolute;
  top: calc(100% + 28px);
  left: 100%;
  z-index: 2;
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
  display: flex;
  pointer-events: all;
  user-select: none;
}

@media (max-width: 1366px) {
  .app-menu {
    height: var(--height-app-menu, 96px);
  }
}
@media (max-width: 768px) {
  .user-profile-dropdown {
    padding: 20px;
  }
}
@media (max-width: 360px) {
  .logo {
    width: 154px;
  }
  .app-menu-profile {
    max-width: 200px;
  }
  .user-profile {
    padding: 9px 12px;
  }
}
</style>
