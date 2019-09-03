import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import SelectMulti from '@/components/QuestionnaireTemplate/SelectMulti.vue'

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
    const wrapper = shallowMount(SelectMulti, {
      store,
      localVue,
      propsData,
      attachToDocument: true
    })
    let checkboxAction = jest.fn()
    wrapper.setMethods({ checkboxAction })
    wrapper.find('[type=\'checkbox\']').trigger('click')
    expect(checkboxAction).toBeCalled()
  })
  it('should rise MUTATE_QUESTIONNAIRE_SINGLE action on click', () => {
    const wrapper = shallowMount(SelectMulti, {
      store,
      localVue,
      propsData,
      attachToDocument: true
    })
    wrapper.find('[type=\'checkbox\']').trigger('click')
    expect(actions.MUTATE_QUESTIONNAIRE_SINGLE).toBeCalled()
    wrapper.destroy()
  })
})
