#!/usr/bin/env node

/**
 * Website Inspection Agent
 * 
 * This agent inspects the PARDO Construction website and provides
 * comprehensive suggestions for improvements in:
 * - Performance
 * - Aesthetics
 * - Functionality
 */

const fs = require('fs');
const path = require('path');

class WebsiteInspectionAgent {
  constructor() {
    this.findings = {
      performance: [],
      aesthetics: [],
      functionality: [],
      security: [],
      accessibility: [],
      seo: []
    };
    this.projectRoot = path.join(__dirname, '..');
  }

  /**
   * Run all inspections
   */
  async inspect() {
    console.log('🔍 Starting Website Inspection...\n');
    
    await this.analyzePerformance();
    await this.analyzeAesthetics();
    await this.analyzeFunctionality();
    await this.analyzeSecurity();
    await this.analyzeAccessibility();
    await this.analyzeSEO();
    
    this.generateReport();
  }

  /**
   * Analyze Performance
   */
  async analyzePerformance() {
    console.log('⚡ Analyzing Performance...');
    
    // Check for Next.js Image optimization
    const pageContent = this.readFile('app/page.tsx');
    const headerContent = this.readFile('app/Header.tsx');
    const cssContent = this.readFile('app/globals.css');
    
    // Check for lazy loading
    if (!pageContent.includes('loading="lazy"') && pageContent.includes('<Image')) {
      this.findings.performance.push({
        priority: 'medium',
        category: 'Image Optimization',
        issue: 'Non-critical images should use lazy loading',
        suggestion: 'Add loading="lazy" to images below the fold to improve initial page load time',
        impact: 'Reduces initial page load by deferring non-critical image loading'
      });
    }

    // Check for font optimization
    const layoutContent = this.readFile('app/layout.tsx');
    if (!layoutContent.includes('next/font')) {
      this.findings.performance.push({
        priority: 'high',
        category: 'Font Optimization',
        issue: 'Not using Next.js font optimization',
        suggestion: 'Use next/font for automatic font optimization and better performance',
        impact: 'Reduces layout shift and improves loading performance'
      });
    }

    // Check for dynamic imports
    if (!headerContent.includes('dynamic')) {
      this.findings.performance.push({
        priority: 'low',
        category: 'Code Splitting',
        issue: 'Client components could benefit from code splitting',
        suggestion: 'Consider using next/dynamic for components that are not immediately visible',
        impact: 'Reduces initial JavaScript bundle size'
      });
    }

    // Check CSS file size
    if (cssContent.length > 50000) {
      this.findings.performance.push({
        priority: 'medium',
        category: 'CSS Optimization',
        issue: 'Large CSS file detected',
        suggestion: 'Consider splitting CSS or using CSS-in-JS for better code splitting',
        impact: 'Reduces initial CSS payload'
      });
    }

    // Check for analytics/monitoring
    if (!layoutContent.includes('analytics') && !layoutContent.includes('gtag')) {
      this.findings.performance.push({
        priority: 'low',
        category: 'Performance Monitoring',
        issue: 'No performance monitoring detected',
        suggestion: 'Add Web Vitals monitoring to track real user performance metrics',
        impact: 'Enables data-driven performance optimization'
      });
    }

    // Check package.json for optimization opportunities
    const packageJson = JSON.parse(this.readFile('package.json'));
    if (!packageJson.dependencies['sharp']) {
      this.findings.performance.push({
        priority: 'medium',
        category: 'Image Processing',
        issue: 'Sharp not installed for image optimization',
        suggestion: 'Install sharp for faster image optimization: npm install sharp',
        impact: 'Significantly faster image processing during builds'
      });
    }
  }

