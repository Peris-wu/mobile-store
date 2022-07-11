<!--  -->
<template>
  <div class="edit-address">
    <all-header>
      <template #left>
        <i
          class="iconfont icon-xiaoyuhao color-fff"
          @click="$router.back()"
        ></i>
      </template>
      <template #center>
        <span class="color-fff">编辑地址</span>
      </template>
    </all-header>
    <div class="detail">
      <van-address-edit
        :area-list="areaList"
        :address-info="addressInfo"
        :show-delete="isShowDel"
        show-set-default
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
      />
    </div>
  </div>
</template>

<script>
import AllHeader from '@/components/AllHeader'
import { areaList } from '@vant/area-data'
import { updateAddress } from '@/axios/api/addressApi'
export default {
  name: 'AddAddress',
  data() {
    return {
      addressInfo: {},
      searchResult: [],
      areaList
    }
  },
  components: { AllHeader },
  computed: {
    isShowDel() {
      const result = this._lodash.isEmpty(this.addressInfo)
      return result ? false : true
    }
  },
  methods: {
    async onSave(addressInfo) {
      await updateAddress('/api/address/update-address', {
        addressInfo
      })
      this.$router.back()
    },
    onDelete(value) {
      console.log(value)
    },
    onChangeDetail(value) {
      console.log(value)
    }
  },
  mounted() {
    if (this._lodash.isEmpty(JSON.parse(this.$route.query.addressInfo))) {
      this.addressInfo = {}
    } else {
      const {
        id,
        uid,
        address_default,
        user_address,
        user_address_detail,
        user_name,
        user_tel,
        area_code
      } = JSON.parse(this.$route.query.addressInfo)
      let addressArr = user_address.split('/')
      console.log(addressArr)
      this.addressInfo = {
        id: id,
        uid: uid,
        name: user_name,
        tel: user_tel,
        province: addressArr[0],
        city: addressArr[1],
        county: addressArr[2],
        areaCode: area_code,
        addressDetail: user_address_detail,
        isDefault: address_default ? true : false
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.edit-address {
  .detail {
    ::v-deep .van-address-edit {
      padding: 0;
      .van-address-edit__fields {
        & > .van-cell {
          padding: 10px;
        }
        .van-address-edit-detail .van-field {
          padding: 0;
        }
      }
      .van-address-edit__default {
        padding: 10px;
      }
    }
    ::v-deep .van-address-edit__buttons {
      display: flex;
      flex-direction: column;
      align-items: center;
      .van-button {
        &:last-child {
          width: 300px;
          color: #fff;
          border-radius: 2px;
          background-color: #000000;
        }
        &:first-child {
          width: 300px;
          border-radius: 2px;
          background-color: #b0352f;
          border: none;
        }
      }
    }
  }
}
</style>
