import ajax from '../index'
import qs from 'qs'

// export const login = (url, params = {}) => {
//   return ajax.get(url, params).then((res) => res.data)
// }
export const createOrder = (url, params = {}) => {
  return ajax.post(url, params).then((res) => res.data)
}
export const subOrder = (url, params = {}) => {
  return ajax.post(url, qs.stringify(params)).then((res) => res.data)
}
export const payment = (url, params = {}) => {
  return ajax
    .post(url, qs.stringify(params), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then((res) => res.data)
}
export const getOrder = (url, params = {}) => {
  return ajax.post(url, params).then((res) => res.data)
}
export const getTradeStatus = (url, params = {}) => {
  return ajax.post(url, params).then((res) => res.data)
}
