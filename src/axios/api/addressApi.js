import ajax from '../index'

// export const login = (url, params = {}) => {
//   return ajax.get(url, params).then((res) => res.data)
// }
export const getAddressList = (url, params = {}) => {
  return ajax.get(url, { params }).then((res) => res.data)
}
export const addAddress = (url, params = {}) => {
  return ajax.post(url, params).then((res) => res.data)
}
export const updateAddress = (url, params = {}) => {
  return ajax.post(url, params).then((res) => res.data)
}
export const deleteAddress = (url, params = {}) => {
  return ajax.post(url, params).then((res) => res.data)
}
// 获取默认地址
export const defaultAddress = (url, params = {}) => {
  return ajax.get(url, { params }).then((res) => res.data)
}
// 设置默认地址
export const _setDefaultAddress = (url, params = {}) => {
  return ajax.post(url, params).then((res) => res.data)
}
