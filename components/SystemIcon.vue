<script setup lang="ts">
defineProps<{ name: string }>();
const paths: Record<string, string> = {
  home: "M3 10 12 3l9 7v11h-6v-7H9v7H3Z",
  profile: "M8 3h8v8H8ZM4 15h16v6H4Z",
  code: "m8 6-6 6 6 6m8-12 6 6-6 6M14 3l-4 18",
  folder: "M2 6V3h8l3 3h9v15H2V6Z",
  history: "M5 3h14v18H5ZM8 7h8M8 11h8M8 15h5",
  mail: "M2 5h20v14H2Zm0 0 10 8L22 5",
  file: "M5 2h9l5 5v15H5Zm9 0v6h5M8 12h8M8 16h8",
};
</script>
<template>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="square"
    stroke-linejoin="miter"
    aria-hidden="true"
  >
    <path :d="paths[name] || paths.file" />
  </svg>
</template>
