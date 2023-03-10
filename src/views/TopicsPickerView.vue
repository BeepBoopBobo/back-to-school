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
  created() {
    this.topicsStore.printParents();
  },
};
</script>
<template>
  <div class="page-content">
    <!-- <div id="controlls">
      <button @click="teamsStore.handleNextTurn()">next turn</button>
      <button @click="teamsStore.awardPointsToActive(500)">Give 500</button>
      <button @click="topicsStore.setActiveQuestion('pop')">Select</button>
    </div> -->

    <h2 class="header">
      Active topics {{ topicsStore.activeTopics.length }}/
      {{ topicsStore.maxTopics }}
    </h2>

    <div class="themes-box">
      <div v-for="parent in topicsStore.getParents" class="parent-box">
        <div class="theme headline">
          {{ parent }}
        </div>
        <div class="children-container">
          <div
            @click="
              topicsStore.activeTopics.length < topicsStore.maxTopics
                ? topicsStore.toggleActiveTopic(topic.id)
                : topicsStore.activeTopics.find((tp) => tp.id == topic.id) !=
                  undefined
                ? topicsStore.toggleActiveTopic(topic.id)
                : ''
            "
            v-for="topic in topicsStore.getTopicsByParent.find(
              (item) => item.parentTopic == parent
            ).childTopics"
            :class="
              topicsStore.activeTopics.includes(topic)
                ? 'child-topic active'
                : 'child-topic '
            "
          >
            {{ topic.name }}
          </div>
        </div>
      </div>
    </div>
    <RouterLink to="/select-question">
      <button>NEXT</button>
    </RouterLink>
  </div>
</template>

<style scoped>
.parent-box {
  margin-top: 0px;
}
.theme {
  font-size: 1.5rem;
}
.children-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.child-topic {
  padding: 10px 20px;
  font-weight: bold;
  color: black;

  background: linear-gradient(
    to right,
    rgba(227, 255, 126, 0.65) 50%,
    transparent 50%
  );
  background-size: 200% 100%;
  background-position: right bottom;
  transition: background-position 0.2s ease-in;
}

.child-topic.active {
  background-position: left bottom;
  color: rgba(0, 0, 0, 0.8);
}
</style>
