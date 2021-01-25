module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'lang',
      enableInSFC: false
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
  ? '/soy-buyi1/'
  : '/'
}
