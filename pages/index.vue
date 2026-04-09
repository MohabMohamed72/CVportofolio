<template>
  <div>
    <section class="hero">
      <div class="container hero-content">
        <div class="hero-text">
          <div class="hero-badge">
            <span class="badge-dot" />
            <span>Available for opportunities</span>
          </div>
          <h1 class="hero-title">
            Hi, I'm <span class="gradient-text">Mohab Mohamed</span>
          </h1>
          <p class="hero-role">
            <span class="typing-prefix">I build </span>
            <span class="hero-typed gradient-text">{{ typedText }}<span class="cursor">|</span></span>
          </p>
          <p class="hero-desc">
            Frontend Developer crafting responsive, scalable web applications with
            Vue.js, React.js, Angular, Nuxt.js & TypeScript — powered by modern AI tools.
          </p>
          <div class="hero-actions">
            <NuxtLink to="/projects" class="btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
              View Projects
            </NuxtLink>
            <NuxtLink to="/contact" class="btn-outline">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Contact Me
            </NuxtLink>
          </div>
          <div class="hero-stats">
            <div class="stat">
              <span class="stat-num gradient-text">4+</span>
              <span class="stat-label">Projects Delivered</span>
            </div>
            <div class="stat-divider" />
            <div class="stat">
              <span class="stat-num gradient-text">1+</span>
              <span class="stat-label">Year Experience</span>
            </div>
            <div class="stat-divider" />
            <div class="stat">
              <span class="stat-num gradient-text">6+</span>
              <span class="stat-label">AI Tools Mastered</span>
            </div>
          </div>
        </div>

        <div class="hero-visual">
          <div class="code-window">
            <div class="code-header">
              <div class="code-dots">
                <span style="background:#ff5f57" />
                <span style="background:#febc2e" />
                <span style="background:#28c840" />
              </div>
              <span class="code-filename">mohab.ts</span>
            </div>
            <pre class="code-body"><code><span class="kw">const</span> <span class="fn">developer</span> = {
  <span class="key">name</span>: <span class="str">"Mohab Mohamed"</span>,
  <span class="key">role</span>: <span class="str">"Frontend Developer"</span>,
  <span class="key">frameworks</span>: [
    <span class="str">"Vue.js"</span>, <span class="str">"React"</span>,
    <span class="str">"Angular"</span>, <span class="str">"Nuxt"</span>
  ],
  <span class="key">aiTools</span>: [
    <span class="str">"Copilot"</span>, <span class="str">"Cursor"</span>,
    <span class="str">"ChatGPT"</span>, <span class="str">"Claude"</span>
  ],
  <span class="key">passion</span>: <span class="str">"Building the web"</span>,
  <span class="fn">code</span>: () => <span class="str">"pixel-perfect"</span> <span class="cmt">✨</span>
};</code></pre>
          </div>
          <div class="floating-badge badge-vue" style="animation-delay: 0s">Vue.js</div>
          <div class="floating-badge badge-react" style="animation-delay: 0.5s">React</div>
          <div class="floating-badge badge-ts" style="animation-delay: 1s">TypeScript</div>
        </div>
      </div>

      <div class="hero-scroll">
        <span>Scroll to explore</span>
        <div class="scroll-line" />
      </div>
    </section>

    <!-- Quick Overview -->
    <section class="section overview">
      <div class="container">
        <div class="overview-grid">
          <div class="overview-card" v-for="(item, i) in overviewCards" :key="i">
            <div class="oc-icon" :style="{ background: item.bg }">{{ item.icon }}</div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack Marquee -->
    <section class="marquee-section">
      <div class="marquee">
        <div class="marquee-track">
          <span v-for="(tech, i) in [...techList, ...techList]" :key="i" class="marquee-item">
            {{ tech }}
          </span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({ title: 'Home' })

const words = ['modern web apps', 'dashboard systems', 'responsive UIs', 'AI-powered features', 'scalable platforms']
const typedText = ref('')
const wordIndex = ref(0)
const charIndex = ref(0)
const isDeleting = ref(false)

onMounted(() => {
  const type = () => {
    const current = words[wordIndex.value]
    if (!isDeleting.value) {
      typedText.value = current.substring(0, charIndex.value + 1)
      charIndex.value++
      if (charIndex.value === current.length) {
        setTimeout(() => { isDeleting.value = true }, 1800)
      }
    } else {
      typedText.value = current.substring(0, charIndex.value - 1)
      charIndex.value--
      if (charIndex.value === 0) {
        isDeleting.value = false
        wordIndex.value = (wordIndex.value + 1) % words.length
      }
    }
    setTimeout(type, isDeleting.value ? 40 : 80)
  }
  type()
})

const overviewCards = [
  { icon: '⚡', title: 'Frontend Frameworks', desc: 'Vue.js, React, Angular, Nuxt.js, Next.js — building with the right tool for every project.', bg: 'rgba(66, 211, 146, 0.12)' },
  { icon: '🤖', title: 'AI-Powered Dev', desc: 'GitHub Copilot, Cursor AI, ChatGPT, Claude — leveraging AI to ship faster and cleaner.', bg: 'rgba(100, 126, 255, 0.12)' },
  { icon: '🎨', title: 'Pixel-Perfect UIs', desc: 'Tailwind CSS, SCSS, responsive design — translating Figma to flawless interfaces.', bg: 'rgba(245, 158, 11, 0.12)' },
  { icon: '🚀', title: 'Full-Stack Ready', desc: 'REST APIs, GraphQL, Node.js, state management — end-to-end feature delivery.', bg: 'rgba(239, 68, 68, 0.12)' },
]

