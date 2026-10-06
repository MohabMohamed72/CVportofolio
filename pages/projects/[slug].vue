<script setup lang="ts">
definePageMeta({ key: route => route.fullPath })
const route = useRoute()
const studies = useCaseStudies()
const index = studies.findIndex((item) => item.slug === route.params.slug)
if (index < 0) throw createError({ statusCode: 404, statusMessage: 'Case study not found' })
const study = studies[index]!
const next = studies[(index + 1) % studies.length]!
useHead({ title: study.title + ' — Case Study' })
</script>

<template>
  <main>
    <article>
      <header class="case-intro paper">
        <div class="container">
          <div class="index-meta"><NuxtLink to="/projects">← All projects</NuxtLink><span>Case study / {{ String(index + 1).padStart(2, '0') }}</span></div>
          <div class="case-intro-grid"><h1 class="display display-xl">{{ study.title }}</h1><div><p class="body-lg">{{ study.summary }}</p><p class="case-category">{{ study.category }}</p></div></div>
          
          <nav class="case-navigation" aria-label="Case study sections"><a href="#context">Overview & Contribution</a><a href="#system">What I Built</a><a href="#features">Key Features</a><a href="#architecture">Tech Stack</a></nav>
        </div>
      </header>

      <section id="context" class="case-overview chapter">
        <div class="container overview-grid"><div class="overview-aside"><h2 class="role-heading">My Contribution</h2><p>{{ study.role }}</p><a v-if="study.external" :href="study.external" target="_blank" rel="noopener noreferrer" class="line-link">View Project <ArrowIcon /></a></div><div><h2 class="display display-md">Overview</h2><p class="body-lg">{{ study.context }}</p><h3 class="problem-heading">The Problem</h3><p class="body-lg">{{ study.problem }}</p></div></div>
      </section>

      <section id="features" class="case-detail chapter">
        <div class="container detail-grid"><div><h2 class="display display-md">Key Features</h2></div><div><h3>Features</h3><ul><li v-for="feature in study.features" :key="feature">{{ feature }}</li></ul></div></div>
      </section>

      <section id="system" class="case-system paper chapter">
        <div class="container"><div class="section-head"><h2 class="display display-md">What I Built</h2><p>{{ study.system }}</p></div><ProjectMedia :study="study" /><div class="engineering-threads"><article v-for="thread in study.threads" :key="thread.title"><h3>{{ thread.title }}</h3><p>{{ thread.description }}</p></article></div></div>
      </section>

      <section id="architecture" class="case-architecture paper-soft chapter">
        <div class="container"><div class="section-head"><h2 class="display display-md">Tech Stack</h2><p>Technologies and architecture selected for the actual workflows.</p></div><div class="architecture-grid"><div><h3>Technologies</h3><ul><li v-for="item in study.technology" :key="item">{{ item }}</li></ul></div><div><h3>Architecture</h3><ul><li v-for="item in study.architecture" :key="item">{{ item }}</li></ul></div></div></div>
      </section>

      <section class="case-challenges chapter-tight"><div class="container"><h2 class="display display-md">Challenges</h2><p class="body-lg">{{ study.challenge }}</p></div></section>
      <section id="screenshots" class="case-screenshots paper chapter-tight"><div class="container"><h2 class="display display-md">Screenshots</h2><ProjectMedia v-if="study.screenshot" :study="study" /><p v-else>Actual product interface screenshots have not been supplied yet. The diagram above describes verified product scope; it is not a screenshot.</p></div></section>
      <section id="outcome" class="case-result chapter"><div class="container result-grid"><div><h2 class="display display-md">Result</h2><p class="body-lg">{{ study.result }}</p></div></div></section>
    <section class="chapter-tight paper-soft"><div class="container"><h2 class="display display-md">Links</h2><a v-if="study.external" :href="study.external" target="_blank" rel="noopener noreferrer" class="line-link">View Project <ArrowIcon /></a><p v-else>A public project link is not available.</p><NuxtLink to="/projects" class="line-link">All Projects <ArrowIcon /></NuxtLink></div></section>
    </article>
    <NuxtLink :to="'/projects/' + next.slug" class="next-project"><span class="mono">NEXT CASE STUDY</span><strong class="display">{{ next.title }}</strong><ArrowIcon /></NuxtLink>
  </main>
</template>

<style scoped>
.case-challenges p { margin-top: 1.5rem; max-width: 65ch; }
.role-heading { font-size: 1.2rem; color: var(--lime); }
.problem-heading, .challenge-heading { font-size: 1.3rem; margin-top: 2rem; margin-bottom: 1rem; }
.engineering-threads { margin-top: 3rem; }
.case-screenshots p { margin-top: 1.5rem; max-width: 65ch; }

