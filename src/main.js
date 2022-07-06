import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia, PiniaVuePlugin } from 'pinia'
import '@/assets/common/index.scss'
import vantComponents from '@/vantNeedComponents'
import { USERINFO } from '@/utils/storageConst'
import { _getLocalStorage } from '@/utils/handleStorage'
import loginStore from '@/store/login'
import _ from 'lodash'

Object.keys(vantComponents).forEach((component) => {
  Vue.use(vantComponents[component])
})

Vue.config.productionTip = false
Vue.prototype._lodash = _
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
