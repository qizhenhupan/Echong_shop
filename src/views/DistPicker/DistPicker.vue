<template>
    <div class="dist-picker">
      <ele-header title="选择收货地址"/>
      <div class="animal-type" ref="animal-box">
        <div class="space"></div>
        <button class="cat item " @click="selectAnimal(0)">
          猫猫站
        </button>
        <div class="space"></div>
        <button class="dog item active" @click="selectAnimal(1)">
          狗狗站
        </button>
        <div class="space"></div>
        <button class="water-animal item" @click="selectAnimal(2)">
          水族站
        </button>
        <div class="space"></div>
      </div>
      <p class="selected-city" >
        <span v-if="defaultAddress">当前默认地址：</span>
        <span v-else>新选择的地址：</span>
        {{address.province}}
        {{address.city}}
        {{address.area}}
      </p>
      <dist-picker
        ref="dist-picker"
        @selected="selectAddress"
        :province="address.province"
        :city="address.city"
        :area="address.area"
        type="mobile"
                   />
    </div>
</template>

<script>
    export default {
      data(){
        return {
          //hide-area
          //only-province
          //@selected自定义事件
          // 原生有oninput onchange
          //1. input 立即触发，change失去焦点
          //2. input --- input textarea   change input textarea select!!
          defaultAddress:true,
          address:{
            province:'浙江省',
            city:'杭州市',
            area:'西湖区',
          },
        }
      },
      methods:{
        selectAnimal(index){
          const animals = this.$refs['animal-box'].getElementsByClassName('item');
          if(animals[index].classList.contains('active')){return;}
          Array.from(animals).forEach((i)=>{
            i.classList.remove('active')
          });
          animals[index].classList.add('active');
        },
        selectAddress(ad){
          const {province,city,area} = ad
          if(this.defaultAddress){this.defaultAddress =false;}
          this.address.province = province.value
          this.address.city = city.value
          this.address.area = area.value
        },
      }
    }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  .dist-picker
    .animal-type
      height 50px
      display flex
      box-sizing border-box
      padding 5px 0
      >.space
        width 20px
      >.item
        font-size 15px
        border-radius 4px
        flex 1
        &.active
          background #f22
          color #fff


    .selected-city
      height 30px
      line-height 30px
      padding 0 20px
      background #f88

</style>
