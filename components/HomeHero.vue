<script setup lang="ts">
const technologies = ['Vue 3', 'Nuxt 3', 'React', 'Angular', 'TypeScript']
const hero = ref<HTMLElement | null>(null)
const active = ref(false)
let frame = 0
let target = { x:0, y:0 }, current = { x:0, y:0 }
let motion: MediaQueryList | undefined
const coordinates = ref({ x:0, y:0 })
function stop() { active.value = false; cancelAnimationFrame(frame); frame = 0 }
function draw() {
  current.x += (target.x - current.x) * .2
  current.y += (target.y - current.y) * .2
  hero.value?.style.setProperty('--guide-x', current.x + 'px')
  hero.value?.style.setProperty('--guide-y', current.y + 'px')
  if (Math.abs(target.x-current.x)+Math.abs(target.y-current.y) > .5) frame = requestAnimationFrame(draw)
  else frame = 0
}
function move(event:PointerEvent) {
  if (event.pointerType !== 'mouse' || motion?.matches || !window.matchMedia('(hover:hover) and (pointer:fine)').matches) return
  const rect = hero.value?.getBoundingClientRect()
  if (!rect) return
  target = { x:event.clientX-rect.left, y:event.clientY-rect.top }
  coordinates.value = { x:Math.round(target.x), y:Math.round(target.y) }
  if (!active.value) current = {...target}
  active.value = true
  if (!frame) frame = requestAnimationFrame(draw)
}
function visibility() { if (document.hidden) stop() }
onMounted(() => { motion=window.matchMedia('(prefers-reduced-motion:reduce)'); motion.addEventListener('change',stop); window.addEventListener('blur',stop); document.addEventListener('visibilitychange',visibility) })
onUnmounted(() => { stop(); motion?.removeEventListener('change',stop); window.removeEventListener('blur',stop); document.removeEventListener('visibilitychange',visibility) })
</script>
<template>
  <section ref="hero" class="hero paper" :class="{ 'guides-active':active }" aria-labelledby="hero-title" @pointermove="move" @pointerleave="stop" @pointercancel="stop">
    <div class="hero-gridlines" aria-hidden="true"><span></span><span></span><span></span></div>
    <div class="crosshair" aria-hidden="true"><span class="guide guide-x"></span><span class="guide guide-y"></span><span class="guide-coordinate mono">X {{ coordinates.x }} / Y {{ coordinates.y }}</span></div>
    <div class="container hero-content">
      <div class="hero-meta mono"><span>Portfolio / {{ new Date().getFullYear() }}</span><span>Web Interface Engineering</span><span>Mansoura, Egypt</span></div>
      <div class="name-layout">
        <h1 id="hero-title" aria-label="Mohab Mohamed" class="display hero-name"><span>MOHAB<span class="name-registration" aria-hidden="true">01</span></span><span class="surname">MOHAMED<span class="name-stop">.</span></span></h1>
        <nav class="tech-index" aria-label="Core frontend technologies"><ol><li v-for="(technology,index) in technologies" :key="technology"><span class="mono">{{ String(index+1).padStart(2,'0') }}</span><span>{{ technology }}</span></li></ol><NuxtLink to="/skills">All Skills <ArrowIcon /></NuxtLink></nav>
      </div>
      <div class="hero-introduction">
        <p class="hero-role display">Frontend<br><span>Developer.</span></p>
        <div class="hero-copy"><p>I build scalable web applications<br class="desktop-break"> for complex products and digital platforms.</p><p class="technology-line">Vue 3 · Nuxt 3 · React · Angular · TypeScript</p><div class="hero-actions"><NuxtLink to="/projects" class="button button-dark primary-project">View Projects <ArrowIcon /></NuxtLink><CvDownload class="hero-download" /></div><div class="hero-social"><NuxtLink to="/contact">Contact</NuxtLink><a href="https://github.com/MohabMohamed72" target="_blank" rel="noopener noreferrer">GitHub</a><a href="https://linkedin.com/in/mohab-mohamed-a5121024b" target="_blank" rel="noopener noreferrer">LinkedIn</a></div></div>
        <div class="availability"><p><span class="availability-dot" aria-hidden="true"></span>Available for opportunities</p><span>Frontend Development</span><span>Mansoura, Egypt · Arabic / English</span></div>
      </div>
      <div class="hero-bottom"><dl class="hero-stats"><div><dt>Years Experience</dt><dd>02+</dd></div><div><dt>Selected Projects</dt><dd>07+</dd></div><div><dt>Core Technologies</dt><dd>05</dd></div><div><dt>Mansoura, Egypt</dt><dd>EG</dd></div></dl><a class="scroll-cue" href="#featured-projects"><span class="mono">Scroll / Selected Projects</span><span class="scroll-line" aria-hidden="true"></span><ArrowIcon direction="down" /></a></div>
    </div>
  </section>
