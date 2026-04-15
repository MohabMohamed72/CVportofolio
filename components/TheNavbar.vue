<template>
  <header class="navbar" :class="{ scrolled: isScrolled, 'menu-open': menuOpen }">
    <div class="container navbar-inner">
      <NuxtLink to="/" class="logo">
        <span class="logo-bracket">&lt;</span>
        <span class="logo-text">Mohab</span>
        <span class="logo-bracket">/&gt;</span>
      </NuxtLink>

      <nav class="nav-links">
        <NuxtLink to="/" class="nav-link">Home</NuxtLink>
        <NuxtLink to="/about" class="nav-link">About</NuxtLink>
        <NuxtLink to="/skills" class="nav-link">Skills</NuxtLink>
        <NuxtLink to="/projects" class="nav-link">Projects</NuxtLink>
        <NuxtLink to="/experience" class="nav-link">Experience</NuxtLink>
        <NuxtLink to="/contact" class="nav-link">Contact</NuxtLink>
      </nav>

      <a href="https://github.com/MohabMohamed72" target="_blank" class="nav-github">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      </a>

      <button
        class="menu-toggle"
        @click="menuOpen = !menuOpen"
        :aria-expanded="menuOpen"
        :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
      >
        <span class="bar bar-1" />
        <span class="bar bar-2" />
        <span class="bar bar-3" />
      </button>
    </div>

    <!-- Mobile drawer -->
    <Transition name="drawer">
      <nav v-if="menuOpen" class="mobile-menu">
        <NuxtLink to="/" class="mobile-link" @click="menuOpen = false">
          <span class="mobile-link-num">01</span> Home
        </NuxtLink>
        <NuxtLink to="/about" class="mobile-link" @click="menuOpen = false">
          <span class="mobile-link-num">02</span> About
        </NuxtLink>
        <NuxtLink to="/skills" class="mobile-link" @click="menuOpen = false">
          <span class="mobile-link-num">03</span> Skills
        </NuxtLink>
        <NuxtLink to="/projects" class="mobile-link" @click="menuOpen = false">
          <span class="mobile-link-num">04</span> Projects
        </NuxtLink>
        <NuxtLink to="/experience" class="mobile-link" @click="menuOpen = false">
          <span class="mobile-link-num">05</span> Experience
        </NuxtLink>
        <NuxtLink to="/contact" class="mobile-link" @click="menuOpen = false">
          <span class="mobile-link-num">06</span> Contact
        </NuxtLink>

        <a
          href="https://github.com/MohabMohamed72"
          target="_blank"
          class="mobile-github"
          @click="menuOpen = false"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub
        </a>
      </nav>
    </Transition>
  </header>
</template>

<script setup>
const isScrolled = ref(false)
const menuOpen = ref(false)

const route = useRoute()
watch(() => route.path, () => { menuOpen.value = false })

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 40
  })
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') menuOpen.value = false
  })
})
</script>

<style scoped>
/* ── Base ── */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 16px 0;
  transition: background 0.3s ease, padding 0.3s ease, border-color 0.3s ease;
}
.navbar.scrolled {
  padding: 10px 0;
  background: rgba(10, 15, 26, 0.88);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* ── Logo ── */
.logo {
  font-family: var(--font-mono);
  font-size: 1.3rem;
  font-weight: 700;
  display: flex;
  gap: 2px;
  transition: var(--transition);
  flex-shrink: 0;
}
.logo:hover { transform: scale(1.05); }
.logo-bracket { color: var(--primary); }
.logo-text {
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* ── Desktop nav ── */
.nav-links {
  display: flex;
  gap: 4px;
  align-items: center;
}
.nav-link {
  padding: 8px 16px;
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--text-secondary);
  border-radius: 50px;
  transition: var(--transition);
}
.nav-link:hover,
.nav-link.router-link-active {
  color: var(--primary);
  background: rgba(66, 211, 146, 0.08);
}

/* ── GitHub icon ── */
.nav-github {
  color: var(--text-secondary);
  transition: var(--transition);
  padding: 8px;
  border-radius: 50%;
  display: flex;
  flex-shrink: 0;
}
.nav-github:hover {
  color: var(--primary);
  transform: scale(1.1);
}

/* ── Hamburger ── */
.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  background: none;
  border: 1px solid var(--border);
  border-radius: 8px;
  cursor: pointer;
  padding: 8px 10px;
  position: relative;
  z-index: 1001;
  transition: border-color 0.2s ease;
}
.menu-toggle:hover { border-color: var(--border-hover); }

.bar {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text-secondary);
  border-radius: 2px;
  transition: transform 0.25s ease, opacity 0.2s ease, background 0.2s ease;
  transform-origin: center;
}
.menu-open .bar { background: var(--primary); }
.menu-open .bar-1 { transform: translateY(7px) rotate(45deg); }
.menu-open .bar-2 { opacity: 0; transform: scaleX(0); }
.menu-open .bar-3 { transform: translateY(-7px) rotate(-45deg); }

/* ── Mobile drawer ── */
.mobile-menu {
  display: none;
  flex-direction: column;
  padding: 8px 16px 20px;
  border-top: 1px solid var(--border);
  background: rgba(10, 15, 26, 0.98);
  backdrop-filter: blur(24px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
}

.mobile-link {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 12px;
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-secondary);
  border-radius: 10px;
  border-left: 2px solid transparent;
  transition: color 0.2s, background 0.2s, border-color 0.2s, padding-left 0.2s;
}
.mobile-link:hover,
.mobile-link.router-link-active {
  color: var(--primary);
  background: rgba(66, 211, 146, 0.07);
  border-left-color: var(--primary);
  padding-left: 18px;
}
.mobile-link-num {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--primary);
  opacity: 0.5;
  min-width: 22px;
}

.mobile-github {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 12px;
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid var(--border);
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--text-secondary);
  transition: color 0.2s, border-color 0.2s, background 0.2s;
}
.mobile-github:hover {
  color: var(--primary);
  border-color: var(--primary);
  background: rgba(66, 211, 146, 0.06);
}

/* ── Drawer transition ── */
.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 0.22s ease, transform 0.22s ease;
}
.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .nav-links { display: none; }
  .nav-github { display: none; }
  .menu-toggle { display: flex; }
  .mobile-menu { display: flex; }
}
</style>
