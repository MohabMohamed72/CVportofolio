<template>
  <header
    class="navbar"
    :class="{ scrolled: isScrolled, 'menu-open': menuOpen }"
  >
    <div class="container navbar-inner">
      <NuxtLink to="/" class="logo">
        <span class="logo-bracket">&lt;</span>
        <span class="logo-text">Mohab</span>
        <span class="logo-bracket">/&gt;</span>
      </NuxtLink>

      <nav class="nav-links" :class="{ active: menuOpen }">
        <NuxtLink to="/" class="nav-link" @click="menuOpen = false"
          >Home</NuxtLink
        >
        <NuxtLink to="/about" class="nav-link" @click="menuOpen = false"
          >About</NuxtLink
        >
        <NuxtLink to="/skills" class="nav-link" @click="menuOpen = false"
          >Skills</NuxtLink
        >
        <NuxtLink to="/projects" class="nav-link" @click="menuOpen = false"
          >Projects</NuxtLink
        >
        <NuxtLink to="/experience" class="nav-link" @click="menuOpen = false"
          >Experience</NuxtLink
        >
        <NuxtLink to="/contact" class="nav-link" @click="menuOpen = false"
          >Contact</NuxtLink
        >
      </nav>

      <a
        href="https://github.com/MohabMohamed72"
        target="_blank"
        class="nav-github"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
          />
        </svg>
      </a>

      <button
        class="menu-toggle"
        @click="menuOpen = !menuOpen"
        :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
      >
        <span />
        <span />
        <span />
      </button>
    </div>
  </header>
</template>

<script setup>
const isScrolled = ref(false);
const menuOpen = ref(false);

onMounted(() => {
  window.addEventListener("scroll", () => {
    isScrolled.value = window.scrollY > 40;
  });
});
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 18px 0;
  transition: var(--transition);
  backdrop-filter: blur(0px);
}
.navbar.scrolled {
  padding: 10px 0;
  background: rgba(10, 15, 26, 0.85);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
}
.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  font-family: var(--font-mono);
  font-size: 1.3rem;
  font-weight: 700;
  display: flex;
  gap: 2px;
  transition: var(--transition);
}
.logo:hover {
  transform: scale(1.05);
}
.logo-bracket {
  color: var(--primary);
}
.logo-text {
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.nav-links {
  display: flex;
  gap: 8px;
  align-items: center;
}
.nav-link {
  padding: 8px 18px;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-secondary);
  border-radius: 50px;
  transition: var(--transition);
  position: relative;
}
.nav-link:hover,
.nav-link.router-link-active {
  color: var(--primary);
  background: rgba(66, 211, 146, 0.08);
}
.nav-github {
  color: var(--text-secondary);
  transition: var(--transition);
  padding: 8px;
  border-radius: 50%;
}
.nav-github:hover {
  color: var(--primary);
  transform: scale(1.1);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  z-index: 1001;
}
.menu-toggle span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
  transition: var(--transition);
}
.menu-open .menu-toggle span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.menu-open .menu-toggle span:nth-child(2) {
  opacity: 0;
}
.menu-open .menu-toggle span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }
  .nav-github {
    display: none;
  }
  .nav-links {
    position: fixed;
    inset: 0;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    background: rgba(10, 15, 26, 0.97);
    backdrop-filter: blur(20px);
    opacity: 0;
    pointer-events: none;
    transition: var(--transition);
  }
  .nav-links.active {
    opacity: 1;
    pointer-events: all;
  }
  .nav-link {
    font-size: 1.3rem;
    padding: 14px 28px;
  }
}
</style>
