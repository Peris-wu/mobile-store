<!--  -->
<template>
  <div>
    <div v-if="tradeInfo.code === 0">支付成功</div>
    <div v-else>支付失败</div>
  </div>
</template>

<script>
import { getTradeStatus } from '@/axios/api/orderApi'
export default {
  name: 'PayedView',
  data() {
    return {
      tradeInfo: {}
    }
  },
  components: {},
  methods: {
    async initTradeStatus() {
      const params = {
        out_trade_no: this.$route.query.out_trade_no,
        trade_no: this.$route.query.trade_no
      }
      const result = await getTradeStatus('/api/order/get-status', params)
      this.tradeInfo = result
      console.log(result)
    }
  },
  mounted() {
    this.initTradeStatus()
  }
}
</script>
<style lang="scss" scoped></style>
