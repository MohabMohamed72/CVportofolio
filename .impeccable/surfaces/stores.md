---
version: 1
slug: "stores"
primary_target: "pages/stores.vue"
related_targets: ["pages/index.vue", "components/PortfolioTracks.vue", "components/StoreShowcase.vue", "components/HomeHero.vue", "composables/useStores.ts"]
---

# E-commerce portfolio extension

Experience mode: Experience. Audience: e-commerce recruiters, teams, and brands evaluating Mohab's store work. Primary journey: inspect a real storefront, browse the directory, then contact Mohab.

## Direction contract

**World:** Extend the incumbent MOHAB_OS near-black and warm amber interface, shared typography, native navigation, and focus treatment. This is an ordinary extension; existing DESIGN.md and `.impeccable/design.json` are preserved. Existing documentation drift does not authorize a visual-system rewrite.

**Story:** A separate Stores application complements the frontend Projects directory. Prime Story leads in a split preview, followed by BKRJ, Augoo Coffee, Snacko, and Tuhfa Fn in paired previews. A concise 20-row directory completes the 25 unique owner-supplied destinations. The repeated Augoo URL is omitted. Every storefront uses a native link that opens a new tab.

**Home expression:** PortfolioTracks switches Home between `/?work=frontend` and `/?work=stores`. Store focus changes the role, introduction, platform stack, primary action, and footer, and replaces featured frontend projects with the compact five-store showcase. Its hero provides Contact alongside View Stores. Dedicated pages switch directly between `/projects` and `/stores`.

**Navigation and finish:** Stores appears in the desktop launcher, taskbar, and mobile menu. Featured headings use the shared ArrowIcon; `/stores` omits the optional PageHeader label. Keep essential descriptions and destinations readable without hover. Retain the shared responsive and accessible behavior.

## Evidence and verification

Five authentic browser screenshots captured on 2026-10-07 at 1280 × 900 ship under `public/images/stores/`. `SOURCES.md` records the owner-supplied source URLs; each JPEG also carries embedded origin metadata. These are storefront captures, separate from the production application schematics.

Browser verification for this extension covers 1440, 768, and 390 widths, with no horizontal overflow, hydration errors, or browser errors. Checks include destination count, featured order, loaded images, Home focus switching, and mobile menu navigation. Production build passes. Existing contact Node types prevent the repository typecheck from passing without the absent `@types/node`; an independent Vue SFC check with temporary external Node types passes. These results do not imply physical device, Safari, or additional viewport coverage.