  /**
   * Analyze Aesthetics
   */
  async analyzeAesthetics() {
    console.log('🎨 Analyzing Aesthetics...');
    
    const cssContent = this.readFile('app/globals.css');
    const pageContent = this.readFile('app/page.tsx');
    
    // Check for animation/transitions
    const hasAnimations = cssContent.includes('animation') || cssContent.includes('@keyframes');
    if (!hasAnimations) {
      this.findings.aesthetics.push({
        priority: 'medium',
        category: 'Visual Enhancement',
        issue: 'Limited animations for interactive elements',
        suggestion: 'Add subtle animations for section reveals, hover states, and transitions to improve user engagement',
        impact: 'Creates a more polished and professional user experience'
      });
    }

    // Check for scroll effects
    if (!pageContent.includes('IntersectionObserver') && !pageContent.includes('scroll')) {
      this.findings.aesthetics.push({
        priority: 'low',
        category: 'Scroll Effects',
        issue: 'No scroll-based animations detected',
        suggestion: 'Consider adding fade-in or slide-up animations as sections enter viewport',
        impact: 'Adds visual interest and guides user attention'
      });
    }

    // Check for modern CSS features
    if (!cssContent.includes('backdrop-filter')) {
      this.findings.aesthetics.push({
        priority: 'low',
        category: 'Modern CSS',
        issue: 'Could leverage more modern CSS features',
        suggestion: 'Use backdrop-filter, CSS Grid, and modern properties for enhanced visual effects',
        impact: 'Better visual aesthetics with less code'
      });
    }

    // Check for loading states
    if (!pageContent.includes('loading') && !pageContent.includes('skeleton')) {
      this.findings.aesthetics.push({
        priority: 'medium',
        category: 'Loading States',
        issue: 'No loading states for async content',
        suggestion: 'Add skeleton loaders or loading indicators for content loading from Sanity CMS',
        impact: 'Improves perceived performance and user experience'
      });
    }

    // Check for dark mode
    if (!cssContent.includes('prefers-color-scheme') && !cssContent.includes('dark')) {
      this.findings.aesthetics.push({
        priority: 'low',
        category: 'Theme Support',
        issue: 'No dark mode support',
        suggestion: 'Consider implementing dark mode for better accessibility and modern user experience',
        impact: 'Accommodates user preferences and reduces eye strain'
      });
    }

    // Check for micro-interactions
    if (!cssContent.includes('scale') && !cssContent.includes('transform')) {
      this.findings.aesthetics.push({
        priority: 'low',
        category: 'Micro-interactions',
        issue: 'Limited micro-interactions on interactive elements',
        suggestion: 'Add subtle scale transforms or other micro-interactions on button hover/click',
        impact: 'Provides better feedback and more engaging interface'
      });
    }
  }

  /**
   * Analyze Functionality
   */
  async analyzeFunctionality() {
    console.log('⚙️ Analyzing Functionality...');
    
    const pageContent = this.readFile('app/page.tsx');
    const headerContent = this.readFile('app/Header.tsx');
    const cssContent = this.readFile('app/globals.css');
    
    // Check for form validation
    if (!pageContent.includes('form') && !pageContent.includes('input')) {
      this.findings.functionality.push({
        priority: 'high',
        category: 'Contact Form',
        issue: 'No contact form implementation',
        suggestion: 'Add a functional contact form with validation instead of just mailto links',
        impact: 'Improves lead capture and user convenience'
      });
    }

    // Check for smooth scrolling
    if (!headerContent.includes('scrollIntoView') && !cssContent.includes('scroll-behavior')) {
      this.findings.functionality.push({
        priority: 'low',
        category: 'Navigation',
        issue: 'No smooth scrolling for anchor links',
        suggestion: 'Implement smooth scrolling for internal navigation links',
        impact: 'Better user experience when navigating between sections'
      });
    }

    // Check for error boundaries
    if (!this.fileExists('app/error.tsx')) {
      this.findings.functionality.push({
        priority: 'medium',
        category: 'Error Handling',
        issue: 'No error boundary component',
        suggestion: 'Add error.tsx for better error handling in production',
        impact: 'Graceful error handling and better user experience'
      });
    }

    // Check for loading states
    if (!this.fileExists('app/loading.tsx')) {
      this.findings.functionality.push({
        priority: 'low',
        category: 'Loading States',
        issue: 'No loading component',
        suggestion: 'Add loading.tsx for better loading states',
        impact: 'Improved perceived performance'
      });
    }

    // Check for search functionality
    if (!pageContent.includes('search') && !headerContent.includes('search')) {
      this.findings.functionality.push({
        priority: 'low',
        category: 'Search',
        issue: 'No search functionality',
        suggestion: 'Consider adding search for portfolio/services if content grows',
        impact: 'Helps users find specific information quickly'
      });
    }

    // Check for filter/sort functionality
    if (!pageContent.includes('filter') && !pageContent.includes('sort')) {
      this.findings.functionality.push({
        priority: 'low',
        category: 'Content Management',
        issue: 'No filtering or sorting for portfolio items',
        suggestion: 'Add filter/sort options for portfolio by project type, location, etc.',
        impact: 'Better content discovery for users'
      });
    }

    // Check for back to top button
    if (!pageContent.includes('scrollTo') && !pageContent.includes('back-to-top')) {
      this.findings.functionality.push({
        priority: 'low',
        category: 'Navigation',
        issue: 'No back-to-top button',
        suggestion: 'Add a back-to-top button for long-scrolling pages',
        impact: 'Improved navigation on long pages'
      });
    }

    // Check for mobile menu close on navigation
    const mobileMenuLogic = headerContent.includes('handleMenuToggle');
    if (!headerContent.includes('handleMenuToggle') || !headerContent.includes('window.location')) {
      this.findings.functionality.push({
        priority: 'medium',
        category: 'Mobile Navigation',
        issue: 'Mobile menu might not close on navigation',
        suggestion: 'Ensure mobile menu closes automatically when a navigation link is clicked',
        impact: 'Better mobile user experience'
      });
    }
  }

