import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import PopupMain from '@/components/PopupMain.vue'
import tplSelectmulti from '@/components/QuestionnaireTemplate/SelectMulti'
import tplSelectOne from '@/components/QuestionnaireTemplate/SelectOne'
import tplText from '@/components/QuestionnaireTemplate/TextOnly'
import tplScore from '@/components/QuestionnaireTemplate/Score'
const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(tplSelectmulti)
localVue.use(tplSelectOne)
localVue.use(tplText)
localVue.use(tplScore)
let store
let state
let getters
let actions

beforeEach(() => {
  getters = {
    GET_QUESTIONNAIRE_INDEX: () => 3
  },
  actions = {
    MUTATE_QUESTIONNAIRE_INDEX: jest.fn()
  }
  store = new Vuex.Store({ state, getters, actions })
})

describe('PopupMain.vue', () => {
  it('should rise next on click', () => {
    const wrapper = shallowMount(PopupMain, {
      store,
      localVue,
      attachToDocument: true
    })
    let next = jest.fn()
    wrapper.setMethods({ next })
    wrapper.find('.modal-btn_next').trigger('click')
    expect(next).toBeCalled()
    wrapper.destroy()
  })
  it('should rise MUTATE_QUESTIONNAIRE_INDEX action on click', () => {
    const wrapper = shallowMount(PopupMain, {
      store,
      localVue,
      attachToDocument: true
    })
    wrapper.find('.modal-btn_next').trigger('click')
    expect(actions.MUTATE_QUESTIONNAIRE_INDEX).toBeCalled()
    wrapper.destroy()
  })
  it('should rise prev on click', () => {
    const wrapper = shallowMount(PopupMain, {
      store,
      localVue,
      attachToDocument: true
    })
    let prev = jest.fn()
    wrapper.setMethods({ prev })
    wrapper.find('.modal-btn_prev').trigger('click')
    expect(prev).toBeCalled()
    wrapper.destroy()
  })
  it('should rise MUTATE_QUESTIONNAIRE_INDEX action on click', () => {
    const wrapper = shallowMount(PopupMain, {
      store,
      localVue,
      attachToDocument: true
    })
    wrapper.find('.modal-btn_prev').trigger('click')
    expect(actions.MUTATE_QUESTIONNAIRE_INDEX).toBeCalled()
    wrapper.destroy()
  })
})
