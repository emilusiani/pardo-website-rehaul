# Inner Page Template Redesign Mockup

## Overview

This document describes the visual redesign template for inner pages (service pages, portfolio detail pages, about page), focusing on improved information architecture, clear visual hierarchy, and elegant presentation.

---

## Page Types

1. **Service Detail Pages** (e.g., Hotel Renovations, Restaurant & Bar)
2. **Portfolio Project Pages** (e.g., Individual project case studies)
3. **About/Company Page** (Team, history, credentials)

---

## Desktop Version (1280px+)

### 1. Navigation Header (Same as Homepage)
**Height:** 72px

```
┌─────────────────────────────────────────────────────────────────────┐
│ [Logo] PARDO Construction LLC                                        │
│                                    Home  Services  Portfolio  About  │
│                                                  Contact  [CTA Button]│
└─────────────────────────────────────────────────────────────────────┘
```

**Consistent with homepage navigation**

---

### 2. Page Hero Section
**Height:** 40vh (min 400px, max 500px)

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                       │
│   [Full-width background image: Relevant service/project image]      │
│   [Dark gradient overlay: 40% opacity]                               │
│                                                                       │
│   ┌────────────────────────────────────────────────────────────┐    │
│   │                                                             │    │
│   │  Home → Services → Hotel Renovations                       │    │
│   │                                                             │    │
│   │  Hotel Renovations                                         │    │
│   │                                                             │    │
│   │  Phased guest room, corridor, lobby, and amenity upgrades  │    │
│   │  with minimal disruption and brand-aligned finishes.       │    │
│   │                                                             │    │
│   └────────────────────────────────────────────────────────────┘    │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
```

**Design Details:**
- **Background:** High-quality relevant image
- **Overlay:** rgba(17,17,17,0.4) solid
- **Content:**
  - Max-width: 800px, centered
  - Padding: 48px
  - Color: White

**Breadcrumb:**
- Font-size: 14px
- Color: rgba(255,255,255,0.8)
- Separator: → or /
- Hover: White
- Margin-bottom: 24px

**Page Title:**
- Georgia serif, 48px (clamp 36-56px), bold
- Color: White
- Margin-bottom: 16px

**Description:**
- 18px, line-height 1.625
- Color: rgba(255,255,255,0.95)
- Max-width: 70ch

---

### 3. Quick Stats Bar (Optional - For Service Pages)
**Height:** Auto

```
┌─────────────────────────────────────────────────────────────────────┐
│ [Soft cream background]                                               │
│                                                                       │
│     200+              15 Days          98%           $50M+           │
│   Projects        Avg. Timeline    Satisfaction    Completed         │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
```

**Design Details:**
- Background: Soft cream (#F5F4F0)
- Padding: 32px vertical
- Grid: 4 columns, centered
- Numbers: Deep sage, 36px, 800 weight
- Labels: Uppercase, 11px, neutral-600

---

### 4. Overview Section
**Padding:** 96px vertical

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                       │
│  ┌────────────────────────┐  ┌──────────────────────────────────┐  │
│  │                        │  │                                   │  │
│  │  [Large feature image] │  │  What We Do                       │  │
│  │  [Border-radius: 12px] │  │                                   │  │
│  │  [Shadow]              │  │  Our hotel renovation services... │  │
│  │                        │  │                                   │  │
│  │                        │  │  • Complete FF&E replacement      │  │
│  │                        │  │  • Bathroom modernization         │  │
│  │                        │  │  • Energy-efficient upgrades      │  │
│  │                        │  │  • Brand standard compliance      │  │
│  │                        │  │                                   │  │
│  └────────────────────────┘  └──────────────────────────────────┘  │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
```

**Design Details:**
- **Layout:** 2 columns (1fr 1fr), gap 64px
- **Image:**
  - Border-radius: 12px
  - Shadow: 0 8px 24px rgba(17,17,17,0.12)
  - Aspect ratio: 4/3
  - Hover: Subtle zoom (scale 1.02)

**Content:**
- Heading: Georgia serif, 32px, bold, near-black
- Body: 16px, line-height 1.625, charcoal
- Bullets:
  - Custom sage green markers
  - Left padding: 24px
  - Line spacing: 12px
  - Font-size: 16px

**Responsive:**
- @media (max-width: 900px): Stack vertically, image first

---

### 5. Process Section (For Service Pages)
**Padding:** 96px vertical

