<!--  -->
<template>
  <div class="home-wrap">
    <header-view></header-view>
    <div class="swiper-wrap">
      <van-swipe autoplay="3000" @change="change">
        <van-swipe-item>
          <img src="~@/assets/images/swipe01.jpeg" alt="swipe01" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="~@/assets/images/swipe02.jpeg" alt="swipe02" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="~@/assets/images/swipe03.jpeg" alt="swipe03" />
        </van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">
            <i
              v-for="index in indicator"
              :key="index"
              :style="{ backgroundColor: index === current ? '#b0352f' : '' }"
            ></i>
          </div>
        </template>
      </van-swipe>
    </div>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import HeaderView from '@/components/Header'
import TabBar from '@/components/TabBar'
export default {
  name: 'HomeView',
  data() {
    return {
      current: 0,
      indicator: [0, 1, 2]
    }
  },

  components: { HeaderView, TabBar },
  methods: {
    change(index) {
      this.current = index
    }
  }
}
</script>
<style lang="scss" scoped>
.swiper-wrap {
  position: relative;
  img {
    width: 100%;
    padding-top: 2px;
  }
  .custom-indicator {
    display: flex;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -10px);
    i {
      display: block;
      width: 6px;
      height: 6px;
      margin: 0 3px;
      border-radius: 100%;
      background-color: #fff;
    }
    z-index: 999;
  }
}
</style>
