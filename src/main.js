import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import element from './plugin/element'




Vue.config.productionTip = false

//引入element-ui
element()


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



