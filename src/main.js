import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//导入reset.css
import './styles/common.css'

//测试按需引入
import { Button } from 'vant';
Vue.use(Button)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
