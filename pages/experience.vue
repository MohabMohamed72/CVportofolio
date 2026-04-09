<template>
  <div class="page-experience">
    <section class="section">
      <div class="container">
        <span class="section-label">// Career Journey</span>
        <h1 class="section-title">Professional <span class="gradient-text">Experience</span></h1>
        <p class="section-subtitle">My path from Mechatronics Engineering to Frontend Development.</p>

        <div class="timeline">
          <div class="timeline-line" />

          <div
            class="timeline-item"
            v-for="(exp, i) in experiences"
            :key="i"
            :class="{ even: i % 2 === 1 }"
          >
            <div class="timeline-dot">
              <span class="dot-inner" />
            </div>

            <div class="timeline-card">
              <div class="tc-header">
                <span class="tc-period">{{ exp.period }}</span>
                <span class="tc-location">{{ exp.location }}</span>
              </div>
              <h3 class="tc-title">{{ exp.title }}</h3>
              <span class="tc-company">{{ exp.company }}</span>

              <ul class="tc-highlights">
                <li v-for="(h, j) in exp.highlights" :key="j">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>{{ h }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Education -->
        <div class="edu-section">
          <h2 class="section-title" style="text-align:center; margin-bottom: 40px;">
            <span class="gradient-text">Education</span>
          </h2>
          <div class="edu-card-large">
            <div class="edu-left">
              <span class="edu-year-big">2019<br/>— 2024</span>
            </div>
            <div class="edu-right">
              <h3>{{ education.degree }}</h3>
              <p class="edu-dept">{{ education.department }}</p>
              <p class="edu-uni-name">{{ education.university }}</p>
              <p class="edu-desc">{{ education.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({ title: 'Experience' })
const { experiences, education } = usePortfolioData()
</script>

<style scoped>
.page-experience { padding-top: 100px; }

.timeline {
  margin-top: 64px;
  position: relative;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}
.timeline-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, var(--primary), var(--accent), transparent);
  transform: translateX(-50%);
}
.timeline-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 48px;
  position: relative;
}
.timeline-item:last-child { margin-bottom: 0; }

.timeline-dot {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--bg);
  border: 3px solid var(--primary);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dot-inner {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--primary);
}

.timeline-card {
  width: 45%;
  padding: 28px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  transition: var(--transition);
  margin-right: auto;
}
.timeline-card:hover {
  border-color: var(--border-hover);
  box-shadow: var(--shadow-glow);
}
.timeline-item.even .timeline-card {
  margin-right: 0;
  margin-left: auto;
}

.tc-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}
.tc-period {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--primary);
  padding: 4px 12px;
  background: rgba(66, 211, 146, 0.08);
  border-radius: 50px;
}
.tc-location {
  font-size: 0.78rem;
  color: var(--text-muted);
}
.tc-title {
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 4px;
}
.tc-company {
  font-size: 0.85rem;
  color: var(--text-secondary);
  display: block;
  margin-bottom: 16px;
}
.tc-highlights {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.tc-highlights li {
  display: flex;
  gap: 8px;
  align-items: flex-start;
  font-size: 0.84rem;
  color: var(--text-secondary);
  line-height: 1.55;
}
.tc-highlights svg {
  color: var(--primary);
  flex-shrink: 0;
  margin-top: 2px;
}

/* Education */
.edu-section { margin-top: 80px; }
.edu-card-large {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 40px;
  padding: 40px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  max-width: 700px;
  margin: 0 auto;
}
.edu-year-big {
  font-family: var(--font-mono);
  font-size: 1.6rem;
  font-weight: 800;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.3;
}
.edu-right h3 { font-size: 1.2rem; font-weight: 700; }
.edu-dept { color: var(--primary); font-weight: 600; margin: 4px 0 2px; font-size: 0.95rem; }
.edu-uni-name { color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 12px; }
.edu-desc { color: var(--text-muted); font-size: 0.88rem; line-height: 1.65; }

@media (max-width: 768px) {
  .timeline-line { left: 20px; }
  .timeline-dot { left: 20px; }
  .timeline-card {
    width: calc(100% - 50px);
    margin-left: 50px !important;
    margin-right: 0 !important;
  }
  .edu-card-large { grid-template-columns: 1fr; gap: 16px; }
}
</style>
