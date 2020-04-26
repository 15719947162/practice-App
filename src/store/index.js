import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		statusBarHeight: 0,
		windowHeight:0
	},
	mutations: {
		SETSTATUSBARHEIGHT: function(state, data) {
			state.statusBarHeight = data;
		},
		SETWINDOWHEIGHT:function(state, data) {
			state.windowHeight = data;
		},
	},
	actions: {
		//将组件传来的值分发给SETSTATUSBARHEIGHT
		setStatusBarHeight: function(context, data) {
			context.commit('SETSTATUSBARHEIGHT', data);
		},
		setWindowHeight: function(context, data) {
			context.commit('SETWINDOWHEIGHT', data);
		},
	},
	getters: {}
})

export default store
