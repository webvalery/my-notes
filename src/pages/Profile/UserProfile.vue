<template>
  <div class="user-profile-page">
    <root-layout>
      <template slot="header">
        <app-menu>
          <template v-slot:logo="{ handleClickLogo }">
            <div v-if="isWidthWindowSmall" class="logo-custom">
              <img
                class="logo-image"
                src="@/assets/images/logo-small.svg"
                alt="logo"
                @click="handleClickLogo"
              >
            </div>
          </template>
        </app-menu>
      </template>

      <section class="profile-content">
        <app-button rounded fixed @click="handleClickNoteAdd">
          <app-icon name="add" size="16"/>
        </app-button>
      </section>

      <add-note-modal v-model="isAddModalShown"/>
    </root-layout>
  </div>
</template>

<script>
import windowSizeMixin from '@/mixins/windowSizeMixin'

import RootLayout from 'layouts/RootLayout.vue'
import AppMenu from 'modules/Menu/AppMenu.vue'

import AppButton from 'components/Button/AppButton.vue'
import AppIcon from 'components/Icon/AppIcon.vue'

import AddNoteModal from './components/AddNoteModal.vue'

export default {
  mixins: [windowSizeMixin],
  components: {
    RootLayout,
    AppMenu,
    AppButton,
    AppIcon,
    AddNoteModal
  },
  data () {
    return {
      isAddModalShown: false
    }
  },
  computed: {
    isWidthWindowSmall () {
      return this.windowWidth <= 360
    }
  },
  watch: {},
  methods: {
    handleClickNoteAdd (e) {
      this.isAddModalShown = true
    }
  }
}
</script>

<style lang="less" scoped>
@import 'styles/colors.less';

@media (max-width: 1366px) {

}

@media (max-width: 768px) {
}

@media (max-width: 360px) {
  .user-profile-page {
    --height-app-menu: 76px;
  }
  .logo-custom {
    width: 36px;
    height: 36px;
    margin-right: 20px;
  }
  .user-profile {
    padding: 9px 12px;
  }
}
</style>
