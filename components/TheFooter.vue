<script setup lang="ts">
const route = useRoute()
</script>
<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-top"><span class="mono">MOHAB MOHAMED / FRONTEND DEVELOPER</span><span class="mono">MANSOURA, EGYPT</span></div>
      <div v-if="route.path !== '/' && route.path !== '/contact' && route.path !== '/cv'" class="footer-statement">
        <p class="display">Mohab Mohamed<br><em>Frontend Developer</em></p>
        <a href="mailto:mohabmohamedd772@gmail.com" aria-label="Email Mohab Mohamed">Contact Me <ArrowIcon /></a>
      </div>
      <div class="footer-bottom">
        <a class="footer-email" href="mailto:mohabmohamedd772@gmail.com">mohabmohamedd772@gmail.com</a>
        <nav aria-label="Footer navigation"><NuxtLink to="/projects">Projects</NuxtLink><NuxtLink to="/about">About</NuxtLink><NuxtLink to="/cv">CV</NuxtLink><NuxtLink to="/contact">Contact</NuxtLink></nav>
        <div class="footer-social"><a href="https://github.com/MohabMohamed72" target="_blank" rel="noopener noreferrer">GitHub <ArrowIcon /></a><a href="https://linkedin.com/in/mohab-mohamed-a5121024b" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowIcon /></a></div>
      </div>
      <div class="footer-signoff"><span>© {{ new Date().getFullYear() }} Mohab Mohamed</span><span>Built with Nuxt · Designed for the details</span></div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer { background: var(--ink); color: var(--paper); padding-block: clamp(64px, 8vw, 120px) 24px; }
.footer-top { display: flex; justify-content: space-between; gap: 1rem; padding-top: 1rem; border-top: 1px solid var(--line-dark); color: var(--text-muted); font-size: .65rem; }
.footer-statement { padding-block: clamp(40px, 5vw, 72px); display: flex; align-items: end; justify-content: space-between; gap: 3rem; }
.footer-statement p { font-size: clamp(2.4rem, 4vw, 4rem); line-height: 1; }
.footer-statement em { color: var(--oxide-light); font-weight: 500; }
.footer-statement a { display: flex; flex: none; align-items: center; justify-content: space-between; gap: 2rem; min-width: 220px; border-bottom: 1px solid var(--lime); padding-bottom: .7rem; color: var(--lime); font-weight: 700; }
.footer-bottom { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 2rem; padding-top: 1.3rem; border-top: 1px solid var(--line-dark); }
.footer-email { font-size: clamp(.9rem, 1.3vw, 1.25rem); overflow-wrap: anywhere; }
.footer-bottom nav, .footer-social { display: flex; flex-direction: column; gap: .5rem; font-size: .88rem; }
.footer-bottom a:hover { color: var(--lime); }
.footer-signoff { display: flex; justify-content: space-between; gap: 1rem; margin-top: 3rem; color: var(--text-muted); font: 400 .8rem var(--font-body); }
@media (max-width: 800px) { .footer-statement { display: block; } .footer-statement a { margin-top: 2.5rem; max-width: 280px; } .footer-bottom { grid-template-columns: 1fr 1fr; } .footer-email { grid-column: 1/-1; } }
@media (max-width: 500px) { .footer-top { font-size: .7rem; } .footer-signoff { display: flex; flex-direction: column; gap: .3rem; } .footer-bottom a { display: flex; align-items: center; min-height: 44px; } }
</style>
