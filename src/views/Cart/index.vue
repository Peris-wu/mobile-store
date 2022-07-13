<!--  -->
<template>
  <div class="cart">
    <cart-header :needSearch="false">
      <template #center>
        <span class="color-fff">购物车</span>
      </template>
      <template #right>
        <span @click="changeEdit" v-show="isEdit">编辑</span>
        <span @click="changeEdit" v-show="!isEdit">完成</span>
      </template>
    </cart-header>
    <div class="cart-content bgc-fff">
      <div class="cart-title">
        <van-checkbox
          v-model="cartStore.allChecked"
          @click="allChangeChecked"
        ></van-checkbox>
        <div class="title-font pl20">商品</div>
      </div>
      <div class="goods-list">
        <ul>
          <li
            v-for="(cartItem, index) in cartStore.cartList"
            :key="cartItem.id"
          >
            <div class="goods-checked-icon">
              <van-checkbox
                @click="changeChecked"
                v-model="cartItem.checked"
              ></van-checkbox>
            </div>
            <div class="goods-pic pl20">
              <img
                :src="require(`@/assets/images/${cartItem.goods_img_url}`)"
              />
            </div>
            <div class="goods-operate pl10">
              <div class="goods-name f12">{{ cartItem.goods_name }}</div>
              <div class="goods-price color-red f14">
                <span>￥</span>
                <span>{{ cartItem.goods_price }}</span>
              </div>
              <div class="rubbish">
                <i
                  class="iconfont icon-lajitong f24"
                  @click="deleteSingleGood(cartItem, index)"
                ></i>
              </div>
              <div class="stepper">
                <van-stepper
                  @change="changeGoodsSum($event, cartItem)"
                  v-model="cartItem.goods_sum"
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 去结算 s -->
    <div class="pay-bill">
      <van-checkbox v-model="cartStore.allChecked"></van-checkbox>
      <div class="centerInfo f12 pt5 pl10">
        <div v-if="isEdit" class="calculate">
          <span>
            共有
            <span class="f14 pl5 pr5 color-red">{{ goods_sum }}</span>
            件商品
          </span>
          <span class="pt5">
            总计：
            <span class="f14 color-red">￥{{ goods_price_sum }}</span>
          </span>
        </div>
      </div>
      <div class="pay-btn">
        <van-button
          type="danger"
          v-show="isEdit"
          :disabled="
            (cartStore.cartList && cartStore.cartList.length === 0) ||
            isCheckedGood === -1
          "
          @click="toPayment"
        >
          去结算
        </van-button>
        <van-button @click="deleteGoods" type="danger" v-show="!isEdit">
          删除
        </van-button>
      </div>
    </div>
    <!-- 去结算 e -->
  </div>
</template>

