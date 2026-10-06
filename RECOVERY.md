# Recovery and Vercel preparation

## Scope and provenance

Recovery only. No MOHAB_OS redesign, production deployment, Git push, merge, or changes to existing branch tips.

- Worktree: /home/techlab/projects/CVportofolio-mohab-os
- Branch: mohab-os
- Base: enhance-v2, 4d20c2ba3b9e943f4bef722e9da2eec3496c2502
- Original worktree remains /home/techlab/projects/CVportofolio on enhance-v3 at 5692631.
- CV source: enhance at 7b646e4, public/documents/mohab-mohamed-frontend-cv.pdf. Only that file was restored; no branch merge.
- Restored PDF: two readable pages, 74,735 bytes, Git blob 9fa8f7e71a870169c117e78e9f111daf0302c9a2. Recovered file hash matches the source blob exactly.

## Source changes

- .gitignore: added .nuxt/ and .nuxt-build/; retained .output, dist, node_modules, .vercel and all existing ignore rules. Secret .env and .env.* remain ignored; .env.example remains trackable.
- .env.example: CONTACT_FROM is now an empty placeholder; no credentials added.
- composables/useCvDocument.ts: canonical PDF URL is /documents/mohab-mohamed-frontend-cv.pdf, shared by Home, navigation and CV actions.
- pages/cv.vue: removed the missing-PDF placeholder and its unused style; no visual redesign.
- public/documents/mohab-mohamed-frontend-cv.pdf: restored original PDF.
- netlify.toml: removed obsolete npm run generate / .output/public static configuration and SPA fallback. No other functionality existed in this file; it remains recoverable from base commit 4d20c2b.
- README.md: documented automatic Vercel server builds, private environment values, original PDF, and generated-cache precautions.
- RECOVERY.md: this verification report and exact generated-file inventory.

nuxt.config.ts already had nitro: {} and private runtimeConfig in enhance-v2. It was preserved unchanged, as were server/api/contact.post.ts, server/utils/contactEmail.ts, ContactForm.vue, shared/contact.ts, all contact tests, Home components, project routes/data, fonts and design documentation. No netlify-static preset remains in application configuration.

## Verification

- npm ci: succeeded, preserving the lockfile.
- npm run typecheck: passed.
- npm run test:contact: all four tests passed. External Resend requests are mocked; recipient and visitor Reply-To, validation, escaped HTML, honeypot suppression, success/failure, absent configuration and per-instance throttling are checked.
- npm run build: passed with the local node-server preset and bundled contact API.
- VERCEL=1 npm run build (with preset overrides unset): passed with automatically detected vercel preset, Node 22 server function and filesystem/fallback routing. The generated function contains chunks/routes/api/contact.post.mjs; static output contains the real CV. This was a local build, not deployment or Vercel account access.
- Production HTTP/browser check: all seven main routes and three major case studies return 200; no browser runtime errors.
- PDF HTTP response: application/pdf, 200, 74,735 bytes; all observed PDF links use the restored file. Download/open actions work on desktop and mobile; no PDF pending placeholder.
- Home: no horizontal overflow at 375, 430, 768, 1024, 1440 and 1920px with the restored Download CV action enabled.
- Contact browser check: three field-specific required errors; mocked success resets form; mocked failure preserves input and displays feedback.
- Live production contact endpoint without credentials: invalid payload 400, honeypot 200 without email, valid request 503 with genuine missing-service feedback. No live email was attempted.
- WhatsApp: https://wa.me/201007599123; properly encoded name, email, subject, message and optional phone, including Arabic and punctuation, verified.
- Public bundles from both Node and Vercel builds: no RESEND_API_KEY, resendApiKey, CONTACT_FROM or test-key marker found. No real key was supplied.
- git diff --check: passed. No lint or generic test script exists; no scripts invented.

## Manual deployment requirements and unresolved issues