  /**
   * Analyze Security
   */
  async analyzeSecurity() {
    console.log('🔒 Analyzing Security...');
    
    const pageContent = this.readFile('app/page.tsx');
    
    // Check for dangerouslySetInnerHTML
    if (pageContent.includes('dangerouslySetInnerHTML')) {
      this.findings.security.push({
        priority: 'high',
        category: 'XSS Prevention',
        issue: 'Using dangerouslySetInnerHTML',
        suggestion: 'Ensure all content is sanitized before using dangerouslySetInnerHTML, or use safer alternatives',
        impact: 'Prevents cross-site scripting (XSS) attacks'
      });
    }

    // Check for environment variables
    const envExample = this.fileExists('.env.example');
    const envLocal = this.fileExists('.env.local');
    if (!envExample) {
      this.findings.security.push({
        priority: 'low',
        category: 'Configuration',
        issue: 'Missing .env.example file',
        suggestion: 'Create .env.example with required environment variables (without sensitive values)',
        impact: 'Better documentation and onboarding for developers'
      });
    }

    // Check for security headers
    const nextConfig = this.readFile('next.config.js');
    if (!nextConfig.includes('headers')) {
      this.findings.security.push({
        priority: 'high',
        category: 'Security Headers',
        issue: 'No security headers configured',
        suggestion: 'Add security headers in next.config.js (CSP, X-Frame-Options, etc.)',
        impact: 'Protects against common web vulnerabilities'
      });
    }

    // Check package.json for audit
    this.findings.security.push({
      priority: 'medium',
      category: 'Dependency Security',
      issue: 'Regular dependency audits needed',
      suggestion: 'Run npm audit regularly and keep dependencies updated',
      impact: 'Prevents known security vulnerabilities'
    });
  }

  /**
   * Analyze Accessibility
   */
  async analyzeAccessibility() {
    console.log('♿ Analyzing Accessibility...');
    
    const pageContent = this.readFile('app/page.tsx');
    const cssContent = this.readFile('app/globals.css');
    
    // Check for focus indicators (already has :focus-visible)
    if (cssContent.includes(':focus-visible')) {
      // Good - has focus indicators
    }

    // Check for reduced motion
    if (!cssContent.includes('prefers-reduced-motion')) {
      this.findings.accessibility.push({
        priority: 'high',
        category: 'Motion Accessibility',
        issue: 'No reduced motion support',
        suggestion: 'Add @media (prefers-reduced-motion: reduce) to disable animations for users who prefer reduced motion',
        impact: 'Respects user accessibility preferences and prevents motion sickness'
      });
    }

    // Check for ARIA landmarks (already has some)
    if (pageContent.includes('role="main"')) {
      // Good - has ARIA landmarks
    }

    // Check for color contrast
    this.findings.accessibility.push({
      priority: 'medium',
      category: 'Color Contrast',
      issue: 'Color contrast should be verified',
      suggestion: 'Run automated contrast checker on all text/background combinations to ensure WCAG AA compliance',
      impact: 'Ensures readability for users with visual impairments'
    });

    // Check for keyboard navigation
    if (!cssContent.includes('focus-within')) {
      this.findings.accessibility.push({
        priority: 'low',
        category: 'Keyboard Navigation',
        issue: 'Could enhance keyboard navigation feedback',
        suggestion: 'Add :focus-within styles for better keyboard navigation feedback',
        impact: 'Better experience for keyboard-only users'
      });
    }

    // Check for form labels
    this.findings.accessibility.push({
      priority: 'high',
      category: 'Form Accessibility',
      issue: 'When adding forms, ensure proper labels',
      suggestion: 'Use proper label elements or aria-label for all form inputs',
      impact: 'Essential for screen reader users'
    });

    // Check for alt text
    if (pageContent.includes('<Image') && pageContent.includes('alt=""')) {
      this.findings.accessibility.push({
        priority: 'medium',
        category: 'Image Accessibility',
        issue: 'Some images have empty alt text',
        suggestion: 'Ensure decorative images are properly marked with alt="" and content images have descriptive alt text',
        impact: 'Improves experience for screen reader users'
      });
    }
  }

