<!--  -->
<template>
  <div
    ref="bsRef"
    class="bscroll-wrap"
    :style="{
      width: width ? `${width}px` : '100%',
      height: height ? `${height}px` : '100%'
    }"
  >
    <div
      :style="{
        display: isScrollX ? 'inline-flex' : ''
      }"
    >
      <slot name="bScroll"></slot>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
export default {
  name: 'BetterScroll',
  props: {
    width: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: ''
    },
    isScrollX: {
      type: Boolean,
      default: false
    },
    isScrollY: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      bs: null
    }
  },

  components: {},
  mounted() {
    this.bs = new BScroll(this.$refs.bsRef, {
      scrollX: this.isScrollX,
      scrollY: this.isScrollY
    })
  },
  destroyed() {
    this.bs.destroy()
  }
}
</script>
<style lang="scss" scoped>
.bscroll-wrap {
  overflow: hidden;
  img {
    width: 100%;
  }
}
</style>