```
┌─────────────────────────────────────────────────────────────────────┐
│ [Soft cream background]                                               │
│                                                                       │
│                       Our Process                                    │
│            How we deliver exceptional results                        │
│                                                                       │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐          │
│  │      01      │    │      02      │    │      03      │          │
│  │              │    │              │    │              │          │
│  │ [Icon]       │    │ [Icon]       │    │ [Icon]       │          │
│  │              │    │              │    │              │          │
│  │ Discovery    │    │ Planning     │    │ Execution    │          │
│  │              │    │              │    │              │          │
│  │ We meet...   │    │ We develop...│    │ Our teams... │          │
│  │              │    │              │    │              │          │
│  └──────────────┘    └──────────────┘    └──────────────┘          │
│                                                                       │
│            ┌──────────────┐                                          │
│            │      04      │                                          │
│            │              │                                          │
│            │ [Icon]       │                                          │
│            │              │                                          │
│            │ Completion   │                                          │
│            │              │                                          │
│            │ Final walk...│                                          │
│            │              │                                          │
│            └──────────────┘                                          │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
```

**Design Details:**
- **Background:** Soft cream (#F5F4F0)
- **Section Header:**
  - Heading: Georgia serif, 36px, centered
  - Subhead: 16px, centered, max-width 60ch

**Process Cards:**
- **Grid:** 3 columns (4th wraps to new row), gap 32px
- **Card:**
  - Background: White
  - Border: 2px solid light stone
  - Border-radius: 12px
  - Padding: 40px 32px
  - Text-align: Center

**Number:**
- Position: Top
- Font-size: 14px
- Font-weight: 800
- Letter-spacing: 0.15em
- Color: Sage green
- Margin-bottom: 24px

**Icon:**
- Size: 48px
- Sage green color
- Margin-bottom: 24px

**Heading:**
- 20px, semibold, near-black
- Margin-bottom: 12px

**Description:**
- 15px, line-height 1.55, charcoal

**Connection Lines (Optional):**
- Dotted line between cards
- Color: Sage green with opacity
- CSS pseudo-elements

---

### 6. Features/Benefits Grid
**Padding:** 96px vertical

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                       │
│                      Why Choose Us                                   │
│                                                                       │
│  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐          │
│  │ [Icon]        │  │ [Icon]        │  │ [Icon]        │          │
│  │               │  │               │  │               │          │
│  │ Nationwide    │  │ Experienced   │  │ On-Time       │          │
│  │ Coverage      │  │ Teams         │  │ Delivery      │          │
│  │               │  │               │  │               │          │
│  │ We operate... │  │ Our field...  │  │ 95% of our... │          │
│  │               │  │               │  │               │          │
│  └───────────────┘  └───────────────┘  └───────────────┘          │
│                                                                       │
│  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐          │
│  │ [Icon]        │  │ [Icon]        │  │ [Icon]        │          │
│  │               │  │               │  │               │          │
│  │ Quality       │  │ Brand         │  │ Safety        │          │
│  │ Focused       │  │ Compliance    │  │ First         │          │
│  │               │  │               │  │               │          │
│  │ Rigorous...   │  │ We ensure...  │  │ OSHA-certified│          │
│  │               │  │               │  │               │          │
│  └───────────────┘  └───────────────┘  └───────────────┘          │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
```

**Design Details:**
- **Background:** Pure white
- **Grid:** 3 columns, gap 32px, auto-fit min 280px

**Feature Card:**
- Border: None (minimal style)
- Padding: 24px
- Text-align: Center

**Icon:**
- Size: 40px
- Sage green stroke
- Margin-bottom: 20px

**Heading:**
- 18px, semibold, near-black
- Margin-bottom: 12px

**Description:**
- 14px, line-height 1.5, neutral-600

---

### 7. Gallery Section (For Portfolio Pages)
**Padding:** 96px vertical

```
┌─────────────────────────────────────────────────────────────────────┐
│ [Soft cream background]                                               │
│                                                                       │
│                     Project Gallery                                  │
│                                                                       │
│  ┌────────────────────────┐  ┌────────────────────────┐            │
│  │                        │  │                        │            │
│  │  [Large image 1]       │  │  [Large image 2]       │            │
│  │                        │  │                        │            │
│  │                        │  │                        │            │
│  └────────────────────────┘  └────────────────────────┘            │
│                                                                       │
│  ┌────────────────────────┐  ┌────────────────────────┐            │
│  │                        │  │                        │            │
│  │  [Large image 3]       │  │  [Large image 4]       │            │
│  │                        │  │                        │            │
│  │                        │  │                        │            │
│  └────────────────────────┘  └────────────────────────┘            │
│                                                                       │
│  ┌──────────────────────────────────────────────────────┐           │
│  │                                                       │           │
│  │  [Full-width panoramic image]                        │           │
│  │                                                       │           │
│  └──────────────────────────────────────────────────────┘           │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
```

**Design Details:**
- **Background:** Soft cream (#F5F4F0)
- **Grid:** CSS Grid with varying sizes
  - 2x2 grid for first 4 images
  - Full-width for panoramic shot
- **Gap:** 24px

**Images:**
- Border-radius: 12px
- Box-shadow: 0 4px 12px rgba(17,17,17,0.10)
- Aspect ratio: Varies (16:9, 4:3, panoramic 21:9)
- Cursor: Pointer (opens lightbox)

**Hover Effect:**
- Overlay: rgba(120,146,113,0.1)
- Scale: 1.02
- Shadow increase
- Zoom icon appears

**Lightbox (Optional Enhancement):**
- Full-screen image viewer
- Navigation arrows
- Close button
- Keyboard navigation

---

### 8. Testimonial/Quote Section (Optional)
**Padding:** 96px vertical

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                       │
│                        " [Opening quote]                             │
│                                                                       │
│                PARDO Construction delivered our lobby                │
│                renovation ahead of schedule with zero                │
│                impact to guest operations. Their attention           │
│                to detail and proactive communication made            │
│                this our smoothest renovation to date.                │
│                                                                       │
│                                          [Closing quote] "           │
│                                                                       │
│                        — Jane Smith                                  │
│                  Director of Operations, Grand Hotel                │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
```

**Design Details:**
- **Background:** Pure white
- **Max-width:** 900px, centered
- **Padding:** 64px

**Quote Marks:**
- Georgia serif, 72px
- Color: Sage green with opacity (0.2)
- Position: Absolute, top-left and bottom-right

**Quote Text:**
- Georgia serif, 24px (clamp 20-28px)
- Line-height: 1.5
- Color: Near-black
- Text-align: Center
- Font-style: Italic

**Attribution:**
- 16px, regular weight
- Color: Neutral-600
- Margin-top: 32px
- Text-align: Right

**Company:**
- 14px
- Color: Neutral-500

---

### 9. Related Projects/Services
**Padding:** 96px vertical

```
┌─────────────────────────────────────────────────────────────────────┐
│ [Soft cream background]                                               │
│                                                                       │
│                    Related Services                                  │
│               Explore more of what we offer                          │
│                                                                       │
│  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐          │
│  │               │  │               │  │               │          │
│  │ [Card image]  │  │ [Card image]  │  │ [Card image]  │          │
│  │               │  │               │  │               │          │
│  │ Restaurant    │  │ Resort        │  │ Guest Room    │          │
│  │ & Bar         │  │ Amenities     │  │ Programs      │          │
│  │               │  │               │  │               │          │
│  │ Learn More →  │  │ Learn More →  │  │ Learn More →  │          │
│  └───────────────┘  └───────────────┘  └───────────────┘          │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
```

**Design Details:**
- **Background:** Soft cream (#F5F4F0)
- **Grid:** 3 columns, gap 32px

**Card:**
- Background: White
- Border-radius: 12px
- Overflow: Hidden
- Shadow: 0 2px 8px rgba(17,17,17,0.08)

**Image:**
- Width: 100%
- Height: 200px
- Object-fit: Cover

**Content:**
- Padding: 24px

**Heading:**
- 18px, semibold, near-black
- Margin-bottom: 12px

**Link:**
- Sage green, 14px, bold
- Uppercase, letter-spacing 0.08em
- Arrow icon: →

**Hover Effect:**
- Lift: translateY(-4px)
- Shadow increase
- Link color: Deep sage

---

### 10. Call-to-Action Section
**Padding:** 96px vertical

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                       │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ [Forest sage background #353E2E]                             │   │
│  │                                                               │   │
│  │           Ready to Start Your Project?                       │   │
│  │                                                               │   │
│  │      Let's discuss your renovation needs and create          │   │
│  │      a customized plan for your property.                    │   │
│  │                                                               │   │
│  │         [Schedule Consultation]  [Request Quote]             │   │
│  │                                                               │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
```

**Design Details:**
- **Background:** Forest sage (#353E2E)
- **Border-radius:** 16px
- **Padding:** 64px
- **Text-align:** Center
- **Color:** White

**Heading:**
- Georgia serif, 32px, bold
- Margin-bottom: 16px

**Description:**
- 16px, line-height 1.625
- Color: Off-white
- Max-width: 60ch, centered
- Margin-bottom: 32px

**Buttons:**
- Primary: Sage green background
- Secondary: White outline
- Display: Inline-flex
- Gap: 16px

**Shadow:**
- 0 12px 36px rgba(17,17,17,0.14)

---

### 11. Footer (Same as Homepage)

Same footer design as homepage for consistency.

---

## Mobile Version (< 768px)

### Key Differences:

**1. Page Hero:**
- Reduced height: 350px
- Larger text optimized for mobile
- Breadcrumb: Smaller font, may wrap

**2. Overview Section:**
- Single column, image on top
- Reduced padding

**3. Process Section:**
- Single column, stacked cards
- Connection lines removed

**4. Features Grid:**
- 2 columns on tablet, 1 column on mobile

**5. Gallery:**
- Single column, stacked images
- Maintain aspect ratios
- Smaller gap (16px)

**6. Related Items:**
- Single column, stacked cards

**7. CTA:**
- Buttons stack vertically
- Reduced padding

---

## Information Architecture Improvements

### 1. Clear Hierarchy

**Visual Weight (Descending):**
1. Page title (Hero)
2. Section headings (H2)
3. Card headings (H3)
4. Body text
5. Supporting text/labels

### 2. Content Prioritization

**Above the Fold:**
- Page title and description
- Key visual/image
- Quick stats (if applicable)

**Middle Content:**
- Overview/What we do
- Process/How we do it
- Features/Why choose us

**Bottom Content:**
- Gallery/proof
- Testimonials
- Related content
- CTA

### 3. Visual Cues for Navigation

**Breadcrumbs:**
- Always present on inner pages
- Shows current location
- Clickable ancestors
- Separator: → or /

**Section Indicators:**
- Logo dividers between major sections
- Alternating backgrounds (white ↔ cream)

**Progress Through Page:**
- Staggered animations reveal content
- Sticky header remains visible
- Back-to-top button appears

### 4. Content Chunking

**Sections are discrete units:**
- Clear beginning/end
- Visual separation (background, spacing)
- Self-contained information
- Scannable headings

### 5. Calls-to-Action

**Primary CTAs:**
- Schedule Consultation (highest priority)
- Request Quote (secondary)
- View Portfolio (tertiary)

**Placement:**
- Hero section (optional)
- Mid-page CTA section
- Footer CTA
- Sticky side CTA (optional enhancement)

---

## Accessibility Features

1. **Semantic HTML:**
   - `<nav>` for navigation
   - `<main>` for main content
   - `<article>` for discrete content
   - `<aside>` for related content
   - `<section>` with aria-label

2. **Skip Links:**
   - Skip to main content
   - Skip to navigation

3. **ARIA Landmarks:**
   - role="banner" for header
   - role="main" for main content
   - role="complementary" for sidebar
   - role="contentinfo" for footer

4. **Focus Management:**
   - Visible focus indicators
   - Logical tab order
   - Skip link functional

5. **Images:**
   - Alt text for all content images
   - Empty alt for decorative images
   - Figure/figcaption for complex images

6. **Headings:**
   - Proper hierarchy (h1 → h2 → h3)
   - No skipped levels
   - Descriptive headings

---

## Performance Considerations

1. **Images:**
   - WebP with JPG fallback
   - Responsive srcset
   - Lazy loading below fold
   - Priority loading hero

2. **Code Splitting:**
   - Separate bundles for page types
   - Dynamic imports for heavy components

3. **Critical CSS:**
   - Inline critical styles
   - Defer non-critical CSS

4. **Fonts:**
   - System fonts (already implemented)
   - No external font requests

5. **Third-party Scripts:**
   - Defer non-critical scripts
   - Async loading where possible

---

## SEO Enhancements

1. **Metadata:**
   - Unique title per page
   - Unique description per page
   - Open Graph tags
   - Twitter Card tags

2. **Structured Data:**
   - Service schema
   - BreadcrumbList schema
   - Review/Rating schema (if applicable)
   - Organization schema

3. **Content:**
   - Keyword-optimized headings
   - Natural language, readable content
   - Internal linking
   - Image alt text with keywords

4. **Technical:**
   - Canonical URLs
   - XML sitemap inclusion
   - robots.txt rules
   - Clean URL structure

---

## Layout Variations by Page Type

### Service Page Specific:
- Quick stats bar
- Process section
- Features/benefits grid
- Related services

### Portfolio Page Specific:
- Project details (date, scope, budget)
- Challenge/solution sections
- Gallery (prominent)
- Before/after (if applicable)
- Testimonial/quote
- Related projects

### About Page Specific:
- Team section
- Timeline/history
- Credentials/certifications
- Company values
- Locations/coverage map

---

**Status:** Design Complete  
**Next Step:** Development Implementation  
**Template:** Reusable for all inner page types