  /**
   * Analyze SEO
   */
  async analyzeSEO() {
    console.log('🔍 Analyzing SEO...');
    
    const layoutContent = this.readFile('app/layout.tsx');
    const pageContent = this.readFile('app/page.tsx');
    
    // Check for metadata (already has some)
    if (layoutContent.includes('metadata')) {
      // Good - has metadata
    }

    // Check for structured data
    if (!pageContent.includes('application/ld+json')) {
      this.findings.seo.push({
        priority: 'high',
        category: 'Structured Data',
        issue: 'No structured data (JSON-LD)',
        suggestion: 'Add LocalBusiness and Service schema markup for better search visibility',
        impact: 'Improves search engine understanding and rich results'
      });
    }

    // Check for Open Graph tags
    if (!layoutContent.includes('openGraph') && !layoutContent.includes('og:')) {
      this.findings.seo.push({
        priority: 'high',
        category: 'Social Sharing',
        issue: 'No Open Graph meta tags',
        suggestion: 'Add Open Graph and Twitter Card meta tags for better social media sharing',
        impact: 'Better appearance when shared on social media'
      });
    }

    // Check for sitemap
    if (!this.fileExists('public/sitemap.xml') && !this.fileExists('app/sitemap.ts')) {
      this.findings.seo.push({
        priority: 'medium',
        category: 'Site Discovery',
        issue: 'No sitemap.xml',
        suggestion: 'Add sitemap.xml or sitemap.ts for better search engine crawling',
        impact: 'Helps search engines discover and index all pages'
      });
    }

    // Check for robots.txt
    if (!this.fileExists('public/robots.txt') && !this.fileExists('app/robots.ts')) {
      this.findings.seo.push({
        priority: 'medium',
        category: 'Crawling Control',
        issue: 'No robots.txt',
        suggestion: 'Add robots.txt to guide search engine crawlers',
        impact: 'Controls search engine access to your site'
      });
    }

    // Check for canonical URLs
    if (!layoutContent.includes('canonical')) {
      this.findings.seo.push({
        priority: 'low',
        category: 'Duplicate Content',
        issue: 'No canonical URLs specified',
        suggestion: 'Add canonical URLs in metadata to prevent duplicate content issues',
        impact: 'Prevents SEO penalties from duplicate content'
      });
    }

    // Check for heading hierarchy
    this.findings.seo.push({
      priority: 'low',
      category: 'Content Structure',
      issue: 'Verify heading hierarchy',
      suggestion: 'Ensure proper h1-h6 hierarchy (single h1, no skipped levels)',
      impact: 'Better SEO and accessibility'
    });
  }

  /**
   * Generate comprehensive report
   */
  generateReport() {
    console.log('\n' + '='.repeat(80));
    console.log('📊 WEBSITE INSPECTION REPORT');
    console.log('='.repeat(80) + '\n');

    const categories = ['performance', 'aesthetics', 'functionality', 'security', 'accessibility', 'seo'];
    const icons = {
      performance: '⚡',
      aesthetics: '🎨',
      functionality: '⚙️',
      security: '🔒',
      accessibility: '♿',
      seo: '🔍'
    };

    let totalFindings = 0;
    let highPriority = 0;
    let mediumPriority = 0;
    let lowPriority = 0;

    categories.forEach(category => {
      const findings = this.findings[category];
      if (findings.length === 0) return;

      console.log(`${icons[category]} ${category.toUpperCase()}`);
      console.log('-'.repeat(80));

      findings.forEach((finding, index) => {
        totalFindings++;
        if (finding.priority === 'high') highPriority++;
        else if (finding.priority === 'medium') mediumPriority++;
        else lowPriority++;

        const priorityBadge = {
          high: '🔴 HIGH',
          medium: '🟡 MEDIUM',
          low: '🟢 LOW'
        }[finding.priority];

        console.log(`\n${index + 1}. ${finding.category} [${priorityBadge}]`);
        console.log(`   Issue: ${finding.issue}`);
        console.log(`   💡 Suggestion: ${finding.suggestion}`);
        console.log(`   📈 Impact: ${finding.impact}`);
      });

      console.log('\n');
    });

    console.log('='.repeat(80));
    console.log('📈 SUMMARY');
    console.log('='.repeat(80));
    console.log(`Total Findings: ${totalFindings}`);
    console.log(`  🔴 High Priority: ${highPriority}`);
    console.log(`  🟡 Medium Priority: ${mediumPriority}`);
    console.log(`  🟢 Low Priority: ${lowPriority}`);
    console.log('='.repeat(80));

    // Generate markdown report
    this.generateMarkdownReport(categories, icons);
  }

