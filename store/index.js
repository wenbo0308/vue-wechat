import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation.js'
Vue.use(Vuex)

const store = () => new Vuex.Store({
	state: {
		title:'微信',
		chatName:'',
		nickName:'',
		icon:'',
		area:'',
		uId:'',
		dtlIcon:''
	},
	mutations
})

export default store