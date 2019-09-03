import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import SelectOne from '@/components/QuestionnaireTemplate/SelectOne.vue'

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
  responses: [
    { id: 4, text: 'bb1', isSelected: false },
    { id: 5, text: 'bb2', isSelected: false },
    { id: 6, text: 'bb3', isSelected: true }
  ],
  questId: 'q2'
}
describe('TextOnly.vue', () => {
  it('should init emit', () => {
    const wrapper = shallowMount(SelectOne, {
      store,
      localVue,
      propsData,
      attachToDocument: true
    })
    let radioAction = jest.fn()
    wrapper.setMethods({ radioAction })
    wrapper.find('[type=\'radio\']').trigger('click')
    expect(radioAction).toBeCalled()
  })
  it('should rise MUTATE_QUESTIONNAIRE_SINGLE action on click', () => {
    const wrapper = shallowMount(SelectOne, {
      store,
      localVue,
      propsData,
      attachToDocument: true
    })
    wrapper.find('[type=\'radio\']').trigger('click')
    expect(actions.MUTATE_QUESTIONNAIRE_SINGLE).toBeCalled()
    wrapper.destroy()
  })
})
