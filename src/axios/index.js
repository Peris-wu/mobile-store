import axios from 'axios'
import loginStore from '@/store/login'

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
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)
export default ajax
