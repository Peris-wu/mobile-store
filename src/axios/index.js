import axios from 'axios'
import loginStore from '@/store/login'
import router from '@/router'
import { initUserInfoState } from '@/store/actions-type'

const ajax = axios.create({
  url: 'http://localhost:8080',
  timeout: 5000
})
const userStore = loginStore()
ajax.interceptors.request.use(
  function (config) {
    if (userStore.token) {
      config.headers.token = userStore.token
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

ajax.interceptors.response.use(
  function (response) {
    if (response.data.code === 11) {
      const useLoginState = loginStore()

      useLoginState[initUserInfoState]()
      router.push({
        path: '/login'
      })
    }
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)
export default ajax
