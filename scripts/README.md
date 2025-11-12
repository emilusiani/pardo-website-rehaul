# Website Inspection & Validation Scripts

## Overview

This directory contains automation scripts for validating and inspecting the PARDO Construction website.

## Available Scripts

### 1. Website Inspection Agent (`inspect-website.js`)

The Website Inspection Agent is an automated tool that analyzes the PARDO Construction website and provides comprehensive suggestions for improvements across six critical areas:

- ⚡ **Performance** - Speed, optimization, and loading times
- 🎨 **Aesthetics** - Visual design, animations, and user engagement
- ⚙️ **Functionality** - Features, interactions, and user experience
- 🔒 **Security** - Vulnerabilities, headers, and best practices
- ♿ **Accessibility** - WCAG compliance and inclusive design
- 🔍 **SEO** - Search engine optimization and discoverability

#### Running the Inspection

```bash
npm run inspect
```

This command will:
1. Analyze all aspects of the website
2. Display a comprehensive report in the terminal
3. Generate a detailed markdown report: `INSPECTION_REPORT.md`

### 2. Agent YAML Validator (`validate-agents.js`)

The Agent YAML Validator ensures that all custom agent files in `.github/agents/` have valid YAML front matter with proper indentation.

#### Running the Validator

```bash
npm run validate-agents
```

This command will:
1. Check all `.agent.md` files in `.github/agents/`
2. Validate YAML front matter structure
3. Verify proper indentation of multi-line description fields
4. Report any syntax errors

#### What It Validates

- YAML front matter starts with `---` and ends with `---`
- Required fields: `name` and `description`
- Proper indentation of multi-line string content (description field)
- Reports specific line numbers where errors occur

#### Example Output

```
======================================================================
YAML VALIDATION REPORT FOR AGENT FILES
======================================================================

📄 FrontendEngineer.agent.md
   ✅ VALID YAML

📄 ContentEngineer.agent.md
   ✅ VALID YAML

...

======================================================================
SUMMARY: 14 valid, 0 errors
======================================================================
🎉 All agent files are valid!
```

## Quick Start
3. Generate a detailed markdown report: `INSPECTION_REPORT.md`

### Reading the Reports

The agent generates two types of reports:

1. **Console Output**: Real-time findings displayed in the terminal with emojis and color-coded priorities
2. **Markdown Report**: Detailed `INSPECTION_REPORT.md` file with:
   - Executive summary with finding counts
   - Detailed findings by category
   - Prioritized action plan

## Understanding Findings

### Priority Levels

- 🔴 **HIGH**: Critical issues that should be addressed immediately
- 🟡 **MEDIUM**: Important improvements that enhance the site significantly
- 🟢 **LOW**: Nice-to-have enhancements for long-term optimization

### Finding Structure

Each finding includes:
- **Issue**: What the problem is
- **Suggestion**: How to fix or improve it
- **Impact**: Why it matters and what benefits it provides

## What It Inspects

### Performance Analysis

- Image optimization and lazy loading
- Font loading optimization with next/font
- Code splitting opportunities
- CSS file size
- Performance monitoring setup
- Build-time optimizations (e.g., Sharp)

### Aesthetics Analysis

- Animations and transitions
- Scroll-based effects
- Modern CSS features
- Loading states and skeleton screens
- Dark mode support
- Micro-interactions

### Functionality Analysis

- Contact form implementation
- Smooth scrolling navigation
- Error boundaries
- Loading states
- Search functionality
- Content filtering/sorting
- Back-to-top button
- Mobile menu behavior

### Security Analysis

- XSS vulnerabilities (dangerouslySetInnerHTML)
- Environment variable management
- Security headers configuration
- Dependency security audits

### Accessibility Analysis

- Reduced motion support
- Color contrast compliance
- Keyboard navigation
- Form accessibility
- Image alt text
- Focus indicators

### SEO Analysis

