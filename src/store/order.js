import { defineStore } from 'pinia'
import { ORDERID } from '@/utils/storageConst'
import { ORDER_ID } from '@/store/actions-type'
import { _setLocalStorage, _getLocalStorage } from '@/utils/handleStorage'
const orderStore = defineStore('order', {
  state: () => {
    return {
      orderId: _getLocalStorage(ORDERID) || ''
    }
  },
  getters: {},
  actions: {
    [ORDER_ID](payload) {
      this.orderId = payload
      _setLocalStorage(ORDERID, payload)
    }
  }
})
export default orderStore
