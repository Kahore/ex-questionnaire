import Vue from 'vue'
import Vuex from 'vuex'
import PopupInvitation from './modules/PopupInvitation'
import PopupMain from './modules/PopupMain'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    PopupInvitation, PopupMain
  }
})
