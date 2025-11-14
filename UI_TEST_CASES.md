# UI Rendering Test Cases for PARDO Construction Website

## Overview
This document contains comprehensive test cases designed to identify UI rendering issues related to component overlapping, incorrect font alignment (centering), and overall visual inconsistencies across desktop and mobile platforms using Chrome's Mobile Device Emulation (MDE) tool.

## Test Environment
- **Browser**: Google Chrome (latest version)
- **Tool**: Chrome DevTools Mobile Device Emulation (MDE)
- **Website URL**: http://localhost:3000 (or production URL)

---

## Test Cases

### Test Case ID: TC_001

**Description:** Verify the correct alignment and visibility of the header navigation on mobile devices.

**Steps:**
1. Open the website in Chrome.
2. Enable Mobile Device Emulation (MDE) and select "iPhone 13".
3. Observe the header navigation bar at the top of the page.
4. Click the "Menu" button to expand the mobile navigation menu.

**Expected Result:** 
- The header should be sticky and remain at the top when scrolling.
- The logo should be left-aligned within the header.
- The "Menu" button should be right-aligned and clearly visible.
- The mobile menu should expand below the header with all navigation links (Home, Services, Portfolio, About, Contact) clearly visible and centered.
- No overlap between the logo and menu button should occur.

**Pass/Fail Criteria:**
- **Pass**: Logo is left-aligned, menu button is right-aligned with adequate spacing. Mobile menu expands without overlapping header elements. All menu items are fully visible and properly aligned.
- **Fail**: Logo overlaps with menu button, menu items are cut off, misaligned, or overlap with other elements.

**Device/Resolution:** iPhone 13 (390 x 844)

---

### Test Case ID: TC_002

**Description:** Verify the hero section title and subtitle centering and overlay visibility on desktop.

**Steps:**
1. Open the website in Chrome.
2. Set viewport to Desktop resolution 1920x1080.
3. Navigate to the homepage hero section (first section).
4. Observe the main title "Modern Renovations That Elevate Guest Experience".
5. Observe the subtitle/lead text and hero tag.

**Expected Result:** 
- The hero section should display the background image with a semi-transparent dark overlay.
- The "Hospitality Remodeling" tag should be visible and left-aligned within the content area.
- The main title "Modern Renovations That Elevate Guest Experience" should be left-aligned and clearly readable against the background.
- The lead paragraph should be left-aligned and within the same content area.
- Hero action buttons should be horizontally aligned with consistent spacing.

**Pass/Fail Criteria:**
- **Pass**: All text is clearly readable with sufficient contrast. Hero tag, title, and lead text are properly left-aligned within the hero-inner container. Buttons are horizontally aligned with equal gaps.
- **Fail**: Text is not readable due to insufficient contrast, title or text overlaps with other elements, buttons are misaligned or overlap.

**Device/Resolution:** Desktop - 1920x1080

---

### Test Case ID: TC_003

**Description:** Verify metrics grid layout and number centering on tablet devices.

**Steps:**
1. Open the website in Chrome.
2. Enable Mobile Device Emulation (MDE) and select "iPad Pro" (1024 x 1366).
3. Scroll to the metrics section (displays "500+ Projects", "50 States", etc.).
4. Observe the layout of the four metric items.

**Expected Result:** 
- The metrics should be displayed in a responsive grid layout (2x2 or 4x1 depending on space).
- Each metric value (e.g., "500+") should be centered within its container.
- Each metric label (e.g., "Projects") should be centered directly below its value.
- All four metrics should have equal spacing between them.

**Pass/Fail Criteria:**
- **Pass**: Metrics are evenly distributed across the viewport. Values and labels are centered within their containers. Equal spacing exists between all metrics.
- **Fail**: Metrics overlap, values or labels are off-center, uneven spacing between metrics, or metrics extend beyond viewport boundaries.

**Device/Resolution:** iPad Pro (1024 x 1366)

---

### Test Case ID: TC_004

**Description:** Verify services cards grid alignment and icon positioning on mobile devices.

**Steps:**
1. Open the website in Chrome.
2. Enable Mobile Device Emulation (MDE) and select "Samsung Galaxy S22" (360 x 800).
3. Scroll to the "Core Services" section.
4. Observe each service card's layout, including icon, title, description, and "Learn More" link.

**Expected Result:** 
- Service cards should stack vertically in a single column on mobile.
- Each card's icon should be displayed at the top-left of the card.
- Card title should be left-aligned below the icon.
- Card description text should be left-aligned and not overflow the card boundaries.
- "Learn More →" link should be left-aligned at the bottom of each card.
- Cards should have consistent padding and spacing between them.

