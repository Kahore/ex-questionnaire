<template>
  <div>
    <h3 class="wrapper-modal_content-header">{{ label }}</h3>
    <div
      v-for="(resp, id) in responses"
      :key="id"
      class="responses">
      <input
        type="checkbox"
        :checked="resp.isSelected"
        :id=resp.id
        @click="checkboxAction(resp.id)">
      <label :for=resp.id>{{resp.text}}</label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    responses: {
      type: [String, Array],
      default: ''
    },
    questId: {
      type: String,
      default: ''
    }
  },
  methods: {
    checkboxAction (respId) {
      let newResp = JSON.parse(JSON.stringify(this.responses))
      let questIdx = newResp.findIndex(function (resp) {
        return resp.id === respId
      })
      newResp[questIdx].isSelected = !newResp[questIdx].isSelected
      let obj = { 'questId': this.questId, 'responses': newResp }
      this.$store.dispatch('MUTATE_QUESTIONNAIRE_SINGLE', obj)
    }
  }
}
</script>

<style lang="scss" scoped>
.responses {
  text-align: left;
  margin-left: 15%;
  padding-top: 5px;
}
@media (max-width: 769px) {
  .responses{
    margin-right: 30px;
  }
}
</style>
