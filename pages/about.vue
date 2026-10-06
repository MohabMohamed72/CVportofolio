<script setup lang="ts">
useHead({ title: "About" });
const profile = useProfessionalProfile();
const facts = [
  { label: "Name", value: profile.name },
  { label: "Role", value: profile.role },
  { label: "Location", value: profile.location },
  { label: "Experience", value: profile.experience },
  { label: "Languages", value: profile.languages },
];
</script>
<template>
  <main>
    <PageHeader
      label="About"
      title="About Me"
      description="Frontend Developer based in Mansoura, Egypt. Engineering background. Production application experience."
    />
    <div class="page-content">
      <div class="profile-layout">
        <aside class="profile-facts">
          <p class="eyebrow">USER RECORD / 01</p>
          <h2>Quick Info</h2>
          <dl class="facts">
            <div v-for="fact in facts" :key="fact.label">
              <dt>{{ fact.label }}</dt>
              <dd>{{ fact.value }}</dd>
            </div>
          </dl>
          <NuxtLink to="/contact" class="text-link">Contact Me ↗</NuxtLink>
        </aside>
        <SystemWindow
          file="PROFILE.SYS"
          class="profile-summary"
          label="PROFESSIONAL SUMMARY"
          ><h2>Professional Summary</h2>
          <p>
            I build frontend applications for enterprise operations, education,
            safety management, and e-commerce. My work includes complex
            dashboards, role-based workflows, bilingual interfaces, and
            real-time integrations.
          </p>
          <p>
            Mechatronics Engineering at Mansoura University gave me a foundation
            in software, hardware, and interconnected systems. NTI Embedded
            Systems training added practical experience with microcontrollers
            and real-time constraints.
          </p>
          <p>
            Alongside development, I teach programming. Explaining Arduino, AI,
            Machine Learning, Computer Vision, Scratch, Python, and C helps me
            communicate clearly and break complex problems into manageable
            steps.
          </p></SystemWindow
        >
      </div>
      <section class="content-section">
        <div class="section-label">
          <span>02 / RECORDS</span>
          <h2>Education</h2>
        </div>
        <article class="education-row">
          <time>2019 – 2024</time>
          <div>
            <h3>Bachelor of Engineering</h3>
            <p>
              Mechatronics Engineering · Faculty of Engineering<br />Mansoura
              University
            </p>
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
      <section class="content-section">
        <div class="section-label">
          <span>03 / FOCUS</span>
          <h2>Focus Areas</h2>
        </div>
        <ul class="focus-lines">
          <li><span>01</span>Frontend Applications</li>
          <li><span>02</span>Dashboard Systems</li>
          <li><span>03</span>E-Commerce</li>
          <li><span>04</span>Educational Platforms</li>
        </ul>
        <NuxtLink to="/projects" class="text-link">View Projects ↗</NuxtLink>
      </section>
    </div>
  </main>
</template>
