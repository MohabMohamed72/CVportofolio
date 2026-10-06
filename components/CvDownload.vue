<script setup lang="ts">
const { available, path } = useCvDocument()
</script>
<template><a v-if="available" :href="path" download class="button">Download CV <ArrowIcon direction="down" /></a></template>
