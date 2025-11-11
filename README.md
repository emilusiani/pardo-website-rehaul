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
