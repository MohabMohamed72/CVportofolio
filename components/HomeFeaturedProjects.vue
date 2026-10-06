<script setup lang="ts">
const studies = [...useCaseStudies()].sort((a, b) =>
  a.slug === "hse-management-system"
    ? -1
    : b.slug === "hse-management-system"
      ? 1
      : 0,
);
</script>
<template>
  <section class="home-projects">
    <div class="home-projects-heading">
      <div>
        <p class="eyebrow">RECENT APPLICATIONS / PRODUCTION SYSTEMS</p>
        <h2>Featured Projects</h2>
      </div>
      <NuxtLink to="/projects" class="text-link"
        >Open project directory ↗</NuxtLink
      >
    </div>
    <div class="home-projects-grid">
      <NuxtLink
        v-for="(study, index) in studies"
        :key="study.slug"
        :to="'/projects/' + study.slug"
        class="home-project-link"
        ><div class="meta">
          <span>0{{ index + 1 }} / {{ study.shortTitle }}.APP</span
          ><span>CASE STUDY</span>
        </div>
        <h3>{{ study.title }}</h3>
        <p>{{ study.summary }}</p>
        <div class="project-link-bottom">
          <span>{{ study.technology.slice(0, 3).join(" / ") }}</span
          ><span aria-hidden="true">↗</span>
        </div></NuxtLink
      >
    </div>
  </section>
</template>
