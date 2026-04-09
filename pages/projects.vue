<template>
  <div class="page-projects">
    <section class="section">
      <div class="container">
        <span class="section-label">// Portfolio</span>
        <h1 class="section-title">Featured <span class="gradient-text">Projects</span></h1>
        <p class="section-subtitle">Real-world applications I've built — dashboards, platforms, and full-stack systems.</p>

        <div class="projects-list">
          <div
            class="project-card"
            v-for="(project, i) in projects"
            :key="project.title"
          >
            <div class="project-visual">
              <div class="project-bg" :style="{ background: `linear-gradient(135deg, ${project.color}22, ${project.color}08)` }">
                <span class="project-emoji">{{ project.image }}</span>
              </div>
              <div class="project-number">0{{ i + 1 }}</div>
            </div>

            <div class="project-info">
              <div class="project-header">
                <h2>{{ project.title }}</h2>
                <span class="project-sub">{{ project.subtitle }}</span>
              </div>

              <p class="project-desc">{{ project.description }}</p>

              <div class="project-features">
                <span class="feature" v-for="f in project.features" :key="f">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  {{ f }}
                </span>
              </div>

              <div class="project-tech">
                <span class="tech-chip" v-for="t in project.tech" :key="t" :style="{ borderColor: project.color + '40', color: project.color }">
                  {{ t }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="projects-cta">
          <p>Want to see more or discuss a project?</p>
          <div class="cta-actions">
            <a href="https://github.com/MohabMohamed72" target="_blank" class="btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              View GitHub
            </a>
            <NuxtLink to="/contact" class="btn-outline">Contact Me</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({ title: 'Projects' })
const { projects } = usePortfolioData()
</script>

<style scoped>
.page-projects { padding-top: 100px; }

.projects-list {
  margin-top: 56px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.project-card {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 40px;
  padding: 36px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  transition: var(--transition);
  align-items: center;
}
.project-card:hover {
  border-color: var(--border-hover);
  box-shadow: var(--shadow-glow);
}
.project-card:nth-child(even) {
  direction: rtl;
}
.project-card:nth-child(even) > * {
  direction: ltr;
}

.project-visual { position: relative; }
.project-bg {
  aspect-ratio: 4/3;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border);
}
.project-emoji { font-size: 4rem; }
.project-number {
  position: absolute;
  top: -12px;
  left: -12px;
  font-family: var(--font-mono);
  font-size: 3rem;
  font-weight: 900;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0.3;
}

.project-header { margin-bottom: 16px; }
.project-header h2 { font-size: 1.4rem; font-weight: 800; }
.project-sub {
  font-size: 0.85rem;
  color: var(--primary);
  font-weight: 500;
}
.project-desc {
  color: var(--text-secondary);
  font-size: 0.92rem;
  line-height: 1.75;
  margin-bottom: 20px;
}
.project-features {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
}
.feature {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  color: var(--text-secondary);
}
.feature svg { color: var(--primary); flex-shrink: 0; }
.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.tech-chip {
  padding: 5px 14px;
  border: 1px solid;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 600;
  font-family: var(--font-mono);
}

.projects-cta {
  text-align: center;
  margin-top: 72px;
  padding: 48px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
}
.projects-cta p {
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 24px;
}
.cta-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
}

@media (max-width: 768px) {
  .project-card { grid-template-columns: 1fr; }
  .project-card:nth-child(even) { direction: ltr; }
  .cta-actions { flex-direction: column; align-items: center; }
}
</style>
