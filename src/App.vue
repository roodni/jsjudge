<template>
  <v-app>
    <problem-judge src="problem-test" />
  </v-app>
</template>

<script>
import ProblemJudge from './components/problem-judge';

export default {
  name: 'App',
  components: {
    ProblemJudge
  }
};
</script>

<style>
</style>
