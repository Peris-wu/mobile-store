<!--  -->
<template>
  <div
    class="my-header"
    :style="{ background: isShowBgColor ? '#b0352f' : '' }"
  >
    <div class="m-left">
      <slot name="left">
        <i @click="backPre" class="iconfont icon-xiaoyuhao f20"></i>
      </slot>
    </div>
    <div class="m-search" v-if="needSearch">
      <van-search
        shape="round"
        background="#b0352f"
        :placeholder="placeholder"
        :disabled="disabled"
        @click="handleClick"
        @search="onSearch"
        :show-action="isShowSearch"
        v-model="searchWord"
      >
        <template #action v-if="isShowSearch">
          <slot name="search">
            <div @click="clickSearch" class="van-search-action-text-color">
              搜索
            </div>
          </slot>
        </template>
      </van-search>
    </div>
    <div class="m-right" v-if="!isShowSearch">
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
    },
    isShowSearch: {
      type: Boolean,
      default: false
    },
    needSearch: {
      type: Boolean,
      default: true
    },
    isShowBgColor: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      searchWord: ''
    }
  },
  components: {},
  methods: {
    handleClick() {
      this.$emit('handleClick')
    },
    onSearch(value) {
      this.$emit('onSearch', value)
    },
    clickSearch() {
      this.$emit('onSearch', this.searchWord)
    },
    backPre() {
      this.$router.back()
    }
  }
}
</script>
<style lang="scss" scoped>
.my-header {
  display: flex;
  justify-content: space-between;
  // background-color: #b0352f;
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
    ::v-deep .van-search__action:active {
      background-color: #b53f38;
    }
  }
  .van-search-action-text-color {
    color: #fff;
  }
}
</style>
