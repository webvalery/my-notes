<template>
  <root-layout>
    <template slot="header">
      <app-menu @login="handleLogin" />
    </template>

    <section class="home-content">
      <div class="home-info">
        <h1 class="home-title">Мои заметки</h1>
        <h3 class="home-description">Не забывай о важном, храни его в облаке.</h3>
      </div>

      <div class="home-demo"></div>
    </section>

    <auth-modal v-model="isAuthModalShown"/>
  </root-layout>
</template>

<script>
import RootLayout from 'layouts/RootLayout.vue'
import AppMenu from 'modules/Menu/AppMenu.vue'

import AuthModal from './components/AuthModal.vue'

export default {
  components: {
    RootLayout,
    AppMenu,
    AuthModal
  },
  data () {
    return {
      isAuthModalShown: false
    }
  },
  computed: {

  },
  watch: {},
  methods: {
    handleLogin (e) {
      this.isAuthModalShown = true
    }
  }
}
</script>

<style lang="less" scoped>
@import 'styles/colors.less';

.home-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.home-info {
  position: relative;
}
.home-title {
  max-width: 480px;
  margin-bottom: 40px;
}
.home-description {
  max-width: 390px;
  color: @gray;
}
.home-demo {
  width: 100%;
  min-height: calc(100vh - 136px);
  background-image: url('@/assets/images/home.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right bottom;
}

@media (max-width: 1366px) {

}

@media (max-width: 768px) {
  .home-content {
    flex-direction: column;
  }
  .home-info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .home-title,
  .home-description {
    text-align: center;
  }
  .home-demo {
    background-position: center bottom;
  }
}

@media (max-width: 360px) {

}
</style>
