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
const pinia = createPinia()
Vue.use(PiniaVuePlugin)
Vue.use(pinia)
// userInfo数据持久化
const isExsitUserInfo = _getLocalStorage(USERINFO)
if (isExsitUserInfo) {
  const userInfo = JSON.parse(isExsitUserInfo)
  loginStore().setLoginState({ userInfo })
}
new Vue({
  router,
  pinia,
  render: (h) => h(App)
}).$mount('#app')
