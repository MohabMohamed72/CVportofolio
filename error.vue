<script setup lang="ts">
defineProps<{ error: { statusCode?: number } }>();
useHead({ title: "Application unavailable — MOHAB_OS" });
</script>
<template>
  <main class="error-screen container">
    <SystemWindow file="SYSTEM_NOTICE" label="APPLICATION ERROR">
      <p class="eyebrow">REQUEST INTERRUPTED / {{ error.statusCode || 500 }}</p>
      <h1>
        {{ error.statusCode === 404 ? "File Not Found" : "Unable to Open" }}
      </h1>
      <p class="muted">
        {{
          error.statusCode === 404
            ? "There isn't a page at this address. Return to the desktop or open the project directory."
            : "The system couldn't open this page. Please try returning to the desktop."
        }}
      </p>
      <div class="actions">
        <a
          href="/"
          class="button primary"
          @click.prevent="clearError({ redirect: '/' })"
          >Return Home ↗</a
        ><a
          href="/projects"
          class="button"
          @click.prevent="clearError({ redirect: '/projects' })"
          >Projects ↗</a
        >
      </div>
    </SystemWindow>
  </main>
</template>
