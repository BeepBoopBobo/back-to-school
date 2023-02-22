<script>
import { useTeamsStore } from "../stores/teams";
export default {
  setup() {
    const teamsStore = useTeamsStore();
    return { teamsStore };
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <div id="team-scores">
    <div
      v-for="team in teamsStore.teams"
      class="team-score"
      :class="team.isActive ? 'on-turn' : ''"
      v-bind:style="{ backgroundColor: `var(${team.teamColor})` }"
    >
      {{ team.name }} - {{ team.points }}
    </div>
  </div>
</template>

<style>
#team-scores {
  padding-top: 40px;
  display: flex;
  width: 80%;
  justify-content: space-around;
  align-items: flex-end;

  margin: auto;
}
.team-score {
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  background-color: var(--beige);
  height: 60px;
  min-width: 200px;
  padding: 10px 20px;
  border-radius: 10px 10px 0 0;
  color: white;
  user-select: none;
}
.on-turn {
  height: 80px;
}
</style>
