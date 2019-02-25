import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//导入reset.css
import './styles/common.css'

//测试按需引入
import { Button,Tab, Tabs } from 'vant';
Vue.use(Button).use(Tab).use(Tabs)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
