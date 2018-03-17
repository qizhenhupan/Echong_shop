<template>
    <div class="class" v-if="category.length">
      <div class="nav-list-wrapper">
        <ul class="nav-list" ref="lists">
          <li v-for="(c,i) in category" :class="{current:i===0}"
              @click="selectCategory(i,$event)"
              :key="i">
              {{c.name}}
          </li>
        </ul>
      </div>
      <div class="nav-content-wrapper" v-if="cate_list.length" ref="wrapper">
        <div class="content-box">
          <div  v-for="(c,i) in cate_list" :key="i">
            <div class="goods-content" v-if="c.type===0" >
              <a class="title">
                {{c.title}}
                <img class="show-all-img" src="./images/cate_right_img.png">
              </a>
              <ul class="nav-content-list">
                <li class="content-list-item" v-for="(item,index) in c.list"
                    :key="index">
                  <img class="item-img" :src="item.logo||item.photo" >
                  <p class="item-text">{{item.name}}</p>
                </li>
              </ul>
            </div>
            <!--type===0-->
            <div class="brand-content" v-else>
              <a class="title">
                {{c.title}}
              </a>
              <ul class="brand-content-list">
                <li class="brand-list-item" v-for="(item,index) in c.list"
                    :key="index"
                >
                  <img class="item-img" :src="item.photo||item.logo" >
                  <p class="item-text">{{item.name}}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import {mapActions,mapState} from  'vuex'
  import {Indicator} from 'mint-ui'
    export default {
      name: "class",
      data(){
        return {
          current:{},
        }
      },
      mounted(){
        this.getCategory(()=>{
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
      watch:{
        cate_list(){
          if(!this.navContent)return;
          this.navContent.refresh();
          Indicator.open({
            text:'数据加载中...',
            spinnerType:'triple-bounce'
          });
          this.$nextTick(()=>{
            Indicator.close()
          })
        },
      },
      computed:{
        ...mapState(['category']),
        cate_list(){
          return this.current.cate_list || (this.category.length && this.category[0].cate_list)
        },
      },
      methods:{
        ...mapActions(['getCategory']),
        _initScroll(){
            this.navList = new BScroll('.class .nav-list-wrapper',{
              scrollY:true,
              click:true,
            });
            this.navContent = new BScroll('.nav-content-wrapper',{
              click:true,
            });
          },
        selectCategory(index,event){
          const classList = event.target.classList;
          if(classList.contains('current')){
            return;
          }
          this.current = this.category[index];
          const {lists} = this.$refs;
          const lis = lists.children;
          [].forEach.call(lis,(item)=>{
            item.classList.remove('current')
          });
          classList.add('current');
          //滑动逻辑！
          //pointY，就是pageY，
          //确定中心位置，125px
          //scrollBy(x,y)
          const {pointY,maxScrollY,y} = this.navList;
          let  scrollY = 125 - pointY;
          let maxY = maxScrollY - y;
          let minY = 0  - y;
          scrollY = scrollY < maxY? maxY:scrollY>minY?minY:scrollY;
          this.navList.scrollBy(0,scrollY,500);
        },
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
      flex  0 1 75px
      text-align center
      li
        background #fff
        width 100%
        height 55px
        line-height 55px
        font-size 13px
        border-bottom 1px solid #eeeeee
        &.current
          background transparent
          color red
    .nav-content-wrapper
      flex 1
      box-sizing border-box
      overflow hidden;
      padding 3px 0 0 3px
      .content-box
        overflow hidden
        background #fff
        .goods-content
          border-bottom-1px(#eee);
          padding 0 5px
          .title
            height 20px
            line-height 20px
            color #888
            margin 0 0 5px
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
              flex 0 1 33.33%
              display flex
              flex-flow column
              justify-content space-between
              .item-img
                width 77px
                height 77px
                margin 0 auto
              .item-text
                height 20px
                line-height 20px
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
