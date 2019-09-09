<template>
  <div>
    <h3>{{ label }}</h3>
    <textarea rows="10" v-model="responseVal"></textarea>
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
      type: String,
      default: ''
    },
    questId: {
      type: String,
      default: ''
    }
  },
  computed: {
    responseVal: {
      get () {
        return this.responses
      },
      set (responses) {
        this.$emit('input', responses)
        let obj = { 'questId': this.questId, 'responses': responses }
        this.$store.dispatch('MUTATE_QUESTIONNAIRE_SINGLE', obj)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
textarea{
  width: 80%;
  outline: none;
}
</style>
