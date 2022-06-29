<!--  -->
<template>
  <div>
    <div class="category-header" ref="BScrollRef">
      <div class="ch-content">
        <div class="cc-header">
          <category-header
            placeholder="搜您喜欢的..."
            @handleClick="handleNavigate"
          ></category-header>
        </div>
        <div class="cc-content">
          <div class="cc-nav">
            <ul v-show="!isShow">
              <li
                class="f15"
                :class="{ active: currentPos === index }"
                v-for="(item, index) in navList"
                :key="item.id"
                @click="clickNav(index)"
              >
                {{ item.navText }}
              </li>
            </ul>
          </div>
          <div class="cc-c-content">
            <ul>
              <li v-for="categoryItem in categoryList" :key="categoryItem.id">
                <div v-if="categoryItem.imgUrl">
                  <img :src="categoryItem.imgUrl" />
                </div>
                <div class="pt20 pb10">
                  <sub-title>
                    <div>{{ categoryItem.title }}</div>
                  </sub-title>
                </div>
                <ul>
                  <li v-for="sItem in categoryItem.item" :key="sItem.id">
                    <div style="padding: 6px">
                      <img :src="sItem.imgUrl" />
                    </div>
                    <span>{{ sItem.name }}</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div style="height: 210px"></div>
      </div>
    </div>
    <div class="cc-nav-copy" v-show="isShow">
      <ul>
        <li
          class="f15"
          :class="{ active: currentPos === index }"
          v-for="(item, index) in navList"
          :key="item.id"
          @click="clickNav(index)"
        >
          {{ item.navText }}
        </li>
      </ul>
    </div>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import CategoryHeader from '@/components/CategoryHeader'