.case-navigation { display: flex; flex-wrap: wrap; gap: 1rem 2rem; margin-top: 2rem; }
.case-navigation a { min-height: 44px; display: flex; align-items: center; border-bottom: 1px solid var(--line-light); }
.engineering-threads { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 3rem; }
.engineering-threads article { border-top: 1px solid var(--line-light); padding-top: 1.2rem; }
.engineering-threads h3 { font-size: 1.4rem; line-height: 1.2; }
.engineering-threads p { margin-top: 1rem; color: var(--text-on-paper); }
@media (max-width: 800px) { .engineering-threads { grid-template-columns: 1fr; gap: 2rem; } .case-navigation { gap: .4rem 1rem; } .case-navigation a { font-size: .9rem; } .case-intro { padding-bottom: 3rem; } .case-intro-grid h1 { font-size: 2.9rem; } }

.case-intro { padding-block: 1.4rem 6rem; }
.case-intro-grid { display: grid; grid-template-columns: 1.4fr .6fr; gap: 5vw; align-items: end; padding-block: clamp(3rem, 6vw, 6rem) 3rem; }
.case-intro h1 { max-width: 11ch; }
.case-intro-grid > div { max-width: 36ch; }
.case-category { margin-top: 2rem; color: #6a6e65; font-size: 1rem; }
.overview-grid { display: grid; grid-template-columns: .5fr 1fr; gap: clamp(4rem, 10vw, 12rem); }
.overview-aside { border-top: 1px solid var(--line-dark); padding-top: 1rem; }
.overview-aside .mono { color: var(--lime); font-size: .68rem; }
.overview-aside p { margin-top: 1.8rem; max-width: 34ch; }
.overview-aside .line-link { margin-top: 1.5rem; }
.overview-grid h2 { margin-bottom: 2.5rem; }
.overview-grid .body-lg { max-width: 58ch; margin-bottom: 1.5rem; }
.case-flow { display: grid; grid-template-columns: repeat(6, 1fr); border-top: 1px solid var(--line-light); margin-top: 4rem; }
.flow-node { position: relative; min-height: 160px; padding: 1rem .8rem 1rem 0; border-bottom: 1px solid var(--line-light); }
.flow-node::before { content: ''; position: absolute; top: -3px; left: 0; width: 5px; height: 5px; background: var(--oxide); border-radius: 50%; }
.flow-node .mono { display: block; color: #a64430; font-size: .66rem; margin-bottom: 2rem; }
.flow-node strong { display: block; font-size: clamp(.95rem, 1.4vw, 1.3rem); line-height: 1.2; max-width: 11ch; }
.flow-caption { margin-top: .7rem; color: #6a6e65; font-size: .64rem; }
.detail-grid { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(4rem, 10vw, 11rem); }
.detail-grid h2 { max-width: 12ch; }
.detail-grid p { margin-top: 2rem; max-width: 52ch; color: var(--text-muted); }
.detail-grid h3, .architecture-grid h3 { margin-bottom: 1.5rem; font: 700 1.2rem var(--font-body); }
.detail-grid li, .architecture-grid li { padding: .9rem 0; border-bottom: 1px solid var(--line-dark); }
.architecture-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10vw; }
.architecture-grid li { border-color: var(--line-light); }
.result-grid { display: grid; grid-template-columns: 1fr; gap: 3rem; }
.result-grid .mono { color: var(--lime); font-size: .7rem; }
.result-grid p { max-width: 62ch; margin-top: 1.5rem; }
.result-grid h2 { max-width: 22ch; }
.next-project { display: grid; grid-template-columns: 1fr auto; gap: .5rem; padding: clamp(2rem, 5vw, 5rem) var(--gutter); background: var(--oxide); color: var(--ink); }
.next-project .mono { grid-column: 1/-1; font-size: .65rem; }
.next-project strong { font-size: clamp(2.5rem, 5vw, 5rem); }
.next-project > span:last-child { align-self: center; font-size: 2rem; }
.next-project:hover { background: var(--lime); }
@media (max-width: 900px) { .case-intro-grid, .overview-grid, .detail-grid, .result-grid { grid-template-columns: 1fr; } .case-intro-grid { gap: 1.4rem; } .case-flow { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 600px) { .case-flow { grid-template-columns: repeat(2, 1fr); } .flow-node { min-height: 130px; } .architecture-grid { grid-template-columns: 1fr; gap: 4rem; } }
</style>
