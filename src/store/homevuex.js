import Vue from 'vue'
import router from '../router/index';

export default {
	state: {
		serviceListState: {}
	},
	actions: {
		serviceListAction(context){
			context.commit('getServiceList')
		}
	},
	mutations: {
		getServiceList(state, value){
			state.serviceListState = value;
		}
	},
	getters: {}
}