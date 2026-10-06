<script setup lang="ts">
useHead({ title: "E-commerce Stores" });
useSeoMeta({
  description:
    "Explore Mohab Mohamed’s e-commerce store portfolio, featuring Prime Story, Bellora, BKRJ, Augoo Coffee, Snacko, Tuhfa Fn, and more.",
});
</script>
<template>
  <main>
    <PageHeader
      title="E-commerce Stores"
      description="My store work, gathered in one place. A dedicated portfolio for e-commerce teams and brands looking for a web developer."
    />
    <div class="page-content">
      <PortfolioTracks current="stores" />
      <div class="actions"><CvDownload variant="stores" /></div>
      <StoreShowcase />
      <div class="store-contact">
        <div>
          <h2>Building your next storefront?</h2>
          <p>
            Let’s talk about your brand and the experience you want to create.
          </p>
        </div>
        <NuxtLink to="/contact" class="button primary"
          >Contact me <ArrowIcon
        /></NuxtLink>
      </div>
    </div>
  </main>
</template>
