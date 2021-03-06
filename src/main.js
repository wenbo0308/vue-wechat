import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '../store/index.js'
import axios from './methods/http.js'
import fastclick from 'fastclick'
import vConsole from 'vconsole'
import vueTouch from 'vue-touch'
import './common/css/index.styl'
import utils from './methods/utils.js'

import alertModal from './components/comm/alertModal'

let vconsole = new vConsole();
Vue.config.productionTip = false;
Vue.prototype.$util = utils;
Vue.prototype.$axios = axios;
// console.log(Vue.prototype)
Vue.use(vueTouch,{name:"v-touch"});
Vue.component('alert-modal',alertModal);
fastclick.attach(document.body)

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
