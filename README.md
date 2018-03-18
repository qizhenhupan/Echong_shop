# gshop

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

1. 今天是第一天，基本完成了e宠商城首页的静态编写，
使用了swiper库，
  pagination:{el:clickable:true}
  loop:true,无限循环，
  freeMode:非无限时，回弹效果，
  slidesPerView:num 规定窗口可以看见的项目数
  spaceBetween:num 多项目时的间距

2. 动画： steps(1) (默认end时，跳跃)

#第二天
  完成基本两个页面，登录页面马上完成，晚上应该能把所有页面完成。
  问题：
     感觉BScroll,Swiper插件使用不熟练。

 1.上一个兄弟元素是inline时，可以自由浮动，不会被阻挡
 2.flex 50% 可能 被 padding border margin 扩大，从而
  自动grow充满父容器
 3. BScroll 必需要子元素溢出，才能滑动
 4. swiper类名有实际意义，比如slidesPerView时，设置宽高

#第三天
  完成了首页的数据展现，利用mockjs模拟后台数据获取。
  完成了首页数据收据过滤。
  但是，图片尺寸不一，有少许错位。
  BScroll内部的滑动dom节点不能有marign，会影响滑动距离的计算。

#第四天
  完成分类页的点击联动。
  主要思路是，将点击的那一项移动到第二项位置。利用better-scroll的
  scrollBy(x,y,time)方法。

  完成汉字首字母的映射，
  主要思路是，将汉字的Unicode码影射为拼音，然后获取拼音首字母！

  再次学习了左右滑动的联动，
    主要思路是使用scrollY计算currentIndex,
    每次滑动时，动态计算滑动的scrollY,然后计算属性动态计算currnetIndex，点亮右侧的字母表。
    点击右侧字母表时，根据记录的height距离得出应该的scrollY,scrollTo==scrollY
    ###
      需要监听左侧的滑动事件，动态记录scrollY,
      也需要监听右侧的点击事件，根据height,得出相应的scrollY,
      最后scrollTo(0,scrollY)
      currentIndex = scrollY的相应状态！

    ###
       BScroll 简单使用
       1. 选项
          scrollX, scrollY,click, probeType
       2. 事件
           on 'scroll' 'scrollEnd'
       3. 属性
           x,y (已滚动的距离）
           maxScrollX
           maxScrollY

   ###
        第五天：
         使用了mint-ul Indicator.open close 在数据未到达之前，显示提示框

         使用了v-distpicker 组件，
          默认暴露一个vue组件：
          1. 属性
            province
            city
            area
            hide-area
            only-province
            placehodlers:{
                  province:'ss',
                  city:'ccc',
                  area:'ss'
                  }
            @selected事件
              会默认传参，{
                        province:{},
                        city:{},
                        area:{},
                        }
              在选择完最后一项时触发！包含地址信息！

          复习了oninput onchange事件！
            1. input 实时触发，input,textarea!
            2. change 失去焦点出发，input, textarea,select!

            !!select的唯一事件！！


