<template>
  <div class="root-layout">
    <header class="root-header">
      <div class="container">
        <slot name="header"></slot>
      </div>
    </header>

    <main class="root-main">
      <div class="container">
        <slot></slot>
      </div>
    </main>
  </div>
</template>

<style lang="less" scoped>
@import 'styles/colors.less';

.root-layout {
  min-height: 100vh;
  background-color: @dark;
}
</style>
