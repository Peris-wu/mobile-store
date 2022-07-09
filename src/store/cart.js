import { defineStore } from 'pinia'
import {
  INITCARTLIST,
  CHECKEDALLSTATE,
  ALLCHECKEDCHANGE,
  DELETEBATCH,
  DELETESINGLEGOODS
} from '@/store/actions-type'

const cartStore = defineStore('cart', {
  state: () => {
    return {
      cartList: [],
      allChecked: true
    }
  },
  getters: {},
  actions: {
    [INITCARTLIST](payLoad) {
      this.cartList = payLoad
    },
    [CHECKEDALLSTATE]() {
      this.cartList.find((cartItem) => {
        if (!cartItem.checked) {
          this.allChecked = false
          return true
        }
        this.allChecked = true
        return false
      })
    },
    [ALLCHECKEDCHANGE]() {
      this.cartList.forEach((cartItem) => {
        cartItem.checked = this.allChecked
      })
    },
    [DELETEBATCH]() {
      // 获取被删除商品的id
      const beDeleteArr = this.cartList
        .filter((cartItem) => {
          return cartItem.checked
        })
        .map((cartItem) => {
          return cartItem.id
        })
      // 删除勾选的商品
      this.cartList = this.cartList.filter((cartItem) => {
        return !cartItem.checked
      })
      return beDeleteArr
    },
    [DELETESINGLEGOODS](deleteIndex) {
      this.cartList.splice(deleteIndex, 1)
    }
  }
})
export default cartStore
