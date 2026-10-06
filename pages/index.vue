<script setup lang="ts">
useHead({ title:'Mohab Mohamed — Frontend Developer' })
const profile = useProfessionalProfile()
const revealObservers = new WeakMap<HTMLElement, IntersectionObserver>()
const vHomeReveal = {
 mounted(element:HTMLElement) {
  if (window.matchMedia('(prefers-reduced-motion:reduce)').matches || !('IntersectionObserver' in window)) return
  const observer = new IntersectionObserver(entries => {
   if (entries.some(entry => entry.isIntersecting)) { element.classList.add('home-entered'); observer.disconnect() }
  }, {threshold:.08})
  revealObservers.set(element,observer)
  observer.observe(element)
 },
 unmounted(element:HTMLElement) { revealObservers.get(element)?.disconnect(); revealObservers.delete(element) },
}
const stack = [
 {name:'Vue 3',kind:'Frontend Framework',size:'large'}, {name:'TypeScript',kind:'Language',size:'large'},
 {name:'Nuxt 3',kind:'Vue Application Framework',size:'large'}, {name:'React',kind:'UI Library',size:'medium'},
 {name:'Pinia',kind:'State Management',size:'small'}, {name:'Angular',kind:'Frontend Framework',size:'medium'},
 {name:'Tailwind CSS',kind:'Styling',size:'small'}, {name:'REST APIs',kind:'Data Integration',size:'small'},
]
const expertise = [
 {title:'Complex Dashboards',description:'Data-heavy interfaces, operational reporting, permissions, and live status updates.'},
 {title:'Business Systems',description:'Engineering ERP workflows that connect clients, teams, documents, and financial operations.'},
 {title:'Education Platforms',description:'Multi-tenant learning experiences with protected content, assessments, payments, and progress.'},
 {title:'E-Commerce Experiences',description:'Product discovery, branded storefronts, and mobile-responsive checkout interfaces.'},
 {title:'Responsive Web Applications',description:'Accessible Arabic / English interfaces, reusable components, and maintainable frontend modules.'},
]
</script>
<template>
  <main class="home-page">
    <HomeHero />
    <HomeFeaturedProjects />
    <section v-home-reveal class="selected-stack" aria-labelledby="stack-title"><div class="container">
      <header class="stack-heading"><div><p class="mono">02 / Stack</p><h2 id="stack-title" class="display">Selected Stack</h2></div><p>The tools behind the interfaces.<br>The architecture connects them.</p></header>
      <ul class="stack-composition"><li v-for="item in stack" :key="item.name" :class="item.size"><span class="display">{{ item.name }}</span><span class="stack-kind">{{ item.kind }}</span></li></ul>
      <NuxtLink to="/skills" class="line-link">All Technical Skills <ArrowIcon /></NuxtLink>
    </div></section>
    <section v-home-reveal class="expertise paper" aria-labelledby="expertise-title"><div class="container">
      <header class="expertise-heading"><p class="mono">03 / Expertise</p><h2 id="expertise-title" class="display">What I Build</h2></header>
      <ol class="expertise-list"><li v-for="(item,index) in expertise" :key="item.title"><span class="expertise-number mono">{{ String(index+1).padStart(2,'0') }}</span><h3 class="display">{{ item.title }}</h3><p>{{ item.description }}</p><ArrowIcon aria-hidden="true" /></li></ol>
      <div class="human-note"><p class="display">I care about interfaces that are <span>fast, clear, maintainable,</span> and genuinely useful.</p><div><h3>Work Experience</h3><ul><li v-for="job in profile.experienceEntries" :key="job.title"><strong>{{ job.title }}</strong><span>{{ job.period }}</span></li></ul><NuxtLink to="/experience" class="line-link">View Experience <ArrowIcon /></NuxtLink></div></div>
    </div></section>
    <section class="home-contact" aria-labelledby="home-contact-title"><div class="container">
      <div class="contact-heading"><p class="mono">04 / Contact</p><h2 id="home-contact-title" class="display">Let's build<br><span>something useful.</span></h2><p>Have a project or frontend opportunity?</p></div>
      <div class="contact-actions"><a class="contact-email" href="mailto:mohabmohamedd772@gmail.com"><span>mohabmohamedd772@gmail.com</span><ArrowIcon /></a><div><a href="https://wa.me/201007599123" target="_blank" rel="noopener noreferrer" class="line-link">WhatsApp <ArrowIcon /></a><NuxtLink to="/contact" class="line-link">Contact Form <ArrowIcon /></NuxtLink></div></div>
    </div></section>
  </main>
