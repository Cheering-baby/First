import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/border.css'
// import './assets/reset.css'
Vue.config.productionTip = false
import store from './store/index.js'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
