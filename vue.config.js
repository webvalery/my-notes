const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/my-notes/' : '/',
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        api: path.resolve(__dirname, 'src/api'),
        assets: path.resolve(__dirname, 'src/assets'),
        styles: path.resolve(__dirname, 'src/assets/styles'),
        components: path.resolve(__dirname, 'src/components'),
        layouts: path.resolve(__dirname, 'src/layouts'),
        modules: path.resolve(__dirname, 'src/modules'),
        pages: path.resolve(__dirname, 'src/pages'),
        utils: path.resolve(__dirname, 'src/utils')
      }
    }
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')

    svgRule
      .test(/\.svg$/)
      .exclude.add(path.resolve(__dirname, 'src/assets/icons'))
      .end()

    config.module
      .rule('raw-svg')
      .test(/\.svg$/)
      .include.add(path.resolve(__dirname, 'src/assets/icons'))
      .end()
      .use('raw-loader')
      .loader('raw-loader')
  }
})
