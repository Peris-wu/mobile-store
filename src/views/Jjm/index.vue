<!--  -->
<template>
  <div class="jjm-wrap">
    <div class="nav-bar">
      <div class="n-top">
        <van-nav-bar
          class="van-nav-bar-background-color van-nav-bar-icon-color"
          title="茶七网"
          left-arrow
          @click-left="back"
        >
          <!-- <template #left>
          <i class="iconfont icon-xiaoyuhao"></i>
        </template> -->
          <template #right>
            <i class="iconfont icon-home1 f20"></i>
          </template>
        </van-nav-bar>
      </div>
      <div class="n-bottom">
        <van-sticky>
          <van-tabs>
            <van-tab
              v-for="tabItem in tabList"
              :title="tabItem.teaName"
              :key="tabItem.id"
            ></van-tab>
          </van-tabs>
        </van-sticky>
      </div>
    </div>
    <section></section>
    <div>
      <tab-bar></tab-bar>
    </div>
  </div>
</template>

<script>
import TabBar from '@/components/TabBar'
export default {
  name: 'JjmView',
  data() {
    return {
      tabList: [
        {
          id: 1,
          teaName: '金骏眉',
          path: ''
        },
        {
          id: 2,
          teaName: '大红袍',
          path: ''
        },
        {
          id: 3,
          teaName: '铁观音',
          path: ''
        },
        {
          id: 4,
          teaName: '漳平水仙',
          path: ''
        },
        {
          id: 5,
          teaName: '龙井',
          path: ''
        },
        {
          id: 6,
          teaName: '白茶',
          path: ''
        },
        {
          id: 7,
          teaName: '普洱',
          path: ''
        },
        {
          id: 8,
          teaName: '毛峰',
          path: ''
        },
        {
          id: 9,
          teaName: '茉莉花茶',
          path: ''
        },
        {
          id: 10,
          teaName: '正山小种',
          path: ''
        }
      ]
    }
  },

  components: {
    TabBar
  },
  methods: {
    back() {
      console.log(123)
    }
  }
}
</script>
<style lang="scss" scoped>
.jjm-wrap {
  .nav-bar {
    // &::v-deep .van-nav-bar {
    //   background-color: #b0352f;
    // }
    .n-top {
      &::v-deep .van-nav-bar__title {
        color: #fff;
      }
      &::v-deep .van-icon {
        color: #fff;
      }
      .van-nav-bar-background-color {
        background-color: #b0352f;
      }
      .van-nav-bar-icon-color {
        color: #fff !important;
      }
    }
  }
}
</style>
