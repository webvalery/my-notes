<template>
  <div v-show="shown" ref="modal" class="app-modal-overlay">
    <div class="app-modal">
      <div class="app-modal-content">
        <slot></slot>
      </div>

      <div class="app-modal-close">
        <app-button rounded @click="closeModal">
          <app-icon name="close" size="16"/>
        </app-button>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from 'components/Button/AppButton.vue'
import AppIcon from 'components/Icon/AppIcon.vue'

export default {
  components: {
    AppButton,
    AppIcon
  },
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      shown: false
    }
  },
  watch: {
    value: {
      immediate: true,
      handler (val) {
        this.shown = val
        if (val) {
          document.body.style.overflow = 'hidden'
          this.renderModal()
        } else {
          document.body.style.overflow = ''
          this.removeModal()
        }
      }
    }
  },
  methods: {
    closeModal () {
      this.$emit('input', false)
    },
    renderModal () {
      const appRoot = document.getElementById('modals')
      if (appRoot && this.$refs.modal) {
        appRoot.appendChild(this.$refs.modal)
      }
    },
    removeModal () {
      if (this.$refs.modal && this.$refs.modal.parentNode) {
        this.$refs.modal.parentNode.removeChild(this.$refs.modal)
      }
    }
  },
  mounted () {
    if (this.shown) {
      this.renderModal()
    }
  },
  beforeDestroy () {
    this.removeModal()
  }
}
</script>

<style lang="less" scoped>
@import 'styles/colors.less';

.app-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0 40px;
  background-color: rgba(@dark, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.app-modal {
  max-width: 780px;
  width: 100%;
  position: relative;
  padding: 80px;
  background: @dark-middle;
  clip-path: inset(0 round 40px);
  z-index: 1001;
  max-height: 100%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: @dark-light;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background: @dark-middle;
    border-radius: 4px;
  }
}
.app-modal-close {
  position: absolute;
  top: 20px;
  right: 20px;
}

@media (max-width: 1366px) {
  .app-modal {
    padding: 56px;
  }
}
@media (max-width: 530px) {
  .app-modal-overlay {
    padding: 0;
  }
  .app-modal {
    padding: 42px 16px;
  }
  .app-modal-close {
    top: 12px;
    right: 12px;
  }
}
</style>
