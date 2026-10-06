<template>
  <div class="site-shell">
    <a class="skip-link" href="#main-content">Skip to content</a>
    <TheNavbar />
    <div id="main-content" tabindex="-1"><NuxtPage /></div>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (title) =>
    title ? title + ' — Mohab Mohamed' : 'Mohab Mohamed — Frontend Engineer',
  htmlAttrs: { lang: 'en' },
})
</script>
<style scoped>
.skip-link { position: fixed; z-index: 100; top: -60px; left: 16px; padding: 10px 16px; background: var(--lime); color: var(--ink); }
.skip-link:focus { top: 12px; }
</style>
