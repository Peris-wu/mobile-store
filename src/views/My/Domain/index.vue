<!--  -->
<template>
  <div class="domain">
    <div
      class="area-wrap"
      v-for="domainItem in domainList"
      :key="domainItem.id"
    >
      <div class="title f14">{{ domainItem.title }}</div>
      <div class="domain-list">
        <ul>
          <li
            v-for="dItem in domainItem.list"
            :key="dItem.id"
            @click="toTargetUrl(dItem.path)"
          >
            <div class="left-wrap">
              <i
                class="iconfont pr10 f18"
                :class="`${dItem.icon}`"
                :style="{ color: dItem.iconColor }"
              ></i>
            </div>
            <div class="right-wrap">
              <span>{{ dItem.text }}</span>
              <span>></span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DomainView',
  props: {
    domainList: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  data() {
    return {}
  },
  components: {},
  methods: {
    toTargetUrl(path) {
      this.$router.push(path)
    }
  }
}
</script>
<style lang="scss" scoped>
.domain {
  background-color: #f5f5f5;
  .area-wrap {
    margin-bottom: 10px;
  }
  .title {
    background-color: #fff;
    color: #9e9e9e;
    padding: 0 12px;
    height: 44px;
    line-height: 44px;
    margin-bottom: 2px;
  }
  .domain-list {
    background-color: #fff;
    color: #222;
    ul {
      li {
        display: flex;
        justify-content: space-between;
        padding: 0 10px 0 12px;
        height: 44px;
        line-height: 44px;
        .left-wrap {
          color: #ff7e45;
        }
        .right-wrap {
          display: flex;
          justify-content: space-between;
          flex: 1;
          border-bottom: 1px solid #f5f5f5;
        }
      }
    }
  }
}
</style>
