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
        <div class="notes-container">
          <note-card
            v-for="note in notes"
            :key="note.id"
            :id="note.id"
            :title="note.title"
            :content="note.content"
            @delete-note="handleDeleteNote"
          >
          </note-card>
        </div>

        <app-button rounded fixed @click="handleClickNoteAdd">
          <app-icon name="add" size="16"/>
        </app-button>
      </section>

      <add-note-modal
        v-model="isAddModalShown"
        :message="messageError"
        @send-note="handlerSendNote"
      />
    </root-layout>
  </div>
</template>

<script>
import windowSize from 'utils/windowSize'
import { loadNotesApi, sendNoteApi, deleteNoteApi } from './dataLayer'

import RootLayout from 'layouts/RootLayout.vue'
import AppMenu from 'modules/Menu/AppMenu.vue'

import AppButton from 'components/Button/AppButton.vue'
import AppIcon from 'components/Icon/AppIcon.vue'

import AddNoteModal from './components/AddNoteModal.vue'
import NoteCard from './components/NoteCard.vue'

export default {
  components: {
    RootLayout,
    AppMenu,
    AppButton,
    AppIcon,
    AddNoteModal,
    NoteCard
  },
  async created () {
    await this.loadNotes()
  },
  data () {
    return {
      notes: null,
      isAddModalShown: false,
      messageError: null,
      windowSize: windowSize
    }
  },
  computed: {
    isWidthWindowSmall () {
      return this.windowSize.width <= 360
    },
    token () {
      return this.$store.getters['auth/token']
    }
  },
  methods: {
    async loadNotes () {
      const { data, status } = await loadNotesApi(this.token)

      if (status) {
        this.notes = data
      }
    },
    async handlerSendNote (val) {
      const { data, status } = await sendNoteApi(this.token, val)

      if (status) {
        this.notes = [...this.notes, data]

        this.isAddModalShown = false
      }

      if (Array.isArray(data.message)) {
        this.messageError = data.message.join('<br>')
      }
    },
    async handleDeleteNote (id) {
      const { status } = await deleteNoteApi(this.token, id)

      if (status) {
        this.notes = this.notes.filter(note => note.id !== id)
      }
    },
    handleClickNoteAdd (e) {
      this.isAddModalShown = true
    }
  }
}
</script>

<style lang="less" scoped>
@import 'styles/colors.less';

.notes-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: start;
  gap: 40px;
}

@media (max-width: 1366px) {
  .notes-container {
    gap: 20px;
  }
}
@media (max-width: 768px) {
  .notes-container {
    grid-template-columns: 1fr;
    padding: 40px 30px;
  }
}
@media (max-width: 360px) {
  .user-profile-page {
    --height-app-menu: 76px;
  }
  .logo-custom {
    width: 36px;
    height: 36px;
    margin-right: 20px;
    cursor: pointer;
  }
  .user-profile {
    padding: 9px 12px;
  }
  .notes-container {
    padding: 20px 10px;
  }
}
</style>
