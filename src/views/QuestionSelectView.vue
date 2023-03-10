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
      <div
        v-for="question in topic.questions"
        class="question-val sticker"
        onclick=""
      >
        <RouterLink
          :to="`/question/${question.id}`"
          @click="topicsStore.setActiveQuestion(question.name)"
        >
          {{ question.points }}
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.topic {
  width: 12%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-content: flex-start;
}
.headline {
  white-space: nowrap;
  font-weight: bolder;
  text-align: center;
  width: 100%;
  color: blue;
  overflow: hidden;
  text-overflow: ellipsis;
}
#question-picker {
  display: flex;
  width: 90%;
  margin: auto;
  justify-content: space-around;
  gap: 20px;
}

.question-val {
  width: 100%;
  text-align: center;
  padding: 20px;
}
.container {
  max-height: 80px;
}
.sticker {
  margin: auto;
  font-size: 2rem;
  width: 80%;
  aspect-ratio: 1/1;
  background-color: white;
}
.sticker:hover {
  border: 2px solid red;
}
</style>