- Structured data (JSON-LD schema)
- Open Graph and Twitter Card tags
- Sitemap generation
- Robots.txt configuration
- Canonical URLs
- Heading hierarchy

## Customizing the Agent

The inspection agent is built as a modular class in `scripts/inspect-website.js`. You can:

1. **Add New Checks**: Extend any of the `analyze*()` methods
2. **Modify Priorities**: Adjust priority levels based on your needs
3. **Add New Categories**: Create new analysis categories
4. **Customize Output**: Modify the report format

### Example: Adding a New Check

```javascript
async analyzePerformance() {
  // ... existing checks ...
  
  // Add your custom check
  if (someCondition) {
    this.findings.performance.push({
      priority: 'high',
      category: 'Your Category',
      issue: 'Description of the issue',
      suggestion: 'How to fix it',
      impact: 'Why it matters'
    });
  }
}
```

## Integration with Development Workflow

### As a Pre-commit Hook

You can add the inspection as a pre-commit hook to catch issues early:

```bash
# In package.json
{
  "husky": {
    "hooks": {
      "pre-commit": "npm run inspect"
    }
  }
}
```

### In CI/CD Pipeline

Add to your GitHub Actions workflow:

```yaml
- name: Run Website Inspection
  run: npm run inspect
```

### Regular Audits

Schedule regular inspections:
- Weekly: Full inspection and review
- After major changes: Before merging PRs
- Before releases: Pre-deployment check

## Best Practices

1. **Address High Priority First**: Focus on critical issues before enhancements
2. **Review Medium Priority Regularly**: Plan sprints to address these improvements
3. **Consider Low Priority Over Time**: Add to backlog for future enhancements
4. **Re-run After Changes**: Verify that fixes resolve the reported issues
5. **Track Progress**: Use the markdown report to track improvements over time

## Example Output

```
================================================================================
📊 WEBSITE INSPECTION REPORT
================================================================================

⚡ PERFORMANCE
--------------------------------------------------------------------------------

1. Font Optimization [🔴 HIGH]
   Issue: Not using Next.js font optimization
   💡 Suggestion: Use next/font for automatic font optimization
   📈 Impact: Reduces layout shift and improves loading performance

...

================================================================================
📈 SUMMARY
================================================================================
Total Findings: 27
  🔴 High Priority: 7
  🟡 Medium Priority: 10
  🟢 Low Priority: 10
================================================================================
```

## Contributing

To improve the inspection agent:

1. Identify new checks or improvements
2. Add them to the appropriate `analyze*()` method
3. Test with `npm run inspect`
4. Update this documentation

## Technical Details

- **Language**: Node.js (JavaScript)
- **Dependencies**: None (uses only Node.js built-ins)
- **File Location**: `scripts/inspect-website.js`
- **Output**: Console + `INSPECTION_REPORT.md`
- **Execution Time**: < 1 second

## Troubleshooting

### Script Won't Run

```bash
# Ensure script is executable
chmod +x scripts/inspect-website.js

# Run directly
node scripts/inspect-website.js
```

### No Report Generated

Check that you have write permissions in the project root directory.

### Unexpected Results

The agent analyzes static files. If using environment-specific configurations, ensure you're in the correct environment.

## Future Enhancements

Potential improvements for the inspection agent:

- [ ] Performance metrics integration with Lighthouse
- [ ] Automated accessibility testing with axe-core
- [ ] Bundle size analysis
- [ ] Dependency vulnerability scanning
- [ ] HTML validation
- [ ] CSS validation
- [ ] Link checking
- [ ] Image size recommendations
- [ ] Mobile responsiveness testing
- [ ] Browser compatibility checks

## Support

For issues or questions about the inspection agent:

1. Check the console output for specific error messages
2. Review the generated `INSPECTION_REPORT.md` for details
3. Ensure all project files are accessible
4. Verify Node.js is installed and working

## License

This inspection agent is part of the PARDO Construction website project and follows the same license as the main project.
