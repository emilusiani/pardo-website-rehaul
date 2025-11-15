const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

class UITestRunner {
    constructor() {
        this.browser = null;
        this.page = null;
        this.results = [];
        this.screenshotDir = path.join(__dirname, 'ui_test_screenshots');

        // Ensure screenshot directory exists
        if (!fs.existsSync(this.screenshotDir)) {
            fs.mkdirSync(this.screenshotDir);
        }
    }

    async init() {
        this.browser = await puppeteer.launch({
            headless: false, // Set to true for headless, false to see browser
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        this.page = await this.browser.newPage();
    }

    async close() {
        if (this.browser) {
            await this.browser.close();
        }
    }

    async takeScreenshot(testId, description) {
        const filename = `${testId}_${description.replace(/[^a-zA-Z0-9]/g, '_')}.png`;
        const filepath = path.join(this.screenshotDir, filename);
        await this.page.screenshot({ path: filepath, fullPage: true });
        return filepath;
    }

    async emulateDevice(deviceName, width, height) {
        await this.page.setViewport({ width, height, deviceScaleFactor: 1 });
        // Note: Puppeteer has built-in device emulation, but for custom, we set viewport
    }

    async runTest(testCase) {
        const { id, description, steps, expected, device, resolution } = testCase;
        console.log(`\nRunning ${id}: ${description}`);

        try {
            // Emulate device
            if (device && resolution && resolution !== 'Various') {
                const dims = resolution.split(' x ').map(s => s.trim());
                if (dims.length === 2) {
                    const width = parseInt(dims[0]);
                    const height = parseInt(dims[1]);
                    if (!isNaN(width) && !isNaN(height)) {
                        await this.emulateDevice(device, width, height);
                    }
                }
            }

            // Navigate to page
            await this.page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

            // Take initial screenshot
            const screenshotPath = await this.takeScreenshot(id, 'initial');

            // Evaluate page for checks
            const checks = await this.page.evaluate(() => {
                const results = {};

                // Helper functions
                const getComputedStyle = (el) => {
                    return el ? window.getComputedStyle(el) : null;
                };

                const isVisible = (selector) => {
                    const el = document.querySelector(selector);
                    if (!el) return false;
                    const rect = el.getBoundingClientRect();
                    return rect.width > 0 && rect.height > 0;
                };

                const getPosition = (el) => {
                    return el ? el.getBoundingClientRect() : null;
                };

                const querySelector = (selector) => document.querySelector(selector);

                // Test-specific checks based on ID
                if (window.location.pathname === '/') {
                    // Header checks
                    const header = querySelector('header');
                    results.headerExists = !!header;
                    if (header) {
                        results.headerPosition = getComputedStyle(header).position;
                        const logo = header.querySelector('img, .logo');
                        results.logoExists = !!logo;
                        if (logo) {
                            results.logoLeft = getPosition(logo).left < 50;
                        }
                        const menuBtn = header.querySelector('[aria-label*="menu"], .menu-btn, button');
                        results.menuBtnExists = !!menuBtn;
                        if (menuBtn) {
                            results.menuBtnRight = getPosition(menuBtn).right < window.innerWidth - 50;
                        }
                    }

                    // Hero section
                    const hero = querySelector('.hero, [class*="hero"]');
                    results.heroExists = !!hero;
                    if (hero) {
                        const title = hero.querySelector('h1');
                        results.heroTitleExists = !!title;
                        if (title) {
                            results.heroTitleLeftAligned = getComputedStyle(title).textAlign === 'left' || getPosition(title).left < 100;
                        }
                    }

                    // Metrics section
                    const metrics = document.querySelectorAll('.metric, [class*="metric"]');
                    results.metricsCount = metrics.length;

                    // Services section
                    const services = document.querySelectorAll('.service, [class*="service"]');
                    results.servicesCount = services.length;

                    // Portfolio section
                    const portfolio = document.querySelectorAll('.portfolio-item, [class*="portfolio"]');
                    results.portfolioCount = portfolio.length;

                    // Footer
                    const footer = document.querySelector('footer');
                    results.footerExists = !!footer;
                }

                return results;
            });

            // Determine pass/fail based on expected results
            let pass = true;
            let issues = [];

            // Basic checks
            if (!checks.headerExists) {
                pass = false;
                issues.push('Header not found');
            }
            if (!checks.heroExists) {
                pass = false;
                issues.push('Hero section not found');
            }

            // Specific checks per test case
            switch (id) {
                case 'TC_001':
                    if (!checks.menuBtnExists) {
                        pass = false;
                        issues.push('Menu button not found');
                    }
                    break;
                case 'TC_002':
                    if (!checks.heroTitleExists || !checks.heroTitleLeftAligned) {
                        pass = false;
                        issues.push('Hero title not properly aligned');
                    }
                    break;
                case 'TC_003':
                    if (checks.metricsCount < 4) {
                        pass = false;
                        issues.push(`Only ${checks.metricsCount} metrics found, expected 4`);
                    }
                    break;
                case 'TC_004':
                    if (checks.servicesCount === 0) {
                        pass = false;
                        issues.push('No service cards found');
                    }
                    break;
                case 'TC_006':
                    if (checks.portfolioCount === 0) {
                        pass = false;
                        issues.push('No portfolio items found');
                    }
                    break;
                // Add more specific checks as needed
            }

            this.results.push({
                id,
                description,
                device: device || 'Desktop',
                resolution: resolution || '1920x1080',
                result: pass ? 'PASS' : 'FAIL',
                issues,
                screenshot: screenshotPath
            });

            console.log(`${id}: ${pass ? 'PASS' : 'FAIL'}`);
            if (issues.length > 0) {
                console.log(`Issues: ${issues.join(', ')}`);
            }

        } catch (error) {
            console.error(`Error in ${id}:`, error.message);
            this.results.push({
                id,
                description,
                device: device || 'Desktop',
                resolution: resolution || '1920x1080',
                result: 'ERROR',
                issues: [error.message],
                screenshot: null
            });
        }
    }

    generateReport() {
        console.log('\n' + '='.repeat(80));
        console.log('UI TEST EXECUTION REPORT');
        console.log('='.repeat(80));

        console.log('| Test Case ID | Device/Resolution | Result | Notes |');
        console.log('|--------------|-------------------|--------|-------|');

        this.results.forEach(test => {
            const notes = test.issues.length > 0 ? test.issues.join('; ') : 'No issues';
            console.log(`| ${test.id} | ${test.device} (${test.resolution}) | ${test.result} | ${notes} |`);
        });

        console.log('\nDetailed Results:');
        this.results.forEach(test => {
            console.log(`\n${test.id}: ${test.result}`);
            console.log(`Description: ${test.description}`);
            console.log(`Device: ${test.device} (${test.resolution})`);
            if (test.issues.length > 0) {
                console.log(`Issues: ${test.issues.join(', ')}`);
            }
            if (test.screenshot) {
                console.log(`Screenshot: ${test.screenshot}`);
            }
        });

        // Save to file
        const reportPath = path.join(__dirname, 'UI_TEST_RESULTS.md');
        let markdown = '# UI Test Execution Results\n\n';
        markdown += `Executed on: ${new Date().toISOString()}\n\n`;
        markdown += '| Test Case ID | Device/Resolution | Result | Notes |\n';
        markdown += '|--------------|-------------------|--------|-------|\n';

        this.results.forEach(test => {
            const notes = test.issues.length > 0 ? test.issues.join('; ') : 'No issues';
            markdown += `| ${test.id} | ${test.device} (${test.resolution}) | ${test.result} | ${notes} |\n`;
        });

        markdown += '\n## Detailed Results\n\n';
        this.results.forEach(test => {
            markdown += `### ${test.id}: ${test.result}\n\n`;
            markdown += `**Description**: ${test.description}\n\n`;
            markdown += `**Device**: ${test.device} (${test.resolution})\n\n`;
            if (test.issues.length > 0) {
                markdown += `**Issues**: ${test.issues.join(', ')}\n\n`;
            }
            if (test.screenshot) {
                markdown += `**Screenshot**: ${path.relative(__dirname, test.screenshot)}\n\n`;
            }
        });

        fs.writeFileSync(reportPath, markdown);
        console.log(`\nReport saved to: ${reportPath}`);
    }
}

// Test cases data (simplified from the full list)
const testCases = [
    {
        id: 'TC_001',
        description: 'Verify header navigation on mobile',
        device: 'iPhone 13',
        resolution: '390 x 844'
    },
    {
        id: 'TC_002',
        description: 'Verify hero section on desktop',
        device: 'Desktop',
        resolution: '1920 x 1080'
    },
    {
        id: 'TC_003',
        description: 'Verify metrics grid on tablet',
        device: 'iPad Pro',
        resolution: '1024 x 1366'
    },
    {
        id: 'TC_004',
        description: 'Verify services cards on mobile',
        device: 'Samsung Galaxy S22',
        resolution: '360 x 800'
    },
    {
        id: 'TC_005',
        description: 'Verify banner section on multiple devices',
        device: 'Multiple',
        resolution: 'Various'
    },
    {
        id: 'TC_006',
        description: 'Verify portfolio grid on mobile',
        device: 'Pixel 7',
        resolution: '412 x 915'
    },
    {
        id: 'TC_007',
        description: 'Verify contact form on desktop',
        device: 'Desktop',
        resolution: '1366 x 768'
    },
    {
        id: 'TC_008',
        description: 'Verify navigation hover states on desktop',
        device: 'Desktop',
        resolution: '2560 x 1440'
    },
    {
        id: 'TC_009',
        description: 'Verify font scaling on mobile devices',
        device: 'Multiple iPhones',
        resolution: 'Various'
    },
    {
        id: 'TC_010',
        description: 'Verify mobile menu behavior',
        device: 'Moto G Power',
        resolution: '412 x 823'
    },
    {
        id: 'TC_011',
        description: 'Verify hero section in orientations',
        device: 'iPad Pro',
        resolution: '1024 x 1366 / 1366 x 1024'
    },
    {
        id: 'TC_012',
        description: 'Verify services hover effects on desktop',
        device: 'Desktop',
        resolution: '1920 x 1080'
    },
    {
        id: 'TC_013',
        description: 'Verify footer layout on mobile',
        device: 'iPhone 13 Mini',
        resolution: '375 x 812'
    },
    {
        id: 'TC_014',
        description: 'Verify portfolio image aspect ratios on desktop',
        device: 'Desktop',
        resolution: '1440 x 900'
    },
    {
        id: 'TC_015',
        description: 'Verify button alignment on mobile devices',
        device: 'Multiple mobiles',
        resolution: 'Various'
    }
];

async function main() {
    const runner = new UITestRunner();

    try {
        await runner.init();

        for (const testCase of testCases) {
            await runner.runTest(testCase);
            // Small delay between tests
            await new Promise(resolve => setTimeout(resolve, 1000));
        }

        runner.generateReport();
    } catch (error) {
        console.error('Test execution failed:', error);
    } finally {
        await runner.close();
    }
}

main();