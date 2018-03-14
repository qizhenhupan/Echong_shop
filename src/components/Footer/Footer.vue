<template>
    <footer class="home-footer" v-if="$route.meta">
      <div class="footer-item" :class="{current:$route.path==='/home'}"
           @click="goto('/home')"
      >
        <i class="iconfont icon-avatar"></i>
        <span class="text">首页</span>
      </div>
      <div class="footer-item" :class="{current:$route.path==='/category'}"
           @click="goto('/category')"
      >
        <i class="iconfont icon-avatar"></i>
        <span class="text">分类</span>
      </div>
      <div class="footer-item" :class="{current:true}">
        <i class="iconfont icon-avatar"></i>
        <span class="text">首页</span>
      </div>
      <div class="footer-item" :class="{current:true}">
        <i class="iconfont icon-avatar"></i>
        <span class="text">首页</span>
      </div>
    </footer>
</template>

<script>
    export default {
      methods:{
          goto(path){
            this.$router.replace(path)
          },
      }
    }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
@import '../../assets/stylus/footer.styl'
</style>
