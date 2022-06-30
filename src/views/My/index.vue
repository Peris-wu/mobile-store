<!--  -->
<template>
  <div class="my">
    <!-- header and login-btn s -->
    <div class="header-login">
      <my-header :needSearch="false" :isShowBgColor="false"></my-header>
      <div class="login-btn-wrap">
        <span class="login-btn f14" @click="toLogin">登录 / 注册</span>
      </div>
    </div>
    <!-- header and login-btn e -->
    <!-- personal center s -->
    <domain-com :domainList="domainList"></domain-com>
    <!-- personal center e -->
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import MyHeader from '@/components/CategoryHeader'
import DomainCom from '@/views/My/Domain'
import TabBar from '@/components/TabBar'
export default {
  name: 'MyView',
  data() {
    return {
      domainList: [
        {
          id: 1,
          title: '个人中心',
          list: [
            {
              id: 11,
              iconColor: '#ff7e45',
              icon: 'icon-pintuan',
              text: '我的拼团'
            },
            {
              id: 12,
              iconColor: '#ffce54',
              icon: 'icon-shoucang',
              text: '我的收藏'
            },
            {
              id: 13,
              iconColor: '#ff4b4b',
              icon: 'icon-dizhiguanli-my',
              text: '地址管理'
            }
          ]
        },
        {
          id: 2,
          title: '优惠福利',
          list: [
            {
              id: 21,
              iconColor: '#ff774f',
              icon: 'icon-youhuiquan',
              text: '优惠券'
            }
          ]
        },
        {
          id: 3,
          title: '专属服务',
          list: [
            {
              id: 31,
              iconColor: '#00c670',
              icon: 'icon-kefu',
              text: '我的客服'
            },
            {
              id: 32,
              iconColor: '#b1c937',
              icon: 'icon-yijianxiang',
              text: '意见箱'
            },
            {
              id: 33,
              iconColor: '#95abf3',
              icon: 'icon-geren',
              text: '加入茶师'
            }
          ]
        }
      ]
    }
  },
  components: { TabBar, MyHeader, DomainCom },
  methods: {
    toLogin() {
      this.$router.push('/login')
    }
  }
}
</script>
<style lang="scss" scoped>
.my {
  background-color: #f5f5f5;
  padding-bottom: 64px;
  .header-login {
    background: url('@/assets/images/cbtopbg.jpg') center center no-repeat;
    background-size: cover;
  }
  .login-btn-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 112.5px;
    .login-btn {
      padding: 5px 20px;
      border-radius: 5px;
      background-color: rgba(255, 181, 0, 0.9);
      color: #fff;
      line-height: 25px;
    }
  }
}
</style>
