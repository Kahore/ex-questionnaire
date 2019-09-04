import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import PopupInvitation from '@/components/PopupInvitation.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('PopupInvitation.vue', () => {
  let store
  let actions = {
    updateIsShowPopup: jest.fn(),
    MUTATE_MODAL_STATE: jest.fn()
  }
  beforeEach(() => {
    store = new Vuex.Store({ actions })
  })
  it('should rise neverShow on click', () => {
    const wrapper = shallowMount(PopupInvitation, {
      store,
      localVue,
      attachToDocument: true
    })
    let neverShow = jest.fn()
    wrapper.setMethods({ neverShow })
    wrapper.find('.new-questionnaire_close').trigger('click')
    expect(neverShow).toBeCalled()
    wrapper.destroy()
  })
  it('should rise updateIsShowPopup action on click', () => {
    const wrapper = shallowMount(PopupInvitation, {
      store,
      localVue,
      attachToDocument: true
    })
    wrapper.find('.new-questionnaire_close').trigger('click')
    expect(actions.updateIsShowPopup).toBeCalled()
    wrapper.destroy()
  })
  it('should rise showPopup on click', () => {
    const wrapper = shallowMount(PopupInvitation, {
      store,
      localVue,
      attachToDocument: true
    })
    let showPopup = jest.fn()
    wrapper.setMethods({ showPopup })
    wrapper.find('.new-questionnaire_link').trigger('click')
    expect(showPopup).toBeCalled()
    wrapper.destroy()
  })
  it('should rise MUTATE_MODAL_STATE action on click', () => {
    const wrapper = shallowMount(PopupInvitation, {
      store,
      localVue,
      attachToDocument: true
    })
    wrapper.find('.new-questionnaire_link').trigger('click')
    expect(actions.MUTATE_MODAL_STATE).toBeCalled()
    wrapper.destroy()
  })
})
