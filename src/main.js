import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/common/index.scss'
import vantComponents from '@/vantNeedComponents'
Object.keys(vantComponents).forEach((component) => {
  Vue.use(vantComponents[component])
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
