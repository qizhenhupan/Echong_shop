<template>
    <div class="login">
      <div class="header">
        <div class="to-register">
          <i class="iconfont icon-jiantou"></i>
          <span>注册</span>
        </div>
        <div class="padding"></div>
        <div class="login-type">
          <div class="normal" @click="toggleType(true)">
            普通登陆
            <i class="iconfont icon-triangle-up" v-if="isNormal"></i>
          </div>
          <div class="phone" @click="toggleType(false)">
            手机动态密码登录
            <i class="iconfont icon-triangle-up" v-if="!isNormal"></i>
          </div>
        </div>
      </div>
      <div class="login-form">
        <form action="" @submit.prevent>
          <div class="normal" v-if="isNormal">
            <div class="username">
              <label >
                <i class="iconfont icon-shouji"></i>
                <input type="text" placeholder="手机/用户名/邮箱">
              </label>
            </div>
            <div class="pwd">
              <label >
                <i class="iconfont icon-iconset0114"></i>
                <input type="password" placeholder="输入密码">
              </label>
            </div>
          </div>
          <div class="phone" v-else>
            <div class="phone-number">
              <label >
                <i class="iconfont icon-shouji"></i>
                <input type="text" placeholder="已注册的手机号">
              </label>
            </div>
            <div class="img-code">
              <label >
                <i class="iconfont icon-iconset0114"></i>
                <input type="text" placeholder="请输入图片内容">
              </label>
              <div class="code"></div>
            </div>
            <div class="code">
              <label >
                <i class="iconfont  icon-iconset0114"></i>
                <input type="text" placeholder="动态密码">
                <button class="getReactiveCode">获取动态密码</button>
              </label>
            </div>
          </div>
          <div class="forget-pwd">
            忘记密码？
          </div>
          <button class="login-btn">登录</button>
        </form>
      </div>
      <div class="corporations">
        <p class="title">合作网站登录</p>
        <ul class="list">
          <li class="item">
            <img src="./zhifubao.png" alt="支付宝">
          </li>
          <li class="item">
            <img src="./qq.png" alt="">
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  import data from '../../mock'
    export default {
      name: "login",
      data(){
        return {
          isNormal: true,
        }
      },
      methods:{
        toggleType(flag){
          this.isNormal = flag
        }
      }
    }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  @import '../../assets/stylus/mixins.styl'
  .login
    .header
      height 174px
      background url("./login-bg.png") no-repeat
      background-size 100%
      .to-register
        height 50px
        line-height 50px
        padding-left 10px
        font-size 16px
        color #fff
        .iconfont
          font-size 18px
        span
          float right
          margin-right 10px
      .padding
        height 80px
      .login-type
        height 44px
        background rgba(255,255,255,.4)
        color #fff
        display flex
        >*
          position relative
          flex 1
          text-align center
          line-height 44px
          font-size 15px
          .iconfont
            font-size 22px
            position absolute
            bottom -17px
            left 50%
            transform translateX(-50%)

    .login-form
      padding  20px 10px
      .normal,.phone
        >div
          border-bottom 1px solid #eeeeee
          padding 10px 5px
          position relative
        >div input
          padding 0 0 0 5px
          box-sizing border-box
          &::-webkit-input-placeholder
            color #ccc
        >div .iconfont
          color #bbb
          vertical-align middle
          display inline-block
          margin-top -2px
          font-size 20px
        .img-code
          .code
            position absolute
            width 80px
            height 30px
            background red
            right 10px
            top 4px
        .code
          .getReactiveCode
            position absolute
            padding 5px 10px
            box-sizing border-box
            border 1px solid red
            color red
            border-radius 4px
            background transparent
            top 4px
            right 10px
      .forget-pwd
        text-align right
        height 40px
        line-height 40px
        color #bbb
      .login-btn
        background $green
        color #fff
        border-radius 4px
        width 100%
        height 40px
        line-height 40px
    .corporations
      margin-top 50px
      .title
        color #bbb
        text-align center
        margin-bottom 20px
      .list
        display flex
        .item
          flex-basis 33.33%
          img
            width 50%
            margin 0 auto
</style>
