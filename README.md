# Mohab Mohamed — Portfolio

A modern, responsive portfolio website built with **Nuxt 3**, featuring smooth animations, dark theme, and showcasing frontend development skills & AI-powered development tools.

## 🎨 Design
- **Primary Color:** `#42d392`
- **Accent Color:** `#647eff`
- **Gradient:** `linear-gradient(315deg, #42d392 25%, #647eff)`
- **Font:** Outfit + JetBrains Mono
- **Theme:** Dark

## 📄 Pages
- **Home** — Hero section with typing animation, overview cards, tech marquee
- **About** — Bio, personal details, education, "what I bring" grid
- **Skills** — Skill bars, tools grid, AI tools section with categories
- **Projects** — 4 featured projects with alternating layout
- **Experience** — Timeline with career history + education card
- **Contact** — Contact form, info cards, social links, availability status

## 🚀 Setup

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Generate static site
npm run generate
```

## 🌐 Deploy
This project is ready for deployment on **Vercel**, **Netlify**, or any static hosting:

```bash
npm run generate
# Upload .output/public/ to your host
```

## 📁 Project Structure
```
portfolio/
├── app.vue                  # Root component
├── nuxt.config.ts           # Nuxt configuration
├── assets/css/main.css      # Global styles & design system
├── components/
│   ├── TheNavbar.vue        # Navigation bar
│   └── TheFooter.vue        # Footer
├── composables/
│   ├── usePortfolioData.ts  # All portfolio data (edit here!)
│   └── useScrollReveal.ts   # Scroll animation utility
└── pages/
    ├── index.vue            # Home page
    ├── about.vue            # About page
    ├── skills.vue           # Skills page
    ├── projects.vue         # Projects page
    ├── experience.vue       # Experience page
    └── contact.vue          # Contact page
```

## ✏️ How to Update Content
All content data is centralized in `composables/usePortfolioData.ts`.
Edit that file to update:
- Personal info, bio, contact details
- Skills, frameworks, AI tools
- Work experience & highlights
- Projects & tech stacks
- Education details

## Built with ❤️ by Mohab Mohamed
# CVportofolio
# MohabMohamed
