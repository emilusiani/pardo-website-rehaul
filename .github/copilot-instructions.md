# GitHub Copilot Instructions for PARDO Construction Website

## Project Overview

This is a Next.js 14 website for PARDO Construction LLC with Sanity CMS integration, focusing on:
- Modern construction company web presence
- Performance optimization (Core Web Vitals)
- Accessibility (WCAG 2.1 AA compliance)
- SEO best practices
- Security hardening

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **CMS**: Sanity
- **Styling**: CSS with design tokens
- **Image Optimization**: next/image with Sharp
- **Testing**: Jest, Playwright (when applicable)

## Design System

### Color Palette
- Primary: `#789271`
- Hover: `#46523D`
- Alternative: `#F5F4F0`
- Dark: `#212021`
- Darkest: `#111111`

### Key Features
- Responsive design (mobile-first)
- Lazy loading for images
- Security headers configured
- XSS prevention with HTML sanitization
- Structured data (JSON-LD)
- SEO optimized (meta tags, sitemap, robots.txt)

## Custom Agents

This repository includes specialized agents in `.github/agents/` that provide expert guidance for specific tasks:

### Development
- **Frontend Engineer**: Next.js/TypeScript implementation
- **Content Engineer**: CMS integration and content management
- **Data Layer Steward**: API design and data handling

### Quality Assurance
- **QA & E2E Tester**: Testing strategy and implementation
- **Security Reviewer**: Security audits and vulnerability fixes
- **Accessibility Auditor**: WCAG compliance and a11y improvements

### Performance & SEO
- **Performance Optimizer**: Core Web Vitals optimization
- **SEO & Content Strategist**: Search engine optimization

### Design & UX
- **Design Director**: Design system and visual consistency
- **UI Polisher**: Interface refinement and polish
- **UX Researcher**: User experience analysis

### Analytics & Operations
- **Analytics & Experimentation**: Tracking and A/B testing
- **Release Manager**: Deployment and versioning
- **i18n & Localization**: Internationalization

## Coding Guidelines

### TypeScript
- Use strict mode
- No `any` types
- Exhaustive switch statements on discriminated unions
- Zod for external input validation (env, query, body)

### React/Next.js
- Prefer Server Components (RSC) where possible
- Use `next/image` for all images
- Implement proper loading and error states
- Follow accessibility best practices (semantic HTML, ARIA labels)

### Security
- Sanitize all user/CMS content
- Use security headers (already configured)
- Validate and sanitize inputs
- Keep dependencies updated

### Performance
- Lazy load below-the-fold images
- Code split large components
- Optimize Core Web Vitals
- Use proper caching strategies

### Accessibility
- WCAG 2.1 AA minimum
- Semantic HTML structure
- Proper heading hierarchy
- Keyboard navigation support
- Screen reader compatibility
- Sufficient color contrast

### Testing
- Unit tests for utilities and helpers
- Integration tests for components
- E2E tests for critical user flows
- Minimum 80% coverage for new code

## File Structure

```
/app
  - layout.tsx (metadata, structured data)
  - page.tsx (home page)
  - globals.css (global styles)
  - ContactForm.tsx (contact form component)
  - Header.tsx (navigation)
  - BackToTop.tsx (scroll to top button)
  - WebVitals.tsx (performance monitoring)
  - error.tsx (error boundary)
  - loading.tsx (loading state)
  - sitemap.ts (dynamic sitemap)
  - robots.ts (robots.txt)
  
/lib
  - sanitize.ts (HTML sanitization)
  
/public
  - /assets (images)
  
/sanity
  - schema.ts (CMS schemas)
```

## Common Tasks

### Adding New Components
1. Create component in `/app` directory
2. Use TypeScript with proper types
3. Implement accessibility features
4. Add loading/error states
5. Write tests if applicable
6. Update documentation

### CMS Integration
1. Define schema in `/sanity/schema.ts`
2. Add fallback content
3. Implement data fetching
4. Add error handling
5. Test with and without CMS connection

### Performance Optimization
1. Use `next/image` with proper sizing
2. Implement lazy loading
3. Code split if needed
4. Monitor Core Web Vitals
5. Run Lighthouse audits

### Security Updates
1. Keep dependencies current
2. Run security audits (`npm audit`)
3. Test security headers
4. Validate/sanitize inputs
5. Run CodeQL scans

## References

- Project Documentation: `/README.md`
- Implementation Summary: `/IMPLEMENTATION_SUMMARY.md`
- Agent Definitions: `/.github/agents/`
- Inspection Scripts: `/scripts/`

## Best Practices

1. **Minimal Changes**: Make the smallest changes necessary to achieve goals
2. **Test First**: Understand existing tests before making changes
3. **Incremental**: Build and test frequently
4. **Accessible**: Always consider accessibility in implementations
5. **Secure**: Security should never be an afterthought
6. **Performant**: Monitor and optimize Core Web Vitals
7. **SEO-Friendly**: Maintain proper meta tags and structured data
8. **Type-Safe**: Leverage TypeScript's type system fully

## When to Use Which Agent

- **Feature Implementation**: Frontend Engineer
- **Content/CMS Work**: Content Engineer
- **API/Data Logic**: Data Layer Steward
- **Writing Tests**: QA & E2E Tester
- **Security Concerns**: Security Reviewer
- **Accessibility Issues**: Accessibility Auditor
- **Performance Problems**: Performance Optimizer
- **SEO Improvements**: SEO & Content Strategist
- **Design System Work**: Design Director
- **UI Refinements**: UI Polisher
- **UX Analysis**: UX Researcher
- **Analytics Setup**: Analytics & Experimentation
- **Deployment**: Release Manager
- **Translations**: i18n & Localization

## Support

For questions or issues with custom agents, refer to `.github/agents/README.md`.
