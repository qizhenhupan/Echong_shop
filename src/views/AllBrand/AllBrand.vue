<template>
    <div class="all-brand" >
      <div>
        <EleHeader title="全部品牌"/>
        <div v-if="Object.keys(all).length" id="brand" ref="brand">
          <div class="all-brand-item" v-for="(item,index) in charList" :key="index">
            <!--A是65-->
            <p class="title-char">
              {{item}}
            </p>
            <ul class="brand-list" v-if="all[item]">
              <li class="brand-item" v-for="(d,i) in all[item].value">
                <div class="brand-img">
                  <img :src="d.logo" >
                </div>
                <div class="name-address">
                  <p class="name">{{d.name}}</p>
                  <p class="address">{{d.address}}</p>
                </div>
              </li>
            </ul>
            <div class="no-brand" v-else>
              暂时没有该品牌产品哦！
            </div>
          </div>
        </div>
      </div>
      <div class="brand-pagination" ref="bullet-box">
        <span class="pagination-bullet"
              :class="{active:index===currentChar}"
              v-for="(c,index) in charList"
              @click="selectChar(index,$event)"
              :key="index">
          {{c}}
        </span>
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapGetters} from 'vuex'
    export default {
      name: "all-brand",
      data(){
        return {
          height:[],
          scrollY:0,
        }
      },
      mounted(){
        this.$store.dispatch('getBrand',()=>{
          this.$nextTick(()=>{
            this._initScroll();
            this._initHeight();
          });
        })
      },
      computed:{
        ...mapGetters({all:'allBrand'}),
        charList(){
          const result = [];
          for(let i=65;i<=90;i++){
            result.push(String.fromCharCode(i))
          }
          return result;
        },
        currentChar(){
          const {scrollY,height} = this;
          if(!height.length)return 0;
         let index =  height.findIndex((h,index)=>{
            if(-h>=scrollY && -height[index+1]<scrollY){
              return true
            }
          });
         index = index >-1?index:0;
         return index;
        },
      },
      watch:{
      },
      methods:{
        selectChar(index,event){
          if(event.target.nodeName.toLowerCase()!=='span')return;
          //scrollTo(x,y)将x,y坐标滑动致左上角顶部！
          //scrollX，scrollY pageXOffset pageYOffset
          const scrollY = this.height[index];
          this.navList.scrollTo(0,-scrollY,500);
        },
        _initScroll(){
          this.navList = new BScroll('.all-brand',{
            click:true,
            probeType:2,
            scrollY:true,
          });
          this.navList.on('scroll',(b)=>{
            const {y} =b
            this.scrollY = y
          });
          this.navList.on('scrollEnd',b=>{
            const {y} =b
            this.scrollY = y
          });
        },
        _initHeight(){
          const arr = [50]
          const {brand} = this.$refs
          const items = brand.getElementsByClassName('all-brand-item');
          [].reduce.call(items,(pre,i)=> {
            pre+=i.offsetHeight
            arr.push(pre);
            return pre
          },50);
          this.height = arr
        },
      },
    }
</script>

<style lang='stylus' rel='stylesheet/stylus' >
  .all-brand
    height 100%
    .all-brand-item
      .title-char
        height 30px
        background #eee
        padding 0 15px
        line-height 30px
        font-size 13px
      .brand-list
        box-sizing border-box
        padding-right 20px
        .brand-item
          height 75px
          box-sizing border-box
          border-bottom 1px solid #eee
          padding 10px 0
          overflow hidden
          .brand-img
            float left
            height 100%
            box-sizing border-box
            margin 0 20px 0 10px
            width  100px
            border 1px solid #eee
            background #fff
            overflow hidden
            img
              height 100%
              margin 0 auto
              width auto;
          .name-address
            float left
            height 100%
            .name
              margin 5px 0 8px
            .address
              font-size 13px
              color #888
      .no-brand
        height 50px
        line-height 50px
        font-size 20px
        font-weight bold
        padding 0 20px
    .brand-pagination
      position fixed
      z-index 10
      margin 50px 0
      right 0
      top 0
      bottom 0
      width 20px
      display flex
      flex-flow column
      justify-content center
      text-align center
      .pagination-bullet
        margin 2px 0
        font-size 13px
        &.active
          color red
          font-weight bold

</style>
