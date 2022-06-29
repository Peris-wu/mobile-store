<!--  -->
<template>
  <div class="search">
    <!-- header s -->
    <div class="s-header">
      <search-header
        :isShowSearch="true"
        :disabled="false"
        placeholder="搜索您喜欢的产品..."
        @onSearch="onSearch"
      >
        <!-- <template #right>
          <span class="f16">搜索</span>
        </template> -->
      </search-header>
    </div>
    <!-- header e -->
    <!-- hot search s -->
    <div class="s-hot-search">
      <div class="title mb15">
        <div class="left">
          <i class="iconfont icon-hot color-red f14"></i>
          <span class="f16 pl5">热门搜索</span>
        </div>
        <div class="right" @click="cleanHistory">
          <span class="cleanHistory pl5">清除历史记录</span>
        </div>
      </div>
      <div class="content">
        <ul>
          <li v-for="wordItem in hotWordList" :key="wordItem">
            <span class="color-t9 f14">{{ wordItem }}</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- hot search e -->
    <!-- recommend produce s -->
    <div class="s-recommend-produce">
      <i class="iconfont icon-dianzan color-red f14"></i>
      <span class="f16 pl5">推荐商品</span>
    </div>
    <!-- recommend produce e -->
    <!-- recommend content s -->
    <div class="s-recommend-content">
      <ul>
        <li v-for="recommendItem in recommendList" :key="recommendItem.id">
          <img v-lazy="recommendItem.imgUrl" />
          <div class="f14 pt5 pb5 color-333">
            <over-hidden>{{ recommendItem.name }}</over-hidden>
          </div>
          <div class="color-ff6600 price">
            <span>{{ recommendItem.price }}元</span>
          </div>
        </li>
      </ul>
    </div>
    <!-- recommend content e -->
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import SearchHeader from '@/components/CategoryHeader'
import OverHidden from '@/components/OverHidden'
import TabBar from '@/components/TabBar'
import {
  _getLocalStorage,
  _setLocalStorage,
  _removeLocalStorage
} from '@/utils/handleStorage'
import { SEARCHHISTORYLIST } from '@/utils/storageConst'
import mxdh from '@/assets/images/r-mxdh.png'
import zsxz from '@/assets/images/r-zsxz.jpeg'
import dhp02 from '@/assets/images/r-dhp02.jpeg'
import ljfh from '@/assets/images/r-ljfh.jpeg'
import blc from '@/assets/images/r-blc.jpeg'
import hsmf from '@/assets/images/r-hsmf.jpeg'
import sxlx from '@/assets/images/r-sxlx.jpeg'
import lgm from '@/assets/images/r-lgm.jpeg'
import hklc from '@/assets/images/r-hklc.png'
export default {
  name: 'SearchView',
  data() {
    return {
      hotWordList: [
        // {
        //   id: 1,
        //   word: '易冲泡茶叶'
        // },
        // {
        //   id: 2,
        //   word: '经典紫砂壶'
        // },
        // {
        //   id: 3,
        //   word: '送礼'
        // },
        // {
        //   id: 4,
        //   word: '旅行茶具'
        // },
        // {
        //   id: 5,
        //   word: '待客茶'
        // },
        // {
        //   id: 6,
        //   word: '新手入门茶'
        // },
        // {
        //   id: 7,
        //   word: '大师壶'
        // },
        // {
        //   id: 8,
        //   word: '福鼎白茶'
        // },
        // {
        //   id: 9,
        //   word: '绿茶'
        // }
      ],
      recommendList: [
        {
          id: 1,
          imgUrl: mxdh,
          name: '云南凤庆经典蜜香滇红',
          price: 88,
          des: '外形讨喜  甘甜可口'
        },
        {
          id: 2,
          imgUrl: zsxz,
          name: '无烟工艺正山小种2号',
          price: 89,
          des: '浓厚薯密香'
        },
        {
          id: 3,
          imgUrl: dhp02,
          name: '武夷山高级大红袍2号',
          price: 99,
          des: '轻火焙制  天然花香  '
        },
        {
          id: 4,
          imgUrl: ljfh,
          name: '2022春茶明前龙井飞花',
          price: 128,
          des: '只采单芽 满口鲜活'
        },
        {
          id: 5,
          imgUrl: blc,
          name: '雨前头采碧螺春1号散茶',
          price: 88,
          des: '花果香浓 韵味悠长'
        },
        {
          id: 6,
          imgUrl: hklc,
          name: '黄山太平猴魁绿茶1号',
          price: 88,
          des: '正宗原产 幽香口感'
        },
        {
          id: 7,
          imgUrl: hsmf,
          name: '历史名茶黄山毛峰1号',
          price: 88,
          des: '板栗香显  清鲜爽口'
        },
        {
          id: 8,
          imgUrl: sxlx,
          name: '漳平水仙兰香1号',
          price: 88,
          des: '入口顺滑 如兰花香'
        },
        {
          id: 9,
          imgUrl: lgm,
          name: '2017福鼎高山枣香老贡眉',
          price: 88,
          des: '滋味醇厚，浓浓枣香'
        }
      ],
      searchWord: ''
    }
  },
  components: { SearchHeader, OverHidden, TabBar },
  methods: {
    onSearch(value) {
      if (!value) return
      let res = this.hotWordList.find((item) => {
        return value.trim() === item
      })
      if (!res) {
        this.hotWordList.unshift(value)
        _setLocalStorage(SEARCHHISTORYLIST, JSON.stringify(this.hotWordList))
      }
      // this.$router.push({
      //   path: '/detail'
      // })
    },
    cleanHistory() {
      this.hotWordList = []
      _removeLocalStorage(SEARCHHISTORYLIST)
    }
  },
  mounted() {
    this.hotWordList = JSON.parse(_getLocalStorage(SEARCHHISTORYLIST)) ?? []
  }
}
</script>
<style lang="scss" scoped>
.search {
  background-color: #f5f5f5;
  padding-bottom: 64px;
  .s-hot-search {
    padding: 10px 20px 20px;
    .title {
      display: flex;
      justify-content: space-between;
    }
    .content {
      ul {
        display: flex;
        flex-wrap: wrap;
        li {
          height: 30px;
          line-height: 30px;
          padding: 0 5px;
          border: 1px solid #ddd;
          margin: 0 15px 15px 0;
        }
      }
    }
  }
  .s-recommend-produce {
    padding: 20px;
  }
  .s-recommend-content {
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      li {
        box-sizing: border-box;
        width: 49.8%;
        padding: 11px;
        background-color: #fff;
        margin-bottom: 2%;
        .price {
          padding-top: 40px;
        }
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