<script>
import CartHeader from '@/components/CategoryHeader'
import useCartStore from '@/store/cart'
import useOrderStore from '@/store/order'
import { getCartList, _addGood, _deleteGoods } from '@/axios/api/cartApi'
import { createOrder } from '@/axios/api/orderApi'
import _ from 'lodash'
import {
  INITCARTLIST,
  CHECKEDALLSTATE,
  ALLCHECKEDCHANGE,
  CHECKEDADDRESS,
  DELETESINGLEGOODS,
  BECHECKEDGOODS,
  ORDER_ID
} from '@/store/actions-type'
export default {
  name: 'CartView',
  data() {
    return {
      checked: true,
      cartStore: useCartStore(),
      orderStore: useOrderStore(),
      handleDebounce: '',
      isEdit: true
    }
  },
  computed: {
    isCheckedGood() {
      return this.cartStore.cartList?.findIndex((cartItem) => {
        return cartItem.checked
      })
    },
    goods_sum() {
      let goodsSum = 0
      this.cartStore.cartList?.forEach((cartItem) => {
        if (cartItem.checked) {
          goodsSum += cartItem.goods_sum
        }
      })
      return goodsSum
    },
    goods_price_sum() {
      let goodsPriceSum = 0
      this.cartStore.cartList?.forEach((cartItem) => {
        if (cartItem.checked) {
          goodsPriceSum += cartItem.goods_sum * cartItem.goods_price
        }
      })
      return goodsPriceSum
    }
  },
  components: { CartHeader },
  methods: {
    async toPayment() {
      try {
        // 被选中的商品信息列表
        const beCheckedGoodsList = this.cartStore[BECHECKEDGOODS]()
        //被选中的商品id
        const beCheckedArr = beCheckedGoodsList.map((item) => {
          return item.id
        })
        console.log(beCheckedGoodsList)
        const { orderId } = await createOrder('/api/order/add-order', {
          selectGoodsList: beCheckedGoodsList
        })
        this.orderStore[ORDER_ID](orderId)
        this.$router.push({
          path: '/payment',
          query: {
            beCheckedArr: JSON.stringify(beCheckedArr)
          }
        })
      } catch (e) {
        console.log(e.message)
      }
    },
    async deleteSingleGood(cartItem, index) {
      try {
        this.cartStore[DELETESINGLEGOODS](index)
        await _deleteGoods('/api/cart/delete-goods', {
          deleteTarget: [cartItem.id]
        })
      } catch (e) {
        console.log(e.message)
      }
    },
    async deleteGoods() {
      try {
        const beCheckedArr = this.cartStore[CHECKEDADDRESS]()
        await _deleteGoods('/api/cart/delete-goods', {
          deleteTarget: beCheckedArr
        })
      } catch (e) {
        console.log(e.message)
      }
    },
    changeEdit() {
      this.isEdit = !this.isEdit
    },
    changeGoodsSum(goods_sum, cartItem) {
      this.handleDebounce(goods_sum, cartItem.goods_id)
    },
    async addGood(goods_sum, goods_id) {
      try {
        await _addGood('/api/cart/add-goods', {
          goods_sum,
          goods_id
        })
      } catch (e) {
        console.log(e.message)
      }
    },
    allChangeChecked() {
      this.cartStore[ALLCHECKEDCHANGE]()
    },
    changeChecked() {
      this.cartStore[CHECKEDALLSTATE]()
    },
    async initCart() {
      try {
        const { data } = await getCartList('/api/cart/data')
        data?.forEach((cartItem) => {
          this.$set(cartItem, 'checked', true)
        })
        this.cartStore[INITCARTLIST](data)
        this.changeChecked()
      } catch (err) {
        console.log(err)
      }
    }
  },
  mounted() {
    this.initCart()
    this.handleDebounce = _.debounce((goods_sum, goods_id) => {
      this.addGood(goods_sum, goods_id)
    }, 300)
  }
}
</script>
<style lang="scss" scoped>
.cart {
  background-color: #f5f5f5;
  .cart-content {
    .cart-title {
      display: flex;
      padding: 10px 13px;
      border-bottom: 1px solid #e8e8e8;
      .title-font {
        display: flex;
        align-items: center;
        font-weight: 600;
        height: 50px;
      }
    }
    .goods-list {
      ul {
        li {
          display: flex;
          align-items: center;
          box-sizing: border-box;
          padding: 10px 13px;
          height: 97px;
          border-bottom: 1px solid #e8e8e8;
          &:last-child {
            border-bottom: none;
          }
          .goods-checked-icon {
          }
          .goods-pic {
            width: 76px;
            height: 76px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .goods-operate {
            position: relative;
            flex: 1;
            height: 100%;
            .goods-name {
              height: 34px;
            }
            .goods-price {
            }
            .rubbish {
              position: absolute;
              top: -5px;
              right: 0;
            }
            .stepper {
              position: absolute;
              bottom: 0;
              right: 3px;
            }
          }
        }
      }
    }
  }
}
.pay-bill {
  display: flex;
  position: fixed;
  align-items: center;
  box-sizing: border-box;
  bottom: 0;
  height: 45px;
  width: 100%;
  padding-left: 13px;
  background-color: #fff;
  .centerInfo {
    flex: 1;
    .calculate {
      display: flex;
      flex-direction: column;
    }
  }

  .pay-btn {
    width: 120px;
    ::v-deep .van-button {
      width: 100%;
    }
  }
}
::v-deep .van-checkbox__icon--checked .van-icon {
  background-color: #b0352f;
  border: none;
}
::v-deep .van-button--danger {
  background-color: #b0352f;
  border: none;
}
</style>
