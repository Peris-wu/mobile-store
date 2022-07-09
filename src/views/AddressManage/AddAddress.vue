<!--  -->
<template>
  <div class="edit-address">
    <all-header>
      <template #left>
        <i class="iconfont icon-xiaoyuhao color-fff"></i>
      </template>
      <template #center>
        <span class="color-fff">编辑地址</span>
      </template>
    </all-header>
    <div class="detail">
      <van-address-edit
        :area-list="areaList"
        show-delete
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
  methods: {
    onSave() {},
    onDelete() {},
    onChangeDetail() {}
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
        &:first-child {
          width: 300px;
          border-radius: 2px;
          background-color: #b0352f;
        }
        &:last-child {
          width: 300px;
          color: #fff;
          border-radius: 2px;
          background-color: #000000;
        }
      }
    }
  }
}
</style>
