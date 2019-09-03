<template>
  <div>
    <h3>{{ label }}</h3>
      <div class="star-rating">
        <label
          class="star-rating__star"
          v-for="(rating, index) in scores"
          :key="index"
          :class="{'is-selected': ((temp_value >= rating) && temp_value != null)}"
          @click="set(rating)"
          @mouseover="starOver(rating)"
          @mouseout="starOut">
          <input
            class="star-rating star-rating__checkbox"
            type="radio"
            :value="rating"
            v-model="responses"/>★
        </label>
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
      type: Number,
      default: 0
    },
    questId: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      temp_value: null,
      scores: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  },
  methods: {
    /*
     * Behaviour of the stars on mouseover.
     */
    starOver (index) {
      this.temp_value = index
      return this.temp_value
    },
    /*
     * Behaviour of the stars on mouseout.
     */
    starOut () {
      this.temp_value = this.responses
      return this.temp_value
    },
    /*
     * Set the rating.
     */
    set (value) {
      this.temp_value = value
      let obj = { 'questId': this.questId, 'responses': value }
      this.$store.dispatch('MUTATE_QUESTIONNAIRE_SINGLE', obj)
      return this.temp_value
    }
  },
  mounted () {
    this.temp_value = this.responses
  }
}
</script>

<style lang="scss" scoped>
%visually-hidden {
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px; width: 1px;
  margin: -1px; padding: 0; border: 0;
}

.star-rating {
  &__star {
    display: inline-block;
    padding: 3px;
    vertical-align: middle;
    line-height: 1;
    font-size: 1.5em;
    color: #ABABAB;
    transition: color .2s ease-out;
    &:hover {
      cursor: pointer;
    }
    &.is-selected {
      color: #FFD700;
    }
    &.is-disabled:hover {
      cursor: default;
    }
  }
  &__checkbox {
    @extend %visually-hidden;
  }
}

</style>
