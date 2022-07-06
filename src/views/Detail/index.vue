<!--  -->
<template>
  <div class="detail-wrap">
    <div class="header">
      <header
        class="header-status-one"
        v-show="!isHeaderSwitch"
        :style="opacityOptionOne"
      >
        <i class="iconfont icon-zuojiantou"></i>
        <i class="iconfont icon-home1" @click="backHome"></i>
      </header>
      <header
        class="header-status-two"
        v-show="isHeaderSwitch"
        :style="opacityOptionTwo"
      >
        <i class="iconfont icon-zuojiantou"></i>
        <span>商品详情</span>
        <i class="iconfont icon-home1"></i>
      </header>
    </div>
    <div class="detail" ref="bscrollRef">
      <div class="scroll-wrap">
        <div class="swiper">
          <van-swipe @change="onChangeSwiper" autoplay="2500">
            <van-swipe-item
              v-for="swiperItem in swiperList"
              :key="swiperItem.id"
            >
              <div>
                <img :src="swiperItem.imgUrl" />
              </div>
            </van-swipe-item>
            <template #indicator>
              <div class="custom-indicator color-fff">
                {{ current + 1 }}/{{ swiperList.length }}
              </div>
            </template>
          </van-swipe>
        </div>
        <div class="title-des bgc-fff">
          <span class="f18">{{ goodsInfo.goods_name }}</span>
          <span class="f14 color-t9 pt10">{{ goodsInfo.goods_des }}</span>
          <div class="line-w mt15"></div>
        </div>
        <div class="price bgc-fff">
          <div class="color-D22531">
            <span class="f15">￥</span>
            <span class="f28">128</span>
            <span class="pl5 pr5 color-949494">/</span>
            <span class="f15 color-949494">250g</span>
          </div>
          <div class="color-949494 f13 pt7">
            <span>价格</span>
            <span class="txt-line-through">￥218</span>
          </div>
        </div>
        <div class="discount-act-server mt10 bgc-fff">
          <div class="discount">
            <van-coupon-cell
              :coupons="coupons"
              :chosen-coupon="chosenCoupon"
              @click="showPopup"
            />
            <!-- 优惠券列表 -->
            <van-popup
              v-model="showList"
              round
              position="bottom"
              style="height: 90%; padding-top: 4px"
            >
              <van-coupon-list
                :coupons="coupons"
                :chosen-coupon="chosenCoupon"
                :disabled-coupons="disabledCoupons"
                @change="onChange"
                @exchange="onExchange"
              />
            </van-popup>
          </div>
          <div class="activity">
            <van-cell title="活动" value="内容" is-link />
          </div>
          <div class="server">
            <van-cell title="服务" value="内容" is-link />
          </div>
        </div>
        <div class="goods_detail mt10">
          <img
            v-for="img in goodsInfo.picArr"
            :key="img.id"
            :src="require(`@/assets/images/${img.pic_url}`)"
          />
        </div>
      </div>
    </div>
    <div class="cart">
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
        <van-goods-action-icon
          icon="cart-o"
          text="购物车"
          :badge="goods_sum ? goods_sum : ''"
          @click="navigateToCart"
        />
        <van-goods-action-icon icon="star-o" text="已收藏" color="#ff5000" />
        <van-goods-action-button
          type="warning"
          text="加入购物车"
          @click="addGoods()"
        />
        <van-goods-action-button type="danger" text="立即购买" />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
// addGoods
import { getGoods, addGoods } from '@/axios/api/goodsApi'
import BScroll from '@better-scroll/core'
import dSwiper01 from '@/assets/images/d-swiper01.jpeg'
import dSwiper02 from '@/assets/images/d-swiper02.jpeg'
import dSwiper03 from '@/assets/images/d-swiper03.jpeg'
import dSwiper04 from '@/assets/images/d-swiper04.jpeg'
import dSwiper05 from '@/assets/images/d-swiper05.jpeg'
import dSwiper06 from '@/assets/images/d-swiper06.jpeg'
import { Notify } from 'vant'
// import dTgy02 from '@/assets/images/d-tgy02.jpg'
// import dGoodsCs from '@/assets/images/d-goods-cs.jpg'

