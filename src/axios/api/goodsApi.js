import ajax from '../index'

// export const login = (url, params = {}) => {
//   return ajax.get(url, params).then((res) => res.data)
// }
export const getGoods = (url, params = {}) => {
  return ajax.get(url, { params: params }).then((res) => res.data)
}
