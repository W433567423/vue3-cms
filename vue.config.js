// const path = require('path')
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: './build',
  // devServer: {
  //   proxy: {
  //     '^api': {
  //       target: 'http://192.169.137.161:8000'
  //     }
  //   }
  // },
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components/'
      }
    }
  }
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('@', path.resolve(__dirname, 'src'))
  //     .set('views', '@/views')
  // }
})
