# Mohab Mohamed — Portfolio

MOHAB_OS is an original Nuxt 3 retro operating-system portfolio for a frontend developer building complex production applications. Self-hosted Silkscreen and Fira Code, amber application windows, a once-per-session boot, selectable project directory, persistent taskbar, mobile system menu, optional CRT treatment and a web-native CV form the shared interface. No animation library was added.

## Development

```bash
npm install
npm run dev
npm run build
npm run typecheck
npm run test:contact
```

`npm run build` creates a server-capable Nuxt deployment. Vercel detects its server functions automatically; do not use `nuxt generate` or a static-only preset when deploying the contact API. No deployment was performed.

## Vercel deployment preparation

- Framework preset: Nuxt. Build command: `npm run build`. Keep output directory detection automatic; do not override it to `.output/public`.
- Nitro's preset is intentionally unset so Vercel detection produces server functions, while a local build produces a Node server.
- `POST /api/contact` must remain a server route, not a prerendered or static page. The obsolete static-only `netlify.toml` was removed; it contained only the generate command, public output directory, and SPA fallback.
- Set `RESEND_API_KEY`, `CONTACT_FROM`, and `CONTACT_EMAIL` in the Vercel environments you intend to use. Keep all of them server-only; the recipient defaults to `mohabmohamedd772@gmail.com`.
- Stop the dev server in this worktree before preparing types or building; these commands regenerate the same `.nuxt` directory. Do not run multiple dev servers against this worktree.
- Generated `.nuxt`, `.nuxt-build`, `.output`, `.vercel`, dependency, and distribution directories are not source and must not be committed. Secret `.env` files are ignored; `.env.example` contains placeholders only.

## Routes and content

- Home (`/`), Projects (`/projects`), E-commerce Stores (`/stores`), About, Experience, Skills, Contact, and CV. Stores is available in the desktop launcher, taskbar, and mobile menu.
- Production case studies: `/projects/education-system`, `/projects/orbit-system`, `/projects/hse-management-system`.
- Verified major project content lives in `composables/useCaseStudies.ts`.
- Global tokens: `assets/css/main.css`. Design reference: `DESIGN.md` and `.impeccable/design.json`.
- Contact posts to `/api/contact`, which sends through Resend on the server. WhatsApp is an independent, prefilled contact option.

## Sharing with recruiters and clients

Append these paths to the deployed portfolio URL:

- `/?work=frontend`: the frontend homepage, with production projects and the original frontend CV action. Share with frontend recruiters and engineering managers.
- `/?work=stores`: the e-commerce homepage, with the store developer role, Salla / WordPress / Shopify / Zid stack, View Stores and Contact actions, selected storefronts, and matching footer copy. Share with e-commerce recruiters, teams, and brands.
- `/projects` and `/stores`: direct links to the respective work directories. The shared “Explore my work” navigation switches between them; on Home it switches the shareable homepage focus.

`composables/useStores.ts` holds 25 unique owner-supplied destinations; the repeated Augoo URL was removed. The featured order is Prime Story, BKRJ, Augoo Coffee, Snacko, and Tuhfa Fn. `/stores` leads with Prime Story, follows with four paired previews, then lists the other 20 destinations. Store links are native anchors that open a new tab. Home's store view uses the compact five-preview showcase and links to the full directory.

## Contact email setup

Set these server-only values in `.env` locally and in Vercel's environment settings, then redeploy:

```dotenv
RESEND_API_KEY=your-private-key
CONTACT_EMAIL=mohabmohamedd772@gmail.com
CONTACT_FROM=your-approved-sender@example.com
```

Never place these in `runtimeConfig.public` or a `NUXT_PUBLIC_` variable. The private Nuxt equivalents `NUXT_RESEND_API_KEY`, `NUXT_CONTACT_EMAIL`, and `NUXT_CONTACT_FROM` are also supported. `.env` is ignored by Git. The sender must be approved by Resend. `onboarding@resend.dev` is for testing only and can deliver only to the email associated with your Resend account; for production use a sender on a verified domain.

The endpoint trims/validates inputs, escapes HTML, sets reply-to, rejects cross-origin browser requests, checks a honeypot, and limits each server instance to five submissions per IP per minute. Add Vercel WAF/distributed rate limiting for stronger production spam protection; instance memory is not a durable global limit. Missing configuration or provider rejection produces a genuine error, never fake success. No provider request is made in tests: delivery responses are mocked.

Run `npm run test:contact` (Node 22.6+), `npm run typecheck`, and `npm run build`. There is no configured lint command in this repository. Verify a real delivery after configuring credentials. Resend should be registered with the recipient email if using its testing sender.

## Original assets

The original two-page CV was recovered from the `enhance` branch at `public/documents/mohab-mohamed-frontend-cv.pdf`. The shared CV link uses `/documents/mohab-mohamed-frontend-cv.pdf`; download and open actions appear after PDF availability is checked. Do not replace the original with a generated document.

Actual interface screenshots are still needed for the production application case studies. Their displayed product diagrams are explicitly labeled schematics. The five featured storefronts have authentic 1280 × 900 browser captures; source URLs and capture date are recorded in `public/images/stores/SOURCES.md` and embedded in each JPEG's provenance metadata.

1. Put approved project captures under `public/images/projects/`, then set each case study's optional `screenshot` field to its public URL. Use sanitized captures without private customer data. The media component reserves a 16:10 area and does not crop the image.
2. Keep the original PDF at `public/documents/mohab-mohamed-frontend-cv.pdf`. All PDF actions share the path in `composables/useCvDocument.ts`.
3. For richer galleries, provide filenames, screen captions and permission to publish; don't substitute decorative stock imagery for interface proof.

Self-hosted font sources and licenses live in `public/fonts/`.

## Verification scope

The earlier MOHAB_OS verification covered its ten existing routes at 375, 390, 430, 768, 1024, 1440 and 1920 widths, including session-only boot/skip, window restoration, CRT preference persistence, directory selection, mobile menu keyboard behavior, reduced motion, contact validation and mocked success/failure, encoded WhatsApp content, the real PDF, and live API validation/honeypot/missing-configuration responses.

The stores extension was checked in the browser at 1440, 768, and 390 widths: no horizontal overflow, hydration errors, or browser errors; correct destination count and featured order; all five images loaded; homepage focus switching and mobile navigation worked. Production build passes. The repository's `npm run typecheck` currently fails on existing contact Node types because `@types/node` is absent; an independent Vue SFC check using temporary external Node types passes. No email is sent during testing. Physical iOS/Android devices and Safari are not verified; production application screenshot loading remains unverified until captures are supplied.
