<script setup lang="ts">
useHead({ title: "Projects" });
const major = [...useCaseStudies()].sort((a, b) =>
  a.slug === "hse-management-system"
    ? -1
    : b.slug === "hse-management-system"
      ? 1
      : 0,
);
const { projects } = usePortfolioData();
const roles: Record<string, string> = {
  "Fashion Store":
    "Frontend development: product browsing, filtering, and cart interfaces.",
  "Mega E-Commerce":
    "Frontend development: marketplace browsing, search, and shopping state.",
  "Alkhalil Traveling":
    "Frontend development: booking workflows and e-ticket interfaces.",
  FilmPire:
    "Frontend development: API-driven discovery and movie detail interfaces.",
};
const entries = [
  ...major.map((study) => ({
    title: study.title,
    type: study.category,
    description: study.summary,
    role: study.role,
    technology: study.technology,
    features: study.features,
    file: study.shortTitle.toUpperCase() + ".APP",
    details: "/projects/" + study.slug,
    external: study.external || "",
    study,
  })),
  {
    title: "Orbit Client Portal",
    type: "Client-facing engineering portal",
    description:
      "A client-facing experience within Orbit’s role-based project ecosystem.",
    role: "Frontend development for the client-facing portal.",
    technology: ["Vue 3", "TypeScript", "Pinia", "SCSS", "REST APIs"],
    features: ["Client-facing project experience", "Role-based access"],
    file: "ORBIT_CLIENT.APP",
    details: "/projects/orbit-system",
    external: "",
    study: undefined,
  },
  ...projects
    .filter((project) => roles[project.title])
    .map((project) => ({
      title: project.title,
      type: project.subtitle,
      description: project.description,
      role: roles[project.title],
      technology: project.tech,
      features: project.features,
      file: project.title.toUpperCase().replaceAll(" ", "_") + ".APP",
      details: "",
      external: project.link || "",
      study: undefined,
    })),
];
const selected = ref(0);
const entry = computed(() => entries[selected.value]!);
const preview = ref<HTMLElement | null>(null);
function select(index: number) {
  selected.value = index;
  if (window.innerWidth <= 900)
    nextTick(() =>
      preview.value?.scrollIntoView({
        behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
        block: "start",
      }),
    );
}
</script>
<template>
  <main>
    <PageHeader
      label="Projects"
      title="Projects"
      description="Selected web applications and platforms I've worked on. Open a directory entry to inspect its features and implementation."
    />
    <div class="page-content"><PortfolioTracks current="frontend" /></div>
    <div class="page-content project-directory">
      <aside class="directory-index">
        <div class="directory-toolbar">
          <span>PROJECT_DIRECTORY/</span
          ><span>{{ entries.length }} ENTRIES</span>
        </div>
        <ol class="directory-list">
          <li
            v-for="(project, index) in entries"
            :id="index === 4 ? 'other-work' : undefined"
            :key="project.title"
          >
            <button
              type="button"
              class="directory-button"
              :aria-pressed="selected === index"
              aria-controls="project-preview"
              @click="select(index)"
            >
              <span>{{ String(index + 1).padStart(2, "0") }}</span
              ><span
                ><strong>{{ project.title }}</strong
                ><small>{{ project.type }}</small></span
              ><span aria-hidden="true">↗</span>
            </button>
          </li>
        </ol>
        <p class="directory-hint">
          Select a project to inspect its record.<br />Major systems include
          full case studies.
        </p>
      </aside>
      <div
        id="project-preview"
        ref="preview"
        class="project-preview"
        style="scroll-margin-top: 100px"
      >
        <p class="sr-only" role="status">{{ entry.title }} selected</p>
        <SystemWindow :file="entry.file" label="PROJECT RECORD">
          <Transition name="preview-switch" mode="out-in"
            ><div :key="entry.title">
              <div class="project-preview-header">
                <span class="project-number">{{
                  String(selected + 1).padStart(2, "0")
                }}</span>
                <div>
                  <h2>{{ entry.title }}</h2>
                  <p class="meta">{{ entry.type }}</p>
                </div>
              </div>
              <p class="preview-description">{{ entry.description }}</p>
              <div class="preview-block">
                <h3>My Role</h3>
                <p>{{ entry.role }}</p>
              </div>
              <div class="preview-block">
                <h3>Key Features</h3>
                <ul class="preview-features">
                  <li v-for="feature in entry.features" :key="feature">
                    {{ feature }}
                  </li>
                </ul>
              </div>
              <div class="preview-block">
                <h3>Tech Stack</h3>
                <ul class="tag-list">
                  <li v-for="technology in entry.technology" :key="technology">
                    {{ technology }}
                  </li>
                </ul>
                <p
                  v-if="entry.title === 'Orbit Client Portal'"
                  class="muted"
                  style="margin-top: 0.7rem"
                >
                  Shared Orbit ecosystem stack; not a separate portal-stack
                  claim.
                </p>
              </div>
              <ProjectMedia v-if="entry.study" :study="entry.study" />
              <div class="actions">
                <NuxtLink
                  v-if="entry.details"
                  :to="entry.details"
                  class="button primary"
                  >{{
                    entry.title === "Orbit Client Portal"
                      ? "Orbit Case Study"
                      : "View Case Study"
                  }}
                  <ArrowIcon /></NuxtLink
                ><a
                  v-if="entry.external"
                  :href="entry.external"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="button"
                  >View Project <ArrowIcon /></a
                ><a
                  v-if="!entry.details && !entry.external"
                  :href="
                    'mailto:mohabmohamedd772@gmail.com?subject=' +
                    encodeURIComponent(entry.title + ' project details')
                  "
                  class="text-link"
                  >Request project details ↗</a
                >
              </div>
            </div></Transition
          >
        </SystemWindow>
      </div>
    </div>
  </main>
</template>
