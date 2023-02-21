<script setup>
import { RouterLink, RouterView } from "vue-router";
import TeamsScore from "./components/TeamsScore.vue";
</script>

<template>
  <header>
    <TeamsScore></TeamsScore>
  </header>

  <RouterView />
</template>

<style scoped></style>