  /**
   * Generate markdown report file
   */
  generateMarkdownReport(categories, icons) {
    let markdown = '# Website Inspection Report\n\n';
    markdown += `Generated on: ${new Date().toISOString()}\n\n`;
    markdown += '## Executive Summary\n\n';
    
    const totalFindings = Object.values(this.findings).reduce((sum, arr) => sum + arr.length, 0);
    const highPriority = Object.values(this.findings).flat().filter(f => f.priority === 'high').length;
    const mediumPriority = Object.values(this.findings).flat().filter(f => f.priority === 'medium').length;
    const lowPriority = Object.values(this.findings).flat().filter(f => f.priority === 'low').length;

    markdown += `- **Total Findings**: ${totalFindings}\n`;
    markdown += `- **🔴 High Priority**: ${highPriority}\n`;
    markdown += `- **🟡 Medium Priority**: ${mediumPriority}\n`;
    markdown += `- **🟢 Low Priority**: ${lowPriority}\n\n`;

    markdown += '## Detailed Findings\n\n';

    categories.forEach(category => {
      const findings = this.findings[category];
      if (findings.length === 0) return;

      markdown += `### ${icons[category]} ${category.charAt(0).toUpperCase() + category.slice(1)}\n\n`;

      findings.forEach((finding, index) => {
        const priorityBadge = {
          high: '🔴 HIGH',
          medium: '🟡 MEDIUM',
          low: '🟢 LOW'
        }[finding.priority];

        markdown += `#### ${index + 1}. ${finding.category} [${priorityBadge}]\n\n`;
        markdown += `**Issue**: ${finding.issue}\n\n`;
        markdown += `**Suggestion**: ${finding.suggestion}\n\n`;
        markdown += `**Impact**: ${finding.impact}\n\n`;
        markdown += '---\n\n';
      });
    });

    markdown += '## Prioritized Action Plan\n\n';
    markdown += '### Immediate Actions (High Priority)\n\n';
    Object.values(this.findings).flat()
      .filter(f => f.priority === 'high')
      .forEach((f, i) => {
        markdown += `${i + 1}. **${f.category}**: ${f.suggestion}\n`;
      });

    markdown += '\n### Short-term Improvements (Medium Priority)\n\n';
    Object.values(this.findings).flat()
      .filter(f => f.priority === 'medium')
      .forEach((f, i) => {
        markdown += `${i + 1}. **${f.category}**: ${f.suggestion}\n`;
      });

    markdown += '\n### Long-term Enhancements (Low Priority)\n\n';
    Object.values(this.findings).flat()
      .filter(f => f.priority === 'low')
      .forEach((f, i) => {
        markdown += `${i + 1}. **${f.category}**: ${f.suggestion}\n`;
      });

    // Save report
    const reportPath = path.join(this.projectRoot, 'INSPECTION_REPORT.md');
    fs.writeFileSync(reportPath, markdown);
    console.log(`\n✅ Detailed report saved to: INSPECTION_REPORT.md\n`);
  }

  /**
   * Helper: Read file content
   */
  readFile(filePath) {
    try {
      return fs.readFileSync(path.join(this.projectRoot, filePath), 'utf8');
    } catch (error) {
      return '';
    }
  }

  /**
   * Helper: Check if file exists
   */
  fileExists(filePath) {
    return fs.existsSync(path.join(this.projectRoot, filePath));
  }
}

// Run the inspection
const agent = new WebsiteInspectionAgent();
agent.inspect().catch(console.error);
