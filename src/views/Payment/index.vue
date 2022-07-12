<!--  -->
<template>
  <div class="payment">
    <all-header>
      <template #left>
        <i class="iconfont icon-xiaoyuhao color-fff f20"></i>
      </template>
      <template #center>
        <span class="color-fff">提交订单</span>
      </template>
      <template #right>
        <i class="iconfont icon-home1 color-fff f24"></i>
      </template>
    </all-header>
    <div class="receive-goods-info">
      <div class="pt8 pb8 pl15 pr15 f14">收货信息:</div>
      <div class="address-info">
        <div class="f12">
          <div class="mb10">
            <span>{{ addressInfo.user_name }}</span>
            <span class="pl5">{{ addressInfo.user_tel }}</span>
          </div>
          <div class="address-detail">{{ addressInfo.user_address }}</div>
        </div>
        <div>
          <i class="iconfont icon-youjiantou color-s9 f20"></i>
        </div>
      </div>
    </div>
    <!-- 支付方式 s -->
    <div class="payment-way">
      <div class="f14 pb10">
        <span>支付方式:</span>
        <span class="color-red pl10">选择在线支付，随机减0-100元</span>
      </div>
      <div class="select-way">
        <ul>
          <li
            v-for="(paymentItem, index) in paymentList"
            :key="paymentItem.id"
            @click="selectPayWay(index)"
            :class="{ active: index === paymentWay }"
          >
            {{ paymentItem.text }}
          </li>
        </ul>
      </div>
    </div>
    <!-- 支付方式 e -->
    <!-- 购买的商品 s -->
    <div class="goods-list">
      <ul>
        <li v-for="item in checkedGoods" :key="item.id">
          <div class="left">
            <img :src="require(`@/assets/images/${item.goods_img_url}`)" />
          </div>
          <div class="right">
            <span class="f12">{{ item.goods_name }}</span>
            <div>
              <div class="mb5 f12 color-t9">
                <span>规格: 无</span>
              </div>
              <div class="f14 flex-justify-between">
                <span class="color-red">￥{{ item.goods_price }}</span>
                <span>x {{ item.goods_sum }}</span>
              </div>
            </div>
          </div>
        </li>
        <div class="goods-sum">
          <span>合计:</span>
          <span class="color-red" v-if="checkedGoods.length > 0">
            ￥{{ result_price }}
          </span>
        </div>
      </ul>
    </div>
    <!-- 购买的商品 e -->
    <!-- 底部提交订单 s -->
    <div class="payment-bottom">
      <div class="goods-number-price">
        共
        <span class="f14 color-red pl5 pr5">{{ result_sum }}</span>
        件，总金额：
        <span class="f18 color-red">￥{{ result_price }}</span>
      </div>
      <div class="sub-btn">提交订单</div>
    </div>
    <!-- 底部提交订单 e -->
  </div>
</template>

<script>
import AllHeader from '@/components/AllHeader'
import { defaultAddress } from '@/axios/api/addressApi'
import { _showGoodsById } from '@/axios/api/cartApi'
export default {
  name: 'PaymentView',
  data() {
    this.paymentList = [
      {
        id: 1,
        text: '货到付款'
      },
      {
        id: 2,
        text: '微信付款'
      },
      {
        id: 3,
        text: '支付宝'
      }
    ]
    return {
      paymentWay: 0,
      addressInfo: {},
      checkedGoods: []
    }
  },
  components: { AllHeader },
  computed: {
    result_price() {
      let price = 0
      this.checkedGoods.forEach((item) => {
        price += item.goods_sum * item.goods_price
      })
      return price
    },
    result_sum() {
      let sum = 0
      this.checkedGoods.forEach((item) => {
        sum += item.goods_sum
      })
      return sum
    }
  },
  methods: {
    selectPayWay(index) {
      this.paymentWay = index
    },
    async initDefaultAddress() {
      try {
        const { data } = await defaultAddress('/api/address/default-address')
        this.addressInfo = data
      } catch (e) {
        console.log(e.message)
      }
    },
    async initPaymentGoodsList(selectGoodsArr) {
      const { data } = await _showGoodsById('/api/cart/show-data-by-id', {
        selectTarget: JSON.parse(selectGoodsArr)
      })
      this.checkedGoods = data
    }
  },
  mounted() {
    this.initDefaultAddress()
    this.initPaymentGoodsList(this.$route.query.beCheckedArr)
  }
}
</script>
<style lang="scss" scoped>
.payment {
  height: 100vh;
  background-color: #f5f5f5;
  .receive-goods-info {
    margin-bottom: 10px;
    .address-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 15px;
      background-color: #fff;
    }
  }
  .payment-way {
    padding: 12px 15px;
    background-color: #fff;
    margin-bottom: 10px;
    .select-way {
      ul {
        display: flex;
        li {
          padding: 0 4px;
          margin-right: 10px;
          line-height: 30px;
          font-size: 14px;
          border: 2px solid transparent;
        }
        .active {
          border: 2px solid #b0352f;
        }
      }
    }
  }
  .goods-list {
    background-color: #fff;
    ul {
      li {
        display: flex;
        padding: 13px 15px;
        border: 1px solid #e8e8e8;
        .left {
          width: 74px;
          height: 74px;
          img {
            width: 100%;
          }
        }
        .right {
          display: flex;
          flex: 1;
          padding-left: 10px;
          flex-direction: column;
          justify-content: space-between;
        }
      }
      .goods-sum {
        padding: 10px 15px;
        text-align: right;
      }
    }
  }
  .payment-bottom {
    position: fixed;
    width: 100%;
    height: 45px;
    left: 0;
    bottom: 0;
    display: flex;
    background-color: #fff;
    justify-content: space-between;
    .goods-number-price {
      display: flex;
      flex: 1;
      align-items: center;
      padding-left: 15px;
      font-size: 12px;
    }
    .sub-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 120px;
      background-color: #b0352f;
      color: #fff;
      font-size: 18px;
    }
  }
}
</style>
