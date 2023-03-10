<script setup>
import { RouterLink, RouterView } from "vue-router";
import TeamsScore from "./components/TeamsScore.vue";
</script>

<template>
  <TeamsScore></TeamsScore>
  <div id="paper">
    <div id="pattern">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