</template>
<style scoped>
.hero { position:relative; isolation:isolate; min-height:calc(90svh - 80px); display:flex; padding-block:28px 52px; }
.hero-content { position:relative; z-index:2; display:flex; flex-direction:column; justify-content:space-between; gap:16px; }
.hero-meta { display:flex; justify-content:space-between; gap:16px; font-size:.75rem; color:var(--text-on-paper); }
.hero-meta span:first-child { color:var(--oxide-on-paper); }
.name-layout { display:grid; grid-template-columns:repeat(12,minmax(0,1fr)); gap:24px; align-items:start; }
.hero-name { grid-column:1/span 9; font-size:clamp(5rem,10.5vw,10rem); line-height:.82; padding-block:12px; font-stretch:78%; letter-spacing:-.035em; }
.hero-name > span { display:block; position:relative; width:fit-content; max-width:100%; }
.hero-name .surname { margin-left:14%; margin-top:12px; }
.name-stop { color:var(--oxide-on-paper); }
.name-registration { position:absolute; right:-2rem; top:0; color:var(--oxide-on-paper); font:400 .75rem var(--font-data); letter-spacing:0; }
.tech-index { grid-column:11/span 2; align-self:center; }
.tech-index li { display:flex; align-items:center; gap:16px; padding-block:12px; border-top:1px solid var(--line-light); font-weight:700; }
.tech-index li .mono { font-size:.7rem; color:var(--oxide-on-paper); font-weight:400; }
.tech-index a { display:flex; align-items:center; justify-content:space-between; min-height:44px; font-size:.85rem; font-weight:700; border-top:1px solid var(--line-light); }
.tech-index a svg { width:16px;height:16px; }
.tech-index a:hover { color:var(--oxide-on-paper); }
.hero-introduction { display:grid; grid-template-columns:repeat(12,minmax(0,1fr)); gap:24px; align-items:start; }
.hero-role { grid-column:1/span 4; font-size:clamp(2rem,3.5vw,3.7rem); line-height:1; }.hero-role span { color:var(--oxide-on-paper); }
.hero-copy { grid-column:5/span 5; }.hero-copy > p:first-child { font-size:clamp(1rem,1.4vw,1.3rem); max-width:46ch; }.technology-line { font-size:.9rem; font-weight:700; margin-top:12px; }
.hero-actions { display:flex; flex-wrap:wrap; gap:12px; margin-top:20px; }.primary-project { gap:24px; }.primary-project:hover { background:var(--paper); color:var(--ink); }
.hero-actions :deep(svg) { transition:transform 450ms var(--ease); }.primary-project:hover :deep(svg) { transform:translate(3px,-3px); }
.hero-download { background:linear-gradient(var(--ink),var(--ink)) no-repeat; background-size:0 100%; transition:background-size 450ms var(--ease),color 450ms var(--ease); }.hero-download:hover { background-size:100% 100%; color:var(--paper); }
.hero-social { display:flex; flex-wrap:wrap; gap:24px; margin-top:12px; }.hero-social a { font-size:.9rem; min-height:44px; display:flex; align-items:center; text-decoration:underline; }.hero-social a:hover { color:var(--oxide-on-paper); }
.availability { grid-column:10/span 3; padding-top:4px; }.availability p { font-size:.78rem; font-weight:700; text-transform:uppercase; line-height:1.5; }.availability > span { display:block; font-size:.85rem; margin-top:8px; color:var(--text-on-paper); }.availability-dot { display:inline-block; width:6px;height:6px; background:var(--oxide-on-paper); border-radius:50%; margin-right:8px; }
.hero-bottom { display:grid; grid-template-columns:1fr 230px; gap:32px; align-items:end; }
.hero-stats { margin:0; display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); border-top:1px solid var(--line-light); }
.hero-stats > div { display:flex; flex-direction:column; gap:8px; padding:20px 24px 0; border-inline-start:1px solid var(--line-light); position:relative; }.hero-stats > div:first-child { padding-left:0;border-inline-start:0; }
.hero-stats > div::before { content:''; position:absolute; top:-1px; left:0; width:100%;height:2px;background:var(--oxide-on-paper); transform:scaleX(0);transform-origin:left;transition:transform 450ms var(--ease); }.hero-stats > div:hover::before { transform:scaleX(1); }
.hero-stats dd { order:-1; margin:0; font:700 clamp(1.7rem,3vw,3rem)/1 var(--font-display); font-variant-numeric:tabular-nums; }.hero-stats dt { max-width:12ch;font-size:.75rem;color:var(--text-on-paper); }
.scroll-cue { display:flex;align-items:center;gap:16px;min-height:44px; }.scroll-cue .mono { font-size:.7rem;max-width:10ch; }.scroll-line { width:1px;height:48px;background:var(--line-light);position:relative; }.scroll-line::after { content:'';position:absolute;top:0;left:0;width:1px;height:18px;background:var(--oxide-on-paper); }.scroll-cue svg { width:20px;height:20px; }
.hero-gridlines { position:absolute;inset:0 var(--gutter);z-index:-1;pointer-events:none; }.hero-gridlines span { position:absolute;top:0;bottom:0;width:1px;background:var(--ink);opacity:.045; }.hero-gridlines span:nth-child(1) { left:25%; }.hero-gridlines span:nth-child(2) { left:58.33%; }.hero-gridlines span:nth-child(3) { left:83.33%; }
.crosshair { position:absolute;inset:0;pointer-events:none;z-index:3;opacity:0;transition:opacity 400ms var(--ease);overflow:hidden; }.guides-active .crosshair { opacity:1; }.guide { position:absolute;top:0;left:0;background:var(--oxide-on-paper);opacity:.2; }.guide-x { height:100%;width:1px;transform:translateX(var(--guide-x,0)); }.guide-y { height:1px;width:100%;transform:translateY(var(--guide-y,0)); }.guide-coordinate { position:absolute;left:clamp(12px,calc(var(--guide-x,0px) + 12px),calc(100% - 160px));top:clamp(12px,calc(var(--guide-y,0px) + 12px),calc(100% - 48px));color:var(--oxide-on-paper);font-size:.65rem;background:var(--paper);padding:4px 6px; }
@media(prefers-reduced-motion:no-preference) { .name-layout { animation:name-arrive 650ms var(--ease) both; }.availability-dot { animation:status-in 650ms var(--ease) 300ms both; }@keyframes name-arrive { from { opacity:.5;transform:translateY(24px); }to { opacity:1;transform:none; } }@keyframes status-in { from { opacity:.3; }to { opacity:1; } }.scroll-cue:hover .scroll-line::after { transform:translateY(24px);transition:transform 600ms var(--ease); } }
@media(min-width:1600px) { .hero-name { font-size:10rem; }.hero-content { justify-content:space-between;gap:24px; } }
@media(max-width:1100px) { .hero-name { font-size:clamp(4.5rem,10vw,8rem);grid-column:1/span 9; }.tech-index { grid-column:10/span 3; }.hero-role { grid-column:1/span 4; }.hero-copy { grid-column:5/span 8; }.availability { grid-column:1/-1; display:flex;gap:16px;align-items:center; }.availability > span { margin:0; }.hero-bottom { grid-template-columns:1fr 190px; }.hero-meta span:nth-child(2) { display:none; } }
@media(max-width:767px) { .hero { min-height:0;padding-top:24px;padding-bottom:40px; }.hero-content { gap:28px; }.name-layout { display:contents; }.hero-name { order:1;font-size:clamp(3.5rem,15vw,6.5rem);padding:0; }.hero-name .surname { margin-left:0;margin-top:8px; }.name-registration { display:none; }.hero-meta { order:0; }.hero-meta span:last-child { display:none; }.hero-introduction { order:2;display:flex;flex-direction:column;gap:16px; }.hero-role { font-size:1.5rem;font-family:var(--font-body);letter-spacing:0; }.hero-role br { display:none; }.hero-role span { margin-left:.25em; }.hero-copy > p:first-child { font-size:1.1rem; }.desktop-break { display:none; }.availability { display:block; }.availability > span { margin-top:4px; }.availability > span:last-child { display:none; }.tech-index { order:3; }.tech-index ol { display:grid;grid-template-columns:1fr 1fr;gap:0 24px; }.tech-index li { padding-block:10px; }.tech-index a { justify-content:start;gap:16px; }.hero-bottom { order:4;display:block; }.hero-stats > div { padding-inline:12px; }.hero-stats dd { font-size:1.8rem; }.hero-stats dt { font-size:.75rem; }.scroll-cue { margin-top:24px;justify-content:end; }.scroll-line { height:28px; }.hero-gridlines span:nth-child(2),.hero-gridlines span:nth-child(3) { display:none; } }
@media(max-width:430px) { .hero-stats { grid-template-columns:1fr 1fr;gap:20px 0; }.hero-stats > div:nth-child(3) { padding-left:0;border:0; }.hero-stats dt { max-width:none; } }
@media(pointer:coarse),(prefers-reduced-motion:reduce) { .crosshair { display:none; }.hero-gridlines { opacity:.5; } }
</style>
