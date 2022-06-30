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
      <input type="text" placeholder="请输入手机号" />
      <div class="vertify-btn-wrap">
        <input type="text" placeholder="请输入短信验证码" />
        <button class="f14 color-fff">短信获取验证码</button>
      </div>
      <div class="longin-btn">
        <van-button>登录</van-button>
      </div>
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
    this.rep = /^1[23456789]\d{9}$/
    return {
      userInfo: {
        iphone: '',
        vertifyCode: ''
      }
    }
  },

  components: { TabBar, LoginHeader }
}
</script>
<style lang="scss" scoped>
.login {
  height: 100vh;
  background-color: #f5f5f5;
  .l-login-info {
    padding: 20px;
    input {
      box-sizing: border-box;
      height: 44px;
      width: 100%;
      margin-top: 18.75px;
      padding: 0 7.5px;
      outline: none;
      border: none;
      border-radius: 3px;
      box-shadow: 0 0 0 1px #d7d7d7;
    }
    & > input {
      width: 100%;
    }
    .vertify-btn-wrap {
      display: flex;
      input {
        width: 60%;
      }
      button {
        width: 40%;
        margin-top: 18.75px;
        background-color: #b0352f;
        outline: none;
        border: none;
        border-radius: 3px;
      }
    }
    .longin-btn {
      margin-top: 18.75px;
      ::v-deep .van-button {
        width: 100%;
        color: #fff;
        background-color: #b0352f;
        border-radius: 3px;
      }
    }
  }
}
</style>