import SubTitle from '@/views/Category/SubTitle'
import TabBar from '@/components/TabBar'
import BScroll from '@better-scroll/core'
import zshTm from '@/assets/images/zsh-tm.jpeg'
import zsh from '@/assets/images/s-zsh.jpeg'
import tgy from '@/assets/images/s-tgy.jpeg'
import jjm from '@/assets/images/s-jjm.jpeg'
import wyyc from '@/assets/images/s-wyyc.jpeg'
import lj from '@/assets/images/s-lj.jpeg'
import yndh from '@/assets/images/s-yndh.jpeg'
import jz from '@/assets/images/s-jz.jpeg'
import gfcj from '@/assets/images/s-gfcj.jpeg'
export default {
  name: 'CategoryView',
  data() {
    return {
      isShow: false,
      recordHeight: [],
      bScroll: null,
      bScrollYPos: 0,
      navList: [
        {
          id: 1,
          navText: '推荐'
        },
        {
          id: 2,
          navText: '新品'
        },
        {
          id: 3,
          navText: '习茶'
        },
        {
          id: 4,
          navText: '绿茶'
        },
        {
          id: 5,
          navText: '乌龙'
        },
        {
          id: 6,
          navText: '红茶'
        },
        {
          id: 7,
          navText: '白茶'
        },
        {
          id: 8,
          navText: '普洱'
        },
        {
          id: 9,
          navText: '花茶'
        },
        {
          id: 10,
          navText: '茶具'
        },
        {
          id: 11,
          navText: '手艺'
        }
      ],
      categoryList: [
        {
          id: 1,
          title: '推荐',
          imgUrl: zshTm,
          item: [
            {
              id: 11,
              name: '紫砂壶',
              imgUrl: zsh
            },
            {
              id: 12,
              name: '铁观音',
              imgUrl: tgy
            },
            {
              id: 13,
              name: '金骏眉',
              imgUrl: jjm
            },
            {
              id: 14,
              name: '武夷岩茶',
              imgUrl: wyyc
            },
            {
              id: 15,
              name: '龙井',
              imgUrl: lj
            },
            {
              id: 16,
              name: '云南滇红',
              imgUrl: yndh
            },
            {
              id: 17,
              name: '建盏',
              imgUrl: jz
            },
            {
              id: 18,
              name: '功夫茶具',
              imgUrl: gfcj
            }
          ]
        },
        {
          id: 2,
          title: '新品',
          imgUrl: '',
          item: [
            {
              id: 21,
              name: '紫砂壶',
              imgUrl: zsh
            },
            {
              id: 22,
              name: '铁观音',
              imgUrl: tgy
            },
            {
              id: 23,
              name: '金骏眉',
              imgUrl: jjm
            },
            {
              id: 24,
              name: '武夷岩茶',
              imgUrl: wyyc
            },
            {
              id: 25,
              name: '龙井',
              imgUrl: lj
            },
            {
              id: 26,
              name: '云南滇红',
              imgUrl: yndh
            },
            {
              id: 27,
              name: '建盏',
              imgUrl: jz
            },
            {
              id: 28,
              name: '功夫茶具',
              imgUrl: gfcj
            }
          ]
        },
        {
          id: 3,
          title: '习茶',
          imgUrl: '',
          item: [
            {
              id: 31,
              name: '紫砂壶',
              imgUrl: zsh
            },
            {
              id: 32,
              name: '铁观音',
              imgUrl: tgy
            },
            {
              id: 33,
              name: '金骏眉',
              imgUrl: jjm
            },
            {
              id: 34,
              name: '武夷岩茶',
              imgUrl: wyyc
            },
            {
              id: 35,
              name: '龙井',
              imgUrl: lj
            },
            {
              id: 36,
              name: '云南滇红',
              imgUrl: yndh
            },
            {
              id: 37,
              name: '建盏',
              imgUrl: jz
            },
            {
              id: 38,
              name: '功夫茶具',
              imgUrl: gfcj
            }
          ]
        },
        {
          id: 4,
          title: '绿茶',
          imgUrl: '',
          item: [
            {
              id: 41,
              name: '紫砂壶',
              imgUrl: zsh
            },
            {
              id: 42,
              name: '铁观音',
              imgUrl: tgy
            },
            {
              id: 43,
              name: '金骏眉',
              imgUrl: jjm
            },
            {
              id: 44,
              name: '武夷岩茶',
              imgUrl: wyyc
            },
            {
              id: 45,
              name: '龙井',
              imgUrl: lj
            },
            {
              id: 46,
              name: '云南滇红',
              imgUrl: yndh
            },
            {
              id: 47,
              name: '建盏',
              imgUrl: jz
            },
            {
              id: 48,
              name: '功夫茶具',
              imgUrl: gfcj
            }
          ]
        },
        {
          id: 5,
          title: '乌龙',
          imgUrl: '',
          item: [
            {
              id: 51,
              name: '紫砂壶',
              imgUrl: zsh
            },
            {
              id: 52,
              name: '铁观音',
              imgUrl: tgy
            },
            {
              id: 53,
              name: '金骏眉',
              imgUrl: jjm
            },
            {
              id: 54,
              name: '武夷岩茶',
              imgUrl: wyyc
            },
            {
              id: 55,
              name: '龙井',
              imgUrl: lj
            },
            {
              id: 56,
              name: '云南滇红',
              imgUrl: yndh
            },
            {
              id: 57,
              name: '建盏',
              imgUrl: jz
            },
            {
              id: 58,
              name: '功夫茶具',
              imgUrl: gfcj
            }
          ]
        },
        {
          id: 6,
          title: '红茶',
          imgUrl: '',
          item: [
            {
              id: 61,
              name: '紫砂壶',
              imgUrl: zsh
            },
            {
              id: 62,
              name: '铁观音',
              imgUrl: tgy
            },
            {
              id: 63,
              name: '金骏眉',
              imgUrl: jjm
            },
            {
              id: 64,
              name: '武夷岩茶',
              imgUrl: wyyc
            },
            {
              id: 65,
              name: '龙井',
              imgUrl: lj
            },
            {
              id: 66,
              name: '云南滇红',
              imgUrl: yndh
            },
            {
              id: 67,
              name: '建盏',
              imgUrl: jz
            },
            {
              id: 68,
              name: '功夫茶具',
              imgUrl: gfcj
            }
          ]
        },
        {
          id: 7,
          title: '白茶',
          imgUrl: '',
          item: [
            {
              id: 71,
              name: '紫砂壶',
              imgUrl: zsh
            },
            {
              id: 72,
              name: '铁观音',
              imgUrl: tgy
            },
            {
              id: 73,
              name: '金骏眉',
              imgUrl: jjm
            },
            {
              id: 74,
              name: '武夷岩茶',
              imgUrl: wyyc
            },
            {
              id: 75,
              name: '龙井',
              imgUrl: lj
            },
            {
              id: 76,
              name: '云南滇红',
              imgUrl: yndh
            },
            {
              id: 77,
              name: '建盏',
              imgUrl: jz
            },
            {
              id: 78,
              name: '功夫茶具',
              imgUrl: gfcj
            }
          ]
        },
        {
          id: 8,
          title: '普洱',
          imgUrl: '',
          item: [
            {
              id: 81,
              name: '紫砂壶',
              imgUrl: zsh
            },
            {
              id: 82,
              name: '铁观音',
              imgUrl: tgy
            },
            {
              id: 83,
              name: '金骏眉',
              imgUrl: jjm
            },
            {
              id: 84,
              name: '武夷岩茶',
              imgUrl: wyyc
            },
            {
              id: 85,
              name: '龙井',
              imgUrl: lj
            },
            {
              id: 86,
              name: '云南滇红',
              imgUrl: yndh
            },
            {
              id: 87,
              name: '建盏',
              imgUrl: jz
            },
            {
              id: 88,
              name: '功夫茶具',
              imgUrl: gfcj
            }
          ]
        },
        {
          id: 9,
          title: '花茶',
          imgUrl: '',
          item: [
            {
              id: 91,
              name: '紫砂壶',
              imgUrl: zsh
            },
            {
              id: 92,
              name: '铁观音',
              imgUrl: tgy
            },
            {
              id: 93,
              name: '金骏眉',
              imgUrl: jjm
            },
            {
              id: 94,
              name: '武夷岩茶',
              imgUrl: wyyc
            },
            {
              id: 95,
              name: '龙井',
              imgUrl: lj
            },
            {
              id: 96,
              name: '云南滇红',
              imgUrl: yndh
            },
            {
              id: 97,
              name: '建盏',
              imgUrl: jz
            },
            {
              id: 98,
              name: '功夫茶具',
              imgUrl: gfcj
            }
          ]
        },
        {
          id: 10,
          title: '茶具',
          imgUrl: '',
          item: [
            {
              id: 101,
              name: '紫砂壶',
              imgUrl: zsh
            },
            {
              id: 102,
              name: '铁观音',
              imgUrl: tgy
            },
            {
              id: 103,
              name: '金骏眉',
              imgUrl: jjm
            },
            {
              id: 104,
              name: '武夷岩茶',
              imgUrl: wyyc
            },
            {
              id: 105,
              name: '龙井',
              imgUrl: lj
            },
            {
              id: 106,
              name: '云南滇红',
              imgUrl: yndh
            },
            {
              id: 107,
              name: '建盏',
              imgUrl: jz
            },
            {
              id: 108,
              name: '功夫茶具',
              imgUrl: gfcj
            }
          ]
        },
        {
          id: 11,
          title: '手艺',
          imgUrl: '',
          item: [
            {
              id: 111,
              name: '紫砂壶',
              imgUrl: zsh
            },
            {
              id: 112,
              name: '铁观音',
              imgUrl: tgy
            },
            {
              id: 113,
              name: '金骏眉',
              imgUrl: jjm
            },
            {
              id: 114,
              name: '武夷岩茶',
              imgUrl: wyyc
            },
            {
              id: 115,
              name: '龙井',
              imgUrl: lj
            },
            {
              id: 116,
              name: '云南滇红',
              imgUrl: yndh
            },
            {
              id: 117,
              name: '建盏',
              imgUrl: jz
            },
            {
              id: 118,
              name: '功夫茶具',
              imgUrl: gfcj
            }
          ]
        }
      ]
    }
  },
  components: {
    TabBar,
    CategoryHeader,
    SubTitle
  },
  computed: {
    currentPos() {
      let index = this.recordHeight.findIndex((currentItem, currentIndex) => {
        return (
          Math.abs(this.bScrollYPos) >= currentItem &&
          Math.abs(this.bScrollYPos) < this.recordHeight[currentIndex + 1]
        )
      })
      return index
    }
  },
  methods: {
    handleNavigate() {
      this.$router.push('/search')
    },
    clickNav(index) {
      this.bScroll.scrollTo(0, -this.recordHeight[index] - 44, 300)
    }
  },
  mounted() {
    setTimeout(() => {
      let domList = document.querySelectorAll('.cc-c-content>ul>li')
      let result = 0
      this.recordHeight.push(result)
      Array.from(domList).forEach((item) => {
        result += item.clientHeight
        this.recordHeight.push(result)
      })
      this.bScroll = new BScroll(this.$refs.BScrollRef, {
        scrollY: true,
        probeType: 3,
        bounce: false,
        click: true
      })
      this.bScroll.on('scroll', ({ y }) => {
        this.bScrollYPos = y
        if (Math.abs(y) >= 45) {
          this.isShow = true
        } else {
          this.isShow = false
        }
      })
    }, 100)
  }
}
</script>
<style lang="scss" scoped>
.category-header {
  height: 100vh;
  overflow: hidden;
  .ch-content {
    padding-bottom: 44px;
    .cc-content {
      display: flex;
      // margin-left: 92.75px;
      // padding: 10px 10px 10px 0;
      .cc-nav {
        min-width: 92.75px;
        height: 100vh;
        border-right: 1px solid #efefef;
        .active {
          color: #b54f4a;
          border-left: 3px solid #b54f4a;
        }
        ul {
          li {
            display: flex;
            justify-content: center;
            line-height: 30px;
            margin-top: 15px;
          }
        }
      }
      .cc-c-content {
        ul {
          padding: 10px;
        }
      }
      ul {
        li {
          ul {
            display: flex;
            width: 100%;
            flex-wrap: wrap;
            li {
              display: flex;
              flex-direction: column;
              box-sizing: border-box;
              padding: 10px;
              width: 33%;
              text-align: center;
            }
          }
          img {
            width: 100%;
          }
        }
      }
    }
  }
}
.cc-nav-copy {
  position: fixed;
  top: 0;
  left: 0px;
  min-width: 92.75px;
  height: 100vh;
  background-color: #fff;
  border-right: 1px solid #efefef;
  .active {
    color: #b54f4a;
    border-left: 3px solid #b54f4a;
  }
  ul {
    li {
      display: flex;
      justify-content: center;
      line-height: 30px;
      margin-top: 15px;
    }
  }
}
</style>
