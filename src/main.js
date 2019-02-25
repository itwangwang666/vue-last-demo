import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//导入reset.css
import './styles/common.css'

//导入axios
import axios from 'axios'
Vue.prototype.$http = axios
//全局配置baseURL
axios.defaults.baseURL = 'http://litc.pro:9999/v1'

//tabber,tab引入
import { Tabbar, TabbarItem, Tab, Tabs, Card, NavBar   } from 'vant';
Vue.use(Tabbar).use(TabbarItem).use(Tab).use(Tabs).use(Card).use(NavBar )

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
