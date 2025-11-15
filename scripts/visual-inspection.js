#!/usr/bin/env node

/**
 * Visual Inspection Script using Puppeteer
 * Connects to existing Chrome DevTools instance and performs visual analysis
 */

const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');
const http = require('http');

class VisualInspector {
    constructor() {
        this.browser = null;
        this.page = null;
        this.screenshotsDir = path.join(__dirname, '..', 'ui_test_screenshots');
        this.findings = {
            desktop: [],
            mobile: [],
            general: []
        };
    }

    async init() {
        console.log('🔍 Connecting to Chrome DevTools...');

        // Get the WebSocket debugger URL
        const wsUrl = await new Promise((resolve, reject) => {
            http.get('http://localhost:9222/json/version', (res) => {
                let data = '';
                res.on('data', chunk => data += chunk);
                res.on('end', () => {
                    try {
                        const json = JSON.parse(data);
                        resolve(json.webSocketDebuggerUrl);
                    } catch (err) {
                        reject(err);
                    }
                });
            }).on('error', reject);
        });

        this.browser = await puppeteer.connect({
            browserWSEndpoint: wsUrl,
            defaultViewport: null
        });

        const pages = await this.browser.pages();
        this.page = pages.find(p => p.url().includes('localhost:3000')) || pages[0];

        if (!this.page.url().includes('localhost:3000')) {
            await this.page.goto('http://localhost:3000');
        }

        console.log('✅ Connected to website');
    }

    async takeScreenshots() {
        console.log('📸 Taking screenshots...');

        // Ensure screenshots directory exists
        if (!fs.existsSync(this.screenshotsDir)) {
            fs.mkdirSync(this.screenshotsDir, { recursive: true });
        }

        // Desktop screenshots
        await this.page.setViewport({ width: 1920, height: 1080 });

        // Full page screenshot
        await this.page.screenshot({
            path: path.join(this.screenshotsDir, 'desktop-fullpage.png'),
            fullPage: true
        });

        // Header section
        const headerElement = await this.page.$('header');
        if (headerElement) {
            await headerElement.screenshot({
                path: path.join(this.screenshotsDir, 'desktop-header.png')
            });
        }

        // Main content
        const mainElement = await this.page.$('main');
        if (mainElement) {
            await mainElement.screenshot({
                path: path.join(this.screenshotsDir, 'desktop-main.png')
            });
        }

        // Mobile screenshots
        await this.page.setViewport({ width: 375, height: 667 });

        await this.page.screenshot({
            path: path.join(this.screenshotsDir, 'mobile-fullpage.png'),
            fullPage: true
        });

        if (headerElement) {
            await headerElement.screenshot({
                path: path.join(this.screenshotsDir, 'mobile-header.png')
            });
        }

        if (mainElement) {
            await mainElement.screenshot({
                path: path.join(this.screenshotsDir, 'mobile-main.png')
            });
        }

        console.log('✅ Screenshots saved to ui_test_screenshots/');
    }

    async analyzeStyles() {
        console.log('🎨 Analyzing styles and layout...');

        // Reset to desktop
        await this.page.setViewport({ width: 1920, height: 1080 });

        const analysis = await this.page.evaluate(() => {
            const results = {
                colors: {},
                typography: {},
                spacing: {},
                layout: {}
            };

            // Extract color usage
            const elements = document.querySelectorAll('*');
            const colorMap = {};

            elements.forEach(el => {
                const computed = window.getComputedStyle(el);
                const color = computed.color;
                const backgroundColor = computed.backgroundColor;

                if (color && color !== 'rgba(0, 0, 0, 0)' && color !== 'rgb(0, 0, 0)') {
                    colorMap[color] = (colorMap[color] || 0) + 1;
                }
                if (backgroundColor && backgroundColor !== 'rgba(0, 0, 0, 0)' && backgroundColor !== 'transparent') {
                    colorMap[backgroundColor] = (colorMap[backgroundColor] || 0) + 1;
                }
            });

            results.colors = colorMap;

            // Typography analysis
            const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
            const headingFonts = new Set();
            const headingSizes = new Set();

            headings.forEach(h => {
                const computed = window.getComputedStyle(h);
                headingFonts.add(computed.fontFamily);
                headingSizes.add(computed.fontSize);
            });

            results.typography = {
                headingFonts: Array.from(headingFonts),
                headingSizes: Array.from(headingSizes),
                bodyFont: window.getComputedStyle(document.body).fontFamily
            };

            // Spacing analysis
            const sections = document.querySelectorAll('section, main > *');
            const margins = [];
            const paddings = [];

            sections.forEach(section => {
                const computed = window.getComputedStyle(section);
                margins.push(computed.margin);
                paddings.push(computed.padding);
            });

            results.spacing = {
                margins: [...new Set(margins)],
                paddings: [...new Set(paddings)]
            };

            // Layout analysis
            const bodyStyle = window.getComputedStyle(document.body);
            results.layout = {
                display: bodyStyle.display,
                flexDirection: bodyStyle.flexDirection,
                justifyContent: bodyStyle.justifyContent,
                alignItems: bodyStyle.alignItems,
                maxWidth: bodyStyle.maxWidth,
                margin: bodyStyle.margin
            };

            // Check for design system colors
            const designColors = ['#789271', '#46523D', '#F5F4F0', '#212021', '#111111', '#FFFFFF'];
            const usedDesignColors = designColors.filter(color =>
                Object.keys(colorMap).some(usedColor =>
                    usedColor.includes(color) || color.includes(usedColor.replace('rgb', '').replace('a(', '').split(',').slice(0, 3).join(','))
                )
            );

            results.colors.designSystemUsage = usedDesignColors;

            return results;
        });

        console.log('📊 Style Analysis Results:');
        console.log('Colors used:', Object.keys(analysis.colors).length);
        console.log('Design system colors found:', analysis.colors.designSystemUsage);
        console.log('Heading fonts:', analysis.typography.headingFonts);
        console.log('Body font:', analysis.typography.bodyFont);

        return analysis;
    }

