<!--  -->
<template>
  <div class="overhidden" :style="{ '-webkit-line-clamp': lineClamp }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'OverHidden',
  props: {
    lineClamp: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {}
  },

  components: {}
}
</script>
<style lang="scss" scoped>
.overhidden {
  display: -webkit-box;
  width: 100%;
  overflow: hidden;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
}
</style>
