<template>
    <footer class="home-footer" v-if="$route.meta">
      <div class="footer-item" :class="{current:matchPath('home')}"
           @click="goto('/home')"
      >
        <i class="iconfont icon-avatar"></i>
        <span class="text">首页</span>
      </div>
      <div class="footer-item" :class="{current:matchPath('category')}"
           @click="goto('/category')"
      >
        <i class="iconfont icon-avatar"></i>
        <span class="text">分类</span>
      </div>
      <div class="footer-item" :class="{current:matchPath('cart')}"
           @click="goto('/cart')"
      >
        <i class="iconfont icon-avatar"></i>
        <span class="text">购物车</span>
      </div>
      <div class="footer-item" :class="{current:matchPath('profile')}"
           @click="goto('/login')"
      >
        <i class="iconfont icon-avatar"></i>
        <span class="text">我的E宠</span>
      </div>
    </footer>
</template>

<script>
    export default {
      methods:{
          goto(path){
            this.$router.replace(path)
          },
        matchPath(path){
            return new RegExp(path).test(this.$route.path)
        }
      }
    }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
@import '../../assets/stylus/footer.styl'
</style>
