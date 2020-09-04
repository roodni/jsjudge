<template>
  <v-col
    class="pa-2"
    cols="12" md="6" lg="4"
  >
    <v-hover v-slot:default="{ hover }">
      <v-card
        hover outlined
        :to="`/problems/${src}`"
        :class="{ 'on-hover': hover }"
        class="fill-height"
      >
        <v-list-item>
          <v-list-item-avatar size="40">
            <progress-icon :progress="progress"></progress-icon>
          </v-list-item-avatar>
          <v-list-item-title>{{ name }}</v-list-item-title>
        </v-list-item>
      </v-card>
    </v-hover>
  </v-col>
</template>

<script>
import ProgressIcon from './progress-icon';
import store_progress from '../stores/problem-progress';

export default {
    name: 'problems-index-item',
    components: {
      ProgressIcon
    },
    props: {
      src: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        shared: {
          progrss: store_progress.state
        }
      };
    },
    computed: {
      progress() {
        return store_progress.getProgress(this.src);
      }
    }
};
</script>