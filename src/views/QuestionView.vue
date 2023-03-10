<script>
import { useTeamsStore } from "../stores/teams";
import { useTopicsStore } from "../stores/topics";
export default {
  setup() {
    const teamsStore = useTeamsStore();
    const topicsStore = useTopicsStore();
    return { teamsStore, topicsStore };
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<template>
  <div class="page-content">
    <h1>{{ topicsStore.getActiveQuestion.name }}</h1>
    <div v-for="answer in topicsStore.getActiveQuestionAnswersRan">
      {{ answer.answer }}
    </div>
    <div v-for="answer in topicsStore.getFiftyFifty">
      {{ answer }}
    </div>
  </div>
</template>

<style></style>
