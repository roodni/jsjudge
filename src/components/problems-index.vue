<template>
  <v-row>
    <problems-index-item
      v-for="problem in problems" :key="problem.src"
      :src="problem.src" :name="problem.name"
    ></problems-index-item>
  </v-row>
</template>

<script>
import problems_index from '../assets/problems-index.json';
import ProblemsIndexItem from './problems-index-item';

export default {
  name: 'problems-index',
  components: {
    ProblemsIndexItem
  },
  data() {
    return {
      problems: problems_index
    };
  }
};
</script>