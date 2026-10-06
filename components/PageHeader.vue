<script setup lang="ts">
defineProps<{
  label: string;
  title: string;
  description?: string;
  file?: string;
}>();
const { active } = useOsNavigation();
</script>
<template>
  <header class="page-header">
    <div class="page-path">
      <span>MOHAB / {{ file || active.file }}</span
      ><span class="page-access">READ ACCESS: PUBLIC</span>
    </div>
    <p class="eyebrow"><span aria-hidden="true">›</span> {{ label }}</p>
    <h1>{{ title }}</h1>
    <p v-if="description" class="page-description">{{ description }}</p>
  </header>
</template>
