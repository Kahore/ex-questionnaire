<template>
  <div class="wrapper">
    <section class="wrapper-modal">
      <span
      class="wrapper-modal_close"
      title="close this"
      @click="closeModal()"
      ></span>
      <button class="modal-btn modal-btn_prev wrapper-btn_pos__prev"
        v-if="questionnaireIndex > 0"
        @click="prev()">
        prev
      </button> 
      <div
        v-for="(quest, index) in quests"
        :key="index"
        class="wrapper-modal_content"
       >
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
      <button class="modal-btn modal-btn_next wrapper-btn_pos__next"
        v-if="questionnaireIndex < quests.length-1"
        @click="next(quests)">
        next
      </button>
    </section>
  </div>
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
    },
    closeModal () {
      this.$store.dispatch('MUTATE_MODAL_STATE')
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
%btn_pos{
    position: absolute;
    height: 33%;
    top:30%;
    display: inline-block;
}

.wrapper{
  background: #000;
  opacity: 0.8;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index:499;
  &-modal{
    display: grid;
    position: relative;
    z-index: 500;
    background: white;
    text-align: center;
    width: 700px;
    height: 250px;
    margin-left: 25%;
    margin-top: 10%;
    padding: 7px;
    &_content{
      position: absolute;
      width: 100%;
      z-index: -1;
    }
    &_close{
      position: relative;
      left: 95%;
      width: 26px;
      height: 26px;
      opacity: 0.3;
      &:hover{
        opacity: 1;
        cursor: pointer;
      }
      &::before, &::after{
        position: absolute;
        content: ' ';
        height: 20px;
        width: 2px;
        background-color: black;
        z-index: 900;
      }
      &::before{
        transform: rotate(45deg);
      }
      &::after{
        transform: rotate(-45deg);
      }
    }
  }
  &-btn_pos__prev{
    @extend %btn_pos;
  }
  &-btn_pos__next{
    @extend %btn_pos;
    left: 94%;
  }
}

</style>