    async analyzeLayout() {
        console.log('📐 Analyzing layout and responsiveness...');

        // Test different viewports
        const viewports = [
            { width: 1920, height: 1080, name: 'desktop' },
            { width: 1024, height: 768, name: 'tablet' },
            { width: 768, height: 1024, name: 'tablet-portrait' },
            { width: 375, height: 667, name: 'mobile' }
        ];

        const layoutResults = {};

        for (const viewport of viewports) {
            await this.page.setViewport(viewport);

            const result = await this.page.evaluate(() => {
                const issues = [];

                // Check for horizontal scroll
                if (document.body.scrollWidth > window.innerWidth) {
                    issues.push('Horizontal scroll detected - content overflows viewport');
                }

                // Check for very small text
                const smallText = Array.from(document.querySelectorAll('*')).filter(el => {
                    const fontSize = parseFloat(window.getComputedStyle(el).fontSize);
                    return fontSize > 0 && fontSize < 12;
                });

                if (smallText.length > 0) {
                    issues.push(`${smallText.length} elements have very small text (< 12px)`);
                }

                // Check for touch targets
                const touchTargets = Array.from(document.querySelectorAll('button, a, input, select, textarea'));
                const smallTargets = touchTargets.filter(el => {
                    const rect = el.getBoundingClientRect();
                    return rect.width < 44 || rect.height < 44;
                });

                if (smallTargets.length > 0) {
                    issues.push(`${smallTargets.length} interactive elements have touch targets smaller than 44px`);
                }

                // Check for contrast (basic)
                const textElements = Array.from(document.querySelectorAll('*')).filter(el => {
                    const text = el.textContent?.trim();
                    return text && text.length > 0 && window.getComputedStyle(el).display !== 'none';
                });

                // Basic contrast check (simplified)
                const lowContrast = textElements.filter(el => {
                    const style = window.getComputedStyle(el);
                    const color = style.color;
                    const bgColor = style.backgroundColor;
                    // This is a very basic check - real contrast checking is more complex
                    return color === bgColor || (color === 'rgb(0, 0, 0)' && bgColor === 'rgba(0, 0, 0, 0)');
                });

                if (lowContrast.length > 0) {
                    issues.push(`${lowContrast.length} elements may have low contrast`);
                }

                return {
                    viewport: `${window.innerWidth}x${window.innerHeight}`,
                    issues,
                    metrics: {
                        scrollWidth: document.body.scrollWidth,
                        clientWidth: document.body.clientWidth,
                        contentHeight: document.body.scrollHeight
                    }
                };
            });

            layoutResults[viewport.name] = result;

            if (result.issues.length > 0) {
                console.log(`⚠️  ${viewport.name.toUpperCase()} issues:`);
                result.issues.forEach(issue => console.log(`   - ${issue}`));
            } else {
                console.log(`✅ ${viewport.name.toUpperCase()}: No major layout issues`);
            }
        }

        return layoutResults;
    }

