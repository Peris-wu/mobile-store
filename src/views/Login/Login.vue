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
    <div class="l-user-info">
      <van-form ref="userInfoRef" @submit="onSubmit">
        <van-cell-group>
          <van-field
            v-model="userInfo.username"
            name="username"
            placeholder="请输入手机号"
            :rules="rules.username"
            :style="{ border: uIsShowError ? '1px solid red' : '' }"
          />
          <van-field
            v-model="userInfo.password"
            type="password"
            name="password"
            placeholder="请输入密码"
            :rules="rules.password"
            :style="{ border: pIsShowError ? '1px solid red' : '' }"
          />
        </van-cell-group>
        <div class="sub-btn">
          <van-button block type="danger" native-type="submit">登录</van-button>
        </div>
      </van-form>
    </div>
    <div class="l-register">
      <div>
        <i class="iconfont icon-register"></i>
        <span class="pl5">快速注册</span>
      </div>
      <div>
        <i class="iconfont icon-zhaohuimima"></i>
        <span class="pl5">找回密码</span>
      </div>
    </div>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import LoginHeader from '@/components/CategoryHeader'
import { Notify } from 'vant'
import TabBar from '@/components/TabBar'
export default {
  name: 'LoginView',
  data() {
    this.ruleRep = {
      username: /^1[23456789]\d{9}$/,
      password: /^[\w]{6,16}$/
    }
    return {
      userInfo: {
        username: '',
        password: ''
      },
      uIsShowError: false,
      pIsShowError: false,
      rules: {
        username: [
          {
            validator: (val) => this.validator(val, 'username')
          }
        ],
        password: [
          {
            validator: (val) => this.validator(val, 'password')
          }
        ]
      }
    }
  },
  components: { TabBar, LoginHeader },
  methods: {
    onSubmit(validateInfo) {
      console.log(validateInfo)
      // 发起请求
    },
    validator(val, mark) {
      let res = this.ruleRep[mark].test(val)
      if (!res) {
        if (mark === 'username') {
          this.uIsShowError = true
          Notify({
            message: '您输入的手机号有误',
            background: 'rgba(0,0,0,.8)'
          })
        } else {
          Notify({
            message: '您输入的密码有误',
            background: 'rgba(0,0,0,.8)'
          })
          this.pIsShowError = true
        }
      } else {
        if (mark === 'username') {
          this.uIsShowError = false
        } else {
          this.pIsShowError = false
        }
      }
      return res
    }
  }
}
</script>
<style lang="scss" scoped>
.login {
  height: 100vh;
  background-color: #f5f5f5;
  .l-user-info {
    padding: 20px;
    background-color: #f5f5f5;
    .sub-btn {
      margin-top: 18.75px;
    }
    ::v-deep .van-cell {
      margin-top: 18.75px;
      box-shadow: 0 0 0 1px #d7d7d7;
      border-radius: 3px;
    }
    ::v-deep .van-cell-group {
      background-color: #f5f5f5;
    }
    ::v-deep .van-button--danger {
      border: none;
      background-color: #b0352f;
    }
  }
  .l-register {
    display: flex;
    justify-content: space-between;
    // margin-top: 18.75px;
    padding: 0 20px;
    color: #222;
  }
}
</style>
