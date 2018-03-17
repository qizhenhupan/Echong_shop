import Vue from 'vue'


import App from './App'
import router from './router'
import store from './store'
import Split from './components/Split/Split'
import SwiperList from './components/Swiper-container/SwiperList'
import VueLazyLoad from 'vue-lazyload'
import Gif from './loading.gif'
import Header from './components/EleHeader/EleHeader'


//引入mock
import data from  './mock'

Vue.config.productionTip  = false
Vue.component('Split',Split)
Vue.component('EleHeader',Header)
Vue.component('SwiperList',SwiperList)

/* eslint-disable no-new */

Vue.use(VueLazyLoad,{
  loading:Gif
})
// ++
new Vue({
  el:'#app',
  render:h=>h(App),
  router,
  store,
})
