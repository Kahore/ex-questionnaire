export default {
  state: {
    isShowPopup: true
  },
  getters: {
    isShowPopup: state => {
      return state.isShowPopup
    }
  },
  mutations: {
    updateIsShowPopup (state, payload) {
      state.isShowPopup = payload
    }
  },
  actions: {
    updateIsShowPopup ({ commit }, payload) {
      localStorage.setItem('isShow', payload)
      commit('updateIsShowPopup', payload)
    }
  }
}
