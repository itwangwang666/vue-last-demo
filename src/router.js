import Vue from 'vue'
import Router from 'vue-router'
import homeComponent from './pages/home'
import classifyComponent from './pages/classify'
import goodsListComponent from './pages/goodsList'
import newsComponent from './pages/news'
import shopCarComponent from './pages/shopCar'
import myComponent from './pages/my'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect:'/home' },
    { path: '/home', component: homeComponent },
    { path: '/classify', component: classifyComponent },
    { path: '/classify/goodsList', component: goodsListComponent },
    { path: '/news', component: newsComponent },
    { path: '/shopCar', component: shopCarComponent },
    { path: '/my', component: myComponent },
  ]
})
