<template>
  <div class="app">
    <div class="bg-orb bg-orb-1" />
    <div class="bg-orb bg-orb-2" />
    <div class="bg-orb bg-orb-3" />
    <TheNavbar />
    <NuxtPage />
    <TheFooter />
  </div>
</template>

<script setup>
useHead({
  titleTemplate: (title) =>
    title ? `${title} | Mohab Mohamed` : "Mohab Mohamed | Frontend Developer",
});

// Run on client immediately to avoid a flash of wrong theme
if (import.meta.client) {
  const { initTheme } = useTheme()
  initTheme()
}
</script>

<style>
.app {
  position: relative;
  min-height: 100vh;
}
</style>
