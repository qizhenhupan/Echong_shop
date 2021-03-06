import Router from 'vue-router'
import Vue from 'vue'

import Home from '../views/Home/Home'
import Category from '../views/Category/Category'
import Brand from '../views/Brand/Brand'
import Class from '../views/Class/Class'
import Login from '../views/Login/Login'
import Cart from '../views/Cart/Cart'
import AllBrand from '../views/AllBrand/AllBrand'
import DistPicker from '../views/DistPicker/DistPicker'

Vue.use(Router)


export default new Router({
  routes:[
    {
      path:'/home',
      component: Home,
      meta:{showFooter:true}
    },
    {
      path:'/category',
      component:Category,
      children:[
        {
          path:'',
          redirect:'class',
        },
        {
          path:'brand',
          component:Brand
        },
        {
          path:'class',
          component:Class
        }
      ],
      meta:{showFooter:true}
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/cart',
      component:Cart
    },
    {
      path:'/allBrand',
      component:AllBrand,
    },
    {
      path:'/distPick',
      component:DistPicker
    },
    {
      path:'/',
      redirect:'/home'
    }
  ]
})
