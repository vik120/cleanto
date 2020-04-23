import Vue from 'vue'
import App from './app/index'
import router from './router'
import store from './store'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

import VeeValidate from 'vee-validate';

import $ from 'jquery'  
import { BootstrapVue, IconsPlugin, NavbarPlugin, FormInputPlugin, CardPlugin, CalendarPlugin, ModalPlugin, ButtonPlugin, TooltipPlugin, AlertPlugin } from 'bootstrap-vue'
import FunctionalCalendar from 'vue-functional-calendar';
import Vuelidate from 'vuelidate'
 

Vue.config.productionTip = false 

Vue.use(NavbarPlugin, FormInputPlugin)
Vue.use(CardPlugin)
Vue.use(ModalPlugin)
Vue.use(AlertPlugin)
Vue.use(ButtonPlugin)
Vue.use(TooltipPlugin)

Vue.use(FunctionalCalendar, {
    dayNames: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
});

Vue.use(VueMaterial);

Vue.use(Vuelidate);

Vue.use(VeeValidate, {
  mode: 'eager'
});

// Custom Direcitve

Vue.directive('getinfo', {
	bind(el, binding, vnode){
		// console.log(el);
		// console.log(binding);
		// console.log(vnode);

		if(binding.value == 'serviceprice'){
			
		}
	}
})

// Filter

Vue.filter('toUSD', function (value) {
    return `$${value}`;
});

// Bus

export const bus = new Vue();


new Vue({
  router,
  store, 
  render: h => h(App)
}).$mount('#app')
