import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import 'common/stylus/index.styl'
/* eslint-disable no-unused-vars */
import vConsole from 'vconsole'
console.log('test')

fastclick.attach(document.body)
Vue.use(VueLazyLoad,{
	loading: require('common/images/default.png')
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
