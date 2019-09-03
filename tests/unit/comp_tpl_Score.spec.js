import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Score from '@/components/QuestionnaireTemplate/Score.vue'

const localVue = createLocalVue()
localVue.use(Vuex)
let store
let actions = {
  MUTATE_QUESTIONNAIRE_SINGLE: jest.fn()
}
beforeEach(() => {
  store = new Vuex.Store({ actions })
})
const propsData = {
  label: 'lorem',
  responses: 4,
  questId: 'q4'
}
describe('TextOnly.vue', () => {
  it('should init emit', () => {
    const wrapper = shallowMount(Score, {
      store,
      localVue,
      propsData,
      attachToDocument: true
    })
    let set = jest.fn()
    wrapper.setMethods({ set })
    wrapper.find('[type=\'radio\']').trigger('click')
    expect(set).toBeCalled()
  })
  it('should rise MUTATE_QUESTIONNAIRE_SINGLE action on click', () => {
    const wrapper = shallowMount(Score, {
      store,
      localVue,
      propsData,
      attachToDocument: true
    })
    wrapper.find('[type=\'radio\']').trigger('click')
    expect(actions.MUTATE_QUESTIONNAIRE_SINGLE).toBeCalled()
    wrapper.destroy()
  })
  it('should rise starOver on mouseover', () => {
    const wrapper = shallowMount(Score, {
      store,
      localVue,
      propsData,
      attachToDocument: true
    })
    let starOver = jest.fn()
    wrapper.setMethods({ starOver })
    wrapper.find('[type=\'radio\']').trigger('mouseover')
    expect(starOver).toBeCalled()
  })
  it('should rise starOut on mouseout', () => {
    const wrapper = shallowMount(Score, {
      store,
      localVue,
      propsData,
      attachToDocument: true
    })
    let starOut = jest.fn()
    wrapper.setMethods({ starOut })
    wrapper.find('[type=\'radio\']').trigger('mouseout')
    expect(starOut).toBeCalled()
  })
})
