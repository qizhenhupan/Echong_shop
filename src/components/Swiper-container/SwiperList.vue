<template>
  <div :class="newClass" class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) of arr" :key="index">
        <img :src="item" >
      </div>
      <!--<div class="swiper-slide">-->
      <!--<img src="./images/zhuliang.jpg" >-->
      <!--</div>-->
      <!--<div class="swiper-slide">-->
      <!--<img src="./images/baolu.jpg" >-->
      <!--</div>-->
      <!--<div class="swiper-slide">-->
      <!--<img src="./images/fumo.jpg" >-->
      <!--</div>-->
      <!--<div class="swiper-slide">-->
      <!--<img src="./images/ouguan.jpg" >-->
      <!--</div>-->
      <!--<div class="swiper-slide">-->
      <!--<img src="./images/tongzhi.jpg" >-->
      <!--</div>-->
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
    export default {
      name: "swiper-list",
      props:{
        newClass:String,
        arr:{
          type:Array,
          required:true,
        },
        hasPagination:Boolean,
      },
      mounted(){
        const {newClass,hasPagination} = this
          new Swiper('.swiper-container'+'.'+newClass,{
            autoplay:true,
            pagination:{
              el:'.swiper-pagination',
              clickable:true,
            }
          })
      },
    }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>

</style>
