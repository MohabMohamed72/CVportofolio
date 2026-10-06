<script setup lang="ts">
defineProps<{ current: "frontend" | "stores"; home?: boolean }>();
</script>
<template>
  <nav class="portfolio-tracks" aria-label="Portfolio focus">
    <span>Explore my work</span>
    <div>
      <NuxtLink
        :to="home ? '/?work=frontend' : '/projects'"
        :aria-current="current === 'frontend' ? 'page' : undefined"
      >
        <SystemIcon name="code" /> Frontend engineering
      </NuxtLink>
      <NuxtLink
        :to="home ? '/?work=stores' : '/stores'"
        :aria-current="current === 'stores' ? 'page' : undefined"
      >
        <SystemIcon name="store" /> E-commerce stores
      </NuxtLink>
    </div>
  </nav>
</template>
