<template>
  <div id="app">
    <!-- <transition name="test">
    </transition> -->
    <router-view></router-view>
    <div class="loading" v-show="loadingStore.isShow">
      <van-loading type="spinner" color="#1989fa"></van-loading>
    </div>
  </div>
</template>
<script>
import useLoadingStore from '@/store/loading'
export default {
  name: 'App',
  data() {
    return {
      loadingStore: useLoadingStore()
    }
  }
}
</script>
<style scoped lang="scss">
.loading {
  position: fixed;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
}
</style>
