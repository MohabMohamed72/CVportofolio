<script setup lang="ts">
useHead({ title: 'CV' })
const { available: pdfAvailable, path: pdfPath } = useCvDocument()
const { experienceEntries: roles } = useProfessionalProfile()
const studies = useCaseStudies()
</script>

<template>
  <main class="cv-page paper">
    <div class="container cv-shell">
      <div class="index-meta"><span>Curriculum Vitae / Mohab Mohamed</span><span>Web edition</span></div>
      <header class="cv-header"><div><h1 class="display display-lg">Mohab Mohamed</h1><p class="body-lg">Frontend Developer · Production web applications</p></div><div class="cv-actions"><a v-if="pdfAvailable" :href="pdfPath" download class="button button-dark">Download CV <ArrowIcon direction="down" /></a><a v-if="pdfAvailable" :href="pdfPath" target="_blank" rel="noopener noreferrer" class="line-link">Open PDF <ArrowIcon /></a><p v-else class="pdf-note">Original PDF will be available here after the file is supplied.</p></div></header>

      <div class="cv-contact"><span>Mansoura, Egypt</span><a href="mailto:mohabmohamedd772@gmail.com">mohabmohamedd772@gmail.com</a><a href="https://github.com/MohabMohamed72" target="_blank" rel="noopener noreferrer">GitHub <ArrowIcon /></a><a href="https://linkedin.com/in/mohab-mohamed-a5121024b" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowIcon /></a></div>

      <section class="cv-section"><h2>Summary</h2><p class="cv-lead">Frontend developer focused on enterprise dashboards, multi-tenant SaaS platforms, complex business workflows, and bilingual Arabic / English applications. I build role-aware, data-heavy interfaces with Vue 3, Nuxt 3, React, Angular, and TypeScript.</p></section>
      <section class="cv-section"><h2>Experience</h2><div class="cv-entries"><article v-for="role in roles" :key="role.title"><div><h3>{{ role.title }}</h3><span class="mono">{{ role.period }}</span></div><p>{{ role.responsibilities[0] }}</p></article></div></section>
      <section class="cv-section"><h2>Projects</h2><div class="cv-entries"><article v-for="study in studies" :key="study.slug"><div><h3><NuxtLink :to="'/projects/' + study.slug">{{ study.title }} <ArrowIcon /></NuxtLink></h3><span class="mono">{{ study.category }}</span></div><p>{{ study.summary }}</p></article></div></section>
      <section class="cv-section"><h2>Skills</h2><div class="cv-columns"><div><h3>Interface & data</h3><p>Vue 3, Nuxt 3, React, Next.js, Angular, TypeScript, JavaScript, Pinia, Redux, PrimeVue, Tailwind CSS, SCSS, Axios, REST APIs, WebSockets, Vue Router, Vue I18n, Chart.js.</p></div><div><h3>Architecture & delivery</h3><p>Clean Architecture, feature-based modules, multi-tenant and white-label SaaS, reusable components, composables, OOP, role-based access, RTL/LTR, PDF and Excel workflows, Playwright.</p></div></div></section>
      <section class="cv-section"><h2>Education</h2><div class="cv-entries"><article><div><h3>Bachelor of Engineering</h3><span class="mono">2019–2024</span></div><p>Mansoura University, Faculty of Engineering · Mechatronics Department</p></article><article><div><h3>Embedded Systems Training</h3><span class="mono">2023</span></div><p>National Telecommunication Institute (NTI)</p></article></div></section>
      <div class="cv-close"><NuxtLink to="/contact" class="line-link">Contact Me <ArrowIcon /></NuxtLink></div>
    </div>
  </main>
</template>

<style scoped>
.cv-shell { padding-block: 1.4rem 8rem; }
.cv-header { display: flex; justify-content: space-between; align-items: end; gap: 3rem; padding-block: clamp(5rem, 9vw, 9rem) 3rem; }
.cv-header h1 { margin-bottom: 1rem; }
.cv-actions { display: flex; flex-direction: column; align-items: start; gap: 1rem; }
.pdf-note { max-width: 24ch; color: #686c63; font-size: .86rem; }
.cv-contact { display: flex; flex-wrap: wrap; gap: .7rem 2rem; padding-block: 1rem; border-top: 1px solid var(--line-light); border-bottom: 1px solid var(--line-light); font-size: .84rem; }
.cv-contact a:hover { color: #a64430; }
.cv-section { display: grid; grid-template-columns: .24fr 1fr; gap: clamp(2rem, 5vw, 6rem); padding-block: 3rem; border-bottom: 1px solid var(--line-light); }
.cv-section > h2 { font: 700 1.15rem var(--font-body); }
.cv-lead { max-width: 65ch; font-size: clamp(1.2rem, 1.8vw, 1.7rem); line-height: 1.45; }
.cv-entries { border-top: 1px solid var(--line-light); }
.cv-entries article { display: grid; grid-template-columns: .8fr 1fr; gap: 3rem; padding-block: 1.5rem; border-bottom: 1px solid var(--line-light); }
.cv-entries article:last-child { border-bottom: 0; }
.cv-entries h3, .cv-columns h3 { font-size: 1.03rem; }
.cv-entries h3 a:hover { color: #a64430; }
.cv-entries .mono { display: block; margin-top: .4rem; color: #686c63; font-size: .65rem; }
.cv-entries p, .cv-columns p { max-width: 62ch; color: #4d524b; }
.cv-columns { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; }
.cv-columns h3 { margin-bottom: .8rem; }
.cv-close { margin-top: 3rem; }
@media (max-width: 800px) { .cv-header { display: block; } .cv-actions { margin-top: 2rem; } .cv-section, .cv-entries article { grid-template-columns: 1fr; gap: 1rem; } .cv-columns { grid-template-columns: 1fr; gap: 2rem; } }
@media print { .cv-shell { padding: 0; } .cv-actions, .cv-close { display: none; } .cv-section { break-inside: avoid; padding-block: 1.2rem; } }
.cv-contact a { min-height: 44px; display: flex; align-items: center; }
.cv-contact > span { align-self: center; }
.cv-entries h3 a { display: inline-flex; min-height: 44px; align-items: center; }
@media (min-width: 600px) and (max-width: 1000px) { .cv-section { grid-template-columns: 120px minmax(0, 1fr); } .cv-entries article { grid-template-columns: 1fr; gap: .5rem; } .cv-columns { grid-template-columns: 1fr; gap: 2rem; } }
@media (max-width: 599px) { .cv-header { padding-top: 3rem; } .cv-section { padding-block: 2rem; } .cv-entries .mono { font-size: .8rem; } .cv-section > h2 { font: 700 1rem var(--font-body); text-transform: none; } }
</style>
