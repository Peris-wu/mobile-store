<!--  -->
<template>
  <div class="address-manage">
    <all-header>
      <template #left>
        <i class="iconfont icon-xiaoyuhao color-fff"></i>
      </template>
      <template #center>
        <span class="color-fff">我的地址</span>
      </template>
    </all-header>
    <section class="address-list">
      <ul>
        <li
          v-for="addressItem in addressStore.addressList"
          :key="addressItem.id"
          @click="toEditAddressPage(addressItem)"
        >
          <div class="address-info">
            <div class="pt5">
              <span>{{ addressItem.user_name }}</span>
              <span class="pl20">{{ addressItem.user_tel }}</span>
            </div>
            <div class="pb5">
              <span
                class="color-red"
                v-show="addressItem.address_default === 1"
              >
                [默认]
              </span>
              <span :class="[addressItem.address_default === 1 ? 'pl5' : '']">
                {{ addressItem.user_address }}
              </span>
              <span>{{ addressItem.user_address_detail }}</span>
            </div>
          </div>
          <div class="right-arrow">
            <i class="iconfont icon-youjiantou f28"></i>
          </div>
        </li>
      </ul>
      <div class="address-empty" v-if="addressStore.addressList.length === 0">
        <i class="iconfont icon-dizhi"></i>
        <span class="pt10">快递小哥找不到你，留个地址呗</span>
      </div>
      <div class="address-btn mt30">
        <van-button style="width: 124px" @click="toEditAddressPage()">
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
import useAddressStore from '@/store/address'
import { getAddressList } from '@/axios/api/addressApi'
import { INITADDRESSLIST } from '@/store/actions-type'
export default {
  name: 'AddressShow',
  data() {
    return {
      addressStore: useAddressStore()
    }
  },
  components: { AllHeader, TabBar },
  methods: {
    toEditAddressPage(addressItem) {
      this.$router.push({
        path: '/address-manage/add-address',
        query: {
          addressInfo: addressItem
            ? JSON.stringify(addressItem)
            : JSON.stringify({})
        }
      })
    },
    async initAddressList() {
      try {
        const { data } = await getAddressList('/api/address/address-list')
        this.addressStore[INITADDRESSLIST](data)
      } catch (e) {
        console.log(e.message)
      }
    }
  },
  mounted() {
    this.initAddressList()
  }
}
</script>
<style lang="scss" scoped>
.address-manage {
  height: 100vh;
  background-color: #f5f5f5;
  .address-list {
    ul {
      li {
        display: flex;
        min-height: 78px;
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
      text-align: center;
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