    generateRecommendations(analysis, layoutResults) {
        console.log('\n💡 Generating Recommendations...\n');

        // Color consistency
        const designColors = ['#789271', '#46523D', '#F5F4F0', '#212021', '#111111', '#FFFFFF'];
        const usedDesignColors = analysis.colors.designSystemUsage || [];

        if (usedDesignColors.length < designColors.length) {
            this.findings.general.push({
                category: 'Color Consistency',
                priority: 'high',
                issue: `Only ${usedDesignColors.length}/${designColors.length} design system colors are being used`,
                recommendation: 'Ensure consistent use of the brand color palette across all components',
                code: `/* Add to globals.css */
:root {
  --primary: #789271;
  --primary-dark: #46523D;
  --offwhite: #F5F4F0;
  --near-black: #212021;
  --charcoal: #111111;
  --white: #FFFFFF;
}`
            });
        }

        // Typography
        if (analysis.typography.headingFonts.length > 2) {
            this.findings.general.push({
                category: 'Typography',
                priority: 'medium',
                issue: 'Multiple heading fonts detected - inconsistent typography',
                recommendation: 'Standardize on 1-2 fonts for headings to maintain visual hierarchy',
                code: 'Use CSS custom properties for consistent font families'
            });
        }

        // Spacing
        if (analysis.spacing.margins.length > 5) {
            this.findings.general.push({
                category: 'Spacing',
                priority: 'medium',
                issue: 'Inconsistent spacing patterns detected',
                recommendation: 'Establish a spacing scale using CSS custom properties',
                code: `/* Add spacing scale */
:root {
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;
}`
            });
        }

        // Layout issues from different viewports
        Object.entries(layoutResults).forEach(([viewport, result]) => {
            if (result.issues.length > 0) {
                result.issues.forEach(issue => {
                    let priority = 'medium';
                    if (issue.includes('Horizontal scroll') || issue.includes('small text')) {
                        priority = 'high';
                    }

                    this.findings[viewport === 'mobile' ? 'mobile' : 'desktop'].push({
                        category: 'Layout',
                        priority,
                        issue: `${viewport}: ${issue}`,
                        recommendation: viewport === 'mobile' ?
                            'Use responsive design techniques like flexbox/grid and media queries' :
                            'Ensure content fits within viewport width',
                        code: viewport === 'mobile' ?
                            `@media (max-width: 768px) {
  .container { padding: var(--space-md); }
  .grid { grid-template-columns: 1fr; }
}` : 'Check for fixed widths and use max-width instead'
                    });
                });
            }
        });

        // Visual enhancements
        this.findings.general.push({
            category: 'Visual Appeal',
            priority: 'low',
            issue: 'Limited visual hierarchy and engagement',
            recommendation: 'Add subtle animations and micro-interactions for better UX',
            code: `/* Add hover effects */
.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.section {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease forwards;
}

@keyframes fadeInUp {
  to { opacity: 1; transform: translateY(0); }
}`
        });

        // Mobile-specific
        this.findings.mobile.push({
            category: 'Mobile UX',
            priority: 'medium',
            issue: 'Mobile navigation may need improvement',
            recommendation: 'Ensure mobile menu is easily accessible and closes on navigation',
            code: `/* Mobile menu styles */
@media (max-width: 768px) {
  .nav-menu {
    position: fixed;
    top: 100%;
    left: 0;
    width: 100%;
    background: var(--white);
    transform: translateY(-100%);
    transition: transform 0.3s ease;
  }

  .nav-menu.open {
    transform: translateY(0);
  }
}`
        });
    }

    async run() {
        try {
            await this.init();
            await this.takeScreenshots();
            const analysis = await this.analyzeStyles();
            const layoutResults = await this.analyzeLayout();
            this.generateRecommendations(analysis, layoutResults);

            this.printReport();

        } catch (error) {
            console.error('❌ Error during inspection:', error);
        } finally {
            if (this.browser) {
                await this.browser.disconnect();
            }
        }
    }

    printReport() {
        console.log('\n' + '='.repeat(80));
        console.log('📊 VISUAL INSPECTION REPORT');
        console.log('='.repeat(80) + '\n');

        const categories = ['general', 'desktop', 'mobile'];
        const icons = {
            general: '🎨',
            desktop: '💻',
            mobile: '📱'
        };

        categories.forEach(category => {
            const findings = this.findings[category];
            if (findings.length === 0) return;

            console.log(`${icons[category]} ${category.toUpperCase()}`);
            console.log('-'.repeat(80));

            findings.forEach((finding, index) => {
                const priorityIcon = {
                    high: '🔴',
                    medium: '🟡',
                    low: '🟢'
                }[finding.priority];

                console.log(`\n${index + 1}. ${finding.category} [${priorityIcon}]`);
                console.log(`   Issue: ${finding.issue}`);
                console.log(`   💡 Recommendation: ${finding.recommendation}`);
                if (finding.code) {
                    console.log(`   📝 Code:`);
                    console.log(`      ${finding.code.replace(/\n/g, '\n      ')}`);
                }
            });

            console.log('\n');
        });

        console.log('📸 Screenshots saved to: ui_test_screenshots/');
        console.log('='.repeat(80));
    }
}

// Run the inspection
const inspector = new VisualInspector();
inspector.run().catch(console.error);