const coupon = {
  available: 1,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 150,
  name: '优惠券名称',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '1.5',
  unitDesc: '元'
}
export default {
  name: 'DetailView',
  data() {
    return {
      goodsInfo: {},
      goods_sum: 0,
      showList: false,
      opacityOptionOne: {},
      opacityOptionTwo: {},
      current: 0,
      isHeaderSwitch: false,
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      swiperList: [
        {
          id: 1,
          imgUrl: dSwiper01
        },
        {
          id: 2,
          imgUrl: dSwiper02
        },
        {
          id: 3,
          imgUrl: dSwiper03
        },
        {
          id: 4,
          imgUrl: dSwiper04
        },
        {
          id: 5,
          imgUrl: dSwiper05
        },
        {
          id: 6,
          imgUrl: dSwiper06
        }
      ],
      handleDebounce: ''
    }
  },
  components: {},
  methods: {
    navigateToCart() {
      this.$router.push('/cart')
    },
    addGoods() {
      this.goods_sum += 1
      this.handleDebounce()
      // const result = await addGoods('/api/cart/addGoods', params)
    },
    backHome() {
      this.$router.push('/')
    },
    showPopup() {
      this.showList = true
    },
    onChange(index) {
      this.showList = false
      this.chosenCoupon = index
    },
    onExchange(code) {
      console.log(code)
      this.coupons.push(coupon)
    },
    onChangeSwiper(index) {
      this.current = index
    },
    async initGoodsInfo() {
      try {
        const result = await getGoods('/api/goods/detail', {
          goods_id: this.$route.params.id
        })
        this.goodsInfo = result.data
      } catch (e) {
        console.log(e)
      }
    }
  },
  mounted() {
    //
    this.handleDebounce = this._lodash.debounce(async function () {
      const params = {
        goods_id: this.goodsInfo.id,
        goods_sum: this.goods_sum
      }
      const res = await addGoods('/api/cart/add-goods', params)
      console.log(res)
      if (res.code === 0) {
        Notify({
          type: 'success',
          message: '添加成功'
        })
      }
    }, 300)

    this.initGoodsInfo()

    setTimeout(() => {
      this.bscroll = new BScroll(this.$refs.bscrollRef, {
        scrollY: true,
        probeType: 3,
        bounce: false,
        disableMouse: false,
        disableTouch: false,
        mouseWheel: true,
        click: true
      })
      this.bscroll.on('scroll', ({ y }) => {
        const handleY = Math.abs(y)
        let opacityOptionOne = (15 / handleY).toFixed(2)
        let opacityOptionTwo = handleY / 300
        opacityOptionOne <= 0.2 ? 0 : opacityOptionOne
        opacityOptionTwo > 1 ? 1 : opacityOptionTwo
        this.opacityOptionOne = {
          opacity: opacityOptionOne
        }
        this.opacityOptionTwo = {
          opacity: opacityOptionTwo
        }

        if (handleY > 80) {
          this.isHeaderSwitch = true
        } else {
          this.isHeaderSwitch = false
        }
      })
    }, 300)
  }
}
</script>
<style lang="scss" scoped>
.detail-wrap {
  overflow: hidden;
  .header {
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 1;
    .header-status-one {
      display: flex;
      justify-content: space-between;
      padding: 0 10px;
      opacity: 1;
      i {
        font-size: 28px;
      }
    }
    .header-status-two {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
      transition: all 0.5s;
      opacity: 0;
      background-color: #fff;
      i {
        font-size: 28px;
      }
    }
  }
  .detail {
    height: 100vh;
    .scroll-wrap {
      background-color: #f5f5f5;
      padding-bottom: 50px;

      .swiper {
        img {
          width: 100%;
        }
      }
      .title-des {
        display: flex;
        flex-direction: column;
        padding: 11.25px;
      }
      .price {
        display: flex;
        flex-direction: column;
        padding: 0 11.25px 11.25px;
      }
      .discount-act-server {
        padding-left: 11.25px;
      }
      .goods_detail {
        background-color: #fff;
        padding: 10px;
        img {
          width: 100%;
        }
      }
    }
  }
}
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
}
</style>