**Pass/Fail Criteria:**
- **Pass**: All cards are properly stacked in a single column. Icons, titles, descriptions, and links are properly aligned within their respective cards. No text overflow or truncation occurs. Consistent spacing exists between cards.
- **Fail**: Cards overlap, icons or text extend beyond card boundaries, inconsistent spacing between cards, or text is truncated/overflowing.

**Device/Resolution:** Samsung Galaxy S22 (360 x 800)

---

### Test Case ID: TC_005

**Description:** Verify banner section layout and image-text alignment on various screen sizes.

**Steps:**
1. Open the website in Chrome.
2. Test with three different resolutions:
   - Desktop: 1920x1080
   - Tablet: iPad Air (820 x 1180)
   - Mobile: iPhone 14 (390 x 844)
3. Scroll to the "Reliable, Schedule-Driven Delivery" banner section.
4. Observe the layout of the image and text content.

**Expected Result:** 
- **Desktop (1920x1080)**: Image should be displayed on the left (approximately 1.3:1 ratio with text), text content on the right, both vertically centered.
- **Tablet (820 x 1180)**: May display side-by-side or stack depending on breakpoint.
- **Mobile (390 x 844)**: Image and text should stack vertically, image on top, text below.
- The banner badge (logo) should remain in the bottom-left corner of the image.
- Text content (title, paragraph, button) should remain within its container without overflow.

**Pass/Fail Criteria:**
- **Pass**: Layout responds correctly at each resolution. Image and text do not overlap. Banner badge remains positioned in the image's bottom-left corner. Text is fully readable and contained within its boundaries.
- **Fail**: Image and text overlap, banner badge is misplaced or hidden, text overflows its container, or layout breaks at any tested resolution.

**Device/Resolution:** Desktop (1920x1080), iPad Air (820 x 1180), iPhone 14 (390 x 844)

---

### Test Case ID: TC_006

**Description:** Verify portfolio grid responsiveness and project card overlay text centering.

**Steps:**
1. Open the website in Chrome.
2. Enable Mobile Device Emulation (MDE) and select "Pixel 7" (412 x 915).
3. Scroll to the "Selected Work" portfolio section.
4. Observe the project cards layout and text overlay positioning.

**Expected Result:** 
- Project cards should display in a single column on mobile devices.
- Each card's image should fill the card area without distortion.
- The gradient overlay should be visible at the bottom of each card.
- Project tag, title, and summary text should be left-aligned and positioned at the bottom of each card.
- The corner logo should remain in the bottom-right corner of each card.
- Text should be clearly readable against the gradient overlay.

**Pass/Fail Criteria:**
- **Pass**: Cards stack properly in a single column. Images display without distortion. Overlay text is properly positioned and readable. Corner logo remains in bottom-right position. No text truncation occurs.
- **Fail**: Cards overlap, images are distorted, overlay text overlaps with the corner logo, text is unreadable or cut off, or corner logo is misplaced.

**Device/Resolution:** Pixel 7 (412 x 915)

---

### Test Case ID: TC_007

**Description:** Verify contact form CTA section layout and button alignment on desktop.

**Steps:**
1. Open the website in Chrome.
2. Set viewport to Desktop resolution 1366x768.
3. Scroll to the "Ready to Plan Your Next Property Upgrade?" contact section.
4. Observe the CTA background, logo watermark, form elements, and action buttons.

