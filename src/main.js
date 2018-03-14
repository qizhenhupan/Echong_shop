import Vue from 'vue'


import App from './App'
import router from './router'
import store from './store'
import Split from './components/Split/Split'

Vue.config.productionTip  = false
Vue.component(Split)
/* eslint-disable no-new */

new Vue({
  el:'#app',
  render:h=>h(App),
  router,
  store,
})
