<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <nav>Some logo here
      <button @click="restoreNeverShow()">Reset popup</button>
      <button @click="restoreQuest()">Reset questionnaire</button>
    </nav>
    <PopupInvitation v-if="isShow"/>
    <PopupMain/>
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
      let quest = this.$store.getters.GET_QUESTIONNAIRE
      console.log('TCL: restoreQuest -> quest', quest)

      localStorage.setItem('questionnaire', JSON.stringify(quest))
    },
    handler: function handler (event) {
      console.log('TCL: beforeUnloadHandler -> e', event)
      let quest = this.$store.getters.GET_QUESTIONNAIRE
      localStorage.setItem('questionnaire', JSON.stringify(quest))
    }
  },
  computed: {
    isShow () {
      return this.$store.getters.isShowPopup
    }
  },
  mounted () {
    if (localStorage.getItem('isShow') === 'false') {
      this.$store.dispatch('updateIsShowPopup', false)
    }
    if (localStorage.getItem('questionnaire')) {
      this.$store.dispatch('MUTATE_QUESTIONNAIRE', JSON.parse(localStorage.getItem('questionnaire')))
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
