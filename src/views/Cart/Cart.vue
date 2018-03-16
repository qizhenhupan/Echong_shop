<template>
<div class="cart">
  <div class="header">
    <i class="iconfont icon-jiantou jiantou"></i>
    购物车
    <i class="iconfont icon-fenlei1 fenlei" @click="toggleDetail"></i>
  </div>
  <transition name="collapse">
    <div class="show-detail" v-if="showDetail">
      <div class="nav-item">
        <i class="iconfont icon-fangzi"></i>
        <p class="text">首页</p>
      </div>
      <div class="nav-item">
        <i class="iconfont icon-ziyuan"></i>
        <p class="text">商品分类</p>
      </div>
      <div class="nav-item">
        <i class="iconfont icon-gouwuche01"></i>
        <p class="text">购物车</p>
      </div>
      <div class="nav-item">
        <i class="iconfont icon-chongwu"></i>
        <p class="text">我的e宠</p>
      </div>
    </div>
  </transition>
  <div class="content">
    <div class="cartfont">
      <i class="iconfont icon-cart"></i>
    </div>
    <p class="msg">购物车是空的</p>
    <div class="link-tab">
      <button class="goshopping">
        去逛逛
      </button>
      <button class="save">
        我的收藏
      </button>
    </div>
  </div>
</div>
</template>

<script>
    export default {
      name: "cart",
      data(){
        return {
          showDetail:false,
        }
      },
      methods:{
        toggleDetail(){
          this.showDetail = !this.showDetail
        }
      }
    }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.cart
  .header
    text-align center
    height 50px
    line-height 50px
    font-size 25px
    border-bottom 1px solid gray
    color #888
    .jiantou
      float left
      margin-left 10px
      font-size 25px
      color #bbb
    .fenlei
      float right
      margin-right 10px
      font-size 25px
      color #bbb
  .show-detail
    margin 10px 0
    height 50px
    display flex
    box-sizing border-box
    border-bottom 1px solid gray
    overflow hidden
    background #fff
    .nav-item
      flex 1
      text-align center
      .iconfont
        font-size 25px
      .text
        font-size 18px
    &.collapse-enter,&.collapse-leave-to
      height 0
    &.collapse-enter-active,&.collapse-leave-active
      transition height  20s
  .content
    text-align center
    .cartfont
      margin-top 80px
      .iconfont
        font-size 150px
        color #ccc
    .msg
      font-size 20px
      color #bbb
      margin 20px 0 20px 10px
    .link-tab
      button
        width 150px
        height 50px
        border-radius 5px
        background transparent
        border 1px solid #888
        color #aaa
</style>
