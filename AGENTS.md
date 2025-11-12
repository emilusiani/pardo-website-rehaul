# Agents

1\. Overview



Goal: a modular squad of specialist agents—design → build → audit → ship—each with single responsibility, crisp inputs/outputs, and measurable KPIs. Human approval gates are built in (design review, QA sign-off, release).



Stacks it plays great with: Next.js + TypeScript + Tailwind, Playwright/Vitest, GA4/PostHog, GitHub Actions, Lighthouse CI, axe-core.



2\. Available Agents



Design Director — visual system (tokens, components), brand consistency. KPIs: AA/AAA contrast, >70% component reuse.



UX Researcher — validate problems, map journeys, prioritize. KPIs: task success rate, SUS.



UI Polisher — turn wireframes into responsive, accessible UI specs. KPIs: 0 critical a11y issues, consistent spacing grid.



Frontend Engineer — typed, tested implementation (Next.js/TS/Zod). KPIs: ≥80% unit coverage, zero type errors.



Performance Optimizer — budgets + fixes to hit CWV (LCP/INP/CLS). KPIs: P95 green in RUM, budgets enforced in CI.



Accessibility Auditor — WCAG 2.2 AA, keyboard/AT support. KPIs: 0 criticals; keyboard-only success 100%.



SEO \& Content Strategist — IA + metadata + schema + redirects. KPIs: index coverage, CTR lift.



Analytics \& Experimentation — tracking plan + experiments. KPIs: ≥95% event coverage; SRM <1%.



Security Reviewer — deps, headers, auth flows, threat model. KPIs: 0 high vulns; headers baseline pass.



QA \& E2E Tester — Playwright e2e + bug repros. KPIs: flake <2%; green on main.



Release Manager — canary + rollback + traceability. KPIs: MTTR <15m; change failure <10%.



3\. Setup / Configuration



Import the YAML into your orchestrator (CrewAI/Autogen/custom) or just run agents individually.



Env vars: ANALYTICS\_PROVIDER, PLAYWRIGHT\_BASE\_URL, LIGHTHOUSE\_BUDGET\_PATH.



Grant access: repo (PRs), staging URL, CI artifacts, optional Figma token.



CI hooks: lint → test → lighthouse → axe → bundle-size gates.



4\. Usage Examples



New Feature Flow: UX Researcher → Design Director/UI Polisher → Frontend Engineer → A11y + QA → Perf budgets → Release Manager canary.

Perf Triage: Perf Optimizer proposes code-splitting \& image policy → FE PR → QA verify → Release.

Content Refresh: SEO Strategist briefs + schema → UI polishing → QA → Release.



CLI-ish:



crew run perf --goal "Reduce LCP on / to <2.5s" --inputs reports/lh.json

agent run a11y --url https://staging.example.com --report out/a11y.html

agent run seo --sitemap public/sitemap.xml --out out/meta.csv



5\. Maintenance



Weekly: deps + audits; refresh Lighthouse budgets; analytics coverage check.



Per Release: CHANGELOG, rollback plan, smoke + e2e.



Quarterly: threat model refresh; WCAG spot-check; IA/keywords review.



Versioning: semver the agents.yaml; log changes in CHANGELOG.md.

