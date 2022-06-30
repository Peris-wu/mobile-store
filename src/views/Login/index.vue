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
      <van-form @submit="onSubmit">
        <van-cell-group>
          <van-field
            v-model="userInfo.iphone"
            placeholder="请输入手机号"
            type="tel"
            :rules="rules.iphone"
            name="iphone"
          />
          <van-field
            v-model="userInfo.verifyCode"
            center
            clearable
            :rules="rules.verifyCode"
            placeholder="请输入短信验证码"
            name="verifyCode"
          >
            <template #button>
              <van-button size="mini" type="primary">获取短信验证码</van-button>
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
export default {
  name: 'LoginView',
  data() {
    // this.rep = /^1[23456789]\d{9}$/
    return {
      userInfo: {
        iphone: '',
        verifyCode: ''
      },
      rules: {
        iphone: [
          {
            pattern: /^1[23456789]\d{9}$/,
            message: '请输入正确的手机号'
          }
        ],
        verifyCode: [
          {
            pattern: /^\d{4}$/,
            message: '请输入正确的验证码'
          }
        ]
      }
    }
  },
  components: { TabBar, LoginHeader },
  methods: {
    fn(value) {
      console.log(value.target.value)
    },
    onSubmit(value) {
      console.log(value)
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
