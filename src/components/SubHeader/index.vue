<!--  -->
<template>
  <div class="sub-header">
    <span>
      <slot name="title"></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'SubHeader',
  data() {
    return {}
  },

  components: {}
}
</script>
<style lang="scss" scoped>
.sub-header {
  font-size: 18.75px;
  color: #333333;
  text-align: center;
  span {
    position: relative;
    &::before {
      position: absolute;
      display: block;
      content: '';
      width: 8px;
      height: 8px;
      left: -15px;
      top: 50%;
      transform: translateY(-50%);
      border-radius: 100%;
      background-color: #d4c0a7;
    }
    &::after {
      position: absolute;
      display: block;
      content: '';
      width: 8px;
      height: 8px;
      right: -15px;
      top: 50%;
      transform: translateY(-50%);
      border-radius: 100%;
      background-color: #d4c0a7;
    }
  }
}
</style>
