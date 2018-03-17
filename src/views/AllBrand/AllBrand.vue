<template>
    <div class="all-brand" >
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
      <div class="brand-pagination" ref="bullet-box">
        <span class="pagination-bullet"
              :class="{active:index===0}"
              v-for="(c,index) in charList"
              @click="selectChar(index,$event)"
              :key="index">
          {{c}}
        </span>
      </div>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
    export default {
      name: "all-brand",
      data(){
        return {
          height:[],
        }
      },
      mounted(){
        this.$store.dispatch('getBrand')
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
      },
      watch:{
        all(value){
          const arr = [];
          this.$nextTick(()=>{
            const title = document.getElementById('brand').getElementsByClassName('title-char');
            [].forEach.call(title,(t)=>{
              arr.push(t.offsetTop);
            });
            this.height = arr;
            this.$refs.brand.spanIndex = 0;
          });
        }
      },
      methods:{
        selectChar(index,event){
          const {brand} = this.$refs;
          if(brand.isMoving){return;}
          if(index===brand.spanIndex){return}
          if(event.target.nodeName.toLowerCase()!=='span')return;
          const bullets = this.$refs['bullet-box'].children;
          //scrollTo(x,y)将x,y坐标滑动致左上角顶部！
          //scrollX，scrollY pageXOffset pageYOffset

          bullets[index].classList.add('active');
          bullets[brand.spanIndex].classList.remove('active');
          brand.spanIndex = index;
          const times = 50 ;
          const time =  300 ;
          const  total = this.height[index] -  window.scrollY ;
          const item = total/times;
          brand.isMoving = true;
          var  count = 0;
          this.intervalId = setInterval(()=>{
            window.scrollBy(0,item);
            count++;
            if(count>times){
              clearInterval(this.intervalId);
              window.scrollTo(0,this.height[index]);
              brand.isMoving = false;
            }
          },time/times);
        }
      },
    }
</script>

<style lang='stylus' rel='stylesheet/stylus' >
  .all-brand
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
