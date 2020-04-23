import Vue from 'vue'
import router from '../router/index';

export default {
	state: {
		loginState: {},
		token: localStorage.getItem('u') || '',
	},
	actions: {
		loginAction(context, payload){
			context.commit('setLogin', payload)
		}
	},
	mutations: {
		setLogin(state, value){
			console.log(value);
			state.loginState = value;

			const item = {
				value: value.email,
				expiry: 3600
			}
			
			localStorage.setItem('u', item.value)
		}
	},
	getters: {
		getLogin: state => state.loginState
	}
}