import axios from 'axios'
import loginStore from '@/store/login'
import router from '@/router'
import useLoadingStore from '@/store/loading'
import { initUserInfoState, CHANGELOADINGSTATE } from '@/store/actions-type'

const ajax = axios.create({
  url: 'http://localhost:8080',
  timeout: 5000
})
const userStore = loginStore()
const loadingStore = useLoadingStore()
ajax.interceptors.request.use(
  function (config) {
    console.log(config)
    loadingStore[CHANGELOADINGSTATE](true)
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
    loadingStore[CHANGELOADINGSTATE](false)
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
    loadingStore[CHANGELOADINGSTATE](false)
    return Promise.reject(error)
  }
)
export default ajax
