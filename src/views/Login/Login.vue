<template>
    <div class="login">
      <div class="header">
        <div class="to-register">
          <i class="iconfont icon-jiantou"></i>
          <span>注册</span>
        </div>
        <div class="padding"></div>
        <div class="login-type">
          <div class="normal">
            普通登陆
            <i class="iconfont icon-triangle-up"></i>
          </div>
          <div class="phone">
            手机动态密码登录
            <i class="iconfont icon-triangle-up"></i>
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

          </div>
          <div class="forget-pwd">
            忘记密码？
          </div>
          <button class="btn">登录</button>
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
    export default {
      name: "login",
      data(){
        return {
          isNormal: true,
        }
      }
    }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  .login
    .header
      height 174px
      background url("./login-bg.png") no-repeat
      background-size 100%
      .to-register
        height 50px
        line-height 50px
        padding-left 10px
        font-size 18px
        color #fff
        .iconfont
          font-size 20px
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
          .iconfont
            font-size 22px
            position absolute
            bottom -17px
            left 50%
            transform translateX(-50%)

    .login-form
      .normal
        div
          margin 10px 20px
          border-bottom 1px solid #eeeeee
        div input
          box-sizing border-box
          margin 5px 0 10px
        div .iconfont
          font-size 20px


</style>
