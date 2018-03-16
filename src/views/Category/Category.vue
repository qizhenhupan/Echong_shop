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
      <router-view />
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
    box-sizing border-box
    padding-bottom 50px
  .mainContent
    height 100%
  .category
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
          display inline-block
          font-size 16px
          padding 0 8px
          margin 0 8px
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
