<!--  -->
<template>
  <div class="my-header">
    <div class="m-left">
      <slot name="left">
        <i class="iconfont icon-xiaoyuhao f20"></i>
      </slot>
    </div>
    <div class="m-search">
      <van-search
        shape="round"
        background="#b0352f"
        :placeholder="placeholder"
        :disabled="disabled"
        @click="handleClick"
      />
    </div>
    <div class="m-right">
      <slot name="right">
        <i class="iconfont icon-home1 f20"></i>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryHeader',
  props: {
    placeholder: {
      type: String,
      default: '请输入'
    },
    disabled: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {}
  },
  components: {},
  methods: {
    handleClick() {
      this.$emit('handleClick')
    }
  }
}
</script>
<style lang="scss" scoped>
.my-header {
  display: flex;
  justify-content: space-between;
  background-color: #b0352f;
  height: 44px;
  .m-left,
  .m-right {
    width: 44px;
    height: 100%;
    line-height: 44px;
    text-align: center;
    color: #fff;
  }
  .m-search {
    display: flex;
    align-items: center;
    flex: 1;
    height: 100%;
    ::v-deep .van-search {
      flex: 1;
      padding: 0;
    }
    ::v-deep .van-cell {
      padding: 2px 8px 2px 0;
    }
  }
}
</style>
