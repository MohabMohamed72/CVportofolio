<template>
  <div class="page-resume">
    <section class="section resume-section">
      <div class="container">
        <div class="resume-header">
          <div>
            <span class="section-label">Profile / Curriculum vitae</span>
            <h1 class="section-title">
              The full story,<br /><span class="gradient-text">in two pages.</span>
            </h1>
          </div>

          <div class="resume-actions">
            <a
              :href="cvPath"
              target="_blank"
              rel="noopener"
              class="btn-outline"
            >
              Open PDF ↗
            </a>
            <a
              :href="cvPath"
              download="Mohab_Mohamed_Frontend_CV.pdf"
              class="btn-primary"
            >
              Download CV
            </a>
          </div>
        </div>

        <div class="resume-frame-wrap">
          <div class="resume-frame-bar">
            <span>Mohab Mohamed · Frontend Developer</span>
            <span>PDF / 02 pages</span>
          </div>
          <object
            class="resume-frame"
            :data="cvPath"
            type="application/pdf"
            aria-label="Mohab Mohamed Frontend Developer CV"
          >
            <div class="resume-fallback">
              <p>Your browser cannot display the PDF preview.</p>
              <a :href="cvPath" target="_blank" rel="noopener" class="btn-primary">
                Open the CV
              </a>
            </div>
          </object>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({ title: "CV" });

const cvPath = "/documents/mohab-mohamed-frontend-cv.pdf";
</script>
