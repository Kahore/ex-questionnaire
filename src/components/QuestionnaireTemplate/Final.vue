<template>
  <div>
    <h3>{{ label }}</h3>
    <p v-if="hasScore">
        We saved your progress! Thank you!<br>
        Now you can close this window
      </p>
      <template v-else>
        <p>To continue please set a score! It's important to us!</p>
      </template>
  </div>
</template>

<script>
import EventBus from '../../EventBus'
export default {
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  computed: {
    hasScore () {
      return this.$store.getters.hasScore
    }
  },
  mounted () {
    let scr = this.$store.getters.hasScore
    if (scr) {
      EventBus.$emit('POST_DATA', 'cpl')
    }
  }
}
</script>
