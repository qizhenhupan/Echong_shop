<template>
    <div class="class">
      <div class="nav-list-wrapper">
        <ul class="nav-list">
          <li v-for="item in 20"  @click="selectList(item)" :key="item">
            <span class="text">
              狗狗零食
            </span>
          </li>
        </ul>
      </div>
      <div class="nav-content-wrapper" ref="wrapper">
        <div class="content-box">
          <div class="goods-content">
            <a class="title">
              热门分类
              <img class="show-all-img" src="./images/cate_right_img.png">
            </a>
            <ul class="nav-content-list">
              <li class="content-list-item" v-for="item in 6">
                <img class="item-img" src="./images/items.jpg" >
                <p class="item-text">进口狗粮</p>
              </li>
            </ul>
          </div>
          <div class="brand-content">
            <a class="title">
              热门品牌
            </a>
            <ul class="brand-content-list">
              <li class="brand-list-item" v-for="item in 20">
                <img class="item-img" src="./images/brand-item.jpg" >
                <p class="item-text">天衡宝&nbsp;(原雪山)</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
    export default {
        name: "class",
      mounted(){
          this.navList = new BScroll('.class .nav-list-wrapper',{
            scrollY:true,
            click:true,
          });
          new BScroll('.nav-content-wrapper',{
            click:true,
          })
      },
      methods:{
          selectList(index){

          }
      }
    }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
@import '../../assets/stylus/mixins.styl'
  .class
    background #eee;
    height 100%
    display flex
    overflow hidden
    justify-content space-between
    .nav-list-wrapper
      flex   24%
      text-align center
      background blue
      li
        width 100%
        height 40px
        line-height 40px
        .text
          display block
          padding 10px
    .nav-content-wrapper
      margin 0   0 0 5px
      flex  75%
      box-sizing border-box
      overflow hidden;
      .content-box
        margin-top -8px
        background #fff
        .goods-content
          border-bottom-1px(#eee);
          margin 10px 0 0
          padding 0 5px
          .title
            height 20px
            line-height 20px
            color #888
            margin 5px 0
            font-size 12px
            .show-all-img
              float right
              height 10px
              margin 5px 5px 0
              width auto
          .nav-content-list
            overflow hidden
            display flex
            flex-wrap wrap
            .content-list-item
              flex 33.33%
              .item-text
                margin 15px 0
                text-align center
                font-size 13px
                color #555
        .brand-content
          margin-top 20px
          padding 0 5px
          .title
            height 20px
            line-height 20px
            color #888
            margin 5px 0
            font-size 12px
          .brand-content-list
            display flex
            flex-wrap wrap
            .brand-list-item
              flex 50%
              .item-img
                width 80%
                height auto
                margin 0 auto
                border 1px solid #eee;
                border-radius 2px
              .item-text
                text-align center
                font-size 12px
                margin 10px 0

</style>
