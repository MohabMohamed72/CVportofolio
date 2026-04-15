<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <span class="logo-code">&lt;Mohab /&gt;</span>
          <p class="footer-desc">
            Building modern web experiences with passion, precision, and a love
            for clean code.
          </p>
        </div>

        <div class="footer-links">
          <h4>Navigation</h4>
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/about">About</NuxtLink>
          <NuxtLink to="/skills">Skills</NuxtLink>
          <NuxtLink to="/projects">Projects</NuxtLink>
          <NuxtLink to="/experience">Experience</NuxtLink>
          <NuxtLink to="/contact">Contact</NuxtLink>
        </div>

        <div class="footer-links">
          <h4>Connect</h4>
          <a href="https://github.com/MohabMohamed72" target="_blank">GitHub</a>
          <a
            href="https://linkedin.com/in/mohab-mohamed-a5121024b"
            target="_blank"
            >LinkedIn</a
          >
          <a href="mailto:mohabmohamedd772@gmail.com">Email</a>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-line" />
        <p>
          &copy; {{ new Date().getFullYear() }} Mohab Mohamed. Crafted with
          <span class="heart">♥</span> using Nuxt.js
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 60px 0 30px;
  position: relative;
  z-index: 1;
}
.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 48px;
}
.logo-code {
  font-family: var(--font-mono);
  font-size: 1.4rem;
  font-weight: 700;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.footer-desc {
  margin-top: 14px;
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.7;
  max-width: 320px;
}
.footer-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.footer-links h4 {
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text);
  margin-bottom: 6px;
}
.footer-links a {
  color: var(--text-secondary);
  font-size: 0.9rem;
  transition: var(--transition);
}
.footer-links a:hover {
  color: var(--primary);
  transform: translateX(4px);
  display: inline-block;
}
.footer-bottom {
  margin-top: 48px;
  text-align: center;
}
.footer-line {
  height: 1px;
  background: var(--border);
  margin-bottom: 24px;
}
.footer-bottom p {
  color: var(--text-muted);
  font-size: 0.85rem;
}
.heart {
  color: var(--primary);
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
</style>
