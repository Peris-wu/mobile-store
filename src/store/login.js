import { defineStore } from 'pinia'
import {
  setTokenStorage,
  setLoginState,
  setUserInfoState,
  initUserInfoState
} from './actions-type'
import { _setLocalStorage, _removeLocalStorage } from '@/utils/handleStorage'
import { TOKEN, USERINFO } from '@/utils/storageConst'
const loginStore = defineStore('login', {
  state() {
    return {
      isLogin: false,
      token: '',
      userInfo: null
    }
  },
  getters: {},
  actions: {
    // 将token储存在localStorage
    [setTokenStorage]({ token }) {
      _setLocalStorage(TOKEN, token)
    },
    [setUserInfoState]({ userInfo }) {
      const handleUserInfo = JSON.stringify(userInfo)
      _setLocalStorage(USERINFO, handleUserInfo)
    },
    // 更新loginState状态
    [setLoginState]({ userInfo }) {
      this.isLogin = true
      this.token = userInfo.token
      this.userInfo = userInfo
    },
    [initUserInfoState]() {
      _removeLocalStorage(TOKEN)
      _removeLocalStorage(USERINFO)
      this.$patch({
        isLogin: false,
        token: '',
        userInfo: null
      })
    }
  }
})
export default loginStore
