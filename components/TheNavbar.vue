<script setup lang="ts">
const { items, active } = useOsNavigation();
const route = useRoute();
const menu = ref<HTMLDialogElement | null>(null);
const menuOpen = ref(false);
let desktopQuery: MediaQueryList | undefined;
function closeOnDesktop() {
  if (desktopQuery?.matches) menu.value?.close();
}
const effects = useState("os-effects", () => true);
onMounted(() => {
  desktopQuery = matchMedia("(min-width: 768px)");
  desktopQuery.addEventListener("change", closeOnDesktop);
  try {
    effects.value = sessionStorage.getItem("mohab-os-effects") !== "off";
  } catch {}
});
onUnmounted(() => desktopQuery?.removeEventListener("change", closeOnDesktop));
function toggleEffects() {
  effects.value = !effects.value;
  try {
    sessionStorage.setItem("mohab-os-effects", effects.value ? "on" : "off");
  } catch {}
}
watch(
  () => route.path,
  () => menu.value?.close(),
);
</script>
<template>
  <header class="system-bar">
    <NuxtLink to="/" class="system-brand" aria-label="MOHAB OS Home"
      ><span class="brand-chip">M</span><span>MOHAB_OS</span></NuxtLink
    >
    <span class="system-breadcrumb"
      ><span aria-hidden="true">/</span> {{ active.file }}</span
    >
    <div class="system-bar-actions">
      <span class="online"><i aria-hidden="true"></i> ONLINE</span
      ><button
        type="button"
        class="effects-button"
        :aria-pressed="effects"
        @click="toggleEffects"
      >
        CRT {{ effects ? "ON" : "OFF" }}</button
      ><button
        class="mobile-menu-button"
        type="button"
        aria-haspopup="dialog"
        aria-controls="system-menu"
        :aria-expanded="menuOpen"
        @click="
          menu?.showModal();
          menuOpen = true;
        "
      >
        Menu <span aria-hidden="true">＋</span>
      </button>
    </div>
  </header>
  <dialog
    id="system-menu"
    ref="menu"
    class="mobile-menu"
    aria-labelledby="menu-title"
    @close="menuOpen = false"
  >
    <div class="window-titlebar">
      <h2 id="menu-title">SYSTEM NAVIGATION</h2>
      <button
        type="button"
        class="window-control"
        aria-label="Close menu"
        @click="menu?.close()"
      >
        ×
      </button>
    </div>
    <nav aria-label="Mobile navigation">
      <NuxtLink
        v-for="(item, index) in items"
        :key="item.path"
        :to="item.path"
        @click="menu?.close()"
        :aria-current="active.path === item.path ? 'page' : undefined"
        ><span class="module-number">0{{ index }}</span
        ><SystemIcon :name="item.icon" /><span>{{ item.label }}</span
        ><span class="mobile-file">{{ item.file }}</span
        ><span aria-hidden="true">↗</span></NuxtLink
      >
    </nav>
    <p class="mobile-menu-note">MOHAB MOHAMED / FRONTEND DEVELOPER</p>
  </dialog>
</template>
