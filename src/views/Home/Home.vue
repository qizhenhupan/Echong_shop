<template>
  <div class="home-content">
    <div class="fixed-header">
      <header class="home-header">
        <div class="home-search">
          <div class="pet-city">
            <span>狗狗</span>
            &#124;
            <span>重庆</span>
          </div>
          <div class="search-box">
            <input type="text" placeholder="搜索商品和品牌">
            <i class="search-btn iconfont icon-search2"></i>
          </div>
          <div class="tip-box">
            <i class="iconfont icon-tips"></i>
          </div>
        </div>
        <div class="home-tabs" ref="tabs" @click="switchTab">
          <div class="tab-item"><span class="text current">首页</span></div>
          <div class="tab-item"><span class="text">狗狗主粮</span></div>
          <div class="tab-item"><span class="text">服饰城</span></div>
          <div class="tab-item"><span class="text">医疗保障</span></div>
          <div class="tab-item"><span class="text">零食玩具</span></div>
        </div>
      </header>
      <div class="adv-box"></div>
    </div>
    <div class="content">
      <div class="category-banner swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="./images/haiwai.jpg" >
          </div>
          <div class="swiper-slide">
            <img src="./images/zhuliang.jpg" >
          </div>
          <div class="swiper-slide">
            <img src="./images/baolu.jpg" >
          </div>
          <div class="swiper-slide">
            <img src="./images/fumo.jpg" >
          </div>
          <div class="swiper-slide">
            <img src="./images/ouguan.jpg" >
          </div>
          <div class="swiper-slide">
            <img src="./images/tongzhi.jpg" >
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="dog-img" >
        <img src="./images/dog.jpg" style="width:100%" >
      </div>
      <div class="goods-list">
        <ul class="goods-list-wrapper">
          <li><img src="./images/test.jpg" ></li>
          <li><img src="./images/test.jpg" ></li>
          <li><img src="./images/test.jpg" ></li>
          <li><img src="./images/test.jpg" ></li>
          <li><img src="./images/test.jpg" ></li>
          <li><img src="./images/test.jpg" ></li>
          <li><img src="./images/test.jpg" ></li>
          <li><img src="./images/test.jpg" ></li>
          <li><img src="./images/test.jpg" ></li>
          <li><img src="./images/test.jpg" ></li>
        </ul>
      </div>
      <div class="miaosha">
        <img src="./images/miaosha1.jpg" >
      </div>
      <div class="surprise">
        <div class="surprise-header">
          <div class="img">
            <img src="./images/fengqiang.png">
          </div>
          <div class="time">
            本场结束
            <span class="minute">12</span>
            <span class="colon">&#58;</span>
            <span class="second">00</span>
          </div>
          <div class="more">
          </div>
        </div>
        <div class="swiper-container surprise-list">
          <ul class="swiper-wrapper">
            <li class="swiper-slide">
              <img src="./images/goods-item.jpg" >
              <span class="price">&yen;7.60</span>
              <span class="discount">省68.80</span>
            </li>
            <li class="swiper-slide">
              <img src="./images/goods-item.jpg" >
              <span class="price">&yen;7.60</span>
              <span class="discount">省68.80</span>
            </li>
            <li class="swiper-slide">
              <img src="./images/goods-item.jpg" >
              <span class="price">&yen;7.60</span>
              <span class="discount">省68.80</span>
            </li>
            <li class="swiper-slide">
              <img src="./images/goods-item.jpg" >
              <span class="price">&yen;7.60</span>
              <span class="discount">省68.80</span>
            </li>
            <li class="swiper-slide">
              <img src="./images/goods-item.jpg" >
              <span class="price">&yen;7.60</span>
              <span class="discount">省68.80</span>
            </li>
            <li class="swiper-slide">
              <img src="./images/goods-item.jpg" >
              <span class="price">&yen;7.60</span>
              <span class="discount">省68.80</span>
            </li>
            <li class="swiper-slide">
              <img src="./images/goods-item.jpg" >
              <span class="price">&yen;7.60</span>
              <span class="discount">省68.80</span>
            </li>
            <li class="swiper-slide">
              <img src="./images/goods-item.jpg" >
              <span class="price">&yen;7.60</span>
              <span class="discount">省68.80</span>
            </li>
            <li class="swiper-slide">
              <img src="./images/goods-item.jpg" >
              <span class="price">&yen;7.60</span>
              <span class="discount">省68.80</span>
            </li>
            <li class="swiper-slide">
              <img src="./images/goods-item.jpg" >
              <span class="price">&yen;7.60</span>
              <span class="discount">省68.80</span>
            </li>
            <li class="swiper-slide">
              <img src="./images/goods-item.jpg" >
              <span class="price">&yen;7.60</span>
              <span class="discount">省68.80</span>
            </li>
            <li class="swiper-slide">
              <img src="./images/goods-item.jpg" >
              <span class="price">&yen;7.60</span>
              <span class="discount">省68.80</span>
            </li>
            <li class="swiper-slide">
              <img src="./images/goods-item.jpg" >
              <span class="price">&yen;7.60</span>
              <span class="discount">省68.80</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="power-brand">
        <img src="./images/miaosha1.jpg">
      </div>
      <div class="gif-bg">
        <img src="./images/bg_gif.gif"/>
      </div>
      <div class="dapai-tuangou">
        <img src="./images/yi-zhe.jpg">
      </div>
      <div class="tuangou-list swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="./images/tuangou-goods.jpg" >
          </div>
          <div class="swiper-slide">
            <img src="./images/tuangou-goods.jpg" >
          </div>
          <div class="swiper-slide">
            <img src="./images/tuangou-goods.jpg" >
          </div>
          <div class="swiper-slide">
            <img src="./images/tuangou-goods.jpg" >
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="dapai-hanhuo">
        <img src="./images/dapaihaohuo.jpg" alt="">
      </div>
      <div class="haohuo-list">
        <a href="javascript:;" v-for="item in 16"  :key="item" class="haohuo-item">
          <img src="./images/haohuo-goods.jpg" >
        </a>
      </div>
      <div class="zuicanjiang">
        <div class="zuicanjiang-img">
          <img src="./images/zuicanjiang.jpg">
        </div>
        <div class="zuicanjiang-content">
          <img src="./images/zuicanjiang-content.jpg@.jpg" >
        </div>
      </div>
      <div class="tebiexinqiu">
        <div class="title-img">
          <img src="./images/tebiexinqiu.jpg">
        </div>
        <div class="content">
          <div class="left">
            <img src="./images/left.jpg" >
          </div>
          <div class="right">
            <img src="./images/right-1.jpg" >
            <img src="./images/right-2.jpg" >
          </div>
        </div>
      </div>
      <div class="teselanmu">
        <div class="title-img">
          <img src="./images/teselanmu.jpg" >
        </div>
        <div class="content">
          <img class="tese-item" src="./images/tese-item.jpg" v-for="item in 6">
        </div>
      </div>
      <div class="content-footer">
        <p class="ft-tabs" ref="footer-tabs" @click="footerTabs">
          <span class="current">触屏版</span>
          <span>手机客户端</span>
          <span>关于我们</span>
          <span>联系我们</span>
        </p>
        <p class="ft-copyrights">
          <small>&copy;wap.epet.com</small>
          <span class="text">版权&#58;重庆易宠科技有限公司</span>
        </p>
      </div>
    </div>
    <div class="fixed-switch">
    </div>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.min.css'
  import Swiper from 'swiper'
    export default {
      name: "home",
      data(){
        return {

        }
      },
      mounted(){
        new Swiper('.category-banner',{
          pagination:{
            el:'.swiper-pagination',
            clickable:true,
          },
          loop:true,
          autoplay:true,
        });
        new Swiper('.surprise>.swiper-container',{
          slidesPerView:3.5,
          freeMode:true,
          spaceBetween:10,
        });
        new Swiper('.tuangou-list.swiper-container',{
          loop:true,
          pagination:{
            el:'.swiper-pagination',
            clickable:true,
          },
          autoplay:true,
        });
      },
      methods:{
        switchTab(e){
          const tabs = this.$refs.tabs.getElementsByClassName('text')
          const {target} = e
            if(target.classList.contains('current')){
            return
            }
          [].forEach.call(tabs,(tab)=>{
            tab.classList.remove('current')
          })
          ;target.classList.add('current')
        },
        footerTabs(e){
          const ftTabBox  = this.$refs['footer-tabs']
          const tabs = ftTabBox.children
          const {target} = e
          if(target===ftTabBox||target.classList.contains('current'))return;
          [].forEach.call(tabs,(tab)=>{
            tab.classList.remove('current')
          });
          target.classList.add('current')
        }
      }
    }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  @import '../../assets/stylus/mixins.styl'
  .home-content
    padding-top 70px
    padding-bottom 55px
    .fixed-header
      .home-header
        z-index 100
        background #fff
        width 100%
        top 0
        position fixed
        box-sizing border-box
        padding  10px 10px 0
        .home-search
          height 25px
          display flex
          line-height 25px
          .pet-city
            text-align center
            flex 30%
          .search-box
            position relative
            flex 60%
            input
              display block
              height 100%
              width 100%
              background $gray
              box-sizing border-box
              padding 3px 5px
              border-radius 5px
              font-size 14px
            .search-btn
              position absolute
              height 100%
              top 0
              right 5px
          .tip-box
            flex 10%
            display flex
            justify-content center
            align-items center
            .iconfont
              font-size 20px
              color #333
        .home-tabs
          margin-top 10px
          display flex
          .tab-item
            flex 1
            display flex
            justify-content center
            span
              height 20px
              color #000000
              padding-bottom 5px
              &.current
                color $green
                box-shadow 0 -2px 0 $green inset


    .content
      .category-banner
        width 100%
        .swiper-pagination
          .swiper-pagination-bullet-active
            background $gray
            width 20px
            border-radius 10px
      .goods-list
        .goods-list-wrapper
          clearFix()
          >li
            float left
            width 20%
      .surprise
        .surprise-header
          clearFix()
          padding 10px
          height 22px
          line-height 22px
          .img
            width 25%
            float left
          .time
            float left
            text-align center
            font-size 13px
            width 40%
            margin-left 20%
            .minute,.second
              border 1px solid
          .more
            float left
            width 15%
            height 100%
            background url("./images/more.png") no-repeat ;
            background-size auto 34px
            background-position -15px -8px
        .surprise-list
          padding-bottom 10px
          .swiper-wrapper
            .swiper-slide
              text-align center
              .price
                display block
                color red
              .discount
                font-size 12px
                color #aaa
      .tuangou-list
        .swiper-pagination
          .swiper-pagination-bullet-active
            width 20px;
            border-radius 10px
            background $gray
      .haohuo-list
        display flex
        flex-flow wrap
        .haohuo-item
          flex 50%
      .tebiexinqiu
        display flex
        flex-wrap wrap
        .title-img
            flex 0 0 100%
        .content
          display flex
          .left
            flex 1
          .right
            flex 1
            img:last-child
              margin-top -2px
      .teselanmu
        .content
          display flex
          flex-wrap wrap
          .tese-item
            width 50%
            height 50%

      .content-footer
        padding 20px 20px
        text-align center
        .ft-tabs
          font-size 15px
          span
            margin 5px
          span.current
            color $red
        .ft-copyrights
          margin-top 15px
          color #000
          font-size 12px
    .fixed-switch
      position fixed
      right 0
      bottom 100px
      width 41px
      height 46px
      bg-url('./images/godog.png');
      background-size 82px 46px
      background-repeat no-repeat
      animation blink 2s steps(1) infinite;

</style>
