<script setup lang="ts">
useHead({ title: 'Projects' })
const major = useCaseStudies()
const secondary = [
  { title: 'Fashion Store', category: 'E-commerce', detail: 'React storefront with product discovery, categories, and cart.', role: 'Frontend development: product browsing, filtering, and cart interfaces.', technology: 'React.js · JavaScript · Tailwind CSS', link: 'https://ecommerce8.netlify.app/' },
  { title: 'Mega E-Commerce', category: 'E-commerce', detail: 'Vue marketplace across multiple consumer product categories.', role: 'Frontend development: marketplace browsing, search, and shopping state.', technology: 'Vue.js · TypeScript · Tailwind CSS · Pinia', link: 'https://ecommerce759.netlify.app/' },
  { title: 'Alkhalil Traveling', category: 'Travel & booking', detail: 'Flight and hotel booking workflows with e-ticket generation.', role: 'Frontend development: booking workflows and e-ticket interfaces.', technology: 'Vue.js · TypeScript · SCSS · REST APIs · Payment Integration', link: '' },
]
const experiments = [{ title: 'FilmPire', subtitle: 'Movies & actors discovery platform', detail: 'Movie discovery with actor profiles, ratings, search, and cast details.', role: 'Frontend development: API-driven discovery and movie detail interfaces.', technology: 'React.js · JavaScript · REST APIs · Tailwind CSS', link: 'https://filmpiren.netlify.app/' }]
</script>

<template>
  <main>
    <section class="paper project-intro">
      <div class="container">
        <p class="page-label">Projects</p><div class="project-intro-grid"><h1 class="display display-lg">Projects</h1><p class="body-lg">Selected web applications and platforms I’ve worked on.</p></div>
        <nav class="project-directory" aria-label="Jump to a production system"><a v-for="study in major" :key="study.slug" :href="'#' + study.slug"><strong>{{ study.shortTitle }}</strong><span>{{ study.category }}</span></a></nav>
      </div>
    </section>

    <section class="major-list">
      <article v-for="(study, i) in major" :id="study.slug" :key="study.slug" class="major-project" :class="'major-' + i">
        <div class="container">
          <div class="major-header"><div><h2 class="display display-lg">{{ study.title }}</h2></div><p>{{ study.category }}<br><span>{{ study.summary }}</span></p></div>
          <div class="project-facts"><p><strong>My Role</strong>{{ study.role }}</p><p><strong>Tech Stack</strong>{{ study.technology.slice(0, 5).join(' · ') }}</p><NuxtLink :to="'/projects/' + study.slug" class="line-link">View Details</NuxtLink></div><div class="project-features"><h3>Key Features</h3><ul><li v-for="feature in study.features.slice(0, 4)" :key="feature">{{ feature }}</li></ul><a v-if="study.external" :href="study.external" target="_blank" rel="noopener noreferrer" class="line-link">View Project <ArrowIcon /></a></div><ProjectMedia :study="study" />
          <div class="major-foot"><p>{{ study.problem }}</p><NuxtLink :to="'/projects/' + study.slug" class="button">View Details <ArrowIcon /></NuxtLink></div>
        </div>
      </article>
    </section>

    <section id="orbit-client-portal" class="portal-feature paper-soft chapter-tight"><div class="container"><h2 class="display display-md">Orbit Client Portal</h2><p class="portal-type">Client-facing engineering portal</p><p>A client-facing experience within Orbit’s role-based project ecosystem.</p><div class="project-facts"><p><strong>My Role</strong>Frontend development for the client-facing portal.</p><p><strong>Core Technologies</strong>Orbit ecosystem: Vue 3 · TypeScript · Pinia · SCSS · REST APIs. Shared system stack; not a separate portal-stack claim.</p><NuxtLink to="/projects/orbit-system" class="line-link">View Orbit Case Study</NuxtLink></div></div></section>
    <section id="other-work" class="other-work paper chapter">
      <div class="container">
        <div class="section-head"><h2 class="display display-md">Other Projects</h2><p>Commerce flows and adjacent product work.</p></div>
        <div class="other-list">
          <article v-for="item in secondary" :key="item.title" class="other-row">
            <div><h3 class="display">{{ item.title }}</h3><p class="project-type">{{ item.category }}</p></div>
            <div><p>{{ item.detail }}</p><p class="secondary-fact"><strong>My Role</strong>{{ item.role }}</p><p class="secondary-fact"><strong>Core Technologies</strong>{{ item.technology }}</p></div>
            <a v-if="item.link" :href="item.link" target="_blank" rel="noopener noreferrer" class="line-link">View Project <ArrowIcon /></a>
            <div v-else class="unavailable-action"><p>Live preview unavailable.</p><a href="mailto:mohabmohamedd772@gmail.com?subject=Alkhalil%20Traveling%20project%20details" class="line-link">Request Project Details <ArrowIcon /></a></div>
          </article>
        </div>
      </div>
    </section>

    <section class="experiments chapter-tight">
      <div class="container experiments-inner"><div><h2 class="display display-md">Smaller Projects</h2><p>Space to explore different product patterns and stacks.</p></div><div v-for="project in experiments" :key="project.title" class="experiment-item"><h3 class="display">{{ project.title }}</h3><p class="project-type">{{ project.subtitle }}</p><p>{{ project.detail }}</p><p class="secondary-fact"><strong>My Role</strong>{{ project.role }}</p><p class="secondary-fact"><strong>Core Technologies</strong>{{ project.technology }}</p><a v-if="project.link" :href="project.link" target="_blank" rel="noopener noreferrer" class="line-link">View Project <ArrowIcon /></a></div></div>
    </section>
  </main>
