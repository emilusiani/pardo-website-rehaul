# Custom Agents

This directory contains custom GitHub Copilot agents that provide specialized expertise for the PARDO Construction website project.

## Available Agents

### Development Agents

- **Frontend Engineer** (`FrontendEngineer.agent.md`)
  - Implements features in Next.js + TypeScript with strong typing, tests, and stories
  - Expertise: App Router, Server/Client Components, Route Handlers, RSC

- **Content Engineer** (`ContentEngineer.agent.md`)
  - Manages content architecture and CMS integration
  - Expertise: Sanity CMS, content modeling, data migration

- **Data Layer Steward** (`DataLayer.agent.md`)
  - Ensures robust data fetching, caching, and state management
  - Expertise: API design, data validation, caching strategies

### Quality & Testing Agents

- **QA & E2E Tester** (`QATester.agent.md`)
  - Creates and maintains comprehensive test suites
  - Expertise: Playwright, unit testing, integration testing

- **Security Reviewer** (`SecurityAuditor.agent.md`)
  - Identifies and fixes security vulnerabilities
  - Expertise: OWASP, secure coding, dependency auditing

- **Accessibility Auditor** (`AccessibilityAuditor.agent.md`)
  - Ensures WCAG compliance and accessibility best practices
  - Expertise: ARIA, keyboard navigation, screen reader support

### Performance & Optimization Agents

- **Performance Optimizer** (`PerformanceOptimizer.agent.md`)
  - Optimizes Core Web Vitals and application performance
  - Expertise: Bundle optimization, lazy loading, caching strategies

- **SEO & Content Strategist** (`SEOStrategist.agent.md`)
  - Improves search engine visibility and content discoverability
  - Expertise: Meta tags, structured data, sitemap generation

### Design & UX Agents

- **Design Director** (`designdirector.agent.md`)
  - Establishes and enforces visual design system
  - Expertise: Design tokens, Tailwind CSS, component consistency

- **UI Polisher** (`UIPolisher.agent.md`)
  - Refines user interface details and micro-interactions
  - Expertise: CSS animations, responsive design, visual polish

- **UX Researcher** (`UXResearcher.agent.md`)
  - Analyzes user experience and provides insights
  - Expertise: User testing, analytics interpretation, UX patterns

### Analytics & Experimentation

- **Analytics & Experimentation** (`Analytics.agent.md`)
  - Implements tracking, analytics, and A/B testing
  - Expertise: Google Analytics, event tracking, experiment design

### Operations Agents

- **Release Manager** (`ReleaseManager.agent.md`)
  - Manages deployment, versioning, and release processes
  - Expertise: CI/CD, semantic versioning, changelog management

- **i18n & Localization** (`i18nLocal.agent.md`)
  - Implements internationalization and localization
  - Expertise: next-intl, translation workflows, locale routing

## Usage with GitHub Copilot

These agents are designed to work with GitHub Copilot Workspace and provide specialized assistance for specific tasks. When working on the project, GitHub Copilot can leverage these agent definitions to provide more contextual and expert guidance.

### How Agents Work

Each agent file defines:
- **Role**: The agent's primary responsibility
- **Scope**: Technologies and areas of expertise
- **Inputs**: What the agent needs to work effectively
- **Outputs**: What the agent produces
- **Tasks**: Specific actions the agent can perform
- **Acceptance Criteria**: Standards for completed work
- **Examples**: Sample requests or use cases

## File Format

Agent files follow this structure:

```yaml
---
name: Agent Name
description: |
  ROLE
  [Role description]
  
  SCOPE
  [Scope details]
  
  [Additional sections...]
---
```

## Contributing

When adding new agents:
1. Create a new `.agent.md` file in this directory
2. Follow the established YAML frontmatter format
3. Include all standard sections (ROLE, SCOPE, INPUTS, OUTPUTS, TASKS, ACCEPTANCE CRITERIA, EXAMPLES)
4. Update this README with the new agent information
5. Ensure the agent's expertise complements existing agents without overlap

## Troubleshooting

If agents are not appearing in GitHub Copilot:
1. Ensure the repository has GitHub Copilot enabled
2. Verify that `.github/agents/` directory is committed to the repository
3. Check that agent files have proper `.agent.md` extension
4. Confirm YAML frontmatter is valid
5. Try refreshing or reloading the GitHub Copilot interface
