import PopupMain from '../../src/store/modules/PopupMain'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let store
beforeEach(() => {
  store = new Vuex.Store({
    state: {
      questionnaire: PopupMain.state.questionnaire,
      questionnaireIndex: 0
    },
    mutations: {
      MUTATE_QUESTIONNAIRE_INDEX: PopupMain.mutations.MUTATE_QUESTIONNAIRE_INDEX,
      MUTATE_QUESTIONNAIRE_SINGLE: PopupMain.mutations.MUTATE_QUESTIONNAIRE_SINGLE,
      MUTATE_QUESTIONNAIRE: PopupMain.mutations.MUTATE_QUESTIONNAIRE
    },
    actions: {
      MUTATE_QUESTIONNAIRE_INDEX: PopupMain.actions.MUTATE_QUESTIONNAIRE_INDEX,
      MUTATE_QUESTIONNAIRE_SINGLE: PopupMain.actions.MUTATE_QUESTIONNAIRE_SINGLE,
      MUTATE_QUESTIONNAIRE: PopupMain.actions.MUTATE_QUESTIONNAIRE
    }
  })
})
const quest = [{
  type: 'select multi',
  label: 'lorem 1',
  questId: 'q1',
  responses: [
    { id: 1, text: 'aa1', isSelected: false },
    { id: 2, text: 'aa2', isSelected: false },
    { id: 3, text: 'aa3', isSelected: false }
  ]
}]
let replaceResp = { 'questId': 'q3', 'responses': 'Some New Text by test' }
describe('modules/PopupMain.js getters', () => {
  it('should return questionnaire', () => {
    expect(PopupMain.getters.GET_QUESTIONNAIRE(store.state)).toBe(store.state.questionnaire)
  })
  it('should return questionnaireIndex', () => {
    expect(PopupMain.getters.GET_QUESTIONNAIRE_INDEX(store.state)).toBe(store.state.questionnaireIndex)
  })
})

describe('modules/PopupMain.js mutations', () => {
  it('should update questionnaireIndex', () => {
    PopupMain.mutations.MUTATE_QUESTIONNAIRE_INDEX(store.state, 1)
    expect(store.state.questionnaireIndex).toBe(1)
  })
  it('should replace responses by question id', () => {
    PopupMain.mutations.MUTATE_QUESTIONNAIRE_SINGLE(store.state, replaceResp)
    expect(store.state.questionnaire[2].responses).toBe(replaceResp.responses)
  })
  it('should update questionnaire', () => {
    PopupMain.mutations.MUTATE_QUESTIONNAIRE(store.state, quest)
    expect(store.state.questionnaire).toBe(quest)
  })
})

describe('modules/PopupMain.js actions', () => {
  it('test MUTATE_QUESTIONNAIRE_INDEX using mock mutation, but real store', () => {
    let commit = jest.fn()
    PopupMain.actions.MUTATE_QUESTIONNAIRE_INDEX({ commit }, 1)
    expect(commit).toHaveBeenCalledWith('MUTATE_QUESTIONNAIRE_INDEX', 1)
  })
  it('test MUTATE_QUESTIONNAIRE_SINGLE using mock mutation, but real store', () => {
    let commit = jest.fn()
    PopupMain.actions.MUTATE_QUESTIONNAIRE_SINGLE({ commit }, replaceResp)
    expect(commit).toHaveBeenCalledWith('MUTATE_QUESTIONNAIRE_SINGLE', replaceResp)
  })
  it('test MUTATE_QUESTIONNAIRE using mock mutation, but real store', () => {
    let commit = jest.fn()
    PopupMain.actions.MUTATE_QUESTIONNAIRE({ commit }, quest)
    expect(commit).toHaveBeenCalledWith('MUTATE_QUESTIONNAIRE', quest)
  })
})
