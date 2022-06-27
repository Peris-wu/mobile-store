<!--  -->
<template>
  <div class="jjm-wrap">
    <!-- 金骏眉 s -->
    <div class="jjm-content">
      <div>
        <img src="~@/assets/images/jjm-title.jpg" />
      </div>
      <div>
        <img src="~@/assets/images/jjm.jpg" />
      </div>
    </div>
    <!-- 金骏眉 e -->
    <!-- hot-sell s -->
    <div class="hot-sell">
      <div class="hot-sell-title">
        <img src="~@/assets/images/hot-sell.jpg" />
      </div>
      <div>
        <img src="~@/assets/images/hot-sell01.jpeg" />
        <img src="~@/assets/images/hot-sell02.jpg" />
        <img src="~@/assets/images/hot-sell03.jpg" />
      </div>
    </div>
    <!-- hot-sell e -->
    <!-- high-quality s -->
    <div class="high-quality">
      <div class="high-quality-title">
        <img src="~@/assets/images/high-quality.jpg" />
      </div>
      <div class="high-quality-content">
        <ul>
          <li v-for="item in highQualityList" :key="item.id">
            <div class="content-wrap">
              <img :src="item.imgUrl" alt="" />
              <over-hidden>
                <span class="f15 color-a-red pl5 pr5">{{ item.teaName }}</span>
              </over-hidden>
              <div class="des txt-center color-s6 f13">
                <span>{{ item.des }}</span>
              </div>
              <div class="price-wrap">
                <div class="color-red">
                  <span class="f14">￥</span>
                  <b class="f20">{{ item.price }}</b>
                </div>
                <van-button type="danger" size="mini" color="#cb3c38">
                  去购买
                </van-button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- high-quality e -->
    <!-- character s -->
    <div class="character">
      <div class="character-title">
        <img src="~@/assets/images/character.jpg" />
      </div>
      <div class="character-content">
        <div class="pt10 pr10 pb10 pl10">
          <img src="~@/assets/images/tea-napkin.jpg" />
        </div>
        <img src="~@/assets/images/tea-description.jpg" />
        <img src="~@/assets/images/handbook-encyclopedia.jpg" />
        <div @click="backToTop">
          <img src="~@/assets/images/back-to-top.jpg" />
        </div>
      </div>
    </div>
    <!-- character e -->
  </div>
</template>

<script>
import OverHidden from '@/components/OverHidden'
// import jjmTitle from '@/assets/images/jjm-title.jpg'
// import jjm from '@/assets/images/jjm.jpg'
// import hotSell from '@/assets/images/hot-sell.jpg'
// import hotSell01 from '@/assets/images/hot-sell01.jpeg'
// import hotSell02 from '@/assets/images/hot-sell02.jpg'
// import hotSell03 from '@/assets/images/hot-sell03.jpg'
// import highQuality from '@/assets/images/high-quality.jpg'
import quality01 from '@/assets/images/quality01.jpeg'
import quality02 from '@/assets/images/quality02.jpeg'
import quality03 from '@/assets/images/quality03.jpeg'
import quality04 from '@/assets/images/quality04.jpeg'
import quality05 from '@/assets/images/quality05.jpeg'
import quality06 from '@/assets/images/quality06.jpeg'
// import character from '@/assets/images/character.jpg'
// import teaNapkin from '@/assets/images/tea-napkin.jpg'
// import teaDescription from '@/assets/images/tea-description.jpg'
// import handbookEncyclopedia from '@/assets/images/handbook-encyclopedia.jpg'
// import backToTop from '@/assets/images/back-to-top.jpg'
export default {
  name: 'JjmContent',
  data() {
    return {
      highQualityList: [
        {
          id: 1,
          imgUrl: quality01,
          price: 128,
          des: '滋味醇香 彰显情意',
          teaName: '金骏眉-御品豪茗礼盒 250g'
        },
        {
          id: 2,
          imgUrl: quality02,
          price: 158,
          des: '经典小罐 罐罐尊享',
          teaName: '金骏眉-如意小罐装180g'
        },
        {
          id: 3,
          imgUrl: quality03,
          price: 188,
          des: '名茶易得 佳茗难寻',
          teaName: '金骏眉-特级黄芽单罐200g'
        },
        {
          id: 4,
          imgUrl: quality04,
          price: 188,
          des: '复古镂空 古典雅致',
          teaName: '金骏眉-以茶为礼 200g'
        },
        {
          id: 5,
          imgUrl: quality05,
          price: 338,
          des: '彰显贵气 皇家典藏',
          teaName: '金骏眉-皇家典藏300g'
        },
        {
          id: 6,
          imgUrl: quality06,
          price: 258,
          des: '茶师亲制 匠心好茶',
          teaName: '金骏眉-茶师王建波果蜜香100g'
        }
      ]
    }
  },
  components: {
    OverHidden
  },
  methods: {
    backToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.jjm-wrap {
  .jjm-content {
  }
  .hot-sell {
  }
  .high-quality {
    .high-quality-content {
      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 15px 5px 5px;
        li {
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          padding: 7.5px;
          width: 49%;
          background-color: #f9f8f6;
          margin-bottom: 2%;
          .content-wrap {
            border: 1px solid red;
            .des {
              margin: 7.5px;
              padding-bottom: 5px;
              border-bottom: 1px dashed red;
            }
          }
          .price-wrap {
            display: flex;
            justify-content: space-between;
            padding: 0 10px 10px;
          }
        }
      }
    }
  }
  .character {
    .character-content {
      display: flex;
      flex-direction: column;
    }
  }
  img {
    width: 100%;
  }
}
</style>