**Expected Result:** 
- The CTA section should have a dark primary background color (#46523D).
- The watermark logo should be faintly visible in the top-right corner.
- The title "Ready to Plan Your Next Property Upgrade?" should be centered and prominent.
- The description paragraph should be centered below the title.
- The contact form (when rendered) should be centered within the CTA section.
- Action buttons ("Email Us" and phone button) should be horizontally centered with equal spacing between them.

**Pass/Fail Criteria:**
- **Pass**: CTA section displays with correct background. Watermark logo is visible but not intrusive. Title and description are centered. Form and buttons are properly centered with consistent spacing. All text is readable against the dark background.
- **Fail**: Background color is incorrect, watermark logo obscures content, title/description are off-center, buttons are misaligned or overlap, or text has insufficient contrast.

**Device/Resolution:** Desktop - 1366x768

---

### Test Case ID: TC_008

**Description:** Verify header navigation link hover states and active indicators on desktop.

**Steps:**
1. Open the website in Chrome.
2. Set viewport to Desktop resolution 2560x1440.
3. Hover over each navigation link in the header (Home, Services, Portfolio, About, Contact).
4. Click on "Services" and verify the active state indicator.

**Expected Result:** 
- Navigation links should be horizontally aligned in the header.
- On hover, an underline should animate from left to right beneath the link.
- The link with `aria-current="page"` should display a persistent underline.
- Links should have consistent spacing between them (var(--s-6) / 2rem).
- Text should remain stable without shifting during hover animation.

**Pass/Fail Criteria:**
- **Pass**: All navigation links are evenly spaced. Hover animation appears smoothly beneath the link text without causing layout shift. Active page indicator is clearly visible. Links do not overlap each other.
- **Fail**: Links are unevenly spaced, hover animation causes text to shift or overlap, active indicator is not visible, or links overlap with logo or menu button.

**Device/Resolution:** Desktop - 2560x1440

---

### Test Case ID: TC_009

**Description:** Verify font size scaling and readability across extreme mobile device sizes.

**Steps:**
1. Open the website in Chrome.
2. Test with three different mobile resolutions:
   - Small: iPhone SE (375 x 667)
   - Medium: iPhone 14 Pro (393 x 852)
   - Large: iPhone 14 Pro Max (430 x 932)
3. Navigate through all sections of the website (Hero, Services, Portfolio, Contact).
4. Observe all headings (h1, h2, h3) and body text for proper scaling and readability.

**Expected Result:** 
- **H1 headings** should scale responsively using clamp (min: 2.2rem, max: 3.1rem).
- **H2 headings** should scale responsively using clamp (min: 1.8rem, max: 2.3rem).
- **H3 headings** should remain at 1.25rem.
- Body text should remain readable without zooming.
- No text should overflow container boundaries.
- All text should maintain adequate line-height (1.55 for body, 1.2 for headings).

**Pass/Fail Criteria:**
- **Pass**: All headings scale appropriately for each device size. Body text is readable without zooming on all devices. No text overflows its container. Line spacing is adequate for readability.
- **Fail**: Headings are too large or too small for the viewport, body text requires zooming to read, text overflows containers, or inadequate line spacing makes text difficult to read.

**Device/Resolution:** iPhone SE (375 x 667), iPhone 14 Pro (393 x 852), iPhone 14 Pro Max (430 x 932)

---

### Test Case ID: TC_010

**Description:** Verify mobile menu expansion and closing behavior with focus management.

**Steps:**
1. Open the website in Chrome.
2. Enable Mobile Device Emulation (MDE) and select "Moto G Power" (412 x 823).
3. Click the "Menu" button to open the mobile navigation.
4. Verify the menu position and styling.
5. Click on a navigation link (e.g., "Portfolio").
6. Verify the menu closes automatically after clicking.
7. Re-open the menu and click outside the menu area.

**Expected Result:** 
- Clicking "Menu" button should toggle `aria-expanded` attribute (false → true).
- Mobile menu should appear as a dropdown below the header, positioned to the right.
- Menu should have white background, border, rounded corners, and shadow (var(--shadow-m)).
- Menu items should be stacked vertically with consistent spacing (var(--s-3) / 0.75rem).
- Clicking a menu item should close the menu and update `aria-expanded` to false.
- The page should scroll to the corresponding section smoothly.

**Pass/Fail Criteria:**
- **Pass**: Menu opens and closes smoothly. Menu is properly positioned below the header and aligned to the right. Menu styling (background, border, shadow) is correct. Menu items are evenly spaced. Clicking a menu item closes the menu and navigates to the correct section. `aria-expanded` attribute updates correctly.
- **Fail**: Menu does not open/close, menu is mispositioned or overlaps header elements, menu styling is incorrect, menu items are overlapping or misaligned, clicking menu items does not close the menu, or `aria-expanded` attribute does not update.

**Device/Resolution:** Moto G Power (412 x 823)

---

### Test Case ID: TC_011

**Description:** Verify hero section background image and overlay rendering across different orientations.

**Steps:**
1. Open the website in Chrome.
2. Enable Mobile Device Emulation (MDE) and select "iPad Pro" (1024 x 1366).
3. View the hero section in portrait orientation.
4. Rotate to landscape orientation (1366 x 1024).
5. Observe the hero section height, background image positioning, and text overlay.

**Expected Result:** 
- **Portrait (1024 x 1366)**: Hero section should be approximately 70vh or max 720px in height. Background image should cover the entire hero area without distortion.
- **Landscape (1366 x 1024)**: Hero section should adjust height accordingly, maintaining the same max-height constraints.
- The dark gradient overlay should remain visible over the background image in both orientations.
- The hero content (tag, title, lead text, buttons) should remain positioned consistently (margin-top: -160px from bottom of image area).
- The watermark logo should remain in the top-left area (left: 4%, top: 6%) in both orientations.

**Pass/Fail Criteria:**
- **Pass**: Hero section adjusts height appropriately in both orientations. Background image covers the area without distortion or gaps. Overlay gradient is consistently visible. Hero content positioning remains stable. Watermark logo remains in the correct position.
- **Fail**: Hero section height is incorrect, background image is distorted or doesn't cover the area, overlay is missing or incorrect, hero content shifts unexpectedly, or watermark logo is misplaced or hidden.

**Device/Resolution:** iPad Pro - Portrait (1024 x 1366) and Landscape (1366 x 1024)

---

### Test Case ID: TC_012

**Description:** Verify services cards hover effects and shadow rendering on desktop.

**Steps:**
1. Open the website in Chrome.
2. Set viewport to Desktop resolution 1920x1080.
3. Navigate to the "Core Services" section.
4. Hover over each service card individually.
5. Observe the hover animation, shadow effect, and border color change.

**Expected Result:** 
- Service cards should be displayed in a multi-column grid (minimum 280px per card).
- On hover, each card should:
  - Translate upward by 4px (transform: translateY(-4px))
  - Display an enhanced shadow (var(--shadow-m))
  - Border color should change to primary color (var(--primary) / #789271)
- Hover effects should apply smoothly with the defined transition (160ms cubic-bezier).
- Cards should return to their original state when hover ends.
- Hover on one card should not affect adjacent cards.

**Pass/Fail Criteria:**
- **Pass**: Cards are properly laid out in a grid. Hover effects apply smoothly with correct translation, shadow, and border color. Transition timing is appropriate. Only the hovered card is affected. Card returns to original state after hover ends.
- **Fail**: Cards are misaligned or overlapping, hover effects do not apply or are choppy, incorrect shadow or border color, hover affects adjacent cards, or card does not return to original state.

**Device/Resolution:** Desktop - 1920x1080

---

### Test Case ID: TC_013

**Description:** Verify footer layout and link alignment on mobile devices.

**Steps:**
1. Open the website in Chrome.
2. Enable Mobile Device Emulation (MDE) and select "iPhone 13 Mini" (375 x 812).
3. Scroll to the bottom of the page to view the footer section.
4. Observe the footer grid layout, brand logo, and link sections.

**Expected Result:** 
- Footer should have a dark background (var(--near-black) / #212021).
- Footer content should be organized in a responsive grid that stacks vertically on mobile.
- The footer brand section (with logo) should be displayed first.
- Footer logo should be visible and properly sized (max-height: 48px).
- All footer links should be left-aligned within their sections.
- Footer links should have adequate spacing (margin-bottom: 6px).
- The legal section (copyright) should be centered at the bottom of the footer.

**Pass/Fail Criteria:**
- **Pass**: Footer has correct background color. Grid sections stack vertically on mobile. Logo is visible and properly sized. All links are left-aligned within their sections with consistent spacing. Legal text is centered at the bottom. All text is readable against the dark background.
- **Fail**: Footer background is incorrect, grid sections overlap or are misaligned, logo is missing or incorrectly sized, links are misaligned or overlapping, legal text is not centered, or text has insufficient contrast.

**Device/Resolution:** iPhone 13 Mini (375 x 812)

---

### Test Case ID: TC_014

**Description:** Verify portfolio project cards image aspect ratio and text truncation handling.

**Steps:**
1. Open the website in Chrome.
2. Set viewport to Desktop resolution 1440x900.
3. Navigate to the "Selected Work" portfolio section.
4. Observe the layout of project cards in the grid.
5. Check each card's image display, overlay gradient, and text content positioning.

**Expected Result:** 
- Project cards should be displayed in a multi-column grid (minimum 320px per card).
- Each project image should maintain consistent height (260px) across all cards.
- Images should use object-fit: cover to fill the card area without distortion.
- The dark gradient overlay should span from transparent at the top to 72% opacity at the bottom.
- Project tag, title, and summary text should be positioned at the bottom of each card.
- Long project titles or summaries should not overflow the card boundaries.
- The corner logo should remain visible in the bottom-right corner without overlapping text.

**Pass/Fail Criteria:**
- **Pass**: All project cards have equal dimensions. Images are displayed at 260px height without distortion. Gradient overlay is smooth and properly positioned. All text content fits within the card boundaries without overflow. Corner logo is visible and does not overlap text.
- **Fail**: Cards have inconsistent dimensions, images are distorted or have incorrect aspect ratios, gradient overlay is missing or incorrect, text overflows card boundaries, or corner logo overlaps with text content.

**Device/Resolution:** Desktop - 1440x900

---

### Test Case ID: TC_015

**Description:** Verify button group alignment and wrapping behavior in hero and CTA sections.

**Steps:**
1. Open the website in Chrome.
2. Test with four different mobile resolutions:
   - iPhone SE (375 x 667)
   - Samsung Galaxy S20 (360 x 800)
   - Pixel 5 (393 x 851)
   - iPhone 14 Pro Max (430 x 932)
3. Observe the hero action buttons ("Start a Project", "View Portfolio").
4. Scroll to the contact section and observe the CTA action buttons ("Email Us", phone number).
5. Check for proper button wrapping and alignment at each resolution.

**Expected Result:** 
- Hero action buttons should be displayed horizontally with gap spacing (var(--s-4) / 1rem).
- If viewport width is insufficient, buttons should wrap to multiple lines while maintaining consistent spacing.
- CTA action buttons should be horizontally centered with consistent spacing between them.
- All buttons should maintain their minimum width and padding without text truncation.
- On narrow viewports, buttons should wrap gracefully without overlapping.

**Pass/Fail Criteria:**
- **Pass**: Buttons are horizontally aligned when space permits. Buttons wrap to new lines when viewport is narrow. Consistent spacing is maintained between buttons in all layouts. No button text is truncated. Buttons do not overlap each other or container boundaries.
- **Fail**: Buttons overlap each other, buttons extend beyond container boundaries, button spacing is inconsistent, button text is truncated or unreadable, or buttons do not wrap appropriately on narrow viewports.

**Device/Resolution:** iPhone SE (375 x 667), Samsung Galaxy S20 (360 x 800), Pixel 5 (393 x 851), iPhone 14 Pro Max (430 x 932)

---

## Testing Guidelines

### General Testing Approach
1. Always test in Chrome's latest version with DevTools Mobile Device Emulation enabled.
2. Test both portrait and landscape orientations where applicable.
3. Document any visual issues with screenshots showing the specific problem.
4. Pay special attention to:
   - Text readability and contrast
   - Element spacing and alignment
   - Component boundaries and overlaps
   - Responsive behavior at breakpoints (approximately 900px is a key breakpoint)
5. Use Chrome DevTools' "Toggle device toolbar" (Ctrl+Shift+M / Cmd+Shift+M) for easy device switching.

### Reporting Issues
When reporting a failure, include:
- Test Case ID
- Device/Resolution tested
- Screenshot highlighting the issue
- Brief description of the observed behavior vs. expected behavior
- Browser version and OS

### Accessibility Considerations
While testing visual rendering, also note:
- Focus indicators should be visible (3px solid outline in primary color)
- Interactive elements should be keyboard accessible
- Sufficient color contrast for all text (WCAG 2.1 AA minimum)
- Proper heading hierarchy (h1 → h2 → h3)

---

## Test Execution Summary Template

| Test Case ID | Device/Resolution | Result (Pass/Fail) | Notes |
|--------------|-------------------|-------------------|-------|
| TC_001 | iPhone 13 (390 x 844) | | |
| TC_002 | Desktop - 1920x1080 | | |
| TC_003 | iPad Pro (1024 x 1366) | | |
| TC_004 | Samsung Galaxy S22 (360 x 800) | | |
| TC_005 | Multiple | | |
| TC_006 | Pixel 7 (412 x 915) | | |
| TC_007 | Desktop - 1366x768 | | |
| TC_008 | Desktop - 2560x1440 | | |
| TC_009 | Multiple iPhones | | |
| TC_010 | Moto G Power (412 x 823) | | |
| TC_011 | iPad Pro (both orientations) | | |
| TC_012 | Desktop - 1920x1080 | | |
| TC_013 | iPhone 13 Mini (375 x 812) | | |
| TC_014 | Desktop - 1440x900 | | |
| TC_015 | Multiple mobile devices | | |

---

## Document Version
- **Version**: 1.0
- **Last Updated**: 2025-11-14
- **Created By**: GitHub Copilot Coding Agent
- **Status**: Ready for Execution
