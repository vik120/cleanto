import Vue from 'vue'
import router from '../router/index';

export default {
	state: {
		serviceListState: {}
	},
	actions: {
		serviceListAction(context, payload){
			context.commit('setServiceList', payload)
		}
	},
	mutations: {
		setServiceList(state, value){
			console.log(value);
			state.serviceListState = value;
		}
	},
	getters: {
		getServiceList: state => state.serviceListState
	}
}