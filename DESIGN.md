---
name: MOHAB_OS
description: An original personal frontend operating system. Clear portfolio content inside a restrained, amber retro-computer interface.
colors:
  background: "#10120f"
  panel-background: "#181c16"
  panel-raised: "#20251d"
  amber: "#ffbd66"
  amber-muted: "#c5a77e"
  text-primary: "#f2eadb"
  text-secondary: "#bbb5a6"
  border: "#665742"
  border-subtle: "#343b2e"
  danger: "#ffad98"
  success: "#c4d694"
typography:
  display:
    fontFamily: "Silkscreen, monospace"
    fontWeight: 400
    lineHeight: 1.15
  body:
    fontFamily: "Fira Code, monospace"
    fontSize: "14px"
    lineHeight: 1.75
rounded:
  square: "0"
---

# MOHAB_OS

The portfolio is a personal frontend operating system, not an imitation of a real commercial OS or a command-line emulator. The reference supplied by the owner informs interaction craft; the fonts, icon drawings, composition, content, application structure and controls are original.

## Clear content, system presentation

Navigation always says Home, About, Skills, Projects, Experience, Contact and CV. System filenames supplement, never replace, these names. Every route has one explicit h1 and readable content that does not require hover, typing, motion or a custom command. Native links and buttons keep their expected behavior.

## Visual system

Near-black canvas, warm amber interaction color, off-white priority text, muted amber metadata and readable neutral supporting text. Muted green is reserved for actual availability/status or successful form feedback. Errors have a warm, contrasting danger tone. Borders distinguish applications, selected records and actual controls; do not surround every paragraph with a frame.

Self-hosted Silkscreen supplies compact pixel headings and labels. Fira Code supplies readable prose, lists and data. Licenses and source URLs are in public/fonts. No remote font request is needed at runtime.

## Application composition

- Home: identity window, six application shortcuts, live session information and three featured production projects. The full name, frontend role and primary frameworks are immediately visible.
- About: user facts alongside a professional summary; open education records and focus areas.
- Skills: installed-package categories with explicit technology names. No percentages, fake meters or icon-only skill inventory.
- Projects: selectable directory and preview record with role, features, stack and case-study links. Mobile selection scrolls to the chosen preview.
- Project details: an application record followed by readable, anchored problem/features/implementation/technology/challenges/outcome sections. Next-project navigation cycles the three major case studies.
- Experience: dated work-history records, readable responsibilities and technologies; no imaginary employers or metrics.
- Contact: direct communication channels next to a functional transmission form. Server validation, honeypot, Resend, reply-to and WhatsApp encoding are preserved.
- CV: web-native document view plus the recovered original two-page PDF. Download and open actions share the verified file path.

## Interaction and motion

Boot is a 2.2-second presentation of local interface startup, not a simulated backend download. Enter or Escape skips it immediately. It runs once per session and is skipped under reduced motion. Native dialogs provide focus confinement and keyboard dismissal.

Route changes use a 120ms closing wipe and 340ms opening wipe, with a short, non-blocking system-request indicator. Project previews transition for 120ms. Buttons depress, arrows move subtly and selected directory entries invert to amber. Home session information can actually be minimized and restored; no inert imitation close/maximize buttons are shown.

The desktop pointer accent follows the native pointer; it never replaces or hides it. It is disabled for touch and reduced motion. CRT scanlines and vignette are subtle, lighter on mobile and reduced motion, and can be disabled through a persistent session preference. There is no ongoing screen flicker, artificial audio or WebGL requirement.

## Responsive and accessibility contract

Desktop uses a persistent taskbar. Mobile uses the same clear labels in a native dialog menu, with a compact bottom status rail. There are no overlapping mobile windows or essential horizontal scroll controls. All routes must remain readable at 375, 390, 430, 768, 1024, 1440 and 1920 pixels.

Use semantic headings, explicit labels, visible amber focus, aria-current, live form feedback and route announcements. Essential content is rendered server-side. CSS reduced-motion rules remove animations, smooth scrolling, cursor effects and route progress.

## Evidence and protected functionality

The original PDF remains /documents/mohab-mohamed-frontend-cv.pdf. Project logos are not interface screenshots. Workflow diagrams are explicitly labeled schematics; actual screenshots can be added through the existing optional screenshot field. Do not manufacture images, achievements or quantified outcomes.

Keep server/api/contact.post.ts, server/utils/contactEmail.ts, shared/contact.ts, private runtime configuration and existing contact tests intact. Production requires Resend credentials and an approved sender configured outside the client.
