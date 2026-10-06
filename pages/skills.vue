<script setup lang="ts">
useHead({ title: "Skills" });
const { skills } = useProfessionalProfile();
</script>
<template>
  <main>
    <PageHeader
      label="Skills"
      title="Technical Skills"
      description="Technologies and tools I use in production projects. Organized by the work they do."
    />
    <div class="page-content">
      <div class="skills-status">
        <strong>INSTALLED MODULES / {{ skills.length }} CATEGORIES</strong
        ><span>SKILL NAMES, NOT PROFICIENCY SCORES</span>
      </div>
      <div class="skills-grid">
        <section
          v-for="(group, index) in skills"
          :key="group.name"
          class="skill-group"
        >
          <div class="skill-group-heading">
            <span>{{ String(index + 1).padStart(2, "0") }}</span>
            <h2>{{ group.name }}</h2>
          </div>
          <ul>
            <li v-for="item in group.items" :key="item">{{ item }}</li>
          </ul>
        </section>
      </div>
      <section class="content-section">
        <div class="section-label">
          <span>DEPENDENCIES</span>
          <h2>How Tools Connect</h2>
        </div>
        <div class="connection-list">
          <p>
            <strong>Vue / Nuxt → Pinia → REST APIs</strong>State and data
            connect enterprise workflows.<br /><NuxtLink
              to="/projects/orbit-system"
              class="text-link"
              >Orbit System ↗</NuxtLink
            >
          </p>
          <p>
            <strong>Nuxt → SSR → Dynamic SEO</strong>Tenant-aware discovery and
            learning.<br /><NuxtLink
              to="/projects/education-system"
              class="text-link"
              >Education System ↗</NuxtLink
            >
          </p>
          <p>
            <strong>Vue I18n → Arabic / English → RTL / LTR</strong>Role-aware,
            bilingual safety operations.<br /><NuxtLink
              to="/projects/hse-management-system"
              class="text-link"
              >HSE Management System ↗</NuxtLink
            >
          </p>
        </div>
      </section>
    </div>
  </main>
</template>
