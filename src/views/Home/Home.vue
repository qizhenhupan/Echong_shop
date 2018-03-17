<template>
<div class="mainContent" v-if="home.dog_img" :class="{hasAdv:showAdv}">
  <div class="home-content">
    <div class="content">
      <div class="category-banner swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) of home.dog_banner" :key="index">
            <img :src="item" >
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="dog-img" >
        <img  :src="home.dog_img"  style="width:100%" >
      </div>
      <div class="goods-list">
        <ul class="goods-list-wrapper">
          <li v-for="(item,index) of home.menu_list" :key="index">
            <img :src="item"  >
          </li>
        </ul>
      </div>
      <div class="miaosha">
        <img :src="home.miaosha" >
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
        <img :src="home.brand_power">
      </div>
      <div class="gif-bg">
        <img :src="home.gif"/>
      </div>
      <div class="dapai-tuangou">
        <img :src="home.dapaituan">
      </div>
      <div class="tuangou-list swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) of home.dapaituan_list" :key="index">
            <img :src="item">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="dapai-hanhuo">
        <img :src="home.haohuo" >
      </div>
      <div class="haohuo-box" v-for="(haohuo,Index) of home.haohuo_list" :key="Index">
        <div class="haohuo-left" >
          <a href="javascript:;" v-for="(i,index) in haohuo.left"
             :key="index" class="haohuo-item">
            <img :src="i" >
          </a>
        </div>
        <div class="haohuo-right" >
          <a href="javascript:;" v-for="(j,index) in haohuo.right"
             :key="index" class="haohuo-item">
            <img :src="j" >
          </a>
        </div>
      </div>
      <div class="zuicanjiang">
        <div class="zuicanjiang-img">
          <img :src="home.zuican">
        </div>
        <div class="zuicanjiang-content">
          <img :src="home.zuican_content" >
        </div>
      </div>
      <div class="tebiexinqiu">
        <div class="title-img">
          <img :src="home.special">
        </div>
        <div class="content">
          <div class="left" >
            <img :src="home.special_list[0]" >
          </div>
          <div class="right">
            <img :src="home.special_list[1]" >
            <img :src="home.special_list[2]" >
          </div>
        </div>
      </div>
      <div class="teselanmu">
        <div class="title-img">
          <img :src="home.lanmu" >
        </div>
        <div class="content-left">
          <img class="tese-item" :src="item"
               v-for="(item,index) of home.lanmu_list.left"
               :key="index"
          >
        </div>
        <div class="content-right">
          <img class="tese-item" :src="item"
               v-for="(item,index) of home.lanmu_list.right"
               :key="index"
          >
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
  </div>
  <div class="fixed-header">
    <div class="adv-box" v-if="showAdv">
      <img src="./adv.jpg">
      <i class="iconfont icon-guanbi" @click="closeAdv"></i>
    </div>
    <header class="home-header">
      <div class="home-search">
        <div class="pet-city">
          <span>狗狗</span>
          &#124;
          <span>重庆</span>
          <i class="iconfont icon-sanjiao"></i>
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
        <div class="tab-wrapper swiper-wrapper">
          <div class="tab-item swiper-slide" v-for="(item,index) in home.menus" :key="index">
            <span class="text" :class="{current:index===0}">{{item.menu_name}}</span>
          </div>
        </div>
      </div>
    </header>
  </div>
  <div class="fixed-switch">
  </div>
</div>
</template>

<script>
  import 'swiper/dist/css/swiper.min.css'
  import Swiper from 'swiper'
  import BScroll from 'better-scroll'
  import {mapActions,mapState} from 'vuex'
  import {Indicator} from 'mint-ui'
    export default {
      name: "home",
      data(){
        return {
          showAdv:true,
        }
      },
      mounted(){
        this.getHomePage(()=>{
          this.$nextTick(()=>{
            this._initScroll()
            Indicator.close()
          })
        });
        Indicator.open({
          text:'数据加载中...',
          spinnerType:'triple-bounce'
        })
      },
      computed:{
        ...mapState({home:'homePage'})
      },
      methods:{
        ...mapActions(['getHomePage']),
        switchTab(e){
          const tabs = this.$refs.tabs.getElementsByClassName('text')
          const {target} = e
            if(target.classList.contains('current')){
            return
            }
          [].forEach.call(tabs,(tab)=>{
            tab.classList.remove('current')
          })
          target.classList.add('current');
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
        },
        closeAdv(){
          this.showAdv = false
          this.$nextTick(()=>{
            this.bodyScroll.refresh()
          })
        },
        _initScroll(){
           new Swiper('.category-banner',{
             pagination:{
               el:'.swiper-pagination',
               clickable:true,
             },
             loop:true,
             autoplay:{
               delay:2500,
               disableOnInteraction:false,
             },
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
             autoplay:{
               delay:2500,
               disableOnInteraction:false,
             },
           });
           new Swiper('.home-tabs',{
             slidesPerView:5,
             freeMode:true,
           });
          this.bodyScroll =  new BScroll("#app .home-content",{
             click:true,
           })
        },
      }
    }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  @import '../../assets/stylus/mixins.styl'
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
  .fixed-header
    position fixed
    top 0
    z-index 100
    width 100%
    .adv-box
      position relative
      .iconfont
        color #eee
        font-size 25px
        position absolute
        top 5px
        left 5px
    .home-header
      background #fff
      box-sizing border-box
      padding  10px 10px 0
      .home-search
        height 25px
        display flex
        line-height 25px
        .pet-city
          flex 30%
          position relative
          .iconfont
            font-size 8px
            position absolute
            top 2px
            right 16px
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
        margin 10px 0
        height 20px
        padding-bottom 5px
        .tab-wrapper
          .tab-item
            text-align center
            span
              width
              color #000000
              padding-bottom 8px
              &.current
                color $green
                box-shadow 0 -2px 0 $green inset
  #app .mainContent.hasAdv
    padding-top 126px
  .home-content
    box-sizing border-box
    height 100%
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
        .haohuo-box
          display flex
          .haohuo-left,.haohuo-right
            flex 1
            background #000
            display flex
            flex-flow column
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
          overflow hidden
          width 100%
          .content-left,.content-right
            float left
            width 50%
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

</style>
