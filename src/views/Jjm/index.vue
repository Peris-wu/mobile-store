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
          <van-tabs
            @click="triggerPage"
            v-model="currentTab"
            color="#b0352f"
            title-active-color="#b0352f"
          >
            <van-tab
              v-for="tabItem in tabList"
              :title="tabItem.teaName"
              :key="tabItem.id"
            ></van-tab>
          </van-tabs>
        </van-sticky>
      </div>
    </div>
    <section>
      <router-view></router-view>
    </section>
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
          path: '/jjm'
        },
        {
          id: 2,
          teaName: '大红袍',
          path: '/jjm/dhp'
        },
        {
          id: 3,
          teaName: '铁观音',
          path: '/jjm/tgy'
        },
        {
          id: 4,
          teaName: '漳平水仙',
          path: '/jjm/zpsx'
        },
        {
          id: 5,
          teaName: '龙井',
          path: '/jjm/lj'
        },
        {
          id: 6,
          teaName: '白茶',
          path: '/jjm/bc'
        },
        {
          id: 7,
          teaName: '普洱',
          path: '/jjm/pe'
        },
        {
          id: 8,
          teaName: '毛峰',
          path: '/jjm/mf'
        },
        {
          id: 9,
          teaName: '茉莉花茶',
          path: '/jjm/mlhc'
        },
        {
          id: 10,
          teaName: '正山小种',
          path: '/jjm/zsxz'
        }
      ]
    }
  },

  components: {
    TabBar
  },
  methods: {
    back() {},
    triggerPage(index) {
      this.$router.push({
        path: this.tabList[index].path
      })
    }
  },
  computed: {
    currentTab() {
      let index = this.tabList.findIndex((item) => {
        return item.path === this.$route.path
      })
      return index
    }
  },
  mounted() {
    console.log(this.$route)
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
    .n-bottom {
      ::v-deep .van-tab {
        font-size: 16px;
      }
    }
  }
}
</style>
