<template>
  <root-layout>
    <template slot="header">
      <app-menu />
    </template>

    <section class="profile-content">
      asasaas
    </section>
  </root-layout>
</template>

<script>
import RootLayout from 'layouts/RootLayout.vue'
import AppMenu from 'modules/Menu/AppMenu.vue'

export default {
  components: {
    RootLayout,
    AppMenu
  },
  data () {
    return {

    }
  },
  computed: {

  },
  watch: {},
  methods: {
  }
}
</script>

<style lang="less" scoped>
@import 'styles/colors.less';

</style>
