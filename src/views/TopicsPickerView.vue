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
    <h1>This is an top pics page</h1>
    <button @click="teamsStore.handleNextTurn()">next turn</button>
    <button @click="teamsStore.awardPointsToActive(500)">Give 500</button>
    <button @click="topicsStore.setActiveQuestion('pop')">Select</button>
  </div>

  <div
    v-for="topic in topicsStore.topics"
    @click="topicsStore.toggleActiveTopic(topic.id)"
    :key="topic.id"
  >
    {{ topic.name }}, {{ topic.id }}
  </div>
  <h1>Active topics</h1>
  <div v-for="aTopic in topicsStore.activeTopics">
    {{ aTopic.name }}
    <div
      v-for="question in aTopic.questions"
      @click="topicsStore.setActiveQuestion(question.name)"
    >
      {{ question.points }}
    </div>

    aQ: {{ topicsStore.getActiveQuestion?.name }}
  </div>
  <!-- <div>
    <h2>
      {{ topicsStore.getActiveQuestion.name }}
    </h2>
    <div v-for="answer in topicsStore.getActiveQuestion.wrongA">
      {{ answer }}
    </div>
    {{ topicsStore.getActiveQuestion.rightA }}
  </div> -->
</template>

<style></style>
