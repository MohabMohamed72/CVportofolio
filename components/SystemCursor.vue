<script setup lang="ts">
const cursor = ref<HTMLElement | null>(null);
const visible = ref(false);
const selecting = ref(false);
let frame = 0;
let x = 0,
  y = 0;
let query: MediaQueryList | undefined;
function move(event: PointerEvent) {
  if (!query?.matches || event.pointerType === "touch") return;
  x = event.clientX;
  y = event.clientY;
  visible.value = true;
  selecting.value = !!(event.target as Element)?.closest(
    "a, button, input, textarea, summary",
  );
  if (!frame)
    frame = requestAnimationFrame(() => {
      cursor.value?.style.setProperty("--cursor-x", x + "px");
      cursor.value?.style.setProperty("--cursor-y", y + "px");
      frame = 0;
    });
}
function hide() {
  visible.value = false;
}
onMounted(() => {
  query = matchMedia(
    "(pointer: fine) and (hover: hover) and (prefers-reduced-motion: no-preference)",
  );
  document.addEventListener("pointermove", move, { passive: true });
  document.addEventListener("pointerleave", hide);
  query.addEventListener("change", hide);
});
onUnmounted(() => {
  document.removeEventListener("pointermove", move);
  document.removeEventListener("pointerleave", hide);
  query?.removeEventListener("change", hide);
  cancelAnimationFrame(frame);
});
</script>
<template>
  <div class="cursor-layer" aria-hidden="true">
    <div
      ref="cursor"
      class="system-cursor"
      :class="{ visible, selecting }"
      aria-hidden="true"
    >
      <span v-if="selecting">SELECT</span>
    </div>
  </div>
</template>
