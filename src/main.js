import Vue from 'vue'
import App from './app/index'
import router from './router'
import store from './store'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css' 

import $ from 'jquery'  
import { BootstrapVue, IconsPlugin, NavbarPlugin, FormInputPlugin, CardPlugin, CalendarPlugin, ModalPlugin, ButtonPlugin } from 'bootstrap-vue'
import FunctionalCalendar from 'vue-functional-calendar';

Vue.config.productionTip = false 

Vue.use(NavbarPlugin, FormInputPlugin)
Vue.use(CardPlugin)
Vue.use(ModalPlugin)
Vue.use(ButtonPlugin)

Vue.use(FunctionalCalendar, {
    dayNames: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
});

Vue.use(VueMaterial)

new Vue({
  router,
  store, 
  render: h => h(App)
}).$mount('#app')
