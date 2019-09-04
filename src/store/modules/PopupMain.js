export default {
  state: {
    questionnaire: [
      {
        type: 'select multi',
        label: 'lorem 1',
        questId: 'q1',
        responses: [
          { id: 1, text: 'aa1', isSelected: false },
          { id: 2, text: 'aa2', isSelected: false },
          { id: 3, text: 'aa3', isSelected: false }
        ]
      },
      {
        type: 'select one',
        label: 'lorem 2',
        questId: 'q2',
        responses: [
          { id: 4, text: 'bb1', isSelected: false },
          { id: 5, text: 'bb2', isSelected: false },
          { id: 6, text: 'bb3', isSelected: true }
        ]
      },
      {
        type: 'text only',
        label: 'lorem 3',
        questId: 'q3',
        responses: ''
      },
      {
        type: 'score',
        label: 'lorem 4',
        questId: 'q4',
        responses: ''
      }
    ],
    questionnaireIndex: 0,
    isShowModal: false
  },
  getters: {
    GET_QUESTIONNAIRE: state => {
      return state.questionnaire
    },
    GET_QUESTIONNAIRE_INDEX: state => {
      return state.questionnaireIndex
    },
    isShowModal: state => {
      return state.isShowModal
    }
  },
  mutations: {
    MUTATE_QUESTIONNAIRE_INDEX (state, payload) {
      state.questionnaireIndex = payload
    },
    MUTATE_QUESTIONNAIRE_SINGLE (state, payload) {
      let questIdx = state.questionnaire.findIndex(function (quest) {
        return quest.questId === payload.questId
      })
      state.questionnaire[questIdx].responses = payload.responses
    },
    MUTATE_QUESTIONNAIRE (state, payload) {
      state.questionnaire = payload
    },
    MUTATE_MODAL_STATE (state) {
      state.isShowModal = !state.isShowModal
    }
  },
  actions: {
    MUTATE_QUESTIONNAIRE_INDEX ({ commit }, payload) {
      localStorage.setItem('questionnaireIndex', payload)
      commit('MUTATE_QUESTIONNAIRE_INDEX', payload)
    },
    MUTATE_QUESTIONNAIRE_SINGLE ({ commit }, payload) {
      commit('MUTATE_QUESTIONNAIRE_SINGLE', payload)
    },
    MUTATE_QUESTIONNAIRE ({ commit }, payload) {
      commit('MUTATE_QUESTIONNAIRE', payload)
    },
    MUTATE_MODAL_STATE ({ commit }) {
      commit('MUTATE_MODAL_STATE')
    }
  }
}
