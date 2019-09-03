<template>
  <div class="new-questionnaire">
    <span>Your opinion is important to us! Please click </span>
    <span class="new-questionnaire_link">here</span>
    <span> to start questionnaire</span>
    <span
      class="new-questionnaire_close"
      title="Never show this again"
      @click="neverShow()"></span>
  </div>
</template>

<script>
export default {
  name: 'PopupInvitation',
  props: {
    msg: String
  },
  methods: {
    neverShow () {
      this.$store.dispatch('updateIsShowPopup', false)
    }
  }
}
</script>

<style scoped lang="scss">
.new-questionnaire{
  color: white;
  padding: 0.3rem;
  background-color: rgb(12, 170, 12);
  &_link {
    &:hover{
      text-decoration: underline;
      cursor: pointer;
    }
  }
  &_close{
    position: fixed;
    right: 32px;
    width: 26px;
    height: 26px;
    opacity: 0.3;
    &:hover{
      opacity: 1;
      cursor: pointer;
    }
    &::before, &::after{
      position: absolute;
      left: 13px;
      content: ' ';
      height: 20px;
      width: 2px;
      background-color: white;
    }
    &::before{
      transform: rotate(45deg);
    }
    &::after{
      transform: rotate(-45deg);
    }
  }
}
</style>
