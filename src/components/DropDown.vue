<!-- Generic component for dropdown -->

<template>
    <select v-model="selectedOption" @change="onChange()">
        <!-- binds the option object as value, so that both option label and option value can be used -->
        <option v-for="option in options" v-bind:value="option" v-bind:key="option.value" >
            {{ option.label }}
        </option>
    </select>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'DropDown',
  props: {
    /**
     * selected - value of the selected option
     * options - list of options with label and value property
     */
    selected: String,
    options: {
        label: String,
        value: String
    }
  },
  methods: mapActions({
    /**
     * Sets the selected option to the state on change
     */
    onChange(dispatch) {
      dispatch('setSelectedOption', this.selectedOption);
    }
  }),
  data(){
    return {
      /**
       * Gets the seleted option object using the selected value.
       * Used find instead of map.
       */
      selectedOption: this.options.find(option => option.value === this.selected)
    }
  },
  created() {
    /**
     * Sets the selected option to the state on creation
     */
    this.$store.dispatch('setSelectedOption', this.selectedOption);
  }
}
</script>
