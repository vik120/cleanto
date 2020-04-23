import Vue from 'vue'
import Vuex from 'vuex'
import HomeStore from './homevuex';
import LoginStore from './loginvuex';

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
  	HomeStore,
  	LoginStore
  }
})
