import Router from 'vue-router'
import Vue from 'vue'

import Home from '../views/Home/Home'
import Category from '../views/Category/Category'

Vue.use(Router)


export default new Router({
  routes:[
    {
      path:'/home',
      component: Home,
      meta:true,
    },
    {
      path:'/category',
      component:Category,
      meta:true,
    },
    {
      path:'/',
      redirect:'/home'
    }
  ]
})
