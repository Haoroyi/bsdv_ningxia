import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/main.less'

import EasySlider from 'vue-easy-slider'
Vue.config.productionTip = false
Vue.use(EasySlider)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
