import questionMain from '../../data/questionnaire.json'
import questionDetails from '../../data/questionnaireDetails.json'
export default {
  state: {
    questionnaire: [],
    questionnaireDetails: [],
    questionnaireIndex: 0,
    isShowModal: false,
    hasScore: false,
    isComplete: false
  },
  getters: {
    questionnaire: state => {
      return state.questionnaire
    },
    questionnaireIndex: state => {
      return state.questionnaireIndex
    },
    isShowModal: state => {
      return state.isShowModal
    },
    hasScore: state => {
      return state.hasScore
    },
    isComplete: state => {
      return state.isComplete
    }
  },
  mutations: {
    MUTATE_QUESTIONNAIRE_INDEX (state, payload) {
      state.questionnaireIndex = payload
    },
    MUTATE_QUESTIONNAIRE_SINGLE (state, payload) {
      if (typeof payload !== 'undefined') {
        let questIdx = state.questionnaire.findIndex(function (quest) {
          return quest.questId === payload.questId
        })
        state.questionnaire[questIdx].responses = payload.responses
      }
    },
    MUTATE_QUESTIONNAIRE (state, payload) {
      state.questionnaire = payload
    },
    MUTATE_MODAL_STATE (state) {
      state.isShowModal = !state.isShowModal
    },
    MUTATE_QUESTIONNAIRE_DETAILS (state, payload) {
      state.questionnaire = payload
    },
    MUTATE_QUESTIONNAIRE_SCORE (state) {
      state.hasScore = !state.hasScore
    },
    MUTATE_QUESTIONNAIRE_COMPLETE (state) {
      state.isComplete = !state.isComplete
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
    RESET_QUESTIONNAIRE ({ commit }) {
      let payload = questionMain
      commit('MUTATE_QUESTIONNAIRE', payload)
    },
    MUTATE_MODAL_STATE ({ commit }) {
      commit('MUTATE_MODAL_STATE')
    },
    MUTATE_QUESTIONNAIRE_DETAILS ({ commit }) {
      let payload = questionDetails
      commit('MUTATE_QUESTIONNAIRE_DETAILS', payload)
    },
    MUTATE_QUESTIONNAIRE_SCORE ({ commit }) {
      commit('MUTATE_QUESTIONNAIRE_SCORE')
    },
    MUTATE_QUESTIONNAIRE_COMPLETE ({ commit }) {
      localStorage.setItem('questionnaireComplete', true)
      commit('MUTATE_QUESTIONNAIRE_COMPLETE')
    }
  }
}
