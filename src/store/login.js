import { defineStore } from 'pinia'
import {
  setTokenStorage,
  setLoginState,
  setUserInfoState
} from './actions-type'
import { _setLocalStorage } from '@/utils/handleStorage'
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
    }
  }
})
export default loginStore
