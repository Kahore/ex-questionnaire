<template>
  <div>
     <template v-if="hasScore">
    <h3 class="wrapper-modal_content-header">{{ label }}</h3>
    <p>
        We saved your progress!<br>
        Now you can close this window
      </p>
      </template>
      <template v-else>
        <p>To continue please set a score! It's important to us!</p>
      </template>
  </div>
</template>

<script>
import EventBus from '../../EventBus'
import { mapGetters } from 'vuex'
export default {
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapGetters(['hasScore'])
  },
  mounted () {
    let scr = this.$store.getters.hasScore
    if (scr) {
      EventBus.$emit('POST_DATA', 'cpl')
    }
  }
}
</script>
