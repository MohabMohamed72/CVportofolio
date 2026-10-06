<script setup lang="ts">
defineProps<{ label: string; title: string; description: string }>()
</script>
<template><header class="page-header"><div class="container"><p class="page-label">{{ label }}</p><h1 class="display">{{ title }}</h1><p class="body-lg page-description">{{ description }}</p></div></header></template>
<style scoped>
.page-header { padding-block: clamp(40px, 5vw, 72px); }
.page-label { font-weight: 700; color: var(--oxide-light); margin-bottom: 1rem; }
.paper .page-label { color: var(--oxide-on-paper); }
h1 { font-size: clamp(2.3rem, 4.5vw, 4.4rem); max-width: 24ch; }
.page-description { max-width: 60ch; margin-top: 1.5rem; }
</style>
