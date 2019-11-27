import localizeFilter from '../filtes/localize.filter'

export default {
  install(Vue) {
    Vue.prototype.$title = (titleKey) => {
      const appName = process.env.VUE_APP_TITLE
      return `${localizeFilter(titleKey)} | ${appName}`
    }
  }
}
