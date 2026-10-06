---
name: Mohab Mohamed Portfolio
description: Clear portfolio chapters, large editorial statements, and legible product evidence.
colors:
  ink: "#171a18"
  ink-soft: "#252a26"
  ink-raised: "#303630"
  paper: "#f2efe6"
  paper-soft: "#e4dfd3"
  oxide: "#d36548"
  oxide-light: "#ed9c7d"
  lime: "#d8ee78"
  line-dark: "rgba(242, 239, 230, .2)"
  line-light: "rgba(23, 26, 24, .2)"
  text-muted: "#b8bbaf"
  text-on-paper: "#555c51"
  oxide-on-paper: "#96412c"
  sage: "#d5d8cb"
typography:
  display:
    fontFamily: "Anybody, Arial Narrow, sans-serif"
    fontSize: "clamp(3.15rem, 6.2vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-.035em"
  headline:
    fontFamily: "Anybody, Arial Narrow, sans-serif"
    fontSize: "clamp(2.65rem, 4.7vw, 4.75rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-.035em"
  statement:
    fontFamily: "Anybody, Arial Narrow, sans-serif"
    fontSize: "clamp(2.1rem, 3.3vw, 3.4rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-.035em"
  body:
    fontFamily: "Atkinson Hyperlegible, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.58
  body-large:
    fontFamily: "Atkinson Hyperlegible, Arial, sans-serif"
    fontSize: "clamp(1.16rem, 1.55vw, 1.52rem)"
    fontWeight: 400
    lineHeight: 1.5
  button:
    fontFamily: "Atkinson Hyperlegible, Arial, sans-serif"
    fontSize: ".95rem"
    fontWeight: 700
  navigation:
    fontFamily: "Atkinson Hyperlegible, Arial, sans-serif"
    fontSize: ".84rem"
    fontWeight: 400
rounded:
  square: "0"
spacing:
  space-1: "8px"
  space-2: "16px"
  space-3: "24px"
  space-4: "40px"
  space-5: "64px"
  space-6: "104px"
components:
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.button}"
    rounded: "{rounded.square}"
    padding: ".8rem 1.05rem"
  button-dark-hover:
    backgroundColor: "{colors.oxide}"
    textColor: "{colors.ink}"
  button-outline:
    backgroundColor: "transparent"
    typography: "{typography.button}"
    rounded: "{rounded.square}"
    padding: ".8rem 1.05rem"
  input-dark:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    rounded: "{rounded.square}"
    padding: ".85rem .95rem"
  system-map:
    backgroundColor: "{colors.ink-soft}"
    textColor: "{colors.paper}"
    padding: "clamp(24px, 3vw, 48px)"
---

# Design System: Mohab Mohamed Portfolio

## Overview

**Creative North Star: "The Production Record"**

The system presents complex engineering work with the confidence of an editorial record. Charcoal grounds and warm reading fields divide the content into distinct chapters. Large, compressed statements establish hierarchy; readable prose and precise relationships make the evidence understandable. Familiar page names and clear actions come first.

Composition stays flat and open. Horizontal rules, asymmetric columns, and changes of surface carry structure without repeated card containers. Oxide brings warmth to emphasis and actions; acid lime marks meaningful connections and states. The interface remains human and professional rather than imitating a terminal.

**Key Characteristics:**

- Clear page names and actions with large compressed display type.
- Charcoal and warm-paper passages with restrained oxide and rare lime emphasis.
- Flat editorial rows, horizontal rules, and asymmetric content relationships.
- Square controls and visible, surface-aware keyboard focus.
- Product schematics distinguish verified relationships from pending interface captures.

## Colors

The frontmatter records the actual shared palette from `assets/css/main.css`; descriptive roles below explain its use.

### Primary

- **Oxide:** warm emphasis and interaction color, including navigation underlines and primary-button hover. **Light Oxide** supports large emphasized phrases on dark fields.
- **Oxide on Paper:** the darker companion used for readable emphasis and focus on warm fields.

### Secondary

- **Acid Lime:** relationship headings, career dates, focus on dark fields, selection backgrounds, and contact feedback.

### Neutral

