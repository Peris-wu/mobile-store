import ajax from '../index'

// export const login = (url, params = {}) => {
//   return ajax.get(url, params).then((res) => res.data)
// }
export const login = (url, params = {}) => {
  return ajax.post(url, params).then((res) => res.data)
}
