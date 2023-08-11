const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: true, // 开启运行时编译
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputDir: './electron/dist',
  filenameHashing: true
})
