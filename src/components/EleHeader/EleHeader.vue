<template>
  <div>
    <div class="header">
      <i class="iconfont icon-jiantou jiantou"></i>
      {{title}}
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
          <span class="num"></span>
        </div>
        <div class="nav-item">
          <i class="iconfont icon-chongwu"></i>
          <p class="text">我的e宠</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
    export default {
      name: "ele-header",
      props:{
        title:{
          type:String,
          required:true,
        }
      },
      data(){
        return {
          showDetail:false,
        }
      },
      methods:{
        toggleDetail(){
          this.showDetail = !this.showDetail
        },
      }
    }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  @import '../../assets/stylus/mixins.styl'
  .header
    text-align center
    height 50px
    line-height 50px
    font-size 18px
    border-bottom 1px solid gray
    color #555
    .jiantou
      float left
      margin-left 10px
      font-size 20px
      color #bbb
    .fenlei
      float right
      margin-right 10px
      font-size 20px
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
        font-size 22px
      .text
        font-size 16px
    &.collapse-enter,&.collapse-leave-to
      height 0
    &.collapse-enter-active,&.collapse-leave-active
      transition height .5s linear
</style>
