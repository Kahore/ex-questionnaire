import PopupInvitation from '../../src/store/modules/PopupInvitation'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let store
beforeEach(() => {
  store = new Vuex.Store({
    state: {
      isShowPopup: true
    },
    mutations: {
      updateIsShowPopup: PopupInvitation.mutations.updateIsShowPopup
    },
    actions: {
      updateIsShowPopup: PopupInvitation.actions.updateIsShowPopup
    }
  })
})
describe('modules/PopupInvitation.js getters', () => {
  it('should return isShowPopup', () => {
    expect(PopupInvitation.getters.isShowPopup(store.state)).toBe(store.state.isShowPopup)
  })
})

describe('modules/PopupInvitation.js mutations', () => {
  it('should update isShowPopup', () => {
    PopupInvitation.mutations.updateIsShowPopup(store.state, false)
    expect(store.state.isShowPopup).toBe(false)
  })
})

describe('modules/PopupInvitation.js actions', () => {
  it('test updateIsShowPopup using mock mutation, but real store', () => {
    let commit = jest.fn()
    PopupInvitation.actions.updateIsShowPopup({ commit }, true)
    expect(commit).toHaveBeenCalledWith('updateIsShowPopup', true)
  })
})
