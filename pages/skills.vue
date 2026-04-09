<template>
  <div class="page-skills">
    <section class="section">
      <div class="container">
        <span class="section-label">// Skills & Expertise</span>
        <h1 class="section-title">My <span class="gradient-text">Technical Arsenal</span></h1>
        <p class="section-subtitle">Technologies, frameworks, and AI tools I use to build modern web applications.</p>

        <!-- Frontend Frameworks -->
        <div class="skills-block">
          <h2 class="block-title">
            <span class="block-icon">⚡</span> Frontend Frameworks
          </h2>
          <div class="skills-bars">
            <div class="skill-row" v-for="skill in skills.frontend" :key="skill.name">
              <div class="skill-info">
                <span class="skill-icon">{{ skill.icon }}</span>
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-pct">{{ skill.level }}%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-fill" :style="{ width: skill.level + '%' }" />
              </div>
            </div>
          </div>
        </div>

        <!-- Styling -->
        <div class="skills-block">
          <h2 class="block-title">
            <span class="block-icon">🎨</span> Styling & CSS
          </h2>
          <div class="skills-bars">
            <div class="skill-row" v-for="skill in skills.styling" :key="skill.name">
              <div class="skill-info">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-pct">{{ skill.level }}%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-fill accent" :style="{ width: skill.level + '%' }" />
              </div>
            </div>
          </div>
        </div>

        <!-- Tools & Libraries -->
        <div class="skills-block">
          <h2 class="block-title">
            <span class="block-icon">🔧</span> Tools & Libraries
          </h2>
          <div class="tools-grid">
            <span class="tool-tag" v-for="tool in skills.tools" :key="tool">{{ tool }}</span>
          </div>
        </div>

        <!-- AI Tools -->
        <div class="skills-block ai-block">
          <h2 class="block-title">
            <span class="block-icon">🤖</span> AI-Powered Development
          </h2>
          <p class="ai-intro">
            I integrate AI tools across the full development lifecycle to boost productivity and code quality.
          </p>
          <div class="ai-grid">
            <div class="ai-card" v-for="ai in skills.ai" :key="ai.category">
              <span class="ai-icon">{{ ai.icon }}</span>
              <h3>{{ ai.category }}</h3>
              <div class="ai-tools">
                <span class="ai-tool" v-for="t in ai.tools" :key="t">{{ t }}</span>
              </div>
              <p class="ai-desc">{{ ai.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({ title: 'Skills' })
const { skills } = usePortfolioData()
</script>

<style scoped>
.page-skills { padding-top: 100px; }
.skills-block {
  margin-top: 56px;
  padding: 36px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
}
.block-title {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 28px;
}
.block-icon { font-size: 1.4rem; }

/* Skill Bars */
.skills-bars { display: flex; flex-direction: column; gap: 20px; }
.skill-row {}
.skill-info {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
}
.skill-icon { font-size: 1.1rem; }
.skill-name { font-size: 0.92rem; font-weight: 600; flex: 1; }
.skill-pct {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--primary);
  font-weight: 600;
}
.skill-bar {
  height: 8px;
  background: rgba(255,255,255,0.04);
  border-radius: 10px;
  overflow: hidden;
}
.skill-fill {
  height: 100%;
  background: var(--gradient);
  border-radius: 10px;
  transition: width 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.skill-fill.accent {
  background: linear-gradient(315deg, #647eff 25%, #42d392);
}

/* Tools Grid */
.tools-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.tool-tag {
  padding: 10px 20px;
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--border);
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text-secondary);
  transition: var(--transition);
  cursor: default;
}
.tool-tag:hover {
  border-color: var(--border-hover);
  color: var(--primary);
  background: rgba(66, 211, 146, 0.06);
}

/* AI Section */
.ai-intro {
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin-bottom: 28px;
  line-height: 1.7;
}
.ai-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.ai-card {
  padding: 24px;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  transition: var(--transition);
}
.ai-card:hover {
  border-color: var(--border-hover);
  transform: translateY(-3px);
}
.ai-icon {
  font-size: 1.8rem;
  display: block;
  margin-bottom: 14px;
}
.ai-card h3 {
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 12px;
}
.ai-tools {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 12px;
}
.ai-tool {
  padding: 4px 12px;
  background: rgba(66, 211, 146, 0.08);
  border: 1px solid rgba(66, 211, 146, 0.15);
  border-radius: 50px;
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--primary);
}
.ai-desc {
  font-size: 0.82rem;
  color: var(--text-muted);
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .ai-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 768px) {
  .ai-grid { grid-template-columns: 1fr; }
  .skills-block { padding: 24px; }
}
</style>
