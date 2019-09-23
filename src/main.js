import Vue from 'vue'
import App from './App.vue'
import vbclass from 'vue-body-class' //Plugin for adding class on body tag
import router from './router'

Vue.use(vbclass, router)

Vue.config.productionTip = false

new Vue({
	router,
  render: h => h(App)
}).$mount('#app')