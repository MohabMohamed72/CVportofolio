<script setup lang="ts">
useHead({ title: "Experience" });
const { experienceEntries } = useProfessionalProfile();
</script>
<template>
  <main>
    <PageHeader
      label="Experience"
      title="Work Experience"
      description="Production frontend development, e-commerce implementation, and programming education."
    />
    <div class="page-content">
      <div class="history-log">
        <article
          v-for="(job, index) in experienceEntries"
          :key="job.title"
          class="experience-entry"
        >
          <div class="log-meta">
            <span class="log-index">0{{ index + 1 }}</span>
            <p class="log-date">[ {{ job.period }} ]</p>
            <span class="log-type">{{ job.type }}</span>
          </div>
          <div>
            <h2>{{ job.title }}</h2>
            <p class="job-meta">{{ job.company }} / Mansoura, Egypt</p>
            <ul class="list">
              <li
                v-for="responsibility in job.responsibilities"
                :key="responsibility"
              >
                {{ responsibility }}
              </li>
            </ul>
            <p class="job-stack">{{ job.technology }}</p>
            <NuxtLink :to="job.proof" class="text-link"
              >View related work ↗</NuxtLink
            >
          </div>
        </article>
      </div>
      <section class="content-section">
        <div class="section-label">
          <span>EDUCATION.LOG</span>
          <h2>Education</h2>
        </div>
        <article class="education-row">
          <time>2019 – 2024</time>
          <div>
            <h3>Bachelor of Engineering / Mechatronics</h3>
            <p>Mansoura University · Faculty of Engineering</p>
          </div>
        </article>
        <article class="education-row">
          <time>2023</time>
          <div>
            <h3>Embedded Systems Training</h3>
            <p>National Telecommunication Institute (NTI)</p>
          </div>
        </article>
      </section>
    </div>
  </main>
</template>
