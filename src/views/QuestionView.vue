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
  computed: {
    activeQuestion() {
      return this.topicsStore.getActiveQuestion;
    },
    allAnswers() {
      let x = [...this.topicsStore.getActiveQuestionAnswersRan];
      return x;
    },
  },
  methods: {},
};
</script>
<template>
  <div class="page-content">
    <h1>{{ activeQuestion.name }}</h1>
    {{ activeQuestion.content }}
    <div>
      <img :src="activeQuestion.imageUrl" />
    </div>
    <div v-for="answer in allAnswers">
      <div v-if="answer.active">
        {{ answer.answer }}
      </div>
    </div>
    <div id="options">
      <h3 id="options-cap">Tahák</h3>
      <button class="option-btn" @click="this.topicsStore.toggleFiftyFifty">
        50:50
      </button>
      <button class="option-btn">pepege</button>
      <button class="option-btn" disabled>sharing is caring</button>
    </div>
  </div>
</template>

<style scoped>
.page-content {
  position: relative;
}
#options {
  z-index: 50;
  position: absolute;
  top: 10px;
  right: 30px;
  width: 250px;
  height: 250px;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  background-color: var(--yellow);
}
#options-cap {
  padding-top: 10px;
  text-align: center;
  width: 100%;
}
.option-btn {
  width: 100%;
  background-color: transparent;
  border: none;
  font-size: 1.2rem;
}
.option-btn:hover {
  color: red;
}
.option-btn {
  background-color: none;
  border: none;
}
.option-btn:disabled {
  color: black;
  text-decoration: line-through;
  text-decoration-color: red;
  text-decoration-thickness: 3px;
}
</style>
