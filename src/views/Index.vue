<script setup lang="ts">
import MainNav from "@components/MainNav.vue";
import FiltersNav from "@components/FiltersNav.vue";
import MainCarousel from "@components/MainCarousel.vue";
</script>

<template>
  <div class="w-full h-full min-h-screen bg-primary">
    <MainNav />
    <FiltersNav />
    <MainCarousel />
  </div>
</template>
