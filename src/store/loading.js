import { defineStore } from 'pinia'
import { CHANGELOADINGSTATE } from '@/store/actions-type'
const loadingStore = defineStore('loading', {
  state: () => {
    return {
      isShow: false
    }
  },
  getters: {},
  actions: {
    [CHANGELOADINGSTATE](payload) {
      this.isShow = payload
    }
  }
})
export default loadingStore
