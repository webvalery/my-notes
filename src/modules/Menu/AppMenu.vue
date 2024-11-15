<template>
  <div class="app-menu">
    <div class="logo" @click="handleClick">
      <img class="logo-image" src="@/assets/images/logo.svg" alt="logo">
    </div>

    <router-link to="/">sdsd</router-link>
    <div class="actions">
      <app-button v-if="!isAuth" @click="handleClickLogin">
        <div class="login-icon">
          <app-icon name="login" size="32"/>
        </div>

        <span class="login-text">Вход</span>
      </app-button>
    </div>
  </div>
</template>

<script>
import AppIcon from 'components/Icon/AppIcon.vue'
import AppButton from 'components/Button/AppButton.vue'

export default {
  components: {
    AppIcon,
    AppButton
  },
  data () {
    return {

    }
  },
  computed: {
    isAuth () {
      return this.$store.getters['auth/token']
    }
  },
  watch: {},
  methods: {
    handleClick (e) {
      if (this.$route.path !== '/') {
        this.$router.push({ path: '/' });
      }
      // this.$router.push({ path: '/' })
    },
    handleClickLogin (e) {
      this.$emit('login', e)
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

.actions {}

.login-icon {
  margin-right: 12px;
}

</style>
