<script setup lang="ts">
import { onMounted } from "vue";
import { RouteNames } from "@enums";

onMounted(() => {});
</script>

<template>
  <main class="w-full h-full min-h-screen p-5">
    <section id="404-main-section">
      <h1>404 Page not found</h1>
      <router-link
        :to="RouteNames.LOGIN_PATH"
        class="hover:text-blue-500 hover:underline"
        >Go back home</router-link
      >
    </section>
  </main>
</template>
