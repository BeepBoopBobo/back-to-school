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
  <div id="question-picker">
    <div v-for="topic in topicsStore.activeTopics" class="topic">
      <div class="headline">
        {{ topic.name }}
      </div>
      <div v-for="question in topic.questions" class="question-val container">
        {{ question.points }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.topic {
  width: 18%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-content: flex-start;
}
.headline {
  white-space: nowrap;
  text-align: center;
  color: var(--beige);
}
#question-picker {
  display: flex;
  width: 80%;
  margin: auto;
  justify-content: left;
  gap: 20px;
  background-color: var(--brown);
  padding: 20px;
  box-sizing: border-box;
  min-height: 100vh;
}

.question-val {
  width: 100%;
  text-align: center;
  padding: 20px;
}
.container {
  max-height: 80px;
}
</style>
