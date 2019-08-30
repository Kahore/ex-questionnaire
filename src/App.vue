<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <nav>Some logo here
      <button @click="restoreNeverShow()">Reset popup</button>
    </nav>
    <PopupInvitation v-if="isShow"/>
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
    'PopupInvitation': () => import('./components/PopupInvitation.vue')
  },
  methods: {
    restoreNeverShow () {
      this.$store.dispatch('updateIsShowPopup', true)
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
