<script setup lang="ts">
import type { CaseStudy } from "~/composables/useCaseStudies";
defineProps<{ study: CaseStudy }>();
</script>
<template>
  <figure v-if="study.screenshot" class="project-image">
    <img
      :src="study.screenshot"
      :alt="study.title + ' interface'"
      loading="lazy"
      width="1440"
      height="900"
    />
    <figcaption>{{ study.title }} / Product interface</figcaption>
  </figure>
  <figure v-else class="workflow-media">
    <figcaption>
      <span>{{ study.shortTitle }} / WORKFLOW MAP</span
      ><span>VERIFIED PRODUCT FLOW</span>
    </figcaption>
    <ol>
      <li v-for="(stage, index) in study.workflow" :key="stage">
        <span
          >{{ String(index + 1).padStart(2, "0") }}
          {{ index < study.workflow.length - 1 ? "→" : "✓" }}</span
        ><b>{{ stage }}</b>
      </li>
    </ol>
    <p class="workflow-note">
      Workflow schematic — not an interface screenshot.
    </p>
  </figure>
</template>
