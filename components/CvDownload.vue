<script setup lang="ts">
import type { CvVariant } from "~/composables/useCvDocument";
const props = withDefaults(defineProps<{ variant?: CvVariant }>(), {
  variant: "full",
});
const document = computed(() => useCvDocument(props.variant));
</script>
<template>
  <a :href="document.path" download class="button">
    {{ document.label }} <ArrowIcon direction="down" />
  </a>
</template>
