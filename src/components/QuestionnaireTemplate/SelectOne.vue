<template>
  <div>
    <h3 class="wrapper-modal_content-header">{{ label }}</h3>
    <div
      v-for="(resp, id) in responses"
      :key="id"
      class="responses">
      <input
        type="radio"
        name="response"
        :value="resp.text"
        :checked="resp.isSelected"
        :id=resp.id
        @click="radioAction(resp.id)">
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
    radioAction (respId) {
      let newResp = this._resetRadio(this.responses)
      let questIdx = newResp.findIndex(function (resp) {
        return resp.id === respId
      })
      newResp[questIdx].isSelected = true
      let obj = { 'questId': this.questId, 'responses': newResp }
      this.$store.dispatch('MUTATE_QUESTIONNAIRE_SINGLE', obj)
    },
    _resetRadio (arrResp) {
      let cloneResp = JSON.parse(JSON.stringify(arrResp))
      for (let index = 0; index < cloneResp.length; index++) {
        cloneResp[index].isSelected = false
      }
      return cloneResp
    }
  }
}
</script>

<style lang="scss" scoped>
.responses {
  text-align: left;
  padding-top: 5px;
  margin-left: 15%
}
@media (max-width: 769px) {
  .responses{
    margin-right: 30px;
  }
}
</style>
