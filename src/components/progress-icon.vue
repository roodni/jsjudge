<template>
  <v-icon :color="color">{{ name }}</v-icon>
</template>

<script>
import store_progress from '../stores/problem-progress';
const progress_values = store_progress.values;

export default {
  name: 'progress-icon',
  props: {
    progress: {
      required: true,
      validator(v) {
        return Object.values(progress_values).includes(v);
      }
    }
  },
  computed: {
    color() {
      switch (this.progress) {
      case progress_values.SOLVED:
        return 'green';
      case progress_values.PARTIALLY:
        return 'orange';
      case progress_values.N_A:
        return 'brown';
      default:
        return '';
      }
    },
    name() {
      switch (this.progress) {
      case progress_values.SOLVED:
        return 'mdi-check-circle';
      case progress_values.PARTIALLY:
        return 'mdi-alert-circle-check';
      case progress_values.N_A:
        return 'mdi-emoticon-poop';
      default:
        return '';
      }
    }
  }
};
</script>