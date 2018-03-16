import Vue from 'vue'


import App from './App'
import router from './router'
import store from './store'
import Split from './components/Split/Split'
import SwiperList from './components/Swiper-container/SwiperList'


//引入mock
import data from  './mock'

Vue.config.productionTip  = false
Vue.component(Split)
Vue.component(SwiperList)
/* eslint-disable no-new */

// ++
new Vue({
  el:'#app',
  render:h=>h(App),
  router,
  store,
})
