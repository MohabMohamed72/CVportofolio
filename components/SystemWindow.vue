<script setup lang="ts">
withDefaults(
  defineProps<{ file: string; label?: string; collapsible?: boolean }>(),
  { collapsible: false },
);
const expanded = ref(true);
const contentId = useId();
</script>
<template>
  <section class="system-window">
    <div class="window-titlebar">
      <span class="window-mark" aria-hidden="true">▧</span
      ><span>{{ file }}</span
      ><span class="window-title-spacer"></span
      ><span v-if="label" class="window-label">{{ label }}</span
      ><button
        v-if="collapsible"
        type="button"
        class="window-control"
        :aria-expanded="expanded"
        :aria-controls="contentId"
        :aria-label="(expanded ? 'Minimize ' : 'Expand ') + file"
        @click="expanded = !expanded"
      >
        {{ expanded ? "−" : "+" }}</button
      ><span v-else class="window-indicator" aria-hidden="true"></span>
    </div>
    <div v-show="expanded" :id="contentId" class="window-body"><slot /></div>
    <div v-if="!expanded" class="window-minimized">
      Window minimized.
      <button type="button" class="text-link" @click="expanded = true">
        Restore ↗
      </button>
    </div>
  </section>
</template>