const techList = ['Vue.js', 'React', 'Angular', 'Nuxt.js', 'TypeScript', 'Tailwind CSS', 'SCSS', 'Redux', 'Pinia', 'GraphQL', 'Git', 'Copilot', 'Cursor AI', 'ChatGPT', 'Figma', 'Vite', 'Jest', 'Cypress']
</script>

<style scoped>
/* ── Hero ── */
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding-top: 80px;
}
.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 18px;
  background: rgba(66, 211, 146, 0.08);
  border: 1px solid rgba(66, 211, 146, 0.2);
  border-radius: 50px;
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--primary);
  margin-bottom: 24px;
  animation: fadeUp 0.6s ease;
}
.badge-dot {
  width: 8px; height: 8px;
  background: var(--primary);
  border-radius: 50%;
  animation: pulse 2s infinite;
}
.hero-title {
  font-size: clamp(2.5rem, 5.5vw, 4rem);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 16px;
  animation: fadeUp 0.7s ease;
}
.hero-role {
  font-size: 1.3rem;
  font-weight: 500;
  margin-bottom: 20px;
  animation: fadeUp 0.8s ease;
  min-height: 2em;
}
.typing-prefix { color: var(--text-secondary); }
.hero-typed { font-weight: 700; }
.cursor {
  animation: pulse 1s infinite;
  font-weight: 300;
  -webkit-text-fill-color: var(--primary);
}
.hero-desc {
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.8;
  max-width: 500px;
  margin-bottom: 32px;
  animation: fadeUp 0.9s ease;
}
.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 48px;
  animation: fadeUp 1s ease;
}
.hero-stats {
  display: flex;
  align-items: center;
  gap: 28px;
  animation: fadeUp 1.1s ease;
}
.stat-num {
  font-size: 1.8rem;
  font-weight: 800;
  display: block;
}
.stat-label {
  font-size: 0.78rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 500;
}
.stat-divider {
  width: 1px;
  height: 40px;
  background: var(--border);
}

/* ── Code Window ── */
.hero-visual {
  position: relative;
  animation: fadeUp 1s ease;
}
.code-window {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-lg), var(--shadow-glow);
}
.code-header {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 18px;
  background: rgba(255,255,255,0.02);
  border-bottom: 1px solid var(--border);
}
.code-dots {
  display: flex;
  gap: 7px;
}
.code-dots span {
  width: 12px; height: 12px;
  border-radius: 50%;
}
.code-filename {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text-muted);
}
.code-body {
  padding: 24px;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  line-height: 1.9;
  overflow-x: auto;
}
.code-body .kw { color: #c792ea; }
.code-body .fn { color: #82aaff; }
.code-body .key { color: #89ddff; }
.code-body .str { color: #c3e88d; }
.code-body .cmt { color: #546e7a; }

.floating-badge {
  position: absolute;
  padding: 8px 18px;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 700;
  font-family: var(--font-mono);
  animation: float 3s ease-in-out infinite;
  border: 1px solid var(--border);
  backdrop-filter: blur(10px);
}
.badge-vue {
  top: -10px; right: 20px;
  background: rgba(66, 211, 146, 0.15);
  color: var(--primary);
  border-color: rgba(66, 211, 146, 0.3);
}
.badge-react {
  bottom: 30px; left: -20px;
  background: rgba(97, 219, 251, 0.15);
  color: #61dafb;
  border-color: rgba(97, 219, 251, 0.3);
}
.badge-ts {
  bottom: -10px; right: 40px;
  background: rgba(49, 120, 198, 0.15);
  color: #3178c6;
  border-color: rgba(49, 120, 198, 0.3);
}

.hero-scroll {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  animation: fadeIn 1.5s ease;
}
.hero-scroll span {
  font-size: 0.72rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.15em;
}
.scroll-line {
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, var(--primary), transparent);
  animation: pulse 2s infinite;
}

/* ── Overview ── */
.overview-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
.overview-card {
  padding: 32px 24px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  transition: var(--transition);
}
.overview-card:hover {
  border-color: var(--border-hover);
  transform: translateY(-4px);
  box-shadow: var(--shadow-glow);
}
.oc-icon {
  width: 52px; height: 52px;
  border-radius: var(--radius);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 18px;
}
.overview-card h3 {
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 8px;
}
.overview-card p {
  font-size: 0.88rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* ── Marquee ── */
.marquee-section {
  padding: 40px 0;
  overflow: hidden;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}
.marquee { overflow: hidden; }
.marquee-track {
  display: flex;
  gap: 48px;
  width: max-content;
  animation: scroll 30s linear infinite;
}
.marquee-item {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-muted);
  white-space: nowrap;
  transition: var(--transition);
}
.marquee-item:hover { color: var(--primary); }

@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@media (max-width: 1024px) {
  .overview-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 768px) {
  .hero-content { grid-template-columns: 1fr; text-align: center; }
  .hero-desc { margin-left: auto; margin-right: auto; }
  .hero-actions { justify-content: center; }
  .hero-stats { justify-content: center; flex-wrap: wrap; }
  .hero-visual { display: none; }
  .overview-grid { grid-template-columns: 1fr; }
  .hero-badge { margin-left: auto; margin-right: auto; }
}
</style>
