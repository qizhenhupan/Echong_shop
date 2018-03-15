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



