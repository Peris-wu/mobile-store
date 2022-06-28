<!--  -->
<template>
  <div class="sub-title">
    <div class="line"></div>
    <div class="pl10 pr10 f20">
      <slot></slot>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: 'SubTitle',
  data() {
    return {}
  },

  components: {}
}
</script>
<style lang="scss" scoped>
.sub-title {
  display: flex;
  justify-content: center;
  align-items: center;
  .line {
    width: 20px;
    height: 1px;
    background-color: #d9d9d9;
  }
}
</style>
