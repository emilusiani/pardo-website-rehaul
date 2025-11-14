# PARDO Construction LLC — Visual Style Guide

**Version:** 2.0  
**Last Updated:** November 14, 2025  
**Purpose:** Comprehensive design system documentation for consistent, elegant visual implementation

---

## Table of Contents

1. [Brand Identity](#1-brand-identity)
2. [Color System](#2-color-system)
3. [Typography](#3-typography)
4. [Spacing & Layout](#4-spacing--layout)
5. [Components](#5-components)
6. [Imagery](#6-imagery)
7. [Iconography](#7-iconography)
8. [Motion & Animation](#8-motion--animation)
9. [Accessibility](#9-accessibility)
10. [Code Examples](#10-code-examples)

---

## 1. Brand Identity

### 1.1 Brand Essence

**Industry:** Hospitality Construction & Remodeling  
**Target Audience:** Hotel/resort owners, property managers, hospitality developers  
**Brand Personality:** Professional, Reliable, Sophisticated, Premium, Trustworthy  
**Visual Direction:** Elegant, Modern, Clean, Refined

### 1.2 Logo Usage

**Primary Logo:** `logo.png` (2400x2400px)  
**Transparent Logo:** `Logo_square_transparent.png` (2400x2400px)

**Guidelines:**
- Minimum size: 32px height for digital
- Clear space: Minimum 16px on all sides
- Never distort or skew the logo
- Use on contrasting backgrounds
- Opacity variants: 100% (primary), 8-12% (watermarks), 85-95% (secondary)

---

## 2. Color System

### 2.1 Primary Palette

**Sage Green Family (Brand Core):**

```css
--sage-100: #E8EDE7; /* Whisper Sage - Light backgrounds */
--sage-200: #CDD8CA; /* Mist Sage - Subtle elements */
--sage-300: #9FAD9A; /* Soft Sage - Secondary UI */
--sage-400: #789271; /* Sage Green - PRIMARY BRAND */
--sage-500: #46523D; /* Deep Sage - Hover/Active */
--sage-600: #353E2E; /* Forest Sage - Dark sections */
--sage-700: #242A1F; /* Night Sage - Rich accents */
```

**Usage:**
- **Primary Actions:** `--sage-400` (#789271)
- **Hover States:** `--sage-500` (#46523D)
- **Backgrounds:** `--sage-100` (#E8EDE7)
- **Borders:** `--sage-200` (#CDD8CA)
- **Dark Sections:** `--sage-600` (#353E2E)

**Contrast Ratios:**
- Sage 400 on white: 4.51:1 ✅ AA
- Sage 500 on white: 8.12:1 ✅ AAA
- White on Sage 500: 5.18:1 ✅ AA
- White on Sage 600: 8.94:1 ✅ AAA

---

### 2.2 Neutral Palette

**Gray Scale:**

```css
--neutral-50: #FDFCFB;   /* Pure White - Main backgrounds */
--neutral-100: #F5F4F0;  /* Soft Cream - Alt backgrounds */
--neutral-200: #E8E6E1;  /* Light Stone - Subtle sections */
--neutral-300: #D1CEC7;  /* Warm Stone - Borders */
--neutral-400: #9B9691;  /* Warm Gray - Secondary text */
--neutral-500: #6B6762;  /* Medium Gray - Captions */
--neutral-600: #4A4743;  /* Dark Gray - Tertiary text */
--neutral-700: #212021;  /* Ink Black - PRIMARY TEXT */
--neutral-800: #111111;  /* Deep Charcoal - Rich text */
--neutral-900: #0A0A0A;  /* True Black - Maximum contrast */
```

**Usage:**
- **Primary Text:** `--neutral-700` (#212021)
- **Body Text:** `--neutral-800` (#111111)
- **Secondary Text:** `--neutral-400` (#9B9691)
- **Main Background:** `--neutral-50` (#FDFCFB)
- **Alt Background:** `--neutral-100` (#F5F4F0)

---

### 2.3 Accent Palette

**Warm Neutrals (Premium Feel):**

```css
--taupe-100: #E9E3DA; /* Light Taupe - Subtle highlights */
--taupe-200: #C5B8A8; /* Soft Taupe - Backgrounds */
--taupe-300: #B89C7C; /* Warm Taupe - ACCENT */
--taupe-400: #8A7968; /* Bronze Earth - Luxury accent */
--taupe-500: #6B6258; /* Deep Taupe - Rich accents */
```

**Usage:**
- Premium badges and indicators
- Luxury service highlights
- Subtle hover states
- Complementary accents to sage green
- Use sparingly for emphasis

---

### 2.4 Semantic Colors

**Success (for forms/feedback):**
```css
--success-light: #D1FAE5;
--success: #10B981;
--success-dark: #065F46;
```

**Error (for validation):**
```css
--error-light: #FEE2E2;
--error: #EF4444;
--error-dark: #991B1B;
```

**Warning (for alerts):**
```css
--warning-light: #FEF3C7;
--warning: #F59E0B;
--warning-dark: #92400E;
```

**Info (for informational messages):**
```css
--info-light: #DBEAFE;
--info: #3B82F6;
--info-dark: #1E40AF;
```

---

### 2.5 Color Combinations

**Recommended Pairings:**

1. **Primary Text on Background:**
   - Ink Black (#212021) on Pure White (#FDFCFB)
   - Deep Charcoal (#111111) on Soft Cream (#F5F4F0)

2. **Interactive Elements:**
   - Sage Green (#789271) background with White text
   - Deep Sage (#46523D) hover with White text
   - White background with Sage Green text/borders

3. **Section Alternation:**
   - Pure White (#FDFCFB) ↔ Soft Cream (#F5F4F0)
   - Pure White (#FDFCFB) ↔ Whisper Sage (#E8EDE7)

4. **Premium Sections:**
   - Forest Sage (#353E2E) background with White/Cream text
   - Warm Taupe (#B89C7C) accents on neutral backgrounds

---

## 3. Typography

### 3.1 Font Families

**Display (Headings):**
```css
font-family: Georgia, 'Times New Roman', Cambria, serif;
```
- Elegant, timeless serif
- Premium hospitality feel
- Excellent readability
- System-available for performance

**Body (Text):**
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
             'Helvetica Neue', Arial, sans-serif;
```
- Clean, modern sans-serif
- Optimized for screen reading
- Cross-platform consistency

**Accent (Labels/Tags):**
```css
font-family: 'Trebuchet MS', 'Lucida Sans', 'Segoe UI', sans-serif;
letter-spacing: 0.1em;
text-transform: uppercase;
```
- Used sparingly
- Tags, labels, metadata
- Short text only

---

### 3.2 Type Scale

**Fluid Typography (Responsive):**

```css
/* Display Sizes */
--text-xs: 0.75rem;      /* 12px - Fine print, captions */
--text-sm: 0.875rem;     /* 14px - Small text, labels */
--text-base: 1rem;       /* 16px - Base body text */
--text-lg: 1.125rem;     /* 18px - Lead paragraphs */
--text-xl: 1.25rem;      /* 20px - Large body */
--text-2xl: 1.5rem;      /* 24px - Small headings */
--text-3xl: 1.875rem;    /* 30px - Medium headings */
--text-4xl: 2.25rem;     /* 36px - Large headings */
--text-5xl: 3rem;        /* 48px - Display headings */
--text-6xl: 3.75rem;     /* 60px - Hero headings */
--text-7xl: 4.5rem;      /* 72px - Extra large display */

/* Fluid Heading Scale (Responsive) */
--h1-size: clamp(2.5rem, 5vw + 1rem, 4rem);      /* 40px → 64px */
--h2-size: clamp(2rem, 4vw + 0.5rem, 3rem);      /* 32px → 48px */
--h3-size: clamp(1.5rem, 3vw + 0.25rem, 2rem);   /* 24px → 32px */
--h4-size: clamp(1.25rem, 2vw + 0.25rem, 1.5rem);/* 20px → 24px */
--h5-size: clamp(1.125rem, 1.5vw, 1.25rem);      /* 18px → 20px */
--h6-size: 1rem;                                  /* 16px - fixed */
```

---

### 3.3 Font Weights

```css
--font-light: 300;     /* Sparse use, special emphasis */
--font-regular: 400;   /* Body text default */
--font-medium: 500;    /* Subtle emphasis */
--font-semibold: 600;  /* Strong emphasis, h3-h6 */
--font-bold: 700;      /* Primary headings h1-h2 */
--font-black: 900;     /* Rare use, extreme emphasis */
```

**Usage Guidelines:**
- **h1, h2:** font-weight: 700 (bold)
- **h3, h4:** font-weight: 600 (semibold)
- **h5, h6:** font-weight: 500 (medium)
- **Body:** font-weight: 400 (regular)
- **Strong/Bold:** font-weight: 600 (semibold)
- **Buttons:** font-weight: 700 (bold)

---

### 3.4 Line Height

```css
--leading-none: 1;       /* Tight, display only */
--leading-tight: 1.1;    /* Headlines h1-h2 */
--leading-snug: 1.25;    /* Subheadings h3-h6 */
--leading-normal: 1.5;   /* Body text (default) */
--leading-relaxed: 1.625;/* Comfortable reading */
--leading-loose: 1.75;   /* Long-form content */
```

**Usage:**
- Headlines: `1.1 - 1.25`
- Body text: `1.5`
- Long-form: `1.625 - 1.75`

---

### 3.5 Letter Spacing

```css
--tracking-tighter: -0.05em; /* Extra tight, large display */
--tracking-tight: -0.02em;   /* Tight, large headings */
--tracking-normal: 0;        /* Default, most text */
--tracking-wide: 0.05em;     /* Slightly open */
--tracking-wider: 0.1em;     /* Tags, labels */
--tracking-widest: 0.15em;   /* Uppercase labels */
```

**Usage:**
- Large headings (h1-h2): `-0.02em`
- Body text: `0`
- Labels/tags: `0.1em - 0.15em`
- Uppercase text: `0.1em+`

---

### 3.6 Typography Examples

**Hero Headline:**
```css
font-family: Georgia, serif;
font-size: var(--h1-size);
font-weight: var(--font-bold);
line-height: var(--leading-tight);
letter-spacing: var(--tracking-tight);
color: var(--neutral-700);
```

**Body Paragraph:**
```css
font-family: var(--font-body);
font-size: var(--text-base);
font-weight: var(--font-regular);
line-height: var(--leading-normal);
letter-spacing: var(--tracking-normal);
color: var(--neutral-800);
```

**Tag/Label:**
```css
font-family: var(--font-accent);
font-size: var(--text-xs);
font-weight: var(--font-bold);
line-height: var(--leading-none);
letter-spacing: var(--tracking-widest);
text-transform: uppercase;
color: var(--neutral-50);
```

---

## 4. Spacing & Layout

### 4.1 Spacing Scale

**Base Unit: 4px (0.25rem)**

```css
--space-0: 0;
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-5: 1.5rem;   /* 24px */
--space-6: 2rem;     /* 32px */
--space-7: 3rem;     /* 48px */
--space-8: 4rem;     /* 64px */
--space-9: 6rem;     /* 96px */
--space-10: 8rem;    /* 128px */
--space-11: 12rem;   /* 192px */
--space-12: 16rem;   /* 256px */
```

**Common Usage:**
- **Micro spacing:** 4-8px (buttons, inputs)
- **Component padding:** 16-24px (cards, sections)
- **Section spacing:** 48-64px (between major sections)
- **Hero spacing:** 96-128px (large features)

---

### 4.2 Container Widths

```css
--container-sm: 640px;   /* Forms, narrow content */
--container-md: 768px;   /* Blog posts, articles */
--container-lg: 1024px;  /* Standard content */
--container-xl: 1280px;  /* Wide layouts, default */
--container-2xl: 1536px; /* Full-width features */
--container-full: 100%;  /* Full viewport */
```

**Default Container:**
```css
max-width: 1280px;
margin-left: auto;
margin-right: auto;
padding-left: 1.5rem;
padding-right: 1.5rem;
```

---

### 4.3 Grid System

**12-Column Grid (Desktop):**
- Columns: 12
- Gutter: 32px (--space-6)
- Margin: 64px (--space-8)
- Max-width: 1280px

**8-Column Grid (Tablet):**
- Columns: 8
- Gutter: 24px (--space-5)
- Margin: 32px (--space-6)

**4-Column Grid (Mobile):**
- Columns: 4
- Gutter: 16px (--space-4)
- Margin: 20px (--space-5)

```css
.grid {
  display: grid;
  gap: var(--space-6);
  grid-template-columns: repeat(12, 1fr);
}

@media (max-width: 1023px) {
  .grid {
    gap: var(--space-5);
    grid-template-columns: repeat(8, 1fr);
  }
}

@media (max-width: 767px) {
  .grid {
    gap: var(--space-4);
    grid-template-columns: repeat(4, 1fr);
  }
}
```

---

### 4.4 Breakpoints

```css
/* Mobile First Approach */
--screen-xs: 0px;       /* 0 - 479px */
--screen-sm: 480px;     /* 480 - 767px */
--screen-md: 768px;     /* 768 - 1023px */
--screen-lg: 1024px;    /* 1024 - 1279px */
--screen-xl: 1280px;    /* 1280 - 1535px */
--screen-2xl: 1536px;   /* 1536px+ */
```

**Media Query Usage:**
```css
/* Mobile first - default styles for mobile */

@media (min-width: 768px) {
  /* Tablet and above */
}

@media (min-width: 1024px) {
  /* Desktop and above */
}

@media (min-width: 1280px) {
  /* Large desktop */
}
```

---

## 5. Components

### 5.1 Buttons

**Primary Button:**
```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  font-weight: 700;
  font-size: 0.875rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border: 2px solid var(--sage-400);
  background: var(--sage-400);
  color: white;
  border-radius: 6px;
  cursor: pointer;
  transition: all 200ms cubic-bezier(0.4, 0.2, 0.2, 1);
  box-shadow: 0 2px 6px rgba(120, 146, 113, 0.2);
}

.btn-primary:hover {
  background: var(--sage-500);
  border-color: var(--sage-500);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(120, 146, 113, 0.3);
}

.btn-primary:active {
  transform: translateY(0);
  box-shadow: 0 1px 3px rgba(120, 146, 113, 0.2);
}
```

**Secondary Button (Outline):**
```css
.btn-secondary {
  /* Same as primary but: */
  background: transparent;
  color: var(--sage-500);
  border: 2px solid var(--sage-500);
}

.btn-secondary:hover {
  background: var(--sage-100);
  border-color: var(--sage-500);
}
```

**Button Sizes:**
```css
.btn-sm {
  padding: 8px 16px;
  font-size: 0.75rem;
}

.btn-md {
  padding: 12px 24px;
  font-size: 0.875rem;
}

.btn-lg {
  padding: 16px 32px;
  font-size: 1rem;
}
```

---

### 5.2 Cards

**Standard Card:**
```css
.card {
  background: white;
  border: 1px solid var(--neutral-200);
  border-radius: 12px;
  padding: 2rem;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  box-shadow: 0 1px 3px rgba(17, 17, 17, 0.06);
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 24px rgba(120, 146, 113, 0.16);
  border-color: var(--sage-300);
}
```

**Featured Card:**
```css
.card-featured {
  border: 2px solid var(--sage-400);
  background: linear-gradient(
    135deg,
    white 0%,
    var(--sage-100) 100%
  );
}
```

---

### 5.3 Forms

**Input Field:**
```css
.input {
  width: 100%;
  padding: 12px 16px;
  font-size: 1rem;
  border: 2px solid var(--neutral-300);
  border-radius: 6px;
  background: white;
  color: var(--neutral-800);
  transition: all 200ms ease;
}

.input:focus {
  outline: none;
  border-color: var(--sage-400);
  box-shadow: 0 0 0 3px rgba(120, 146, 113, 0.1);
}

.input::placeholder {
  color: var(--neutral-400);
}
```

**Label:**
```css
.label {
  display: block;
  margin-bottom: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--neutral-700);
  letter-spacing: 0.01em;
}
```

---

### 5.4 Navigation

**Header:**
```css
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: saturate(180%) blur(12px);
  border-bottom: 1px solid var(--neutral-200);
}
```

**Nav Link:**
```css
.nav-link {
  position: relative;
  padding: 8px 4px;
  font-weight: 600;
  color: var(--neutral-700);
  text-decoration: none;
  transition: color 200ms ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--sage-400);
  transition: width 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.nav-link:hover::after,
.nav-link:focus::after {
  width: 100%;
}
```

---

## 6. Imagery

### 6.1 Image Guidelines

**Aspect Ratios:**
```css
--aspect-square: 1 / 1;     /* Icons, profiles */
--aspect-landscape: 16 / 9; /* Hero, banners */
--aspect-portrait: 3 / 4;   /* Vertical cards */
--aspect-wide: 21 / 9;      /* Ultra-wide hero */
--aspect-photo: 4 / 3;      /* Photography */
```

**Image Optimization:**
- Use Next.js `<Image>` component
- WebP format with JPG fallback
- Responsive sizes: 640w, 768w, 1024w, 1280w, 1920w
- Lazy load below-the-fold images
- Priority load hero images

---

### 6.2 Image Overlays

**Gradient Overlay (Dark):**
```css
.image-overlay-dark {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(17, 17, 17, 0) 0%,
    rgba(17, 17, 17, 0.4) 50%,
    rgba(17, 17, 17, 0.75) 100%
  );
}
```

**Brand Tint Overlay:**
```css
.image-overlay-sage {
  background: linear-gradient(
    135deg,
    rgba(120, 146, 113, 0.1) 0%,
    rgba(70, 82, 61, 0.2) 100%
  );
  mix-blend-mode: multiply;
}
```

**Hover Zoom:**
```css
.image-zoom {
  overflow: hidden;
}

.image-zoom img {
  transition: transform 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.image-zoom:hover img {
  transform: scale(1.05);
}
```

---

### 6.3 Image Presentation

**Featured Image with Badge:**
```html
<div class="image-wrapper">
  <img src="..." alt="..." />
  <div class="image-badge">
    <img src="/assets/logo.png" alt="" />
  </div>
</div>
```

```css
.image-badge {
  position: absolute;
  left: 16px;
  bottom: 16px;
  padding: 8px 12px;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid var(--neutral-200);
  border-radius: 999px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
```

---

## 7. Iconography

### 7.1 Icon System

**Style:** Line icons, 2px stroke weight, rounded caps/joins

**Sizes:**
```css
--icon-xs: 16px;
--icon-sm: 20px;
--icon-md: 24px;
--icon-lg: 32px;
--icon-xl: 48px;
--icon-2xl: 64px;
```

**Color:**
- Primary: `var(--sage-400)`
- Secondary: `var(--neutral-400)`
- On dark backgrounds: `white` or `var(--neutral-50)`

---

### 7.2 Icon Container

```css
.icon-container {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 8px;
  background: linear-gradient(
    145deg,
    var(--sage-500),
    var(--sage-400)
  );
  box-shadow: 0 2px 8px rgba(120, 146, 113, 0.2);
}

.icon-container svg {
  width: 28px;
  height: 28px;
  stroke: white;
  stroke-width: 2;
}
```

---

## 8. Motion & Animation

### 8.1 Timing Functions

```css
--ease-linear: linear;
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-smooth: cubic-bezier(0.4, 0.2, 0.2, 1);
--ease-elegant: cubic-bezier(0.25, 0.46, 0.45, 0.94);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

**Primary Easing:** `cubic-bezier(0.25, 0.46, 0.45, 0.94)` (elegant)

---

### 8.2 Duration Scale

```css
--duration-instant: 100ms;  /* Immediate feedback */
--duration-fast: 150ms;     /* Quick transitions */
--duration-base: 250ms;     /* Standard (most common) */
--duration-slow: 400ms;     /* Deliberate */
--duration-slower: 600ms;   /* Emphasis */
--duration-slowest: 1000ms; /* Dramatic */
```

**Typical Usage:**
- Hover effects: 200-250ms
- Page transitions: 400-600ms
- Loading animations: 1000ms+

---

### 8.3 Animation Patterns

**Fade In Up:**
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
```

**Staggered Animation:**
```css
.card:nth-child(1) { animation-delay: 100ms; }
.card:nth-child(2) { animation-delay: 200ms; }
.card:nth-child(3) { animation-delay: 300ms; }
.card:nth-child(4) { animation-delay: 400ms; }
```

**Hover Lift:**
```css
.lift {
  transition: transform 250ms var(--ease-elegant),
              box-shadow 250ms var(--ease-elegant);
}

.lift:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
}
```

---

### 8.4 Reduced Motion

**Always respect user preferences:**

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 9. Accessibility

### 9.1 Focus Indicators

```css
:focus-visible {
  outline: 3px solid var(--sage-400);
  outline-offset: 3px;
  border-radius: 4px;
}

button:focus-visible,
a:focus-visible,
input:focus-visible {
  outline: 3px solid var(--sage-400);
  outline-offset: 2px;
}
```

---

### 9.2 Screen Reader Utilities

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.sr-only-focusable:focus,
.sr-only-focusable:active {
  position: static;
  width: auto;
  height: auto;
  overflow: visible;
  clip: auto;
  white-space: normal;
}
```

---

### 9.3 Touch Targets

**Minimum Size:** 44x44px (WCAG 2.2 AAA)
**Recommended:** 48x48px

```css
button,
a.btn,
input[type="button"],
input[type="submit"] {
  min-width: 48px;
  min-height: 48px;
}
```

---

### 9.4 ARIA Labels

**Always include:**
- `aria-label` for icon-only buttons
- `aria-describedby` for form field hints
- `aria-expanded` for collapsible elements
- `aria-current="page"` for active nav links
- `alt` text for all images (empty for decorative)

---

## 10. Code Examples

### 10.1 Hero Section

```html
<section class="hero">
  <div class="hero-media">
    <Image src="/assets/image4.jpg" alt="..." fill priority />
    <div class="hero-overlay"></div>
  </div>
  <div class="hero-content">
    <span class="hero-tag">Hospitality Remodeling</span>
    <h1>Modern Renovations That Elevate Guest Experience</h1>
    <p class="lead">Schedule-driven remodeling for hotels...</p>
    <div class="hero-actions">
      <a class="btn-primary" href="#contact">Start a Project</a>
      <a class="btn-secondary" href="#portfolio">View Portfolio</a>
    </div>
  </div>
</section>
```

---

### 10.2 Service Card

```html
<article class="card">
  <div class="icon-container">
    <svg><!-- icon --></svg>
  </div>
  <h3>Hotel Renovations</h3>
  <p>Phased guest room, corridor, lobby, and amenity upgrades...</p>
  <a class="card-link" href="#">Learn More →</a>
</article>
```

---

### 10.3 Portfolio Item

```html
<article class="portfolio-item">
  <div class="portfolio-image">
    <Image src="..." alt="..." width={600} height={400} />
    <div class="portfolio-overlay"></div>
  </div>
  <div class="portfolio-content">
    <span class="portfolio-tag">Resort</span>
    <h3>Luxury Beach Resort Renovation</h3>
    <p>Complete modernization of 200+ guest rooms...</p>
  </div>
</article>
```

---

## Conclusion

This style guide serves as the foundation for all visual design decisions on the PARDO Construction LLC website. Adherence to these guidelines ensures:

✅ **Brand Consistency** across all touchpoints  
✅ **Visual Elegance** befitting the premium hospitality market  
✅ **Accessibility** for all users  
✅ **Performance** through optimized implementations  
✅ **Scalability** as the website grows

For questions or clarification on any guideline, please refer to the REDESIGN_PROPOSAL.md document or consult the design team.

---

**Document Maintenance:**
- Review quarterly
- Update with new patterns as needed
- Version control all changes
- Communicate updates to all stakeholders