Use Vercel's Nuxt framework preset, npm run build, and automatic output detection. Do not deploy .output/public alone or use npm run generate for this API-enabled app. Set RESEND_API_KEY, CONTACT_FROM (an approved sender), and CONTACT_EMAIL=mohabmohamedd772@gmail.com in the intended Vercel environments. The onboarding sender may be used only within Resend's testing restrictions; real production mail should use a verified sender domain. Test actual inbox delivery after credentials and deployment are configured.

Existing locked dependencies produce 33 npm audit findings: 2 low, 4 moderate, 21 high, 6 critical (also reported with --omit=dev because framework/build packages are production-classified). These were not introduced by recovery. No dependency versions were changed and no automatic audit fix was applied. Security triage is recommended before production deployment. Browserslist data is outdated. Screenshots of actual product interfaces are still not supplied. The current per-instance contact rate limiter is not a globally durable serverless limiter; Vercel WAF/distributed protection is a later production hardening decision.

## Generated files removed from Git tracking

Exactly 58 files, restricted to .nuxt/ and .output/, were removed from the new worktree's index using git rm --cached. No source directory was removed. Generated files may be regenerated or overwritten by normal builds; old contents remain available in the base commit. Existing branches and the original checkout were not cleaned.

```text
.nuxt/app.config.mjs
.nuxt/components.d.ts
.nuxt/dev/index.mjs
.nuxt/dev/index.mjs.map
.nuxt/imports.d.ts
.nuxt/manifest/latest.json
.nuxt/manifest/meta/dev.json
.nuxt/nitro.json
.nuxt/nuxt.d.ts
.nuxt/nuxt.json
.nuxt/schema/nuxt.schema.d.ts
.nuxt/schema/nuxt.schema.json
.nuxt/tsconfig.json
.nuxt/tsconfig.server.json
.nuxt/types/app-defaults.d.ts
.nuxt/types/app.config.d.ts
.nuxt/types/build.d.ts
.nuxt/types/builder-env.d.ts
.nuxt/types/components.d.ts
.nuxt/types/imports.d.ts
.nuxt/types/layouts.d.ts
.nuxt/types/middleware.d.ts
.nuxt/types/nitro-config.d.ts
.nuxt/types/nitro-imports.d.ts
.nuxt/types/nitro-layouts.d.ts
.nuxt/types/nitro-middleware.d.ts
.nuxt/types/nitro-nuxt.d.ts
.nuxt/types/nitro-routes.d.ts
.nuxt/types/nitro.d.ts
.nuxt/types/plugins.d.ts
.nuxt/types/schema.d.ts
.nuxt/types/vue-shim.d.ts
.output/nitro.json
.output/public/_nuxt/builds/latest.json
.output/public/_nuxt/builds/meta/dev.json
.output/public/_nuxt/error-404.DL_4WIao.css
.output/public/_nuxt/error-500.I1Dtv2V5.css
.output/server/chunks/_/error-500.mjs
.output/server/chunks/_/error-500.mjs.map
.output/server/chunks/build/client.precomputed.mjs
.output/server/chunks/build/client.precomputed.mjs.map
.output/server/chunks/build/error-404-styles.CiJjK6WX.mjs
.output/server/chunks/build/error-404-styles.CiJjK6WX.mjs.map
.output/server/chunks/build/error-500-styles.ulHNpcF1.mjs
.output/server/chunks/build/error-500-styles.ulHNpcF1.mjs.map
.output/server/chunks/build/server.mjs
.output/server/chunks/build/server.mjs.map
.output/server/chunks/build/styles.mjs
.output/server/chunks/build/styles.mjs.map
.output/server/chunks/nitro/nitro.mjs
.output/server/chunks/nitro/nitro.mjs.map
.output/server/chunks/routes/renderer.mjs
.output/server/chunks/routes/renderer.mjs.map
.output/server/chunks/virtual/_virtual_spa-template.mjs
.output/server/chunks/virtual/_virtual_spa-template.mjs.map
.output/server/index.mjs
.output/server/index.mjs.map
.output/server/package.json
```
