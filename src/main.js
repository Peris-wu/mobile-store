import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia, PiniaVuePlugin } from 'pinia'
import '@/assets/common/index.scss'
import vantComponents from '@/vantNeedComponents'
import { USERINFO } from '@/utils/storageConst'
import { _getLocalStorage } from '@/utils/handleStorage'
import loginStore from '@/store/login'

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

// userInfo数据持久化
const isExsitUserInfo = _getLocalStorage(USERINFO)
if (isExsitUserInfo) {
  const userInfo = JSON.parse(isExsitUserInfo)
  loginStore().setLoginState({ userInfo })
}