</template>
<style scoped>
.home-page { --home-motion:600ms; }
@media(prefers-reduced-motion:no-preference) { .home-entered > .container { animation:home-arrive var(--home-motion) var(--ease) both; }@keyframes home-arrive { from { opacity:.65;transform:translateY(24px); }to { opacity:1;transform:none; } } }
.selected-stack { background:var(--ink-soft);color:var(--paper);padding-block:clamp(56px,8vw,112px); }
.stack-heading { display:flex;justify-content:space-between;align-items:end;gap:32px; }.stack-heading .mono,.expertise-heading .mono { font-size:.75rem;margin-bottom:16px; }.stack-heading .mono { color:var(--oxide-light); }.stack-heading h2,.expertise-heading h2 { font-size:clamp(2.7rem,4.4vw,4.5rem); }.stack-heading > p { max-width:30ch;color:var(--text-muted); }
.stack-composition { display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:32px 24px;margin-block:48px; }.stack-composition li { display:flex;flex-direction:column;gap:10px;border-bottom:1px solid var(--line-dark);padding-bottom:16px;position:relative; }.stack-composition li::after { content:'';position:absolute;bottom:-1px;left:0;width:100%;height:1px;background:var(--oxide-light);transform:scaleX(0);transform-origin:left;transition:transform var(--home-motion) var(--ease); }.stack-composition li:hover::after { transform:scaleX(1); }.stack-composition li > .display { transition:color var(--home-motion) var(--ease),transform var(--home-motion) var(--ease); }.stack-composition li:hover > .display { color:var(--oxide-light);transform:translateX(4px); }.stack-kind { color:var(--text-muted);font-size:.9rem; }
.stack-composition .large .display { font-size:clamp(2.5rem,5vw,5rem); }.stack-composition .medium .display { font-size:clamp(2rem,3.6vw,3.6rem); }.stack-composition .small .display { font-size:clamp(1.6rem,2.8vw,2.8rem); }
.stack-composition li:nth-child(1) { grid-column:1/span 4; }.stack-composition li:nth-child(2) { grid-column:6/span 7; }.stack-composition li:nth-child(3) { grid-column:3/span 5; }.stack-composition li:nth-child(4) { grid-column:9/span 4; }.stack-composition li:nth-child(5) { grid-column:1/span 3; }.stack-composition li:nth-child(6) { grid-column:5/span 5; }.stack-composition li:nth-child(7) { grid-column:3/span 5; }.stack-composition li:nth-child(8) { grid-column:9/span 4; }
.expertise { padding-block:clamp(56px,8vw,112px); }.expertise-heading .mono { color:var(--oxide-on-paper); }.expertise-list { margin-top:40px;border-top:1px solid var(--ink); }.expertise-list li { display:grid;grid-template-columns:48px 1fr .6fr 24px;gap:24px;align-items:center;padding-block:28px;border-bottom:1px solid var(--line-light); }.expertise-number { font-size:.75rem;color:var(--oxide-on-paper); }.expertise-list h3 { font-size:clamp(1.8rem,3vw,3rem); }.expertise-list p { max-width:43ch;font-size:.95rem;color:var(--text-on-paper); }.expertise-list svg { width:24px;height:24px;color:var(--oxide-on-paper); }.expertise-list h3 { transition:transform var(--home-motion) var(--ease),color var(--home-motion) var(--ease); }.expertise-list li:hover h3 { transform:translateX(6px);color:var(--oxide-on-paper); }
.human-note { display:grid;grid-template-columns:1fr .65fr;gap:clamp(32px,8vw,112px);padding-top:clamp(64px,9vw,128px); }.human-note > p { font-size:clamp(2rem,3.3vw,3.4rem);line-height:1.12;max-width:22ch; }.human-note > p span { color:var(--oxide-on-paper); }.human-note h3 { font-size:1.2rem;margin-bottom:24px; }.human-note li { padding-block:12px;border-top:1px solid var(--line-light); }.human-note li span { display:block;font-size:.85rem;color:var(--text-on-paper);margin-top:4px; }.human-note .line-link { margin-top:12px; }
.home-contact { background:var(--ink);color:var(--paper);padding-block:clamp(56px,8vw,112px); }.contact-heading .mono { color:var(--oxide-light);font-size:.75rem;margin-bottom:24px; }.contact-heading h2 { font-size:clamp(3rem,6vw,6rem);max-width:24ch; }.contact-heading h2 span { color:var(--oxide-light); }.contact-heading > p:last-child { font-size:1.15rem;color:var(--text-muted);margin-top:32px; }.contact-actions { margin-top:40px; }.contact-email { display:flex;gap:24px;justify-content:space-between;align-items:center;border-bottom:1px solid var(--oxide-light);padding-block:24px;font-size:clamp(1.1rem,2.8vw,2.7rem); }.contact-email span { overflow-wrap:anywhere; }.contact-email svg { width:32px;height:32px;flex:none;transition:transform var(--home-motion) var(--ease); }.contact-email:hover { color:var(--oxide-light); }.contact-email:hover svg { transform:translate(4px,-4px); }.contact-actions > div { display:flex;flex-wrap:wrap;gap:24px;margin-top:20px; }
@media(max-width:900px) { .expertise-list li { grid-template-columns:32px 1fr 24px;gap:16px; }.expertise-list h3 { grid-column:2; }.expertise-list p { grid-column:2; }.expertise-list svg { grid-column:3;grid-row:1; }.human-note { grid-template-columns:1fr 1fr;gap:40px; } }
@media(max-width:600px) { .stack-heading { display:block; }.stack-heading > p { margin-top:24px; }.stack-composition { grid-template-columns:1fr 1fr;gap:24px 16px;margin-block:32px; }.stack-composition li:nth-child(n) { grid-column:auto; }.stack-composition .large .display { font-size:2.4rem; }.stack-composition .medium .display { font-size:2rem; }.stack-composition .small .display { font-size:1.7rem; }.stack-composition li:nth-child(2) { grid-column:1/-1; }.stack-kind { font-size:.85rem; }.expertise-list { margin-top:32px; }.expertise-list li { padding-block:24px; }.expertise-list h3 { font-size:1.9rem; }.human-note { grid-template-columns:1fr;gap:40px; }.human-note > p { font-size:2.15rem;max-width:22ch; }.contact-heading h2 { font-size:2.8rem; }.contact-email { gap:12px;font-size:1.25rem; }.contact-email svg { width:20px;height:20px; }.contact-actions > div { gap:24px; } }
@media(prefers-reduced-motion:reduce) { .stack-composition li:hover > .display,.expertise-list li:hover h3,.contact-email:hover svg { transform:none; } }
</style>
