<template>
  <div class="page-about">
    <section class="section">
      <div class="container">
        <div class="about-header">
          <span class="section-label">// About Me</span>
          <h1 class="section-title">Passionate about building<br><span class="gradient-text">exceptional web experiences</span></h1>
        </div>

        <div class="about-grid">
          <div class="about-content">
            <p class="about-text">
              I'm <strong>Mohab Mohamed</strong>, a Frontend Developer based in Mansoura, Egypt.
              I hold a Bachelor's degree in Mechatronics Engineering from Mansoura University,
              which gave me a unique blend of software and hardware skills.
            </p>
            <p class="about-text">
              With 1+ year of professional experience, I specialize in building scalable web
              applications using <strong>Vue.js, React.js, Angular, Nuxt.js, and TypeScript</strong>.
              I love turning Figma designs into pixel-perfect, responsive interfaces.
            </p>
            <p class="about-text">
              What sets me apart is my deep integration of <strong>AI-powered tools</strong> into
              my workflow — GitHub Copilot, Cursor AI, ChatGPT, and Claude are part of my daily
              toolkit, helping me deliver faster, cleaner, and more innovative solutions.
            </p>
            <p class="about-text">
              Beyond coding, I'm also a <strong>programming instructor</strong> with 2+ years
              of teaching experience, mentoring 200+ students in Python, Machine Learning,
              and more.
            </p>

            <div class="about-actions">
              <NuxtLink to="/contact" class="btn-primary">Get In Touch</NuxtLink>
              <a href="https://github.com/MohabMohamed72" target="_blank" class="btn-outline">View GitHub</a>
            </div>
          </div>

          <div class="about-details">
            <div class="detail-card">
              <div class="detail-items">
                <div class="detail-item" v-for="(item, i) in details" :key="i">
                  <span class="detail-label">{{ item.label }}</span>
                  <span class="detail-value">{{ item.value }}</span>
                </div>
              </div>
            </div>

            <div class="edu-card">
              <div class="edu-icon">🎓</div>
              <h3>Education</h3>
              <p class="edu-degree">B.Eng — Mechatronics</p>
              <p class="edu-uni">Mansoura University</p>
              <p class="edu-year">2019 – 2024</p>
            </div>
          </div>
        </div>

        <!-- What I Do -->
        <div class="what-i-do">
          <h2 class="section-title" style="text-align:center; margin-bottom: 48px;">
            What I <span class="gradient-text">Bring</span>
          </h2>
          <div class="wid-grid">
            <div class="wid-card" v-for="(item, i) in whatIDo" :key="i">
              <span class="wid-num">0{{ i + 1 }}</span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({ title: 'About' })

const details = [
  { label: 'Name', value: 'Mohab Mohamed' },
  { label: 'Location', value: 'Mansoura, Egypt' },
  { label: 'Experience', value: '1+ Year Professional' },
  { label: 'Frameworks', value: 'Vue, React, Angular, Nuxt' },
  { label: 'Languages', value: 'Arabic (Native), English' },
  { label: 'Instructor', value: '2+ Years, 200+ Students' },
]

const whatIDo = [
  { title: 'Frontend Development', desc: 'Building modern, responsive web applications using Vue.js, React, Angular, and Nuxt.js with TypeScript.' },
  { title: 'UI/UX Implementation', desc: 'Translating Figma designs into pixel-perfect interfaces with Tailwind CSS, SCSS, and cross-browser compatibility.' },
  { title: 'AI-Powered Workflows', desc: 'Integrating GitHub Copilot, Cursor AI, ChatGPT into development for 40% faster delivery.' },
  { title: 'Dashboard Systems', desc: 'Complex admin panels with analytics, role-based access, real-time data visualization, and payment integration.' },
  { title: 'API Integration', desc: 'Connecting frontends to RESTful APIs, GraphQL endpoints, payment gateways, and third-party services.' },
  { title: 'Teaching & Mentoring', desc: 'Sharing knowledge in Python, ML, and frontend development with 200+ students across multiple programs.' },
]
</script>

<style scoped>
.page-about { padding-top: 100px; }
.about-header { margin-bottom: 60px; }
.about-grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 48px;
  margin-bottom: 100px;
}
.about-text {
  font-size: 1.02rem;
  color: var(--text-secondary);
  line-height: 1.85;
  margin-bottom: 20px;
}
.about-text strong { color: var(--text); font-weight: 600; }
.about-actions {
  display: flex;
  gap: 16px;
  margin-top: 32px;
}
.detail-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 28px;
  margin-bottom: 20px;
}
.detail-items { display: flex; flex-direction: column; gap: 16px; }
.detail-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--border);
}
.detail-item:last-child { border-bottom: none; padding-bottom: 0; }
.detail-label {
  font-size: 0.82rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 600;
}
.detail-value {
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--text);
}
.edu-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 28px;
  text-align: center;
}
.edu-icon { font-size: 2rem; margin-bottom: 12px; }
.edu-card h3 { font-size: 1.1rem; font-weight: 700; margin-bottom: 8px; }
.edu-degree { color: var(--primary); font-weight: 600; font-size: 0.95rem; }
.edu-uni { color: var(--text-secondary); font-size: 0.88rem; margin: 4px 0; }
.edu-year { color: var(--text-muted); font-size: 0.82rem; font-family: var(--font-mono); }

.wid-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.wid-card {
  padding: 32px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  transition: var(--transition);
}
.wid-card:hover {
  border-color: var(--border-hover);
  transform: translateY(-4px);
}
.wid-num {
  font-family: var(--font-mono);
  font-size: 2rem;
  font-weight: 800;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: block;
  margin-bottom: 16px;
}
.wid-card h3 { font-size: 1.05rem; font-weight: 700; margin-bottom: 10px; }
.wid-card p { font-size: 0.88rem; color: var(--text-secondary); line-height: 1.65; }

@media (max-width: 768px) {
  .about-grid { grid-template-columns: 1fr; }
  .wid-grid { grid-template-columns: 1fr; }
  .about-actions { flex-direction: column; }
}
</style>
