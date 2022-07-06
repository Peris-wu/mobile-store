import ajax from '../index'

// export const login = (url, params = {}) => {
//   return ajax.get(url, params).then((res) => res.data)
// }
export const getGoods = (url, params = {}) => {
  return ajax.get(url, { params: params }).then((res) => res.data)
}

// 加入购物车
export const addGoods = (url, params = {}) => {
  return ajax.post(url, params).then((res) => res.data)
}
