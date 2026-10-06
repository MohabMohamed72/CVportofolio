<script setup lang="ts">
const dialog = ref<HTMLDialogElement | null>(null);
const step = ref(0);
const lines = [
  "Initializing interface",
  "Mounting profile",
  "Indexing projects",
  "Registering skills",
  "System ready",
];
let timer: ReturnType<typeof setInterval> | undefined;
function enter() {
  if (timer) clearInterval(timer);
  try {
    sessionStorage.setItem("mohab-os-booted", "1");
  } catch {}
  dialog.value?.close();
}
onMounted(() => {
  let visited = false;
  try {
    visited = sessionStorage.getItem("mohab-os-booted") === "1";
  } catch {}
  if (visited || matchMedia("(prefers-reduced-motion: reduce)").matches) {
    enter();
    return;
  }
  dialog.value?.showModal();
  timer = setInterval(() => {
    step.value++;
    if (step.value >= lines.length) enter();
  }, 440);
});
onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>
<template>
  <dialog
    ref="dialog"
    class="boot-dialog"
    aria-labelledby="boot-title"
    @cancel.prevent="enter"
    @keydown.enter.prevent="enter"
  >
    <div class="boot-corner" aria-hidden="true">M / OS</div>
    <p class="eyebrow">PERSONAL FRONTEND SYSTEM / BUILD 2026.10</p>
    <h2 id="boot-title">MOHAB_OS</h2>
    <p class="boot-identity">Mohab Mohamed <span>Frontend Developer</span></p>
    <div class="boot-log" aria-hidden="true">
      <p
        v-for="(line, index) in lines"
        :key="line"
        :class="{ pending: index > step }"
      >
        <span>{{ index <= step ? "[ OK ]" : "[ .. ]" }}</span> {{ line }}
      </p>
    </div>
    <progress
      :value="step + 1"
      :max="lines.length"
      aria-label="Starting interface"
    ></progress>
    <div class="boot-actions">
      <span>Starting your session.</span
      ><button autofocus type="button" class="button primary" @click="enter">
        Enter / Skip ↵
      </button>
    </div>
  </dialog>
</template>
