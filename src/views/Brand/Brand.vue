<template>
  <div class="brand-box">
    <div class="brand-wrapper">
      <div class="brand-content" v-for="num in 4" :key="num">
        <p class="title">
          —— 推荐品牌 ——
        </p>
        <ul class="brand-content-list">
          <li class="brand-list-item" v-for="item in 20">
            <img class="item-img" src="./images/brand-item.jpg" >
            <p class="item-text">天衡宝&nbsp;(原雪山)</p>
            <p class="item-address">中国</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
    export default {
      name: "brand",
      mounted(){
        new BScroll('.brand-box',{
          click:true,
        });
      },
    }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  .brand-box
    background #eee
    overflow hidden
    height 100%
    .brand-content
      text-align center
      background #fff
      margin 3px 0 10px
      overflow hidden
      .title
        font-size 12px
        color #aaa
        margin 20px

      .brand-content-list
        display flex
        flex-wrap wrap
        .brand-list-item
          font-size 13px
          flex 0 0 33.33%
          margin 0 0 20px
          .item-img
            width 80%
            margin 0 auto
            border 1px solid #ddd
            border-radius 2px
          .item-text
            color red
          .item-address
            color #aaa
          p
            margin 5px 0
</style>