- **Charcoal Ink / Soft Ink / Raised Ink:** page ground, schematics and supporting chapters, then the third career chapter. These are flat fields, not shadow levels.
- **Warm Paper / Soft Paper:** light reading fields and changes of chapter tone. **Sage Paper** supplies a distinct neutral ground for the safety-system chapter.
- **Muted Text:** secondary prose on dark surfaces. **Text on Paper:** supporting text on warm fields. Local reading copy also uses an observed muted neutral without redefining the shared token.
- **Dark / Light Rules:** translucent foreground strokes for separators and control edges on their corresponding surfaces.

**The Surface-Aware Accent Rule.** Use Oxide on Paper for small light-field emphasis and focus; retain lime focus for dark fields.

## Typography

**Display Font:** Anybody with Arial Narrow and sans-serif fallback.  
**Body Font:** Atkinson Hyperlegible with Arial and sans-serif fallback.  
**Data Font:** Fira Code with ui-monospace and monospace fallback.

All three families are self-hosted WOFF2 assets in `public/fonts/`, loaded with `font-display: swap`. Anybody's compressed width (`font-stretch: 85%`) gives statements breadth and force without increasing reading density. Atkinson keeps descriptions and controls clear. Fira supplies dates and meaningful metadata, with tabular numerals where data requires alignment.

### Hierarchy

- **Display:** the largest statements and home identity.
- **Headline:** route introductions and major project or career headings.
- **Statement:** section headings and supporting editorial statements.
- **Body / Body Large:** ordinary prose and introductory paragraphs; the global reading measure is capped at 68ch, with shorter supporting columns where composition requires them.
- **Button / Navigation:** readable body-family controls with weight and rules carrying their hierarchy.

At 600px and below, the shared display scales become `clamp(2.9rem, 12vw, 4.5rem)`, `clamp(2.5rem, 10vw, 3.7rem)`, and `clamp(2rem, 8vw, 3rem)`. Routes apply additional sizing for their actual content. Preserve those deliberate fits rather than forcing every heading to the same mobile size.

**The Statement-and-Reading Rule.** Keep Anybody for statements and Atkinson for reading and controls; use Fira only when the content benefits from a data voice.

## Layout

The shared container reaches at most 1440px, including fluid inline gutters (`clamp(20px, 4.2vw, 76px)`). The six spacing steps in frontmatter supply the reused rhythm. Chapters use fluid vertical padding (`clamp(72px, 9vw, 144px)`); compact chapters use `clamp(56px, 6vw, 96px)`.

Wide layouts use unequal columns and distinct relationships: heading beside explanation, career dates beside a larger narrative, or project title beside context. Content rows and full-width schematics replace a default card grid. Short related lists may use equal columns when they convey a directory or sequence. Familiar page and section names remain plain and easy to scan; route-specific ordering belongs in the surface brief.

At 900px, shared section headers stack and desktop navigation becomes a mobile menu. Route-level two-column compositions commonly stack at 800px; 700px stacks project facts; 600px refines typography, rows, and schematics. Intermediate layouts at 1000px and 1100px preserve useful paired columns. Footer refinements occur at 500px; the home introduction has a 550px refinement.

Overflow handling keeps long titles, addresses, and grid children inside their columns. Coarse pointers receive a minimum 44px control target; standard buttons have a 52px minimum height. Section anchors account for the sticky header with a 96px scroll margin.

## Elevation & Depth

The system is flat at rest. Surface changes, horizontal rules, typographic scale, and whitespace convey depth. There are no glow fields or gradients. The recurring shadow is a soft neutral shadow on the sticky header after scrolling (`0 10px 24px rgba(0,0,0,.14)`); it separates moving page content from navigation.

**The Flat Chapter Rule.** Convey chapter hierarchy through field color, rules, and spacing; reserve the shipped soft shadow for scrolled navigation.

## Shapes

Buttons and inputs are square (`border-radius: 0`) with thin strokes. Schematics and reading fields have unrounded rectangular edges. Availability is expressed as ordinary supporting prose, without a decorative status shape. The declared but unused 12px radius variable is not a system token.

## Components

### Home: interactive editorial composition

Home deliberately extends the shared world rather than repeating the route-header pattern. A 12-column hero places staggered, uppercase Anybody lettering (78% width; maximum 10rem) beside an explicit five-technology index. The role, short introduction and project action remain separate, readable content. A four-part ruled information rail closes the hero; Featured Projects meets its lower edge on desktop. On mobile, introduction and actions precede the technology index and two-column stats. Download appears only when the original PDF is available, with no duplicate Home navigation download.

