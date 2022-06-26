<!--  -->
<template>
  <div class="header-wrap">
    <header>
      <div class="logo-wrap">
        <img src="~@/assets/images/logo.png" alt="logo" />
      </div>
      <div class="search-wrap">
        <van-search
          shape="round"
          background="#b0352f"
          placeholder="猜您喜欢的"
          disabled
          @click="toSearchPage"
        />
      </div>
      <i class="iconfont icon-24gl-headset icon-color"></i>
    </header>
    <div>
      <van-tabs @click="navigateTo">
        <van-tab
          v-for="item in headerTabs"
          :title="item.title"
          :key="item.id"
        ></van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderView',
  data() {
    return {
      headerTabs: [
        {
          id: 1,
          title: '推荐',
          path: '/'
        },
        {
          id: 2,
          title: '金骏眉',
          path: '/jjm'
        },
        {
          id: 3,
          title: '大红袍',
          path: '/jjm/dhp'
        },
        {
          id: 4,
          title: '铁观音',
          path: '/jjm/tgy'
        },
        {
          id: 5,
          title: '绿茶',
          path: '/jjm/lc'
        },
        {
          id: 6,
          title: '紫砂壶',
          path: '/jjm/zsh'
        },
        {
          id: 7,
          title: '漳平水仙',
          path: '/jjm/zpsx'
        },
        {
          id: 8,
          title: '普洱',
          path: '/jjm/pe'
        },
        {
          id: 9,
          title: '正山小种',
          path: '/jjm/zsxz'
        }
      ]
    }
  },
  components: {},
  methods: {
    toSearchPage() {
      console.log(123)
    },
    navigateTo(index) {
      this.$router.push({
        path: this.headerTabs[index].path
      })
    }
  }
}
</script>
<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 44px;
  padding: 0 20px;
  background-color: #b0352f;
  .logo-wrap {
    display: flex;
    align-items: center;
    width: 85px;
    img {
      width: 100%;
    }
  }
  .icon-color {
    color: #fff;
  }
  .search-wrap {
    flex: 1;
    ::v-deep .van-search {
      padding: 0 10px;
    }
    ::v-deep .van-search__content {
      width: 100%;
    }
  }
}
</style>
