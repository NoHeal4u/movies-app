import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		counter: 1
	},
	getters: {
		getCounter(state){
			return state.counter
		}
	},

	mutations : {
		incrementCounter(state) {
			state.counter++
		}
	}
})
