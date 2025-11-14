# Homepage Redesign Mockup

## Overview

This document describes the visual redesign of the PARDO Construction LLC homepage, focusing on enhanced elegance, refined aesthetics, and improved user flow while maintaining brand consistency.

---

## Desktop Version (1280px+)

### 1. Navigation Header (Sticky)
**Height:** 72px

```
┌─────────────────────────────────────────────────────────────────────┐
│ [Logo - 44px] PARDO Construction LLC                                │
│                                    Home  Services  Portfolio  About  │
│                                                  Contact  [CTA Button]│
└─────────────────────────────────────────────────────────────────────┘
```

**Design Details:**
- **Background:** White with 85% opacity + backdrop blur
- **Logo:** Sage green (#789271), 44px height
- **Nav Links:** Ink black (#212021), 600 weight
  - Animated underline on hover (sage green, 2px)
  - Active state: full underline
- **CTA Button:** Primary sage green button
- **Border:** Bottom border 1px solid whisper sage (#E8EDE7)

---

### 2. Hero Section
**Height:** 70vh (min 600px, max 720px)

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                       │
│   [Full-screen background image: Grand hotel exterior]               │
│   [Dark gradient overlay: 0% → 55% opacity from top to bottom]       │
│   [Logo watermark: Top-left, 180px, 8% opacity]                     │
│                                                                       │
│   ┌────────────────────────────────┐                                │
│   │ [TAG] HOSPITALITY REMODELING   │                                │
│   │                                │                                │
│   │  Modern Renovations That       │                                │
│   │  Elevate Guest Experience      │                                │
│   │                                │                                │
│   │  Schedule-driven remodeling... │                                │
│   │                                │                                │
│   │  [Start a Project] [View Port...]                              │
│   └────────────────────────────────┘                                │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
```

**Design Details:**
- **Background:** High-quality hotel image (image4.jpg)
- **Overlay:** Linear gradient (0deg, rgba(17,17,17,0.55) → rgba(17,17,17,0.18))
- **Watermark:** Logo at 8% opacity, grayscale, top-left
- **Content Box:** 
  - Max-width: 650px
  - Positioned at bottom with negative margin (-160px)
  - Background: Semi-transparent white (rgba(255,255,255,0.95))
  - Border-radius: 12px
  - Padding: 48px
  - Shadow: 0 12px 36px rgba(17,17,17,0.14)

**Typography:**
- **Tag:** Uppercase, 11px, sage green background, white text
- **Headline:** Georgia serif, 56px (clamp 40-64px), bold, -0.02em tracking
- **Subhead:** System sans, 18px, line-height 1.625, neutral-800
- **Buttons:** 
  - Primary: Sage green solid
  - Secondary: Sage green outline
  - Gap: 24px between buttons

**Animations:**
- Content box: Fade in up, 600ms, 200ms delay
- Buttons: Staggered, 100ms apart

---

### 3. Divider with Logo
**Height:** 64px

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                       │
│                         [◯ Logo 28px ◯]                             │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
```

**Design Details:**
- Centered logo in pill container
- Background: White with subtle shadow
- Border: 1px solid whisper sage
- Border-radius: 999px
- Padding: 8px 12px

---

### 4. Metrics Section
**Padding:** 48px vertical

```
┌─────────────────────────────────────────────────────────────────────┐
│ [Soft cream background #F5F4F0]                                      │
│                                                                       │
│        500+              50            25+          98%              │
│      Projects          States        Years     Satisfaction          │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
```

**Design Details:**
- **Background:** Soft cream (#F5F4F0)
- **Grid:** 4 columns, auto-fit, min 180px
- **Numbers:** Deep sage (#46523D), 48px, 800 weight, animated count-up
- **Labels:** Uppercase, 12px, 0.08em tracking, near-black

**Animations:**
- Numbers count up when scrolled into view
- Fade in up animation, staggered 100ms

---

### 5. Services Section
**Padding:** 96px vertical

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                       │
│                     [Logo 28px]                                      │
│                    Core Services                                     │
│            End-to-end hospitality remodeling...                      │
│                                                                       │
│  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐          │
│  │ [Icon]        │  │ [Icon]        │  │ [Icon]        │          │
│  │               │  │               │  │               │          │
│  │ Hotel         │  │ Restaurant    │  │ Resort        │          │
│  │ Renovations   │  │ & Bar         │  │ Amenities     │          │
│  │               │  │               │  │               │          │
│  │ Description...│  │ Description...│  │ Description...│          │
│  │               │  │               │  │               │          │
│  │ Learn More →  │  │ Learn More →  │  │ Learn More →  │          │
│  └───────────────┘  └───────────────┘  └───────────────┘          │
│                                                                       │
│  ┌───────────────┐                                                  │
│  │ [Icon]        │                                                  │
│  │               │                                                  │
│  │ Guest Room    │                                                  │
│  │ Programs      │                                                  │
│  │               │                                                  │
│  │ Description...│                                                  │
│  │               │                                                  │
│  │ Learn More →  │                                                  │
│  └───────────────┘                                                  │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
```

**Design Details:**
- **Background:** Pure white (#FDFCFB)
- **Section Header:**
  - Logo: 28px, centered, opacity 0.9
  - Heading: Georgia serif, 40px, bold
  - Subhead: 16px, max-width 70ch, centered

**Service Cards:**
- **Grid:** 3 columns, gap 32px, auto-fit min 280px
- **Card:**
  - Background: White
  - Border: 1px solid light stone (#E8E6E1)
  - Border-radius: 12px
  - Padding: 32px
  - Shadow: 0 1px 3px rgba(17,17,17,0.06)
  
**Icon Container:**
- Size: 52x52px
- Background: Linear gradient (145deg, deep sage → sage green)
- Border-radius: 8px
- Shadow: 0 2px 8px rgba(120,146,113,0.2)
- Icon: White, 28px, 2px stroke

**Hover Effect:**
- Lift: translateY(-6px)
- Shadow: 0 8px 24px rgba(120,146,113,0.16)
- Border: Sage green (#789271)
- Transition: 250ms elegant ease

**Typography:**
- **Heading:** 20px, semibold, near-black
- **Body:** 15px, charcoal, line-height 1.55
- **Link:** Uppercase, 13px, bold, sage dark

**Animations:**
- Cards: Fade in up, 600ms
- Staggered: 100ms per card

---

### 6. Banner Section
**Padding:** 96px vertical

```
┌─────────────────────────────────────────────────────────────────────┐
│ [Soft cream background #F5F4F0]                                      │
│                                                                       │
│  ┌──────────────────────────┐  ┌────────────────────────────┐      │
│  │                          │  │                             │      │
│  │  [Large image of hotel]  │  │  Reliable, Schedule-Driven  │      │
│  │  [Logo badge bottom-left]│  │  Delivery                   │      │
│  │                          │  │                             │      │
│  │                          │  │  From concept to closeout...│      │
│  │                          │  │                             │      │
│  │                          │  │  [Request Consultation]     │      │
│  │                          │  │                             │      │
│  └──────────────────────────┘  └────────────────────────────┘      │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
```

**Design Details:**
- **Background:** Soft cream (#F5F4F0)
- **Grid:** 2 columns (1.3fr 1fr), gap 48px, aligned center

**Image Side:**
- Border-radius: 12px
- Box-shadow: 0 4px 12px rgba(17,17,17,0.10)
- Aspect ratio: 4/3
- Logo badge: 
  - Position: Bottom-left, 16px from edges
  - Background: rgba(255,255,255,0.92)
  - Border: 1px solid light stone
  - Padding: 8px 10px
  - Border-radius: 999px

**Content Side:**
- Heading: Georgia serif, 36px, bold
- Body: 16px, line-height 1.625
- Button: Primary sage green, margin-top 32px

**Responsive:**
- @media (max-width: 900px): Stack vertically

---

### 7. Portfolio Section
**Padding:** 96px vertical

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                       │
│                     [Logo 28px]                                      │
│                   Selected Work                                      │
│         Representative engagements across...                         │
│                                                                       │
│  ┌────────────────┐  ┌────────────────┐  ┌────────────────┐        │
│  │                │  │                │  │                │        │
│  │  [Project Img] │  │  [Project Img] │  │  [Project Img] │        │
│  │                │  │                │  │                │        │
│  │ [Dark gradient]│  │ [Dark gradient]│  │ [Dark gradient]│        │
│  │                │  │                │  │                │        │
│  │ [TAG] Resort   │  │ [TAG] Hotel    │  │ [TAG] Restaurant        │
│  │ Project Title  │  │ Project Title  │  │ Project Title  │        │
│  │ Description... │  │ Description... │  │ Description... │        │
│  │         [Logo] │  │         [Logo] │  │         [Logo] │        │
│  └────────────────┘  └────────────────┘  └────────────────┘        │
│                                                                       │
│  ┌────────────────┐                                                 │
│  │                │                                                 │
│  │  [Project Img] │                                                 │
│  │                │                                                 │
│  │ [Dark gradient]│                                                 │
│  │                │                                                 │
│  │ [TAG] Boutique │                                                 │
│  │ Project Title  │                                                 │
│  │ Description... │                                                 │
│  │         [Logo] │                                                 │
│  └────────────────┘                                                 │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
```

**Design Details:**
- **Background:** Pure white (#FDFCFB)
- **Grid:** 3 columns, gap 32px, auto-fit min 320px

**Project Card:**
- Position: Relative
- Border-radius: 12px
- Overflow: Hidden
- Background: Near-black (#212021)
- Shadow: 0 4px 12px rgba(17,17,17,0.10)

**Image:**
- Width: 100%
- Height: 260px
- Object-fit: Cover
- Transition: transform 600ms elegant ease

**Overlay:**
- Position: Absolute
- Bottom gradient: 0% → 72% opacity
- Height: 60%

**Content:**
- Position: Absolute bottom
- Padding: 32px
- Color: White

**Tag:**
- Uppercase, 11px, 0.12em tracking
- Color: Off-white (#F5F4F0)
- Margin-bottom: 6px

**Heading:**
- 20px, semibold, white

**Description:**
- 15px, off-white, margin 0

**Corner Logo:**
- Position: Absolute, bottom-right (12px)
- Height: 22px, opacity 0.95
- Drop shadow: 0 2px 3px rgba(0,0,0,0.25)

**Hover Effect:**
- Lift: translateY(-6px)
- Shadow: 0 12px 36px rgba(17,17,17,0.14)
- Image: scale(1.05)

**Animations:**
- Cards: Fade in up, 600ms
- Staggered: 100ms per card

---

### 8. About Section
**Padding:** 96px vertical

```
┌─────────────────────────────────────────────────────────────────────┐
│ [Soft cream background #F5F4F0]                                      │
│                                                                       │
│                About PARDO Construction LLC                          │
│                                                                       │
│  We specialize in hospitality remodeling across the United States... │
│                                                                       │
│  • Nationwide delivery in all 50 states                              │
│  • Dedicated hospitality field teams                                 │
│  • Operational continuity during renovations                         │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
```

**Design Details:**
- **Background:** Soft cream (#F5F4F0)
- **Max-width:** 800px, centered
- **Heading:** Georgia serif, 36px, bold, near-black
- **Body:** 16px, line-height 1.625, charcoal
- **Bullets:** 
  - Left padding: 18px
  - Marker color: Sage green
  - Line spacing: 8px

---

### 9. Contact Section
**Padding:** 96px vertical

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                       │
│                    [Logo 46px, top-right corner]                     │
│                                                                       │
│         Ready to Plan Your Next Property Upgrade?                    │
│                                                                       │
│    Engage our team for a structured feasibility review...            │
│                                                                       │
│    ┌──────────────────────────────────────────────────┐             │
│    │                                                   │             │
│    │  [Name]                    [Email]               │             │
│    │                                                   │             │
│    │  [Phone]                   [Company]             │             │
│    │                                                   │             │
│    │  [Project Type ▼]                                │             │
│    │                                                   │             │
│    │  [Message]                                       │             │
│    │                                                   │             │
│    │               [Submit Project Inquiry]           │             │
│    │                                                   │             │
│    └──────────────────────────────────────────────────┘             │
│                                                                       │
│              Or reach us directly:                                   │
│         [Email Us]              [(555) 123-4567]                     │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
```

**Design Details:**
- **Background:** Forest sage (#353E2E)
- **Color:** White text
- **Border-radius:** 16px
- **Padding:** 64px 48px
- **Shadow:** 0 12px 36px rgba(17,17,17,0.14)

**Logo:**
- Position: Absolute, top-right (16px)
- Opacity: 14%
- Size: 46px
- Filter: Grayscale + brightness

**Heading:**
- Georgia serif, 36px, bold, white

**Subhead:**
- 16px, off-white, max-width 70ch

**Form:**
- Max-width: 600px, margin 32px auto
- Grid: 2 columns on desktop

**Inputs:**
- Background: rgba(255,255,255,0.1)
- Border: 2px solid rgba(255,255,255,0.2)
- Color: White
- Padding: 12px 16px
- Border-radius: 6px
- Placeholder: rgba(255,255,255,0.5)

**Focus State:**
- Border: Whisper sage (#E8EDE7)
- Background: rgba(255,255,255,0.15)
- Glow: 0 0 0 3px rgba(232,237,231,0.1)

**Submit Button:**
- Full width on mobile
- Primary sage green background
- White text
- Larger padding: 16px 32px

**Direct Contact:**
- Centered, margin-top 32px
- Buttons: Outline style, white borders
- Gap: 16px

---

### 10. Footer
**Padding:** 96px vertical, 48px bottom

```
┌─────────────────────────────────────────────────────────────────────┐
│ [Near-black background #212021]                                      │
│                                                                       │
│  ┌──────────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐       │
│  │ [Logo 48px]  │  │ Navigation│  │ Services │  │ Contact  │       │
│  │              │  │           │  │          │  │          │       │
│  │ PARDO Const  │  │ Home      │  │ Hotel    │  │ Email:   │       │
│  │              │  │ Services  │  │ Guest    │  │ info@... │       │
│  │ Nationwide...│  │ Portfolio │  │ Rest&Bar │  │          │       │
│  │              │  │ About     │  │ Resort   │  │ Phone:   │       │
│  │              │  │ Contact   │  │          │  │ (555)... │       │
│  └──────────────┘  └──────────┘  └──────────┘  └──────────┘       │
│                                                                       │
│  ─────────────────────────────────────────────────────────────      │
│                                                                       │
│       © 2025 PARDO Construction LLC • Licensed & Insured            │
│                     All Rights Reserved                              │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
```

**Design Details:**
- **Background:** Near-black (#212021)
- **Color:** Off-white (#F5F4F0)
- **Grid:** 4 columns, gap 32px, auto-fit min 220px

**Footer Logo:**
- Max-height: 48px
- Margin-bottom: 16px

**Column Headings:**
- 16px, semibold, white
- Margin-bottom: 24px

**Links:**
- Off-white, display inline-block
- Margin-bottom: 6px
- Hover: White, no underline

**Divider:**
- Border-top: 1px solid rgba(255,255,255,0.1)
- Margin-top: 48px
- Padding-top: 48px

**Legal:**
- Text-align: center
- Font-size: 14px
- Opacity: 0.7

---

## Mobile Version (< 768px)

### Key Differences:

**1. Navigation:**
- Hamburger menu (right side)
- Full-screen mobile menu overlay
- Stacked navigation links

**2. Hero:**
- Larger text (optimized for mobile)
- Buttons stack vertically
- Content box: full-width, no negative margin

**3. Metrics:**
- 2x2 grid instead of 4 columns

**4. Services:**
- Single column, stacked cards
- Reduced padding

**5. Banner:**
- Single column, image on top

**6. Portfolio:**
- Single column, stacked projects
- Slightly larger images

**7. Contact Form:**
- Single column inputs
- Full-width buttons

**8. Footer:**
- Single column, stacked sections
- Centered content

---

## Animation Timeline

**On Page Load:**
1. Header: Fade in (200ms)
2. Hero image: Fade in (400ms)
3. Hero content: Fade in up (600ms, 200ms delay)
4. Buttons: Fade in (400ms, staggered 100ms)

**On Scroll (Intersection Observer):**
1. Metrics: Count-up animation + fade in
2. Service cards: Fade in up, staggered
3. Banner: Fade in left (image) + right (text)
4. Portfolio: Fade in up, staggered
5. About: Fade in up
6. Contact: Fade in up

---

## Performance Optimizations

1. **Hero image:** Priority load, optimized WebP
2. **Below-fold images:** Lazy load
3. **Animations:** Respect prefers-reduced-motion
4. **Fonts:** System fonts (no external requests)
5. **CSS:** Critical inline, rest deferred

---

## Accessibility Features

1. **Skip link:** Jump to main content
2. **Focus indicators:** 3px sage green outline
3. **ARIA labels:** All interactive elements
4. **Alt text:** All images (empty for decorative)
5. **Keyboard nav:** Full support
6. **Color contrast:** All AA compliant

---

**Status:** Design Complete  
**Next Step:** Development Implementation
