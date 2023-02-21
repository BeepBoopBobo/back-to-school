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
  <div v-for="team in teamsStore.teams" :class="team.isActive ? 'poggies' : ''">
    {{ team.name }} - {{ team.points }}
  </div>
</template>
<style>
.poggies {
  color: red;
}
</style>
