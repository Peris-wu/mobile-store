let path = require('path')
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    open: true,
    port: 8080,
    host: 'localhost'
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.json', '.vue'],
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    }
  }
  // (config) => {
  //   config.resolve = {
  //     extensions: ['.js', '.json', '.vue'],
  //     alias: {
  //       '@': path.resolve(__dirname, './src')
  //     }
  //   }
  //   config.plugins = [
  //     ComponentsPlugin({
  //       resolvers: [VantResolver()]
  //     })
  //   ]
  // }
})
