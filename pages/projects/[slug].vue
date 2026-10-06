<script setup lang="ts">
const route = useRoute();
const studies = useCaseStudies();
const study = studies.find((item) => item.slug === route.params.slug);
if (!study)
  throw createError({ statusCode: 404, statusMessage: "Project not found" });
const next = studies[(studies.indexOf(study) + 1) % studies.length]!;
useHead({ title: study.title });
const sections = [
  { id: "overview", label: "Overview" },
  { id: "features", label: "Features" },
  { id: "implementation", label: "Implementation" },
  { id: "technology", label: "Tech Stack" },
  { id: "challenges", label: "Challenges" },
  { id: "result", label: "Result" },
];
</script>
<template>
  <main>
    <PageHeader
      label="Project Case Study"
      :title="study.title"
      :file="study.shortTitle.toUpperCase() + '.APP'"
      :description="study.category + ' / ' + study.summary"
    />
    <div class="page-content">
      <div class="actions" style="margin-bottom: 1.2rem">
        <NuxtLink to="/projects" class="text-link">← Project Directory</NuxtLink
        ><a
          v-if="study.external"
          :href="study.external"
          target="_blank"
          rel="noopener noreferrer"
          class="text-link"
          >Open Project ↗</a
        >
      </div>
      <nav class="case-nav" aria-label="Case study sections">
        <a
          v-for="section in sections"
          :key="section.id"
          :href="'#' + section.id"
          >{{ section.label }}</a
        >
      </nav>
      <SystemWindow
        :file="study.shortTitle.toUpperCase() + '.APP'"
        label="APPLICATION RECORD"
      >
        <div id="overview" class="case-overview">
          <div>
            <h2>Overview</h2>
            <p>{{ study.context }}</p>
          </div>
          <aside class="case-role">
            <h3>My Contribution</h3>
            <p>{{ study.role }}</p>
          </aside>
        </div>
        <ProjectMedia :study="study" />
      </SystemWindow>
      <section class="case-section" style="margin-top: 2rem">
        <h2>The Problem</h2>
        <p>{{ study.problem }}</p>
      </section>
      <section id="features" class="case-section">
        <h2>Key Features</h2>
        <ul class="list">
          <li v-for="feature in study.features" :key="feature">
            {{ feature }}
          </li>
        </ul>
      </section>
      <section id="implementation" class="case-section">
        <h2>What I Built</h2>
        <div>
          <p>{{ study.system }}</p>
          <div class="case-threads">
            <article v-for="thread in study.threads" :key="thread.title">
              <h3>{{ thread.title }}</h3>
              <p>{{ thread.description }}</p>
            </article>
          </div>
        </div>
      </section>
      <section id="technology" class="case-section">
        <h2>Tech Stack</h2>
        <div>
          <ul class="tag-list">
            <li v-for="technology in study.technology" :key="technology">
              {{ technology }}
            </li>
          </ul>
          <h3 style="margin-top: 1.5rem; margin-bottom: 0.7rem">
            Architecture
          </h3>
          <ul class="list">
            <li v-for="item in study.architecture" :key="item">{{ item }}</li>
          </ul>
        </div>
      </section>
      <section id="challenges" class="case-section">
        <h2>Challenges</h2>
        <p>{{ study.challenge }}</p>
      </section>
      <section id="result" class="case-section">
        <h2>Result</h2>
        <p>{{ study.result }}</p>
      </section>
      <section v-if="study.screenshot" class="case-section">
        <h2>Screenshots</h2>
        <ProjectMedia :study="study" />
      </section>
      <section class="case-section">
        <h2>Links</h2>
        <div class="actions">
          <a
            v-if="study.external"
            :href="study.external"
            target="_blank"
            rel="noopener noreferrer"
            class="button"
            >View Project <ArrowIcon /></a
          ><NuxtLink to="/contact" class="text-link"
            >Discuss the implementation ↗</NuxtLink
          >
        </div>
      </section>
      <NuxtLink :to="'/projects/' + next.slug" class="next-project"
        ><div>
          <small>NEXT APPLICATION</small><strong>{{ next.title }}</strong>
        </div>
        <span aria-hidden="true">↗</span></NuxtLink
      >
    </div>
  </main>
</template>
