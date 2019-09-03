import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import TextOnly from '@/components/QuestionnaireTemplate/TextOnly.vue'

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
  responses: 'some test text',
  questId: 'q3'
}
describe('TextOnly.vue', () => {
  it('should rise radioAction on click', () => {
    const wrapper = shallowMount(TextOnly, {
      store,
      localVue,
      propsData,
      attachToDocument: true
    })
    wrapper.vm.$emit('input', propsData.responses)
    expect(wrapper.emitted().input[0]).toEqual([propsData.responses])
    wrapper.destroy()
  })
})