</template>

<style scoped>
.page-label { color: var(--oxide-on-paper); font-weight: 700; }.project-features { margin-bottom: 2rem; }.project-features h3 { margin-bottom: 1rem; }.project-features ul { display: grid; grid-template-columns: 1fr 1fr; gap: .75rem 2rem; }.project-features li { list-style: disc; margin-left: 1.2rem; }@media(max-width:600px) { .project-features ul { grid-template-columns: 1fr; } }
.portal-feature h2 { margin-bottom: 1rem; }
.portal-type { font-weight: 700; margin-bottom: .5rem; }
.portal-feature .project-facts { margin-top: 2rem; margin-bottom: 0; }
.project-facts { display: grid; grid-template-columns: 1fr 1fr auto; gap: 2rem; margin-bottom: 2rem; align-items: end; }
.project-facts strong { display: block; margin-bottom: .5rem; }
.project-facts p { max-width: 55ch; }
@media(max-width:700px) { .project-facts { grid-template-columns: 1fr; gap: 1rem; } }

.project-directory { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 2rem; margin-top: 3rem; }
.project-directory a { display: flex; flex-direction: column; gap: .4rem; padding-top: 1rem; border-top: 1px solid var(--line-light); }
.project-directory strong { font-size: 1.2rem; }
.project-directory span { color: var(--text-on-paper); font-size: .9rem; }
.project-directory a:hover { color: var(--oxide-on-paper); }
@media (max-width: 600px) { .project-directory { gap: 1rem; } .project-directory span { display: none; } }
.project-intro { padding-block: 1.4rem 6rem; }
.project-intro-grid { display: grid; grid-template-columns: 1.25fr .6fr; gap: 8vw; align-items: end; padding-top: 1.5rem; }
.project-intro h1 { max-width: 16ch; }
.project-intro p { max-width: 37ch; }
.major-project { padding-block: clamp(5rem, 8vw, 9rem); }
.major-0 { --media-caption: var(--text-muted); background: var(--ink); color: var(--paper); }
.major-1 { background: var(--paper-soft); color: var(--ink); }
.major-2 { --focus: var(--oxide-on-paper); background: var(--sage); color: var(--ink); }
.major-header { display: flex; justify-content: space-between; align-items: end; gap: 2rem; margin-bottom: 3rem; }
.major-header h2 { margin-top: .7rem; max-width: 14ch; }
.major-header > p { max-width: 28ch; font-size: 1.08rem; }
.major-header > p span { display: block; margin-top: .7rem; opacity: .65; }
.major-index { color: var(--oxide-light); font-size: .85rem; }
.major-1 .major-index, .major-2 .major-index { color: #9b452e; }
.major-foot { display: flex; align-items: end; justify-content: space-between; gap: 3rem; margin-top: 1.2rem; }
.major-foot p { max-width: 70ch; }
.major-foot .button { flex: none; }
.major-0 .button:hover { background: var(--paper); color: var(--ink); }
.other-list { border-top: 1px solid var(--line-light); }
.other-row { display: grid; grid-template-columns: .8fr 1.2fr .55fr; align-items: center; gap: 2rem; min-height: 120px; border-bottom: 1px solid var(--line-light); padding-block: 1.5rem; }

.other-row h3 { font-size: clamp(1.7rem, 2.5vw, 2.7rem); }
.other-row span { max-width: 38ch; }
.project-type { margin-top: .6rem; font-size: 1rem; }
.secondary-fact { margin-top: 1rem; }
.secondary-fact strong { display: block; margin-bottom: .3rem; }
.unavailable-action p { margin-bottom: .6rem; color: var(--text-on-paper); }
.other-row > *, .experiment-item { min-width: 0; }
.experiment-item h3 { font-size: 2rem; }
.experiment-item .line-link { margin-top: 1.5rem; }
.other-row b { font-weight: 400; font-size: 1.4rem; }
.experiments { background: var(--ink-soft); }
.experiments-inner { display: flex; justify-content: space-between; gap: 4rem; }
.experiments h2 { max-width: 12ch; }
.experiments p { margin-top: 1rem; color: var(--text-muted); }
.experiment-item { align-self: end; border-top: 1px solid var(--line-dark); padding-top: 1rem; max-width: 52ch; }
.experiment-item .mono { color: var(--text-muted); font-size: .7rem; }
.experiment-item .line-link { display: flex; }
@media (max-width: 900px) { .project-intro-grid { grid-template-columns: 1fr; gap: 2rem; } .major-header, .major-foot { display: block; } .major-header > p { margin-top: 1.4rem; } .major-foot .button { margin-top: 1.5rem; } .other-row { grid-template-columns: .7fr 1fr; gap: 1.5rem; } .other-row > :last-child { grid-column: 2; } .experiments-inner { display: block; } .experiment-item { margin-top: 3rem; } }
@media (max-width: 600px) { .other-row { grid-template-columns: minmax(0, 1fr); } .other-row > :last-child { grid-column: 1; } .major-header h2 { font-size: 2.7rem; } }
@media (min-width: 700px) and (max-width: 1100px) { .major-header { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 3rem; } .major-header h2 { font-size: 3rem; } }
@media (max-width: 599px) { .project-intro { padding-bottom: 2.5rem; } .project-intro-grid { padding-top: 2.5rem; } .project-intro h1 { font-size: 2.7rem; } .major-project { padding-block: 3rem; } .major-header { margin-bottom: 1.5rem; } .major-header > p span { margin-top: .5rem; opacity: 1; } }
</style>
