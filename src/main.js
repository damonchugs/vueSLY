import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import router from './router'
import store from './store'
import { Resizes } from './utils/utils'

// resize html font-size
Resizes();
window.onresize = function () {
  Resizes();
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
