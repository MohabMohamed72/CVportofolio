---
version: 1
slug: "pages-index-vue"
primary_target: "pages/index.vue"
related_targets: ["pages/projects/index.vue","pages/projects/[slug].vue","pages/about.vue","pages/experience.vue","pages/skills.vue","pages/contact.vue","pages/cv.vue"]
---

# Portfolio redesign

Scope: all portfolio routes, shared navigation and footer, case studies, and web CV. Visitor mode: Experience. Audience: recruiters and engineering managers seeking evidence of production frontend engineering. Action: inspect major systems, then contact Mohab by email.

## Direction contract

**THESIS:** A familiar portfolio journey with an uncommon editorial treatment: each route is a distinct chapter in a record of complex systems delivered. Refuse the stock hero, equal card grids, and generic project modal.

**OWN-WORLD:** Charcoal ground, warm off-white reading fields, restrained oxide red, rare acid-lime state cues. Wide, compressed display type and exceptionally readable body copy; captions, rules, and metadata are precise. Screenshots and functional workflow diagrams carry proof. The palette works across dark and light passages without glow or fake terminal chrome.

**STORY:** Home states the engineering focus and moves rapidly into Education, Orbit, and HSE. Case studies explain context, role, system, complexity, and result. About traces engineering to teaching to frontend work. Skills reveal relationships, experience reads as chapters, and Contact makes email immediate. CV offers a readable web overview with original PDF actions when supplied.

**FIRST VIEWPORT:** Mohab Mohamed, Frontend Engineer, a plain positioning statement, Vue/Nuxt/TypeScript/React, and View Projects/Contact Me actions are immediately visible. Featured Projects follows the hero directly. Workflow relationships are secondary explanatory media on project pages, never a prerequisite for understanding the portfolio.

**FORM:** User-chosen conventional portfolio structure (canon) at full craft, from direction seed `05b9da1b`. The code-first build keeps routes straightforward and lets composition, imagery, type, and interaction supply character.

**FINISH:** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

Unresolved assets: actual interface screenshots and CV PDF are to be uploaded by the owner. Existing project details in the brief were confirmed as personally delivered. Do not fabricate media or metrics while awaiting uploads.

## Home-only composition replacement — 2026-10-06

The owner replaces the prior static hero and entire Home composition, not the site's palette or other routes. Name is staggered, uppercase condensed display; role and concise positioning remain plain; five explicit technologies form an index. Desktop hero targets 85–95vh with stats and the next chapter near its edge. One pointer crosshair reflects local screen coordinates, with no content movement and no touch/reduced-motion execution. Mobile reorders introduction/actions before the technology index and stats. HSE, Education, and Orbit have split, reversed, and full-width features respectively. Verified schematics substitute honestly for absent screenshots. Dark typographic stack, cream expertise rows with always-visible descriptions, a human statement, and a dark direct-email/WhatsApp close form the remaining chapters. Navigation stays conventional; only Home suppresses redundant shared closing and download actions. The original PDF remains unavailable; no placeholder CTA is rendered.

Finish verification: Home was run and visually inspected at 375/430/768/1024/1440/1920px. A split project-heading word and zoom-only arrow overflow were corrected; all six widths also pass 200% text-size overflow assertions. The production build passes hydration, visible keyboard focus, case-study navigation/back restoration, crosshair visibility and no-JavaScript content checks. Touch/reduced-motion disable the guides. Typecheck, build and four existing contact regression tests pass. No new hook suppressions were added. Original PDF and real interface captures remain owner-supplied assets, not fabricated proof.

## Clarity correction — 2026-10-06

Clear first, creative second. Conventional visible navigation names: Home, About, Skills, Projects, Experience, Contact, CV. Each page identifies its purpose immediately. Home exposes name/role/positioning/stack and View Projects/Contact Me actions, then featured projects, capabilities and experience. Skills prioritizes five explicit text categories before relationships. Project entries expose title/type/description/role/technology/action without clicks. Case studies use explicit Overview, Problem, My Role, Key Features, Technical Challenges, Architecture / Implementation, Technology, Screenshots and Outcome headings. Contact exposes email/location/socials first. Large statements remain desired, but never delay essential information. No essential content depends on hover or animation.
