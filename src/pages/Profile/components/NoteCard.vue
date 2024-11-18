<template>
  <div class="note-card">
    <div class="note-header">
      <div class="note-header-container">
        <h4 class="note-title">{{ title }}</h4>
      </div>

      <div class="note-corner-cut">
        <div class="corner-cut-top"></div>
        <div class="corner-cut-bottom"></div>
      </div>
    </div>

    <div class="note-content">
      <p class="note-content-text">
        {{ content }}
      </p>
    </div>

    <div class="note-footer">
      <app-button color="transparent" @click="handlerClickDelete">
        <app-icon name="close" size="16"/>

        <div class="note-delete-button">
          <span class="note-delete-text">Удалить</span>
        </div>
      </app-button>
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
    id: {
      type: Number,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    content: {
      type: String,
      default: null
    }
  },
  methods: {
    handlerClickDelete (e) {
      this.$emit('delete-note', this.id)
    }
  }
}
</script>

<style lang="less" scoped>
@import 'styles/colors.less';

.note-card {
  max-width: 506px;
  box-shadow: 0px 15px 15px -10px rgba(0, 0, 0, 0.4);
  overflow: hidden;
}
.note-header {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid @green;
  border-top-left-radius: 10px;
  overflow: hidden;
}
.note-header-container {
  width: 100%;
  background-color: @green-light;
  padding: 20px 56px 20px 28px;
}
.note-corner-cut {
  display: flex;
  flex-direction: column;
}
.corner-cut-top {
  position: relative;
  width: 40px;
  height: 40px;
  border-bottom-left-radius: 10px;
  overflow: hidden;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    border-top: 40px solid transparent;
    border-left: 40px solid transparent;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    border-top: 40px solid transparent;
    border-left: 40px solid @green;
  }
}
.corner-cut-bottom {
  flex: 1;
  width: 100%;
  position: relative;
  background-color: @green-light;

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 0;
    width: 10px;
    height: 10px;
    background-color: @green-light;
  }
}
.note-content {
  background-color: @green-light;
  padding: 20px 28px 28px 28px;
}
.note-content-text {
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 9;
  -webkit-box-orient: vertical;
}
.note-footer {
  display: flex;
  justify-content: end;
  align-items: center;
  background-color: @green-light;
  padding: 8px 8px 8px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow: hidden;
}
.note-delete-button {
  display: flex;
  align-items: center;
}
.note-delete-text {
  margin-left: 12px;
}

@media (max-width: 768px) {
  .note-card {
    max-width: 100%;
  }
}
</style>
