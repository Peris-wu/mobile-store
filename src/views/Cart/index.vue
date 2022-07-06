<!--  -->
<template>
  <div class="cart">
    <cart-header :needSearch="false">
      <template #center>
        <span class="color-fff">购物车</span>
      </template>
      <template #right>
        <span>编辑</span>
      </template>
    </cart-header>
    <div class="cart-content bgc-fff">
      <div class="cart-title">
        <van-checkbox v-model="checked"></van-checkbox>
        <div class="title-font pl20">商品</div>
      </div>
      <div class="goods-list">
        <ul>
          <li>
            <div class="goods-checked-icon">
              <van-checkbox v-model="checked"></van-checkbox>
            </div>
            <div class="goods-pic pl20">
              <img src="~@/assets/images/c-zsxz.jpeg" />
            </div>
            <div class="goods-operate pl10">
              <div class="goods-name f12">新工艺正山小种3号</div>
              <div class="goods-price color-red f14">
                <span>￥</span>
                <span>99.00</span>
              </div>
              <div class="rubbish">
                <i class="iconfont icon-lajitong f24"></i>
              </div>
              <div class="stepper">
                <van-stepper v-model="value" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 去结算 s -->
    <div class="pay-bill">
      <van-checkbox v-model="checked"></van-checkbox>
      <div class="caculate f12 pt5 pl10">
        <span>
          共有
          <span class="pl5 pr5 color-red">1</span>
          件商品
        </span>
        <span class="pt5">
          总计：
          <span class="color-red">￥99.00</span>
        </span>
      </div>
      <div>
        <van-button type="danger">去结算</van-button>
      </div>
    </div>
    <!-- 去结算 e -->
  </div>
</template>

<script>
import CartHeader from '@/components/CategoryHeader'
export default {
  name: 'CartView',
  data() {
    return {
      checked: true,
      value: 1
    }
  },

  components: { CartHeader }
}
</script>
<style lang="scss" scoped>
.cart {
  background-color: #f5f5f5;
  .cart-content {
    border-bottom: 1px solid #e8e8e8;
    .cart-title {
      display: flex;
      padding: 10px 13px;
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
          .goods-checked-icon {
          }
          .goods-pic {
            width: 76px;
            height: 76px;
            img {
              width: 100%;
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
  .caculate {
    display: flex;
    flex-direction: column;
    flex: 1;
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
