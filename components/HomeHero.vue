<script setup lang="ts">
const { personalInfo } = usePortfolioData();
const { items } = useOsNavigation();
const intent = ref("Select an application to open");
</script>
<template>
  <div class="desktop-stage">
    <SystemWindow
      class="identity-window"
      file="USER_PROFILE.SYS"
      label="SESSION OWNER"
    >
      <p class="eyebrow">USER / MOHAB MOHAMED</p>
      <h1 class="desktop-name" aria-label="Mohab Mohamed">
        MOHAB<span>MOHAMED</span>
      </h1>
      <p class="desktop-role">Frontend Developer</p>
      <p class="desktop-intro">
        I build scalable web applications for complex products and digital
        platforms.
      </p>
      <p class="desktop-stack">Vue 3 / Nuxt 3 / React / Angular / TypeScript</p>
      <div class="actions">
        <NuxtLink to="/projects" class="button primary"
          >View Projects <ArrowIcon /></NuxtLink
        ><CvDownload />
      </div>
      <div class="desktop-socials">
        <NuxtLink to="/contact" class="text-link">Contact ↗</NuxtLink
        ><a
          :href="personalInfo.github"
          target="_blank"
          rel="noopener noreferrer"
          class="text-link"
          >GitHub ↗</a
        ><a
          :href="personalInfo.linkedin"
          target="_blank"
          rel="noopener noreferrer"
          class="text-link"
          >LinkedIn ↗</a
        >
      </div>
    </SystemWindow>
    <div class="desktop-aux">
      <div class="desktop-applications">
        <div class="desktop-bottomline">
          <span>APPLICATION LAUNCHER</span><span>01 — 06</span>
        </div>
        <nav class="module-dock" aria-label="Portfolio applications">
          <NuxtLink
            v-for="item in items.filter((item) => item.path !== '/')"
            :key="item.path"
            :to="item.path"
            class="module-link"
            @mouseenter="intent = 'OPEN ' + item.file"
            @mouseleave="intent = 'Select an application to open'"
            @focus="intent = 'OPEN ' + item.file"
            @blur="intent = 'Select an application to open'"
            ><SystemIcon :name="item.icon" /><strong>{{ item.label }}</strong
            ><small>{{ item.file }}</small
            ><span class="module-arrow" aria-hidden="true">↗</span></NuxtLink
          >
        </nav>
        <p class="launcher-command">
          <span aria-hidden="true">›</span> {{ intent }}
          <span class="prompt-caret" aria-hidden="true"></span>
        </p>
      </div>
      <SystemWindow file="SESSION.INFO" label="LIVE" collapsible>
        <p class="availability">
          <i aria-hidden="true"></i> AVAILABLE FOR OPPORTUNITIES
        </p>
        <dl class="status-readout">
          <div>
            <dt>LOCATION</dt>
            <dd>Mansoura / Egypt</dd>
          </div>
          <div>
            <dt>EXPERIENCE</dt>
            <dd>2+ years</dd>
          </div>
          <div>
            <dt>LANGUAGES</dt>
            <dd>Arabic / English</dd>
          </div>
          <div>
            <dt>FOCUS</dt>
            <dd>Vue / Nuxt / TypeScript</dd>
          </div>
        </dl>
      </SystemWindow>
    </div>
  </div>
</template>
