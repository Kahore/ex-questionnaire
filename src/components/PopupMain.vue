<template>
  <section class="modal">
    <div v-for="(quest, index) in quests" :key="index">
      <div v-if="index === questionnaireIndex">
      <tpl-select-multi
        v-if="quest.type === 'select multi'"
        :label="quest.label"
        :questId="quest.questId"
        :responses="quest.responses"/>
      <tpl-select-one
        v-if="quest.type === 'select one'"
        :label="quest.label"
        :questId="quest.questId"
        :responses="quest.responses"/>
      <tpl-text
        v-if="quest.type === 'text only'"
        :label="quest.label"
        :questId="quest.questId"
        :responses="quest.responses"/>
      <tpl-score
        v-if="quest.type === 'score'"
        :label="quest.label"
        :questId="quest.questId"
        :responses="quest.responses"/>
      </div>
    </div>
    <button class="modal-btn modal-btn_prev"
      v-if="questionnaireIndex > 0"
      @click="prev()">
      prev
    </button>
    <button class="modal-btn modal-btn_next"
      @click="next(quests)">
      next
    </button>
  </section>
</template>

<script>
export default {
  name: 'PopupMain',
  components: {
    'tpl-select-multi': () => import('./QuestionnaireTemplate/SelectMulti'),
    'tpl-select-one': () => import('./QuestionnaireTemplate/SelectOne'),
    'tpl-text': () => import('./QuestionnaireTemplate/TextOnly'),
    'tpl-score': () => import('./QuestionnaireTemplate/Score')
  },
  computed: {
    quests () {
      return this.$store.getters.GET_QUESTIONNAIRE
    },
    questionnaireIndex () {
      return this.$store.getters.GET_QUESTIONNAIRE_INDEX
    }
  },
  methods: {
    prev () {
      let newIndex = this.questionnaireIndex - 1
      this.$store.dispatch('MUTATE_QUESTIONNAIRE_INDEX', newIndex)
    },
    next (q) {
      let newIndex = this.questionnaireIndex + 1
      this.$store.dispatch('MUTATE_QUESTIONNAIRE_INDEX', newIndex)
    }
  },
  mounted () {
    if (localStorage.getItem('questionnaireIndex')) {
      this.$store.dispatch('MUTATE_QUESTIONNAIRE_INDEX', parseInt(localStorage.getItem('questionnaireIndex')))
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
