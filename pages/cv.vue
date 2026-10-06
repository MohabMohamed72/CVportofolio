<script setup lang="ts">
useHead({ title: "CV" });
const { available: pdfAvailable, path: pdfPath } = useCvDocument();
const { experienceEntries: roles } = useProfessionalProfile();
const studies = useCaseStudies();
</script>
<template>
  <main>
    <PageHeader
      label="CV"
      title="Curriculum Vitae"
      file="MOHAB_MOHAMED_CV.PDF"
      description="Mohab Mohamed's professional background. Read the web edition or download the original PDF."
    />
    <div class="page-content">
      <SystemWindow file="MOHAB_MOHAMED_CV.PDF" label="WEB EDITION">
        <header class="cv-header">
          <div>
            <h2>Mohab Mohamed</h2>
            <p>Frontend Developer / Production web applications</p>
          </div>
          <div class="actions">
            <a
              v-if="pdfAvailable"
              :href="pdfPath"
              download
              class="button primary"
              >Download CV <ArrowIcon direction="down" /></a
            ><a
              v-if="pdfAvailable"
              :href="pdfPath"
              target="_blank"
              rel="noopener noreferrer"
              class="button"
              >Open PDF <ArrowIcon
            /></a>
          </div>
        </header>
        <div class="cv-contact">
          <span>Mansoura, Egypt</span
          ><a href="mailto:mohabmohamedd772@gmail.com"
            >mohabmohamedd772@gmail.com</a
          ><a
            href="https://github.com/MohabMohamed72"
            target="_blank"
            rel="noopener noreferrer"
            >GitHub ↗</a
          ><a
            href="https://linkedin.com/in/mohab-mohamed-a5121024b"
            target="_blank"
            rel="noopener noreferrer"
            >LinkedIn ↗</a
          >
        </div>
        <section class="cv-section">
          <h2>Summary</h2>
          <p>
            Frontend developer focused on enterprise dashboards, multi-tenant
            SaaS platforms, complex business workflows, and bilingual Arabic /
            English applications. I build role-aware, data-heavy interfaces with
            Vue 3, Nuxt 3, React, Angular, and TypeScript.
          </p>
        </section>
        <section class="cv-section">
          <h2>Experience</h2>
          <div class="cv-entries">
            <article v-for="role in roles" :key="role.title">
              <h3>{{ role.title }}</h3>
              <p class="meta">{{ role.period }} / {{ role.type }}</p>
              <p>{{ role.responsibilities[0] }}</p>
            </article>
          </div>
        </section>
        <section class="cv-section">
          <h2>Projects</h2>
          <div class="cv-entries">
            <article v-for="study in studies" :key="study.slug">
              <h3>
                <NuxtLink :to="'/projects/' + study.slug" class="text-link"
                  >{{ study.title }} ↗</NuxtLink
                >
              </h3>
              <p class="meta">{{ study.category }}</p>
              <p>{{ study.summary }}</p>
            </article>
          </div>
        </section>
        <section class="cv-section">
          <h2>Skills</h2>
          <div class="cv-columns">
            <div>
              <h3>Interface &amp; Data</h3>
              <p>
                Vue 3, Nuxt 3, React, Next.js, Angular, TypeScript, JavaScript,
                Pinia, Redux, PrimeVue, Tailwind CSS, SCSS, Axios, REST APIs,
                WebSockets, Vue Router, Vue I18n, Chart.js.
              </p>
            </div>
            <div>
              <h3>Architecture &amp; Delivery</h3>
              <p>
                Clean Architecture, feature-based modules, multi-tenant and
                white-label SaaS, reusable components, composables, OOP,
                role-based access, RTL / LTR, PDF and Excel workflows,
                Playwright.
              </p>
            </div>
          </div>
        </section>
        <section class="cv-section">
          <h2>Education</h2>
          <div class="cv-entries">
            <article>
              <h3>Bachelor of Engineering</h3>
              <time>2019 – 2024</time>
              <p>
                Mansoura University, Faculty of Engineering / Mechatronics
                Department
              </p>
            </article>
            <article>
              <h3>Embedded Systems Training</h3>
              <time>2023</time>
              <p>National Telecommunication Institute (NTI)</p>
            </article>
          </div>
        </section>
        <div class="cv-close">
          <NuxtLink to="/contact" class="text-link">Contact Me ↗</NuxtLink>
        </div>
      </SystemWindow>
    </div>
  </main>
</template>
