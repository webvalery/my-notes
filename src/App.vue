<template>
  <div class="root">
    <router-view />
    <div id="modals"></div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
</style>
<style lang="less">
@import 'styles/colors.less';

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: Montserrat, sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  color: @white;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.container {
  max-width: 1620px;
  margin: 0 auto;
  padding: 0 10px;
}
h1 {
  font-size: 104px;
  font-weight: 900;
  line-height: 104px;
}
h2 {
  font-size: 48px;
  font-weight: 600;
  line-height: 72px;
}
h3 {
  font-size: 32px;
  font-weight: 400;
  line-height: 48px;
}
h4 {
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
}
input, label, textarea {
  font-family: Montserrat, sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
}
.text-small {
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
}
.text-small-bold {
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
}

@media (max-width: 1366px) {
  .container {
    max-width: 1226px;
  }
}

@media (max-width: 768px) {
  .container {
    max-width: 708px;
  }
}

@media (max-width: 360px) {
  .container {
    max-width: 340px;
  }
  h1 {
    font-size: 60px;
    line-height: 64px;
  }
  h3 {
    font-size: 24px;
    line-height: 36px;
  }
  .text-small {
    font-size: 14px;
    line-height: 24px;
  }
}
</style>
