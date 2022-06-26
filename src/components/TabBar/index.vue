<!--  -->
<template>
  <div class="tab-bar-wrap">
    <ul>
      <li
        v-for="(iconItem, index) in tabBarList"
        @click="navigateTo(iconItem.path)"
        :key="index"
        :style="{ color: iconItem.path === $route.path ? 'red' : '' }"
      >
        <i :class="['iconfont', ...iconItem.className]" class="f24"></i>
        <span>{{ iconItem.text }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  data() {
    this.tabBarList = [
      {
        text: '首页',
        className: ['icon-home'],
        path: '/'
      },
      {
        text: '分类',
        className: ['icon-category'],
        path: '/category'
      },
      {
        text: '购物车',
        className: ['icon-cart'],
        path: '/cart'
      },
      {
        text: '我的',
        className: ['icon-my'],
        path: '/my'
      }
    ]
    return {}
  },
  components: {},
  methods: {
    navigateTo(path) {
      let routeInfo = this.$route
      if (path === routeInfo.path) return
      this.$router.replace({
        path
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.tab-bar-wrap {
  position: fixed;
  width: 100%;
  bottom: 0;
  background-color: #fff;
  z-index: 999;
  ul {
    display: flex;
    justify-content: space-around;
    li {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      flex: 1;
      span {
        font-size: 14px;
      }
    }
  }
}
</style>
