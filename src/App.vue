<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <nav> <span class="logo">Some logo here</span>
      <button
        id="restoreNeverShow"
        @click="restoreNeverShow()"
        title="Reset never show value">Reset popup</button>
      <button
        id="restoreQuest"
        @click="restoreQuest()"
        title="Set default questionnaire"
        >Reset questionnaire</button>
    </nav>
    <PopupInvitation v-if="isShowPopup && !isComplete"/>
    <PopupMain v-if="isShowModal"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  components: {
    'PopupInvitation': () => import('./components/PopupInvitation.vue'),
    'PopupMain': () => import('./components/PopupMain.vue')
  },
  methods: {
    restoreNeverShow () {
      this.$store.dispatch('updateIsShowPopup', true)
    },
    restoreQuest () {
      this.$store.dispatch('RESET_QUESTIONNAIRE')
      this.$store.dispatch('MUTATE_QUESTIONNAIRE_INDEX', 0)
      let quest = this.$store.getters.questionnaire
      localStorage.setItem('questionnaire', JSON.stringify(quest))
      localStorage.removeItem('questionnaireComplete')
      localStorage.removeItem('hasScore')
    },
    handler: function handler (event) {
      let quest = this.$store.getters.questionnaire
      localStorage.setItem('questionnaire', JSON.stringify(quest))
    }
  },
  computed: {
    ...mapGetters(['isShowPopup', 'isComplete', 'isShowModal'])
  },
  mounted () {
    if (localStorage.getItem('isShow') === 'false') {
      this.$store.dispatch('updateIsShowPopup', false)
    }
    if (localStorage.getItem('questionnaire')) {
      this.$store.dispatch('MUTATE_QUESTIONNAIRE', JSON.parse(localStorage.getItem('questionnaire')))
    } else {
      let quest = this.$store.getters.questionnaire
      this.$store.dispatch('MUTATE_QUESTIONNAIRE', quest)
    }
    if (!localStorage.getItem('questionnaireIndex')) {
      this.$store.dispatch('MUTATE_QUESTIONNAIRE_INDEX', 0)
    }
    if (localStorage.getItem('questionnaireComplete')) {
      this.$store.dispatch('MUTATE_QUESTIONNAIRE_COMPLETE')
    }
  },
  created () {
    window.addEventListener('beforeunload', this.handler)
  }
}
</script>

<style lang="scss">
html{
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12pt;
}
nav {
  background-color: rgb(52, 58, 64);
  padding: 0.8rem;
}
.logo{
  color: white;
}
@media (max-width: 452px) {
  nav {
    & > button{
      display: grid;
      margin-top: 5px;
    }
  }
}
</style>
