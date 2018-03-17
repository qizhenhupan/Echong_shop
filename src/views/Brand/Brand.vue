<template>
  <div class="brand-box">
    <div class="brand-wrapper" v-if="brand.length">
      <div class="brand-content" v-for="(b,i) in brand" :key="i">
        <p class="title">
          —— {{b.title}} ——
        </p>
        <ul class="brand-content-list">
          <li class="brand-list-item" v-for="(item,index) in b.list" :key="index">
            <img class="item-img" :src="item.logo" >
            <p class="item-text">{{item.name}}</p>
            <p class="item-address">{{item.address}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="show-all" @click="$router.push('/allBrand')">
      全部
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapActions,mapState} from 'vuex'
  import {Indicator} from 'mint-ui'
    export default {
      name: "brand",
      mounted(){
        this.getBrand(()=>{
          this.$nextTick(()=>{
            new BScroll('.brand-box',{
              click:true,
            });
            Indicator.close();
          })
        });
        Indicator.open({
          text:"数据加载中...",
          spinnerType:'triple-bounce',
        })
      },
      computed:{
        ...mapState(['brand']),
      },
      methods:{
        ...mapActions(['getBrand']),
      }
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
          margin-top 10px
          .item-img
            width 80%
            margin 0 auto
            border 1px solid #ddd
            border-radius 2px
          .item-text
            color #000
          .item-address
            color #aaa
          p
            margin 10px 0
    .show-all
      position fixed
      right 15px
      bottom 65px
      width 40px
      height 40px
      background rgba(0,0,0,.5)
      border-radius 50%
      line-height 40px
      text-align center
      font-size 13px
      color #fff
</style>
