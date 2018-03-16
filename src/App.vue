<template>
  <div id="app">
    <router-view />
    <ele-footer />
  </div>
</template>

<script>
  import EleFooter from './components/Footer/Footer'
  import BScroll from 'better-scroll'
    export default {
      name: "app",
      components:{
        EleFooter
      },
      mounted(){
      }
    }
</script>

<style lang='stylus' rel='stylesheet/stylus' >
  @import './assets/css/reset.css'
  @import './assets/stylus/public.styl'
  #app
    height 100%
    .mainContent
      height 100%
      box-sizing border-box
      padding-top 70px
      padding-bottom 55px
</style>
