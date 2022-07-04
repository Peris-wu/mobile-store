import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia, PiniaVuePlugin } from 'pinia'
import '@/assets/common/index.scss'
import vantComponents from '@/vantNeedComponents'
Object.keys(vantComponents).forEach((component) => {
  Vue.use(vantComponents[component])
})
Vue.config.productionTip = false
Vue.use(PiniaVuePlugin)
const pinia = createPinia()
new Vue({
  router,
  pinia,
  render: (h) => h(App)
}).$mount('#app')
