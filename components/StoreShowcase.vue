<script setup lang="ts">
defineProps<{ compact?: boolean }>();
const stores = useStores();
const featured = stores.filter((store) => store.featured);
const remaining = stores.filter((store) => !store.featured);
function domain(url: string) {
  const destination = new URL(url);
  return (
    destination.hostname +
    (destination.pathname === "/symetric" ? "/symetric" : "")
  );
}
</script>
<template>
  <section class="store-showcase" aria-labelledby="store-showcase-title">
    <div class="store-section-heading">
      <div>
        <h2 id="store-showcase-title">Selected storefronts</h2>
        <p>
          Explore the brands, browse their collections, and see the shopping
          experience.
        </p>
      </div>
      <span class="meta">{{
        compact
          ? String(featured.length).padStart(2, "0") + " SELECTED"
          : stores.length + " STORES"
      }}</span>
    </div>
    <ol class="store-featured">
      <li
        v-for="(store, index) in featured"
        :key="store.url"
        :class="{ 'store-lead': index < 1 }"
      >
        <a
          :href="store.url"
          target="_blank"
          rel="noopener noreferrer"
          class="store-preview-link"
          :aria-label="store.name + ' — visit store (opens in a new tab)'"
        >
          <div class="store-capture">
            <img
              v-if="store.image"
              :src="store.image"
              :alt="store.name + ' storefront preview'"
              :loading="index === 0 ? 'eager' : 'lazy'"
              width="1280"
              height="900"
            />
            <div v-if="!store.image" class="store-capture-unavailable">
              <SystemIcon name="store" />
              <strong>{{ store.name }}</strong>
              <span>Storefront preview unavailable</span>
            </div>
            <span class="store-open">Visit store <ArrowIcon /></span>
          </div>
          <div class="store-record">
            <div class="meta">
              <span>{{ store.category }}</span
              ><span>{{ String(index + 1).padStart(2, "0") }} / SELECTED</span>
            </div>
            <h3>{{ store.name }} <ArrowIcon /></h3>
            <p v-if="store.description">{{ store.description }}</p>
            <span class="store-domain">{{ domain(store.url) }}</span>
          </div>
        </a>
      </li>
    </ol>
    <div v-if="compact" class="actions">
      <NuxtLink to="/stores" class="button"
        >Explore all {{ stores.length }} stores <ArrowIcon
      /></NuxtLink>
    </div>
    <template v-else>
      <div class="store-section-heading store-directory-heading">
        <h2>More store work</h2>
        <span class="meta">{{ remaining.length }} DESTINATIONS</span>
      </div>
      <ol class="store-directory" :start="featured.length + 1">
        <li v-for="(store, index) in remaining" :key="store.url">
          <a
            :href="store.url"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="store.name + ' — visit store (opens in a new tab)'"
          >
            <span class="store-index">{{
              String(index + featured.length + 1).padStart(2, "0")
            }}</span>
            <span
              ><strong>{{ store.name }}</strong
              ><small>{{ domain(store.url) }}</small></span
            >
            <ArrowIcon />
          </a>
        </li>
      </ol>
      <p class="store-directory-note">
        Every store opens in a new browser tab.
      </p>
    </template>
  </section>
</template>
