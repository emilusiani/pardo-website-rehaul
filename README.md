# PARDO Construction LLC — Website Rehaul (Next.js + Sanity CMS)

- Next.js 14 (App Router), React 18
- Palette: #789271 (primary), #46523D (hover), #F5F4F0 (alt), #212021, #111111
- next/image optimization
- Sanity CMS integration with fallback to local content

## Quick start
1) Put images into public/assets:
   - logo.png
   - image1.jpg, image2.jpg, image3.jpg, image4.jpg
2) npm install
3) npm run dev

## CMS (optional)
- Add .env.local:
  NEXT_PUBLIC_SANITY_PROJECT_ID=...
  NEXT_PUBLIC_SANITY_DATASET=production
- Use schemas in sanity/schema.ts

## Website Inspection Agent

This project includes an automated inspection agent that analyzes the website for improvements in:
- ⚡ Performance
- 🎨 Aesthetics
- ⚙️ Functionality
- 🔒 Security
- ♿ Accessibility
- 🔍 SEO

### Usage

```bash
npm run inspect
```

This will generate a comprehensive report both in the console and as `INSPECTION_REPORT.md`.

For detailed documentation, see [scripts/README.md](scripts/README.md).

## GitHub Copilot Custom Agents

This repository includes 14 specialized GitHub Copilot agents that provide expert guidance for different aspects of development:

- **Development**: Frontend Engineer, Content Engineer, Data Layer Steward
- **Quality Assurance**: QA & E2E Tester, Security Reviewer, Accessibility Auditor
- **Performance & SEO**: Performance Optimizer, SEO & Content Strategist
- **Design & UX**: Design Director, UI Polisher, UX Researcher
- **Analytics**: Analytics & Experimentation
- **Operations**: Release Manager, i18n & Localization

These agents are located in `.github/agents/` and provide specialized assistance when working with GitHub Copilot.

For more information, see:
- [Agent Documentation](.github/agents/README.md)
- [Copilot Instructions](.github/copilot-instructions.md)
