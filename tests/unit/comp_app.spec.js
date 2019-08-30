import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import App from '@/App.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('PopupInvitation.vue', () => {
  let store
  let actions = {
    updateIsShowPopup: jest.fn()
  }
  beforeEach(() => {
    store = new Vuex.Store({ actions })
  })
  it('should rise neverShow on click', () => {
    const wrapper = shallowMount(App, {
      store,
      localVue,
      attachToDocument: true
    })
    let restoreNeverShow = jest.fn()
    wrapper.setMethods({ restoreNeverShow })
    wrapper.find('button').trigger('click')
    expect(restoreNeverShow).toBeCalled()
    wrapper.destroy()
  })
  it('should rise updateIsShowPopup action on click', () => {
    const wrapper = shallowMount(App, {
      store,
      localVue,
      attachToDocument: true
    })
    wrapper.find('button').trigger('click')
    expect(actions.updateIsShowPopup).toBeCalled()
    wrapper.destroy()
  })
})
