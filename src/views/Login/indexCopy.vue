<!--  -->
<template>
  <div class="login">
    <div class="l-header">
      <login-header :needSearch="false">
        <template #center>
          <span class="color-fff">登录</span>
        </template>
      </login-header>
    </div>
    <div class="l-login-info">
      <van-form @submit="onSubmit" ref="userInfoRef">
        <van-cell-group>
          <van-field
            v-model="userInfo.iphone"
            placeholder="请输入手机号"
            type="tel"
            :rules="rules.iphone"
            name="iphone"
            :error="false"
            :style="{ border: isShowErrorIphone ? '1px solid red' : '' }"
          />
          <van-field
            v-model="userInfo.verifyCode"
            center
            clearable
            :rules="rules.verifyCode"
            placeholder="请输入短信验证码"
            name="verifyCode"
            :error="false"
            :style="{ border: isShowErrorVerify ? '1px solid red' : '' }"
          >
            <template #button>
              <van-button
                size="mini"
                type="primary"
                @click.prevent="geiVerifyCode"
                :disabled="showCountDown"
              >
                <span v-if="!showCountDown">获取短信验证码</span>
                <van-count-down
                  v-else
                  :time="10000"
                  style="min-width: 92px; color: #fff"
                  format="ss"
                  ref="countDownRef"
                  @finish="countDownFinish"
                >
                  <template #default="timeData">
                    <span class="block">{{ timeData.seconds }}</span>
                  </template>
                </van-count-down>
              </van-button>
            </template>
          </van-field>
          <div class="login-btn">
            <van-button native-type="submit">登录</van-button>
          </div>
        </van-cell-group>
      </van-form>
    </div>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import LoginHeader from '@/components/CategoryHeader'
import TabBar from '@/components/TabBar'
import { Notify } from 'vant'
export default {
  name: 'LoginViewCopy',
  data() {
    this.reflectObj = {
      iphone: /^1[23456789]\d{9}$/,
      verifyCode: /^\d{4}$/
    }
    return {
      userInfo: {
        iphone: '',
        verifyCode: ''
      },
      showCountDown: false,
      isShowErrorIphone: false,
      isShowErrorVerify: false,
      rules: {
        iphone: [
          {
            validator: (val) => this.validator(val, 'iphone')
          }
        ],
        verifyCode: [
          {
            validator: (val) => this.validator(val, 'verifyCode')
          }
        ]
      }
    }
  },
  components: { TabBar, LoginHeader },
  methods: {
    onSubmit(value) {
      console.log(value)
    },
    validator(val, name) {
      let res = this.reflectObj[name].test(val)
      if (!res) {
        if (name === 'iphone') {
          this.isShowErrorIphone = true
          Notify({
            background: 'rgba(0,0,0,.8)',
            message: '手机号有误',
            duration: '1500'
          })
        } else {
          this.isShowErrorVerify = true
          if (!this.isShowErrorIphone) {
            Notify({
              background: 'rgba(0,0,0,.8)',
              message: '验证码有误',
              duration: '1500'
            })
          }
        }
      } else {
        if (name === 'iphone') {
          this.isShowErrorIphone = false
        } else {
          this.isShowErrorVerify = false
        }
      }
      return res
    },
    async geiVerifyCode() {
      try {
        // 手机号合法
        await this.$refs.userInfoRef.validate('iphone')
        this.showCountDown = true
        this.$nextTick(() => {
          this.$refs.countDownRef.start()
        })
      } catch (err) {
        console.log(err)
      }
    },
    countDownFinish() {
      this.showCountDown = false
    }
  }
}
</script>
<style lang="scss" scoped>
.login {
  height: 100vh;
  background-color: #f5f5f5;
  .l-login-info {
    padding: 20px;
    .login-btn {
      margin-top: 18.75px;
      ::v-deep .van-button {
        width: 100%;
        color: #fff;
        border-radius: 3px;
        background-color: #b0352f;
      }
    }
    ::v-deep .van-cell-group {
      background-color: #f5f5f5;
    }
    ::v-deep .van-cell {
      margin-top: 18.75px;
      box-shadow: 0 0 0 1px #d7d7d7;
      border-radius: 3px;
    }
    ::v-deep .van-button--primary {
      background-color: #b0352f;
      border: none;
    }
    // input {
    //   box-sizing: border-box;
    //   height: 44px;
    //   width: 100%;
    //   margin-top: 18.75px;
    //   padding: 0 7.5px;
    //   outline: none;
    //   border: none;
    //   border-radius: 3px;
    //   box-shadow: 0 0 0 1px #d7d7d7;
    // }
    // & > input {
    //   width: 100%;
    // }
    // .vertify-btn-wrap {
    //   display: flex;
    //   input {
    //     width: 60%;
    //   }
    //   button {
    //     width: 40%;
    //     margin-top: 18.75px;
    //     background-color: #b0352f;
    //     outline: none;
    //     border: none;
    //     border-radius: 3px;
    //   }
    // }
    // .longin-btn {
    //   margin-top: 18.75px;
    //   ::v-deep .van-button {
    //     width: 100%;
    //     color: #fff;
    //     background-color: #b0352f;
    //     border-radius: 3px;
    //   }
    // }
  }
}
</style>
