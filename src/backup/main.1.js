import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import router from './router'
import { Resizes } from './utils/utils'

// resize html font-size
Resizes();
window.onresize = function () {
  Resizes();
}

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
