<!--  -->
<template>
  <header>
    <div class="left" :style="{ width: `${leftWidth}px` }">
      <slot name="left">
        <i class="iconfont icon-xiaoyuhao"></i>
      </slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AllHeader',
  props: {
    leftWidth: {
      type: Number || String,
      default: 44
    }
  },
  data() {
    return {}
  },

  components: {}
}
</script>
<style lang="scss" scoped>
header {
  display: flex;
  background-color: #b0352f;
  .left {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 44px;
  }
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
  }
  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 44px;
    height: 44px;
  }
}
</style>
