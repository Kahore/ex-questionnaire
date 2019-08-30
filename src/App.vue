<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <nav>Some logo here</nav>
    <PopupInvitation msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// import PopupInvitation from './components/PopupInvitation.vue'

export default {
  name: 'app',
  components: {
    'PopupInvitation': () => import ('./components/PopupInvitation.vue')
  }
}
</script>

<style lang="scss">

</style>
