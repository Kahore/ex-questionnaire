import Vue from 'vue'
import Vuex from 'vuex'
import PopupInvitation from './modules/PopupInvitation'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    PopupInvitation
  }
})
