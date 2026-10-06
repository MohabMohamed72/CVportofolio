<script setup lang="ts">
import type { CaseStudy } from '~/composables/useCaseStudies'
defineProps<{ study: CaseStudy; compact?: boolean; eager?: boolean }>()
</script>

<template>
  <figure class="project-media" :class="{ compact }">
    <img v-if="study.screenshot" class="project-screenshot" :src="study.screenshot" :alt="study.title + ' interface screenshot'" :loading="eager ? 'eager' : 'lazy'" :fetchpriority="eager ? 'high' : 'auto'" width="1600" height="1000" />
    <div v-else class="system-map" :class="study.slug">
      <div class="map-heading"><strong>{{ study.category }}</strong><span>Product relationships · schematic</span></div>
      <div v-if="study.slug === 'education-system'" class="tenant-map">
        <div class="tenant-origin"><strong class="display">One platform.<br>Each teacher’s identity.</strong><p>A teacher’s domain selects their brand and learning experience.</p></div>
        <div class="tenant-branches"><div><h3>Identity & discovery</h3><p>Brand · stages · courses · books<br>Blog · FAQs · contact</p></div><div><h3>Protected learning</h3><p>Multimedia · live sessions<br>Watermark & access controls</p></div><div><h3>Student continuity</h3><p>Payments · homework · timed exams<br>Favorites · progress</p></div></div>
      </div>
      <div v-else-if="study.slug === 'orbit-system'" class="orbit-map">
        <h3 class="display">A project moves.<br>The teams stay connected.</h3>
        <ol class="lifecycle"><li v-for="step in study.workflow" :key="step">{{ step }}</li></ol>
        <div class="operations"><span>Client & project</span><span>People & daily work</span><span>Finance & documents</span><span>Chat & live notifications</span></div>
      </div>
      <div v-else class="safety-map">
        <h3 class="display">Reported is not resolved.</h3>
        <ol><li v-for="(step, i) in study.workflow" :key="step"><span>{{ String(i + 1).padStart(2, '0') }}</span><strong>{{ step }}</strong><small>{{ ['Observation or incident', 'Evidence & witnesses', 'Five Whys analysis', 'Assigned actions & due dates', 'Action verification', 'Lessons learned & closure'][i] }}</small></li></ol>
      </div>
      <p class="map-stack">{{ study.technology.slice(0, 3).join(' · ') }}</p>
    </div>
    <figcaption v-if="!study.screenshot" class="media-caption">Verified product scope, not an interface screenshot. Actual product captures are pending.</figcaption>
  </figure>
</template>

<style scoped>
.project-media { min-width: 0; }
.project-screenshot { width: 100%; aspect-ratio: 16 / 10; object-fit: contain; background: var(--ink-soft); }
.system-map { --focus: var(--lime); color: var(--paper); background: var(--ink-soft); padding: clamp(24px, 3vw, 48px); }
.map-heading { display: flex; justify-content: space-between; gap: 2rem; margin-bottom: 3rem; font-size: .9rem; }
.map-heading > span { color: var(--text-muted); font-size: .8rem; }
.system-map h3, .tenant-origin strong { font-size: clamp(2rem, 3.5vw, 3.6rem); max-width: 23ch; }
.tenant-map { display: grid; grid-template-columns: 1fr 1fr; gap: 6vw; }
.tenant-origin p { margin-top: 1.5rem; max-width: 35ch; color: var(--text-muted); }
.tenant-branches { display: grid; gap: 1.5rem; }
.tenant-branches > div { border-top: 1px solid var(--line-dark); padding-top: .8rem; }
.system-map .tenant-branches h3, .compact .system-map .tenant-branches h3 { font: 700 1.1rem var(--font-body); color: var(--lime); }
.tenant-branches p { margin-top: .5rem; color: var(--text-muted); }
.lifecycle { display: grid; grid-template-columns: repeat(6, 1fr); margin-top: 2.5rem; }
.lifecycle li { padding: 1rem .8rem 1rem 0; border-top: 1px solid var(--lime); font-size: 1rem; }
.operations { display: flex; flex-wrap: wrap; gap: 1rem 2rem; margin-top: 1rem; color: var(--text-muted); font-size: .95rem; }
.safety-map ol { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; margin-top: 2.5rem; }
.safety-map li { border-top: 1px solid var(--line-dark); padding-top: 1rem; display: grid; grid-template-columns: 2rem 1fr; gap: .4rem; }
.safety-map li > span { color: var(--lime); font: 500 .8rem var(--font-data); }
.safety-map small { grid-column: 2; color: var(--text-muted); font-size: .95rem; }
.map-stack { margin-top: 2.5rem; color: var(--text-muted); font-size: .85rem; }
.media-caption { margin-top: .7rem; color: var(--media-caption, var(--text-on-paper)); font-size: .85rem; line-height: 1.5; }
.compact .map-heading { margin-bottom: 1.5rem; }
.compact .system-map { padding: 24px; }
.compact .system-map h3, .compact .tenant-origin strong { font-size: clamp(1.8rem, 3vw, 2.8rem); }
@media (max-width: 1000px) { .lifecycle { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 600px) {
  .map-heading { display: block; margin-bottom: 2rem; } .map-heading > span { display: block; margin-top: .4rem; }
  .tenant-map { grid-template-columns: 1fr; gap: 2rem; }
  .tenant-branches { gap: 1.2rem; }
  .safety-map ol { grid-template-columns: 1fr 1fr; gap: 1.5rem 1rem; }
  .safety-map li { grid-template-columns: 1fr; } .safety-map small { grid-column: 1; }
  .lifecycle { grid-template-columns: 1fr 1fr; }
  .system-map h3, .tenant-origin strong { font-size: 2.1rem; }
}
</style>
