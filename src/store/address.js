import { defineStore } from 'pinia'
import { INITADDRESSLIST } from '@/store/actions-type'
const addressStore = defineStore('address', {
  state: () => {
    return {
      addressList: []
    }
  },
  getters: {},
  actions: {
    [INITADDRESSLIST](payload) {
      this.addressList = payload
    }
  }
})
export default addressStore
