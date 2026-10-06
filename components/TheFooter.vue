<script setup lang="ts">
const { items, active } = useOsNavigation();
const route = useRoute();
const storesFocus = computed(
  () => route.path === "/stores" || route.query.work === "stores",
);
const time = ref("--:--");
let timer: ReturnType<typeof setInterval> | undefined;
function updateTime() {
  time.value = new Intl.DateTimeFormat(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date());
}
onMounted(() => {
  updateTime();
  timer = setInterval(updateTime, 60000);
});
onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>
<template>
  <footer class="system-footer">
    <span>MOHAB_OS / BUILT BY MOHAB MOHAMED</span
    ><a href="mailto:mohabmohamedd772@gmail.com">Start a conversation ↗</a
    ><span
      >{{ storesFocus ? "E-commerce Web Developer" : "Frontend Developer" }} /
      Mansoura, Egypt</span
    >
  </footer>
  <div class="taskbar">
    <NuxtLink to="/" class="taskbar-start" aria-label="Home"
      ><span class="brand-chip">M</span><span>SYSTEM</span></NuxtLink
    >
    <nav aria-label="Main navigation">
      <NuxtLink
        v-for="item in items"
        :key="item.path"
        :to="item.path"
        :aria-current="active.path === item.path ? 'page' : undefined"
        ><SystemIcon :name="item.icon" /><span>{{ item.label }}</span></NuxtLink
      >
    </nav>
    <span class="taskbar-mobile-context">{{ active.label }}</span>
    <div class="taskbar-status">
      <span class="online"><i aria-hidden="true"></i> ONLINE</span
      ><time>{{ time }}</time>
    </div>
  </div>
</template>
