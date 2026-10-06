<script setup lang="ts">
const route = useRoute()
const open = ref(false)
const scrolled = ref(false)
const menuButton = ref<HTMLButtonElement | null>(null)
const mobileNavigation = ref<HTMLElement | null>(null)
const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Skills', to: '/skills' },
  { label: 'Projects', to: '/projects' },
  { label: 'Experience', to: '/experience' },
  { label: 'Contact', to: '/contact' },
]
const updateScroll = () => { scrolled.value = window.scrollY > 12 }
const handleResize = () => { if (window.innerWidth > 900) open.value = false }
watch(() => route.fullPath, () => { open.value = false })
watch(open, async (value) => {
  if (!import.meta.client) return
  document.body.classList.toggle('mobile-nav-open', value)
  document.querySelector('#main-content')?.toggleAttribute('inert', value)
  document.querySelector('footer')?.toggleAttribute('inert', value)
  await nextTick()
  if (value) mobileNavigation.value?.querySelector<HTMLAnchorElement>('a')?.focus()
})
const handleMenuKey = (event: KeyboardEvent) => {
  if (!open.value) return
  if (event.key === 'Escape') { open.value = false; menuButton.value?.focus(); return }
  if (event.key !== 'Tab') return
  const controls = [menuButton.value, ...Array.from(mobileNavigation.value?.querySelectorAll<HTMLElement>('a, button:not([disabled])') || [])].filter(Boolean) as HTMLElement[]
  const first = controls[0], last = controls[controls.length - 1]
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus() }
  else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus() }
}
onMounted(() => { updateScroll(); window.addEventListener('scroll', updateScroll, { passive: true }); window.addEventListener('resize', handleResize) })
onUnmounted(() => { window.removeEventListener('scroll', updateScroll); window.removeEventListener('resize', handleResize); document.body.classList.remove('mobile-nav-open') })
</script>

<template>
  <header class="site-header" :class="{ 'is-scrolled': scrolled }" @keydown="handleMenuKey">
    <div class="container header-inner">
      <NuxtLink class="brand" to="/" aria-label="Mohab Mohamed, home">
        <span class="brand-mark">M<span>.</span></span>
        <span class="brand-name">Mohab Mohamed <small>Frontend Developer</small></span>
      </NuxtLink>
      <nav class="desktop-nav" aria-label="Primary navigation">
        <NuxtLink v-for="link in links" :key="link.to" :to="link.to" :class="{ active: route.path === link.to || (link.to === '/projects' && route.path.startsWith('/projects/')) }">{{ link.label }}</NuxtLink>
      </nav>
      <div class="desktop-cv"><CvDownload v-if="route.path !== '/'" /><NuxtLink to="/cv" class="cv-overview">View CV</NuxtLink></div>
      <button ref="menuButton" class="menu-button" type="button" :aria-expanded="open" aria-controls="mobile-navigation" :aria-label="open ? 'Close navigation' : 'Open navigation'" @click="open = !open">{{ open ? 'Close' : 'Menu' }}</button>
    </div>
    <Transition name="menu">
      <nav v-if="open" ref="mobileNavigation" id="mobile-navigation" class="mobile-nav" aria-label="Mobile navigation">
        <div class="container mobile-nav-inner">
          <NuxtLink v-for="link in links" :key="link.to" :to="link.to" @click="open = false"><span>{{ link.label }}</span><ArrowIcon /></NuxtLink>
          <CvDownload v-if="route.path !== '/'" /><NuxtLink to="/cv">View CV</NuxtLink>
        </div>
      </nav>
    </Transition>
  </header>
</template>

<style scoped>
.desktop-cv { display: flex; align-items: center; gap: .6rem; }.desktop-cv :deep(.button) { font-size: .78rem; gap: .6rem; padding: .55rem .65rem; min-height: 44px; }.cv-overview { font-size: .8rem; text-decoration: underline; }.mobile-nav :deep(.button) { margin-top: 1.5rem; }
.site-header { position: sticky; top: 0; z-index: 50; background: var(--ink); color: var(--paper); border-bottom: 1px solid var(--line-dark); transition: box-shadow 240ms ease; }
.site-header.is-scrolled { box-shadow: 0 10px 24px rgba(0,0,0,.14); }
.header-inner { min-height: 80px; display: flex; align-items: center; gap: clamp(12px, 1.5vw, 24px); }
.brand { display: flex; align-items: center; gap: .8rem; flex: 0 1 auto; min-width: 0; }
.brand-mark { font: 750 2.1rem/.8 var(--font-display); letter-spacing: -.04em; }
.brand-mark span { color: var(--oxide); }
.brand-name { font-size: .87rem; font-weight: 700; line-height: 1.2; }
.brand-name small { display: block; margin-top: 3px; font: 400 .61rem var(--font-data); color: var(--text-muted); }
.desktop-nav { display: flex; align-items: center; gap: clamp(14px, 1.6vw, 28px); margin-left: auto; }
.desktop-nav a { position: relative; padding-block: .5rem; font-size: .84rem; color: var(--text-muted); transition: color 220ms ease; }
.desktop-nav a::after { content: ''; position: absolute; left: 0; right: 100%; bottom: 0; height: 1px; background: var(--oxide); transition: right 240ms var(--ease); }
.desktop-nav a:hover, .desktop-nav a.active { color: var(--paper); }
.desktop-nav a:hover::after, .desktop-nav a.active::after { right: 0; }
.header-contact { display: flex; align-items: center; gap: 1.4rem; padding: .65rem .8rem; border: 1px solid var(--line-dark); font-size: .84rem; font-weight: 700; transition: color 220ms ease, border-color 220ms ease; }
.header-contact:hover { color: var(--lime); border-color: var(--lime); }
.menu-button { display: none; flex: 0 0 auto; min-width: 72px; height: 48px; margin-left: auto; padding: 8px 12px; border: 1px solid var(--line-dark); background: transparent; color: var(--paper); font-size: .9rem; }
.menu-button span { display: block; height: 1px; background: var(--paper); margin-block: 5px; }
.mobile-nav { position: fixed; top: 70px; left: 0; right: 0; bottom: 0; overflow-y: auto; background: var(--ink); }
.mobile-nav-inner { padding-block: 2rem 4rem; }
.mobile-nav a { display: flex; justify-content: space-between; align-items: center; padding: .8rem 0; border-bottom: 1px solid var(--line-dark); font: 650 clamp(2rem, 8vw, 3.5rem)/1.1 var(--font-display); }
.mobile-nav a:hover, .mobile-nav a[aria-current="page"] { color: var(--lime); }
.mobile-nav a span:last-child { font: 400 1.1rem var(--font-body); }
.mobile-nav p { margin-top: 2rem; color: var(--text-muted); }
.menu-enter-active, .menu-leave-active { transition: opacity 220ms ease, transform 220ms var(--ease); }
.menu-enter-from, .menu-leave-to { opacity: 0; transform: translateY(-10px); }
@media (max-width: 1080px) { .desktop-nav { gap: 12px; } .desktop-nav a { font-size: .78rem; } .brand-name small { display: none; } }
@media (max-width: 900px) { .header-inner { min-height: 70px; } .desktop-nav, .header-contact, .desktop-cv { display: none; } .menu-button { display: block; } }
</style>
