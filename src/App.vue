<template>
  <div id="app">
    <section class="mainContent">
      <router-view />
    </section>
    <ele-footer/>
  </div>
</template>

<script>
  import EleFooter from './components/Footer/Footer'
    export default {
      name: "app",
      components:{
        EleFooter
      }
    }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  @import './assets/css/reset.css'
  @import './assets/stylus/public.styl'


</style>
