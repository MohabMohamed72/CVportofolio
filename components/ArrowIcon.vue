<script setup lang="ts">
const props = withDefaults(defineProps<{ direction?: 'up-right' | 'left' | 'down' }>(), { direction: 'up-right' })
const rotation = computed(() => ({ 'up-right': -45, left: 180, down: 90 }[props.direction]))
</script>
<template>
  <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><g :transform="'rotate(' + rotation + ' 12 12)'"><path d="M4 12h16M13 5l7 7-7 7" /></g></svg>
</template>
<style scoped>
.arrow-icon { display: inline-block; width: 1.1em; height: 1.1em; vertical-align: -.12em; flex: none; }
</style>
