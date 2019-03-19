// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 移动设备click延迟300ms解决方案,fastclick
import fastClick from 'fastclick'
// 导入normalize.css
import 'styles/normalize.css'
// 1像素边框问题
import 'styles/border.css'
// 引入iconfont.css
import 'styles/iconfont.css'
// 引入轮播插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// 引入vuex
import store from './store'
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
