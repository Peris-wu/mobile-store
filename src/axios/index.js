import axios from 'axios'

const ajax = axios.create({
  url: 'http://localhost:8080',
  timeout: 5000
})

ajax.interceptors.request.use(
  function (config) {
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
