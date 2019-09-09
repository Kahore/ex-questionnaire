<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <nav>Some logo here
      <button
        id="restoreNeverShow"
        @click="restoreNeverShow()">Reset popup</button>
      <button
        id="restoreQuest"
        @click="restoreQuest()">Reset questionnaire</button>
    </nav>
    <PopupInvitation v-if="isShow && !isComplete"/>
    <PopupMain v-if="isShowModal"/>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      isShowPopup: true
    }
  },
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
      let quest = this.$store.getters.GET_QUESTIONNAIRE
      localStorage.setItem('questionnaire', JSON.stringify(quest))
      localStorage.removeItem('questionnaireComplete')
      localStorage.removeItem('hasScore')
    },
    handler: function handler (event) {
      let quest = this.$store.getters.GET_QUESTIONNAIRE
      localStorage.setItem('questionnaire', JSON.stringify(quest))
    }
  },
  computed: {
    isShow () {
      return this.$store.getters.isShowPopup
    },
    isComplete () {
      return this.$store.getters.isComplete
    },
    isShowModal () {
      return this.$store.getters.isShowModal
    }
  },
  mounted () {
    if (localStorage.getItem('isShow') === 'false') {
      this.$store.dispatch('updateIsShowPopup', false)
    }
    if (localStorage.getItem('questionnaire')) {
      this.$store.dispatch('MUTATE_QUESTIONNAIRE', JSON.parse(localStorage.getItem('questionnaire')))
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
nav{
  background-color: darken($color: rgba(146, 139, 139, 0.959), $amount: 5);
  padding: 0.8rem;
}
</style>
