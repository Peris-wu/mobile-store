<!--  -->
<template>
  <div class="address-manage">
    <all-header>
      <template #left>
        <i class="iconfont icon-xiaoyuhao color-fff"></i>
      </template>
      <template #center>
        <span>我的地址</span>
      </template>
    </all-header>
    <section class="address-list">
      <ul>
        <li>
          <div class="address-info">
            <div class="pt5">
              <span>peris</span>
              <span class="pl20">13225878569</span>
            </div>
            <div class="pb5">
              <span class="color-red">[默认]</span>
              <span>辽宁省 沈阳市 和平区 123</span>
            </div>
          </div>
          <div class="right-arrow">
            <i class="iconfont icon-youjiantou f28"></i>
          </div>
        </li>
      </ul>
      <div class="address-empty" v-if="false">
        <i class="iconfont icon-dizhi"></i>
        <span class="pt10">快递小哥找不到你，留个地址呗</span>
      </div>
      <div class="flex-justify-center mt30 address-btn">
        <van-button style="width: 124px" @click="toEditAddressPage">
          添加地址
        </van-button>
      </div>
    </section>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import AllHeader from '@/components/AllHeader'
import TabBar from '@/components/TabBar'
export default {
  name: 'AddressShow',
  data() {
    return {}
  },
  components: { AllHeader, TabBar },
  methods: {
    toEditAddressPage() {
      this.$router.push('/address-manage/add-address')
    }
  }
}
</script>
<style lang="scss" scoped>
.address-manage {
  min-height: 100vh;
  background-color: #f5f5f5;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #b0352f;
    color: #fff;
    height: 44px;
    .back-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 44px;
    }
    .address-text {
      display: flex;
      flex: 1;
      justify-content: center;
    }
    .space {
      width: 44px;
    }
  }
  .address-list {
    ul {
      li {
        display: flex;
        height: 78px;
        padding: 10px 12px;
        background-color: #fff;
        box-sizing: border-box;
        margin-top: 10px;
        .address-info {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex: 1;
        }
        .right-arrow {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 58px;
          color: #9e9e9e;
        }
      }
    }
    .address-empty {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #ddd;
      padding-top: 10px;
      i {
        font-size: 96px;
      }
    }
    .address-btn {
      ::v-deep .van-button {
        background-color: #b0352f;
        color: #fff;
        font-size: 14px;
        border: none;
        height: 39px;
      }
    }
  }
}
</style>
