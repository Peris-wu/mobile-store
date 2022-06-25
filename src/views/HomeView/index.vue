<!--  -->
<template>
  <div class="home-wrap">
    <!-- header nav s -->
    <div class="header-wrap">
      <header-view></header-view>
    </div>
    <!-- header nav e -->
    <!-- 轮播 s -->
    <div class="swiper-wrap">
      <van-swipe autoplay="3000" @change="change">
        <van-swipe-item v-for="imgItem in swiperList" :key="imgItem.id">
          <img :src="imgItem.imgUrl" />
        </van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">
            <i
              v-for="index in indicator"
              :key="index"
              :style="{ backgroundColor: index === current ? '#b0352f' : '' }"
            ></i>
          </div>
        </template>
      </van-swipe>
    </div>
    <!-- 轮播 e -->
    <!-- tea style s -->
    <div class="tea-style-wrap">
      <ul>
        <li v-for="teaStyle in teaStyleList" :key="teaStyle.id">
          <img :src="teaStyle.imgUrl" alt="" />
          <span>{{ teaStyle.text }}</span>
        </li>
      </ul>
    </div>
    <!-- tea style e -->
    <!-- tea header s -->
    <div class="tea-header">
      <div class="header-pic"></div>
      <div class="header-swiper">
        <van-swipe
          :show-indicators="false"
          style="height: 100%; width: 100%"
          vertical
          loop
          autoplay="3000"
          :touchable="false"
        >
          <van-swipe-item>重要公告 | 真伪客服官方验证功能上线</van-swipe-item>
          <van-swipe-item>岩茶为何不提春茶概念?</van-swipe-item>
        </van-swipe>
      </div>
      <div></div>
    </div>
    <!-- tea header e -->
    <!-- recommend s -->
    <div class="recommend-wrap">
      <sub-header>
        <template #title>小七推荐</template>
      </sub-header>
      <div class="content">
        <div class="lfc">
          <img src="~@/assets/images/enjoy-week.png" alt="" />
        </div>
        <div style="width: 3px"></div>
        <div class="rtc">
          <img src="~@/assets/images/shop-month.png" alt="" />
        </div>
      </div>
    </div>
    <!-- recommend e -->
    <!-- 专题优选 s -->
    <div class="special-optimization">
      <div class="s-top">
        <sub-header>
          <template #title>专题优选</template>
        </sub-header>
      </div>
      <div class="s-bottom" ref="sRef">
        <my-b-scroll :isScrollX="true">
          <template #bScroll>
            <li>
              <img src="~@/assets/images/special01.jpeg" alt="" />
            </li>
            <li>
              <img src="~@/assets/images/special02.jpeg" alt="" />
            </li>
            <li style="width: 300px; padding: 0 10px">
              <img src="~@/assets/images/special03.jpeg" alt="" />
            </li>
          </template>
        </my-b-scroll>
      </div>
    </div>
    <!-- 专题优选 e -->
    <!-- 爆款推荐 s -->
    <div class="hot-recommend">
      <div class="pb10">
        <sub-header>
          <template #title>
            <span>爆款推荐</span>
          </template>
        </sub-header>
      </div>
      <div class="content">
        <ul>
          <li v-for="hotItem in hotRecommendList" :key="hotItem.id">
            <img :src="hotItem.imgUrl" />
            <div class="tea-info">
              <div class="tea-name-des">
                <div class="f12 txt-right">{{ hotItem.teaName }}</div>
                <div class="f15 txt-right pt5">{{ hotItem.description }}</div>
              </div>
              <div class="tea-price">
                <div class="color-red">
                  <span class="f12">￥</span>
                  <span class="f18">{{ hotItem.price }}</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 爆款推荐 e -->
    <!-- 好茶具 s -->
    <div class="good-tea-tool">
      <img src="~@/assets/images/good-tea-tool.jpg" alt="" />
      <div class="show-more">
        <div class="special-tea-tool">
          <img src="~@/assets/images/jyh.jpeg" alt="" />
          <div class="pt8 pb8">
            <over-hidden>
              <span class="f15">建阳红色芝麻毫建盏茶具</span>
            </over-hidden>
          </div>
          <div class="color-red txt-center pt10">
            <span class="f12">￥</span>
            <span class="f18">399</span>
          </div>
        </div>
        <div class="more">
          <div class="top color-s9 f12">MORE</div>
          <div class="f12 pt8">查看更多</div>
        </div>
      </div>
    </div>
    <!-- 好茶具 e -->
    <!-- 茶文化 s -->
    <div class="tea-culture">
      <div class="c-header">
        <sub-header>
          <template #title>
            <span>茶文化</span>
          </template>
        </sub-header>
      </div>
      <div class="c-content">
        <div class="c-left">
          <div class="culture-text">
            <h1 class="f15">好文精选</h1>
            <span class="color-s9 f12">原创好文都在这</span>
          </div>
          <img src="~@/assets/images/well-article.jpg" />
        </div>
        <div class="line-h"></div>
        <div class="c-right">
          <div class="culture-text">
            <h1 class="f15">茶叶百科</h1>
            <span class="color-s9 f12">让您喝得更专业</span>
          </div>
          <img src="~@/assets/images/tea-encyclopedia.jpg" />
        </div>
      </div>
    </div>
    <!-- 茶文化 e -->
    <!-- 猜你喜欢 s -->
    <div>
      <div class="l-header">
        <sub-header>
          <template #title>
            <span>猜你喜欢</span>
          </template>
        </sub-header>
      </div>
    </div>
    <!-- 猜你喜欢 e -->
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import HeaderView from '@/components/Header'
import TabBar from '@/components/TabBar'
import SubHeader from '@/components/SubHeader'
import MyBScroll from '@/components/BetterScroll'
import OverHidden from '@/components/OverHidden'
import swiperFirst from '@/assets/images/swipe01.jpeg'
import swiperSecond from '@/assets/images/swipe02.jpeg'
import swiperThree from '@/assets/images/swipe03.jpeg'
import teaBySelf from '@/assets/images/tea-by-self.png'
import ppTea from '@/assets/images/pp-tea.png'
import teaTool from '@/assets/images/tea-tool.png'
import welFare from '@/assets/images/welfare.png'
import officVertify from '@/assets/images/offic-vertify.png'
import tgy from '@/assets/images/tgy.jpeg'
import zsxz from '@/assets/images/zsxz.jpeg'
import htlk from '@/assets/images/htlk.jpeg'
export default {
  name: 'HomeView',
  data() {
    return {
      current: 0,
      indicator: [0, 1, 2],
      swiperList: [
        {
          id: 1,
          imgUrl: swiperFirst
        },
        {
          id: 2,
          imgUrl: swiperSecond
        },
        {
          id: 3,
          imgUrl: swiperThree
        }
      ],
      teaStyleList: [
        {
          id: 1,
          text: '自饮茶',
          imgUrl: teaBySelf
        },
        {
          id: 2,
          text: '品牌茶',
          imgUrl: ppTea
        },
        {
          id: 3,
          text: '茶具',
          imgUrl: teaTool
        },
        {
          id: 4,
          text: '领福利',
          imgUrl: welFare
        },
        {
          id: 5,
          text: '官网验证',
          imgUrl: officVertify
        }
      ],
      hotRecommendList: [
        {
          id: 1,
          teaName: '铁观音2號250g',
          description: '核心产区滋味正 ',
          price: '128',
          from: '老铁推荐',
          imgUrl: tgy
        },
        {
          id: 2,
          teaName: '正山小种3號150g',
          descripition: '难以忘怀的桂花香 ',
          price: '99',
          from: '爆款',
          imgUrl: zsxz
        },
        {
          id: 3,
          teaName: '黑檀镂空六君子',
          descripition: '给生活一点精致的仪式感 ',
          price: '45',
          from: '茶友必备',
          imgUrl: htlk
        }
      ]
    }
  },

  components: { HeaderView, TabBar, SubHeader, MyBScroll, OverHidden },
  methods: {
    change(index) {
      this.current = index
    }
  },
  mounted() {
    // new BScroll(this.$refs.sRef, {
    //   scrollX: true
    // })
  }
}
</script>
<style lang="scss" scoped>
.home-wrap {
  background-color: #f5f5f5;
  .header-wrap {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1;
  }
  .swiper-wrap {
    position: relative;
    margin-top: 88px;
    background-color: #fff;
    img {
      width: 100%;
      padding-top: 2px;
    }
    .custom-indicator {
      display: flex;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, -10px);
      i {
        display: block;
        width: 6px;
        height: 6px;
        margin: 0 3px;
        border-radius: 100%;
        background-color: #fff;
      }
      z-index: 999;
    }
  }
  .tea-style-wrap {
    background-color: #fff;
    ul {
      display: flex;
      justify-content: space-between;
      padding: 10px 15px 15px 15px;
      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          width: 37.5px;
          padding-bottom: 11.25px;
        }
      }
    }
  }
  .tea-header {
    display: flex;
    background-color: #fff;
    margin-top: 1px;
    padding: 11.25px 7.5px;
    height: 19.75px;
    .header-pic {
      width: 75px;
      margin-right: 15px;
      background: url('@/assets/images/tea-header.png') center center no-repeat;
      background-size: contain;
    }
    .header-swiper {
      flex: 1;
      font-size: 15px;
    }
  }
  .recommend-wrap {
    background-color: #fff;
    margin-top: 10px;
    padding: 15px 7.5px 0 7.5px;
    .content {
      display: flex;
      width: 100%;
      padding: 15px 0;
      justify-content: space-between;
      .lfc {
        flex: 1;
        img {
          width: 100%;
        }
      }
      .rtc {
        flex: 1;
        img {
          width: 100%;
        }
      }
    }
  }
  .special-optimization {
    background-color: #fff;
    padding: 7.5px 0;
    margin-top: 10px;
    .s-top {
      padding: 7.5px 0;
    }
    .s-bottom {
      height: 165px;
      overflow: hidden;
      li {
        width: 300px;
        padding-left: 10px;
        img {
          width: 100%;
          border-radius: 10px;
        }
      }
      li:last-child {
        padding-right: 10px;
      }
    }
  }
  .hot-recommend {
    background-color: #fff;
    .content {
      padding: 7.15px;
      ul {
        li {
          position: relative;
          margin-top: 10px;
          .tea-info {
            display: flex;
            padding-right: 14.32px;
            flex-direction: column;
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            .tea-name-des {
              align-self: flex-end;
            }
            .tea-price {
              margin-top: 20px;
              align-self: flex-end;
            }
          }
          img {
            width: 100%;
          }
        }
      }
    }
  }
  .good-tea-tool {
    background-color: #fff;
    margin-top: 20px;
    .show-more {
      display: flex;
      padding: 14.32px 14.32px 14.32px 0;
      .special-tea-tool {
        width: 131px;
        padding-left: 14px;
      }
      .more {
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 131px;
        height: 131px;
        margin-left: 15px;
        background-color: #f3f3f3;
        .top {
          width: 65px;
          text-align: center;
          padding-bottom: 8px;
          border-bottom: 1px solid #cccccc;
        }
        &:after {
          position: absolute;
          content: '';
          margin: 5px;
          border: 1px solid #e4e4e4;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        }
      }
    }
    img {
      width: 100%;
    }
  }
  .tea-culture {
    padding-bottom: 10px;
    background-color: #fff;
    .c-header {
      padding: 7.5px 0;
    }
    .c-content {
      display: flex;
      padding: 7.5px 3.75px;
      .c-left {
        position: relative;
        flex: 1;
        .culture-text {
          position: absolute;
          left: 0;
          top: 0;
          padding: 12px 0 0 12px;
        }
        img {
          width: 100%;
          border-radius: 10px;
        }
      }
      .c-right {
        position: relative;
        flex: 1;
        .culture-text {
          position: absolute;
          left: 0;
          top: 0;
          padding: 12px 0 0 12px;
        }
        img {
          width: 100%;
          border-radius: 10px;
        }
      }
    }
  }
}
</style>
