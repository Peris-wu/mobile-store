<!--  -->
<template>
  <div>
    404 NotFound
    <div class="test" ref="bsRef">
      <div>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <van-sticky :offset-top="50">
          <van-button>按钮</van-button>
        </van-sticky>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
      </div>
    </div>
  </div>
</template>

<script>
// import BScroll from '@better-scroll/core'
export default {
  name: 'NotFound',
  data() {
    return {
      bScroll: null
    }
  },
  components: {},
  mounted() {
    // this.bScroll = new BScroll(this.$refs.bsRef, {
    //   scrollY: true,
    //   probeType: 3
    // })
    // this.bScroll.on('scroll', (pos) => {
    //   console.log(pos)
    // })
  }
}
</script>
<style lang="scss" scoped>
.test {
  height: 300px;
  overflow: scroll;
  border: 1px solid red;
}
</style>
