<script setup lang="ts">
const route = useRoute();
const storesFocus = computed(() => route.query.work === "stores");
useHead(() => ({
  title: storesFocus.value
    ? "Mohab Mohamed — E-commerce Web Developer"
    : "Mohab Mohamed — Frontend Developer",
}));
</script>
<template>
  <main class="desktop container">
    <div class="desktop-topline">
      <span>PERSONAL FRONTEND SYSTEM / BUILD 2026.10</span
      ><span>SESSION: PUBLIC / NO INSTALLATION REQUIRED</span>
    </div>
    <PortfolioTracks :current="storesFocus ? 'stores' : 'frontend'" home />
    <HomeHero :stores-focus="storesFocus" />
    <div class="desktop-bottomline">
      <span>› Complex interfaces. Clear outcomes.</span
      ><span>KEYBOARD READY · TAB TO NAVIGATE</span>
    </div>
    <StoreShowcase v-if="storesFocus" compact />
    <HomeFeaturedProjects v-else />
  </main>
</template>