The owner's requested technical labels and 01–04 chapter numbers are a Home-specific exception, not a change to the other routes. Three sparse measuring guides accompany the desktop crosshair: pointer movement changes only the guide lines and local coordinate readout. It does not move or hide essential text. Touch and reduced-motion environments omit this interaction.

Featured HSE, Education and Orbit use split, reversed and full-width compositions respectively. Project titles, contribution, technology and case-study links are visible at rest. Existing verified schematics remain clearly distinguished from actual screenshots. A charcoal, asymmetric typographic stack follows; capability rows return to paper with descriptions always visible. The human statement and direct email/WhatsApp closing replace a repeated shared footer headline on Home only.

Home motion uses 450–650ms exponential easing: one name entrance, two already-visible section reveals, restrained arrows and 1.02 image scaling. No animation dependency was added. The hero and page passed visual checks at 375, 430, 768, 1024, 1440 and 1920px, including 200% text sizing, touch and reduced-motion checks.

### Buttons and text links

Square actions pair Atkinson bold text with a generous gap and a one-pixel edge. The dark variant uses paper text on ink; hover changes to oxide with ink text. The outline variant inherits its field's text color and switches to ink/paper on hover. Specific dark contexts invert to paper/ink, while contact-form submit turns lime/ink. Buttons lift only 2px on hover.

Text links use a one-pixel bottom rule, bold text, and a widening inline gap on hover. The global visible focus treatment is a two-pixel outline offset by four pixels, lime on dark fields and dark oxide on paper. The shared arrow is an authored inline SVG with a 1.7px rounded stroke; rotation provides up-right, left, and down directions.

### Inputs / Fields

Transparent, square fields expose their context rather than becoming inset cards. Dark fields use paper text, a translucent rule, padding from the input token, and a lime caret. Focus strengthens the border to lime. Labels remain visible above fields; textarea height starts at 140px and allows vertical resizing. Contact feedback is a lime status line; native required/email validation remains the current validation behavior. No custom disabled or error palette is established.

### Navigation

The sticky charcoal rail has an 80px desktop height and shows all seven familiar route names. Desktop links use muted readable text with a fine oxide underline for hover and active states. At 900px, the rail becomes 70px and a square-cornered text button labeled Menu or Close opens a full-height charcoal menu with large display links. The button is 48px high and at least 72px wide. The implementation supports Escape, focus containment, and an inert background while open.

### Product relationships

The reusable product-media figure presents a screenshot when one exists, otherwise a charcoal schematic with generous padding. Education uses an origin-and-branches relationship, Orbit uses a lifecycle, and HSE uses ordered investigation and action stages. Readable text, lime headings, and thin rules carry the diagrams. A caption explicitly states when a schematic is not an interface screenshot.

### Editorial rows and skill categories

Featured work uses full-width linked rows with large Anybody project titles, explanatory body text, and a concise category; hover uses darker oxide on paper. Secondary projects use open ruled articles with an explicit type, role, technology stack, and a separate action. Those articles move from three columns to two at 900px and one at 600px. Skill categories use a named display heading beside a wrapping technology list; the owner's requested 01–05 numbers are inline parts of the category headings, not standalone eyebrows or a general section-number rule.

Shared interaction transitions use the 360ms duration and exponential ease-out curve recorded in the sidecar. Reveals default to visible content and animate only under `prefers-reduced-motion: no-preference`; reduced motion disables animation, transitions, and smooth scrolling. Route fades and menu movement retain their smaller local durations.

## Do's and Don'ts

### Do:

- Do give statements space and preserve the contrast between display type and readable prose.
- Do keep page names, section names, and action labels clear before adding creative phrasing.
- Do use warm fields and charcoal fields to make distinct chapters.
- Do use surface-aware focus and keep actionable controls reachable by keyboard.
- Do show product relationships as meaningful diagrams and label pending screenshots honestly.
- Do preserve local responsive fits for real titles, long addresses, and schematics.

### Don't:

- Don't introduce card grids as the default page structure.
- Don't introduce gradients, glow, terminal chrome, or proficiency scores.
- Don't turn the unused radius variable into rounded controls or panels.
- Don't use monospace as a replacement for readable body copy.
- Don't promote decorative kickers or Unicode icon glyphs into reusable system patterns.
