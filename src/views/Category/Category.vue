<template>
  <div class="category">
    <header class="category-header">
      <div class="tabs">
        <router-link tag="span" to="/category/class">
          分类
        </router-link>
        <router-link tag="span" to="/category/brand">
          品牌
        </router-link>
      </div>
      <div class="search">
        <i class="iconfont icon-search2"></i>
      </div>
    </header>
    <div class="category-content">
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
  </div>
</template>

<script>
    export default {
      name: "category",
      components:{
        mounted(){
        },
      }
    }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  @import '../../assets/stylus/mixins.styl'
  #app
    height 100%
  .mainContent
    height 100%
  .category
    box-sizing border-box
    padding 0 0 50px 0
    height 100%
    .category-header
      text-align center
      height 40px
      line-height 40px
      position relative
      border-bottom 1px solid #aaa;
      .tabs
        height 100%
        text-align center
        span
          font-size 13px
          font-weight 600
          padding 0 8px 10px
          margin 0 10px
        span.router-link-active
          color red;
          font-weight 500
          box-shadow 0 -2px 0 red inset;
      .search
        position absolute
        right 10px
        top 2px
        .iconfont
          color #bbb
          font-size 20px
    .category-content
      height calc(100% - 40px)
</style>
