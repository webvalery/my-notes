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
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.home-info {
  position: relative;
  margin-right: 10px;
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
  height: 100%;
  background-image: url('@/assets/images/home.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right bottom;
}

@media (max-width: 768px) {
  .home-content {
    flex-direction: column;
  }
  .home-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: unset;
  }
  .home-title,
  .home-description {
    text-align: center;
  }
  .home-title {
    margin-bottom: 20px;
  }
  .home-demo {
    background-position: center bottom;
  }
}

@media (max-width: 520px) {
  .home-title {
    font-size: 60px;
    line-height: 64px;
  }
}
</style>
