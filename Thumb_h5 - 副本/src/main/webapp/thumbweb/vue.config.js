module.exports = {
  baseUrl: 'h5',
  lintOnSave: false,
  css: {
    extract: false
  },
  productionSourceMap: false,
  devServer: {
    port: 3000,
    proxy: process.env.VUE_APP_API,
    overlay: {
      warnings: false,
      errors: false
    }
  }
}
