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
export const defaultAddress = (url, params = {}) => {
  return ajax.get(url, { params }).then((res) => res.data)
}
