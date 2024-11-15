const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/my-notes/' : '/',
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        assets: path.resolve(__dirname, 'src/assets'),
        styles: path.resolve(__dirname, 'src/assets/styles'),
        components: path.resolve(__dirname, 'src/components'),
        layouts: path.resolve(__dirname, 'src/layouts'),
        api: path.resolve(__dirname, 'src/api'),
        pages: path.resolve(__dirname, 'src/pages'),
        utils: path.resolve(__dirname, 'src/utils'),
        modules: path.resolve(__dirname, 'src/modules')
      }
    }
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')

    // Клонируем стандартное правило для использования file-loader для всех svg, кроме icons
    svgRule
      .test(/\.svg$/)
      .exclude.add(path.resolve(__dirname, 'src/assets/icons'))
      .end()

    // Создаем новое правило для svg в папке icons, используя raw-loader
    config.module
      .rule('raw-svg')
      .test(/\.svg$/)
      .include.add(path.resolve(__dirname, 'src/assets/icons'))
      .end()
      .use('raw-loader')
      .loader('raw-loader')
  }
})
