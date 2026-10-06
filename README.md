# Mohab Mohamed — Portfolio

Nuxt 3 portfolio for a frontend engineer building complex production applications. The interface uses self-hosted Anybody, Atkinson Hyperlegible and Fira Code, charcoal/warm-paper surfaces, restrained oxide and lime, full-page case studies, and a web-native CV.

## Development

```bash
npm install
npm run dev
npm run build
npx tsc --noEmit
```

`npm run build` creates a server-capable Nuxt deployment. Vercel detects its server functions automatically; do not use `nuxt generate` or a static-only preset when deploying the contact API. No deployment was performed.

## Routes and content

- Home, Projects, About, Experience, Skills, Contact, and CV.
- Production case studies: `/projects/education-system`, `/projects/orbit-system`, `/projects/hse-management-system`.
- Verified major project content lives in `composables/useCaseStudies.ts`.
- Global tokens: `assets/css/main.css`. Design reference: `DESIGN.md` and `.impeccable/design.json`.
- Contact posts to `/api/contact`, which sends through Resend on the server. WhatsApp is an independent, prefilled contact option.

## Contact email setup

Set these server-only values in `.env` locally and in Vercel's environment settings, then redeploy:

```dotenv
RESEND_API_KEY=your-private-key
CONTACT_EMAIL=mohabmohamedd772@gmail.com
CONTACT_FROM=onboarding@resend.dev
```

Never place these in `runtimeConfig.public` or a `NUXT_PUBLIC_` variable. The private Nuxt equivalents `NUXT_RESEND_API_KEY`, `NUXT_CONTACT_EMAIL`, and `NUXT_CONTACT_FROM` are also supported. `.env` is ignored by Git. The sender must be approved by Resend. `onboarding@resend.dev` is for testing only and can deliver only to the email associated with your Resend account; for production use a sender on a verified domain.

The endpoint trims/validates inputs, escapes HTML, sets reply-to, rejects cross-origin browser requests, checks a honeypot, and limits each server instance to five submissions per IP per minute. Add Vercel WAF/distributed rate limiting for stronger production spam protection; instance memory is not a durable global limit. Missing configuration or provider rejection produces a genuine error, never fake success. No provider request is made in tests: delivery responses are mocked.

Run `npm run test:contact` (Node 22.6+), `npm run typecheck`, and `npm run build`. There is no configured lint command in this repository. Verify a real delivery after configuring credentials. Resend should be registered with the recipient email if using its testing sender.

## Original assets still needed

No actual interface screenshots or original CV PDF have been supplied. The displayed product diagrams are explicitly labeled schematics, not reconstructed screenshots.

1. Put approved project captures under `public/images/projects/`, then set each case study's optional `screenshot` field to its public URL. Use sanitized captures without private customer data. The media component reserves a 16:10 area and does not crop the image.
2. Put the original PDF at `public/cv/Mohab-Mohamed-CV.pdf`. The CV page enables Download PDF and Open original PDF only when that URL returns PDF content.
3. For richer galleries, provide filenames, screen captions and permission to publish; don't substitute decorative stock imagery for interface proof.

Self-hosted font sources and licenses live in `public/fonts/`.

## Verification scope

Chromium browser checks cover 375, 430, 768, 1024, 1280, 1440 and 1920 widths, plus 200% root text enlargement at375. Emulated touch/keyboard behavior is checked; physical iOS/Android devices and Safari are not verified. Original image loading cannot be assessed until the actual assets are supplied.
