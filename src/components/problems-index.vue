<template>
  <v-card>
    <v-list>
      <v-list-item
        v-for="problem in problems"
        :key="problem.src"
        :to="`/problems/${problem.src}`"
      >
        <v-list-item-title>{{ problem.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import problemsIndexData from '../assets/problems-index.json';

export default {
  name: 'problems-index',
  data() {
    return {
      problems: problemsIndexData
    };
  }
};
</script>