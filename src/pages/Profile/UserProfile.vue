<template>
  <root-layout>
    <template slot="header">
      <app-menu />
    </template>

    <section class="profile-content">
      <app-button rounded fixed @click="handleClickNoteAdd">
        <app-icon name="add" size="16"/>
      </app-button>
    </section>

    <add-note-modal v-model="isAddModalShown"/>
  </root-layout>
</template>

<script>
import RootLayout from 'layouts/RootLayout.vue'
import AppMenu from 'modules/Menu/AppMenu.vue'

import AppButton from 'components/Button/AppButton.vue'
import AppIcon from 'components/Icon/AppIcon.vue'

import AddNoteModal from './components/AddNoteModal.vue'

export default {
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

</style>
