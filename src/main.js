import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//导入reset.css
import './styles/common.css'

//测试按需引入
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar).use(TabbarItem)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
