<script setup lang="ts">
const effects = useState("os-effects", () => true);
const route = useRoute();
const { active } = useOsNavigation();
const opening = ref(false);
function keepFocusVisible(event: FocusEvent) {
  const target = event.target;
  if (!(target instanceof HTMLElement) || target.id === "main-content") return;
  const rect = target.getBoundingClientRect();
  const top =
    document.querySelector(".system-bar")?.getBoundingClientRect().bottom || 0;
  const bottom =
    document.querySelector(".taskbar")?.getBoundingClientRect().top ||
    window.innerHeight;
  if (rect.top < top + 12 || rect.bottom > bottom - 12) {
    target.scrollIntoView({ block: "center", behavior: "instant" });
  }
}
let timer: ReturnType<typeof setTimeout> | undefined;
watch(
  () => route.path,
  () => {
    opening.value = true;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      opening.value = false;
    }, 480);
  },
);
onUnmounted(() => {
  if (timer) clearTimeout(timer);
});
useHead({
  titleTemplate: (title) =>
    title ? title + " — MOHAB " : "MOHAB — Mohab Mohamed",
  htmlAttrs: { lang: "en" },
});
</script>
<template>
  <div class="os-shell" :class="{ 'effects-off': !effects }">
    <NuxtRouteAnnouncer />
    <a class="skip-link" href="#main-content">Skip to content</a>
    <TheNavbar />
    <div class="route-request" :class="{ opening }" aria-hidden="true">
      <span>OPENING {{ active.file }}</span
      ><i></i>
    </div>
    <div id="main-content" tabindex="-1" @focusin="keepFocusVisible">
      <NuxtPage />
    </div>
    <TheFooter />
    <div class="crt-layer" aria-hidden="true"></div>
    <SystemCursor />
    <SystemBoot />
  </div>
</template>
