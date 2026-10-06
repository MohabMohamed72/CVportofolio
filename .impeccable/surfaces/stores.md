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

**Story:** A separate Stores application complements the frontend Projects directory. Prime Story and Bellora lead in split previews, followed by BKRJ, Augoo Coffee, Snacko, Tuhfa Fn, Family Care UAE, Striker, and Ferza in paired previews. A concise 29-row directory completes the 38 unique owner-supplied destinations. The repeated Augoo URL is omitted. Every storefront uses a native link that opens a new tab.

**Home expression:** PortfolioTracks switches Home between `/?work=frontend` and `/?work=stores`. Store focus changes the role, introduction, platform stack, primary action, and footer, and replaces featured frontend projects with the compact nine-store showcase. Its hero provides Contact and the supplied e-commerce CV download alongside View Stores. The Stores directory also offers the e-commerce CV; the frontend view and Projects directory offer the frontend CV. The CV route makes the owner-supplied full CV (`Mohab_Mohamed_Ecommerce_CV_v1.0.pdf`) the primary download and offers the original two CVs separately. Dedicated pages switch directly between `/projects` and `/stores`.

**Navigation and finish:** Stores appears in the desktop launcher, taskbar, and mobile menu. Featured headings use the shared ArrowIcon; `/stores` omits the optional PageHeader label. Keep essential descriptions and destinations readable without hover. Retain the shared responsive and accessible behavior.

## Evidence and verification

Eight authentic browser screenshots captured on 2026-10-07 at 1280 × 900 ship under `public/images/stores/`. `SOURCES.md` records the owner-supplied source URLs; each JPEG also carries embedded origin metadata. These are storefront captures, separate from the production application schematics.

Browser verification for this extension covers 1440, 768, and 390 widths, with no horizontal overflow, hydration errors, or browser errors. Checks include destination count, featured order, loaded images, Home focus switching, and mobile menu navigation. Production build passes. Existing contact Node types prevent the repository typecheck from passing without the absent `@types/node`; an independent Vue SFC check with temporary external Node types passes. These results do not imply physical device, Safari, or additional viewport coverage.

Family Care UAE remains featured with its owner-supplied link and a labeled unavailable preview; the domain could not be loaded during this update. Store data marks featured entries explicitly, so adding regular stores does not shift the featured group.
