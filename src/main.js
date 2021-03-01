import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/style/common.less'
//移动端屏幕适配
// import 'amfe-flexible'
import '@/config/rem'
//1.引入fastclick
import FastClick from 'fastclick'
if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function() {
		FastClick.attach(document.body);
	}, false);
}
import '@/plugins/vant'
import '@/config/filters'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
