<script>
import { useTeamsStore } from "../stores/teams";
import { ref } from "vue";
export default {
  setup() {
    const teamsStore = useTeamsStore();
    const newTeamName = ref("");
    return { teamsStore };
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <div class="page-content">
    <h1>Create teams</h1>
    <div v-for="(team, index) in teamsStore.teams" :key="team.id">
      {{ team.isIncluded ? team.name : "" }}
    </div>
    <input
      type="text"
      v-model="newTeamName"
      v-if="teamsStore.getTeamsStats.find((team) => !team.isIncluded)"
    />
    <button
      v-if="teamsStore.getTeamsStats.find((team) => !team.isIncluded)"
      @click="teamsStore.handleCreateTeam(newTeamName)"
    >
      ADD TEAM
    </button>
    <RouterLink to="/topics">
      <button
        v-if="teamsStore.getTeamsStats.find((team) => team.isIncluded)"
        @click=""
      >
        NEXT
      </button>
    </RouterLink>
  </div>
</template>

<style></style>
