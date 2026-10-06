# Home hero and contact verification — 2026-10-06

Scope: Home hero, transition into Featured Projects, Contact page/form, shared CV download availability, and server email integration. Existing unrelated-page changes were preserved.

## Passed

- Production server build and TypeScript check.
- Four contact tests: field limits/formats, escaped email HTML, Unicode WhatsApp encoding, and endpoint behavior with mocked Resend success/failure.
- Endpoint tests cover validation, same-origin enforcement, honeypot, reply-to, recipient, missing configuration, and rate limiting.
- Ten route/width checks for Home and Contact at 375, 430, 768, 1024, and 1440px; no overflow.
- Ten checks at 200% root text size; no overflow.
- Client field errors, submitting/disabled state, success/reset, failure/preserved draft, prefilled WhatsApp, and reduced-motion behavior.
- Built production endpoint responds 400 for invalid input and 503 without email configuration, rather than claiming successful delivery.
- No key/configuration/provider markers in compiled public output or rendered page payload.
- No “PDF pending” rendered. Download is hidden while the original PDF is absent.
- At 1440×900, the first project begins at approximately 893px, providing the requested glimpse below the hero.

## Remaining configuration

Live email was not sent: the owner will add RESEND_API_KEY and CONTACT_FROM to local and Vercel environments. CONTACT_EMAIL defaults to the supplied Gmail address. Resend's onboarding sender can only deliver to its account owner's address; production sending needs a verified sender domain. Provider integration tests mock network responses and do not prove inbox delivery.

The per-instance rate limit is basic abuse protection, not a distributed global limit. Deployment should also use platform WAF/rate limits. No lint command is configured. npm reported 33 dependency advisories; no broad automatic dependency upgrade was performed. Browserslist data is stale but does not prevent build success. Physical-device and screen-reader testing were not performed.
