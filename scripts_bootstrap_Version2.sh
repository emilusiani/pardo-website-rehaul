#!/usr/bin/env bash
set -euo pipefail

# Ensure we are in a git repo with an origin remote
if ! git rev-parse --git-dir >/dev/null 2>&1; then
  echo "This script must be run from inside the cloned repository root."
  exit 1
fi
if ! git remote get-url origin >/dev/null 2>&1; then
  echo "No 'origin' remote found. Add it first, e.g.:"
  echo "  git remote add origin git@github.com:emilusiani/pardo-website-rehaul.git"
  exit 1
fi

# Ensure main branch exists locally
current_branch="$(git rev-parse --abbrev-ref HEAD || echo '')"
if [ "$current_branch" != "main" ]; then
  git checkout -b main || true
fi

mkdir -p app lib public/assets sanity scripts

cat > package.json << 'EOF'
{
  "name": "pardo-website-rehaul",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.2.5",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "next-sanity": "^7.0.9",
    "sanity": "^3.47.1"
  },
  "devDependencies": {
    "@types/node": "^20.11.30",
    "@types/react": "^18.2.15",
    "eslint": "^8.56.0",
    "eslint-config-next": "14.2.5",
    "typescript": "^5.6.2"
  }
}
EOF

cat > next.config.js << 'EOF'
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: false }
};
module.exports = nextConfig;
EOF

cat > tsconfig.json << 'EOF'
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "es2022"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "types": ["node"]
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
EOF

cat > app/layout.tsx << 'EOF'
'use client';
import './globals.css';
import Image from 'next/image';

export const metadata = {
  title: 'PARDO Construction LLC | Hospitality Remodeling',
  description: 'Premium hospitality remodeling nationwide for hotels, resorts, and dining spaces.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>

        <header className="site-header" role="banner">
          <div className="wrap nav">
            <a href="#home" className="brand" aria-label="Pardo Construction LLC, Home">
              <Image className="logo" src="/assets/logo.png" alt="Pardo Construction LLC logo" width={160} height={44} />
              <span className="sr-only">PARDO Construction, LLC</span>
            </a>
            <button
              className="nav-toggle"
              aria-expanded="false"
              aria-controls="primary-nav"
              onClick={() => {
                const menu = document.querySelector('.menu');
                if (menu) {
                  const open = menu.classList.toggle('open');
                  (document.querySelector('.nav-toggle') as HTMLButtonElement)?.setAttribute('aria-expanded', String(open));
                }
              }}
            >
              Menu
            </button>
            <nav id="primary-nav" aria-label="Primary">
              <ul className="menu">
                <li><a href="#home" aria-current="page">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>

        {children}

        <footer className="site-footer" role="contentinfo">
          <div className="wrap footer">
            <div className="footer-grid">
              <div className="footer-brand">
                <Image className="footer-logo" src="/assets/logo.png" alt="Pardo Construction LLC logo" width={180} height={48} />
                <p>Nationwide hospitality remodeling partner delivering brand‑aligned execution and disciplined project controls.</p>
              </div>
              <div>
                <h4>Navigation</h4>
                <a href="#home">Home</a><br />
                <a href="#services">Services</a><br />
                <a href="#portfolio">Portfolio</a><br />
                <a href="#about">About</a><br />
                <a href="#contact">Contact</a>
              </div>
              <div>
                <h4>Services</h4>
                <a href="#">Hotel Renovations</a><br />
                <a href="#">Guest Room Programs</a><br />
                <a href="#">Restaurant & Bar</a><br />
                <a href="#">Resort Amenities</a>
              </div>
              <div>
                <h4>Contact</h4>
                <p>Email: info@pardoconstructionllc.com</p>
                <p>Phone: (555) 123‑4567</p>
                <p>Nationwide • All 50 States</p>
              </div>
            </div>
            <div className="legal">© {new Date().getFullYear()} PARDO Construction LLC • Licensed & Insured • All Rights Reserved</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
EOF

cat > app/page.tsx << 'EOF'
import Image from 'next/image';
import { loadContent } from '@/lib/sanity.content';
import { staticContent } from '@/lib/content';

export default async function Page() {
  const data = await loadContent().catch(() => staticContent);

  return (
    <main id="main" role="main">
      <section id="home" className="hero section" aria-label="Hero">
        <div className="hero-media">
          <Image src="/assets/image4.jpg" alt="Grand hotel exterior with palm trees and illuminated entrance" fill priority style={{ objectFit: 'cover' }} />
          <div className="hero-overlay" />
          <div className="logo-watermark" aria-hidden="true" />
        </div>
        <div className="wrap hero-inner">
          <span className="hero-tag">Hospitality Remodeling</span>
          <h1>Modern Renovations That Elevate Guest Experience</h1>
          <p className="lead">
            Schedule-driven remodeling for hotels and resorts nationwide—balancing brand standards, durable materials,
            and operational continuity.
          </p>
          <div className="hero-actions">
            <a className="btn" href="#contact">Start a Project</a>
            <a className="btn outline" href="#portfolio">View Portfolio</a>
          </div>
        </div>
      </section>

      <div className="wrap divider" aria-hidden="true">
        <span className="divider-mark">
          <Image src="/assets/logo.png" alt="" width={28} height={28} />
        </span>
      </div>

      <section className="metrics" aria-label="Key metrics">
        <div className="wrap">
          <div className="metrics-grid">
            <div className="metric"><div className="value">500+</div><div className="label">Projects</div></div>
            <div className="metric"><div className="value">50</div><div className="label">States</div></div>
            <div className="metric"><div className="value">25+</div><div className="label">Years</div></div>
            <div className="metric"><div className="value">98%</div><div className="label">Satisfaction</div></div>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="wrap">
          <div className="section-head">
            <Image className="section-logo" src="/assets/logo.png" alt="" width={28} height={28} />
            <h2>Core Services</h2>
            <p>End‑to‑end hospitality remodeling with disciplined phasing, clear communication, and brand‑consistent results.</p>
          </div>

          <div className="services-grid">
            {data.services.map((s) => (
              <article className="card" key={s.key}>
                <div className="icon" aria-hidden="true" dangerouslySetInnerHTML={{ __html: s.icon }} />
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <a className="more" href="#">Learn More →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="banner section alt" aria-label="Featured property">
        <div className="wrap banner-inner">
          <div className="banner-media">
            <Image src="/assets/image1.jpg" alt="Hotel exterior with illuminated facade and entry plaza at night" width={1200} height={800} />
            <div className="banner-badge">
              <Image src="/assets/logo.png" alt="" width={24} height={24} />
            </div>
          </div>
          <div className="banner-copy">
            <h2>Reliable, Schedule‑Driven Delivery</h2>
            <p>From concept to closeout, our team coordinates trades, mitigates risk, and keeps properties operational during renovations.</p>
            <a className="btn" href="#contact">Request Consultation</a>
          </div>
        </div>
      </section>

      <section id="portfolio" className="section">
        <div className="wrap">
          <div className="section-head">
            <Image className="section-logo" src="/assets/logo.png" alt="" width={28} height={28} />
            <h2>Selected Work</h2>
            <p>Representative engagements across business hotels, resorts, and boutique properties.</p>
          </div>

          <div className="portfolio-grid">
            {data.projects.map((p) => (
              <article className="project" key={p.key}>
                <Image src={p.image} alt={p.alt} width={1200} height={800} />
                <div className="project-overlay" />
                <div className="project-body">
                  <span className="tag">{p.tag}</span>
                  <h3>{p.title}</h3>
                  <p>{p.summary}</p>
                  <Image className="project-corner-logo" src="/assets/logo.png" alt="" width={22} height={22} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section alt">
        <div className="wrap about">
          <div className="about-copy">
            <h2>About PARDO Construction LLC</h2>
            <p>We specialize in hospitality remodeling across the United States. Our teams collaborate with ownership, management, and design partners to deliver brand‑aligned outcomes with clear communication, disciplined scheduling, and rigorous quality control.</p>
            <ul className="bullets">
              <li>Nationwide delivery in all 50 states</li>
              <li>Dedicated hospitality field teams</li>
              <li>Operational continuity during renovations</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="wrap">
          <div className="cta">
            <div className="cta-logo" aria-hidden="true">
              <Image src="/assets/logo.png" alt="" width={46} height={46} />
            </div>
            <h2>Ready to Plan Your Next Property Upgrade?</h2>
            <p>Engage our team for a structured feasibility review—phasing strategy, risk matrix, and budget validation tailored to your asset.</p>
            <div className="cta-actions">
              <a className="btn" href="mailto:info@pardoconstructionllc.com">Request Consultation</a>
              <a className="btn outline" href="tel:+15551234567">(555) 123‑4567</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
EOF

cat > app/globals.css << 'EOF'
:root{
  --primary:#789271;
  --primary-dark:#46523D;
  --offwhite:#F5F4F0;
  --near-black:#212021;
  --charcoal:#111111;
  --white:#FFFFFF;

  --font: system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,'Helvetica Neue',Arial,sans-serif;

  --r-s:4px; --r-m:10px; --r-l:16px;
  --s-1:.25rem; --s-2:.5rem; --s-3:.75rem; --s-4:1rem; --s-5:1.5rem; --s-6:2rem; --s-7:3rem; --s-8:4rem;
  --shadow-xs:0 1px 3px rgba(0,0,0,.08), 0 1px 2px rgba(0,0,0,.06);
  --shadow-s:0 2px 8px rgba(0,0,0,.12);
  --shadow-m:0 6px 24px rgba(0,0,0,.14);
  --transition:160ms cubic-bezier(.4,.2,.2,1);
}
*,*::before,*::after{ box-sizing:border-box; }
html,body{ height:100%; }
body{ margin:0; font-family:var(--font); color:var(--charcoal); background:var(--white); line-height:1.55; -webkit-font-smoothing:antialiased; text-rendering:optimizeLegibility; }
img{ max-width:100%; display:block; height:auto; }
a{ color:var(--primary-dark); text-decoration:none; }
a:hover,a:focus{ text-decoration:underline; }
:focus-visible{ outline:3px solid var(--primary); outline-offset:3px; }
.sr-only{ position:absolute; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden; clip:rect(0,0,0,0); border:0; }
.skip-link{ position:absolute; left:0; top:-100%; background:var(--primary); color:var(--white); padding:var(--s-3) var(--s-4); border-radius:0 0 var(--r-s) var(--r-s); z-index:1000; transition:top var(--transition); }
.skip-link:focus{ top:0; }

.wrap{ max-width:1200px; margin:0 auto; padding:0 var(--s-5); }

h1,h2,h3,h4{ margin:0 0 var(--s-4); line-height:1.2; font-weight:700; }
h1{ font-size:clamp(2.2rem,5vw,3.1rem); color:var(--near-black); }
h2{ font-size:clamp(1.8rem,4vw,2.3rem); color:var(--near-black); }
h3{ font-size:1.25rem; color:var(--near-black); }
p{ margin:0 0 var(--s-4); }

/* Header / Nav */
.site-header{ position:sticky; top:0; z-index:500; background:var(--white); border-bottom:1px solid var(--offwhite); backdrop-filter:saturate(170%) blur(10px); }
.nav{ display:flex; align-items:center; justify-content:space-between; min-height:72px; gap:var(--s-6); }
.brand{ display:flex; align-items:center; gap:var(--s-3); }
.logo{ height:auto; width:auto; max-height:44px; }
.menu{ list-style:none; display:flex; gap:var(--s-6); margin:0; padding:0; }
.menu a{ color:var(--near-black); font-weight:600; position:relative; padding:6px 0; }
.menu a::after{ content:""; position:absolute; left:0; bottom:-6px; width:0; height:2px; background:var(--primary); transition:width var(--transition); }
.menu a:hover::after, .menu a[aria-current="page"]::after{ width:100%; }
.nav-toggle{ display:none; border:1px solid var(--offwhite); background:var(--white); color:var(--near-black); padding:8px 12px; border-radius:var(--r-s); }
@media (max-width:900px){
  .menu{ display:none; }
  .nav-toggle{ display:inline-block; }
  .menu.open{ display:flex; flex-direction:column; position:absolute; right:var(--s-5); top:72px; background:var(--white); border:1px solid var(--offwhite); border-radius:var(--r-m); box-shadow:var(--shadow-m); padding:var(--s-4) var(--s-5); gap:var(--s-3); }
}

/* Buttons */
.btn{ display:inline-flex; align-items:center; justify-content:center; gap:8px; padding:12px 18px; font-weight:800; border-radius:var(--r-s); border:1px solid var(--primary); background:var(--primary); color:var(--white); transition:transform var(--transition), box-shadow var(--transition), background var(--transition), color var(--transition); cursor:pointer; }
.btn:hover{ transform:translateY(-2px); box-shadow:var(--shadow-s); background:var(--primary-dark); border-color:var(--primary-dark); }
.btn:active{ transform:translateY(0); }
.btn.outline{ background:var(--white); color:var(--primary-dark); border-color:var(--primary-dark); }
.btn.outline:hover{ background:var(--offwhite); }

/* Sections */
.section{ padding:var(--s-8) 0; }
.alt{ background:var(--offwhite); }

/* Divider with centered logo */
.divider{ display:flex; justify-content:center; align-items:center; padding:var(--s-4) 0; }
.divider-mark{ display:inline-flex; align-items:center; justify-content:center; padding:8px 12px; border-radius:999px; background:var(--white); border:1px solid var(--offwhite); box-shadow:var(--shadow-xs); }
.section-logo{ height:28px; width:auto; opacity:.9; margin:0 auto var(--s-3); }

/* Hero */
.hero{ position:relative; overflow:clip; }
.hero-media{ position:relative; height:min(70vh,720px); }
.hero-media img{ width:100%; height:100%; object-fit:cover; display:block; }
.hero-overlay{ position:absolute; inset:0; background:linear-gradient(0deg, rgba(17,17,17,.55), rgba(17,17,17,.18)); }
.logo-watermark{ position:absolute; left:4%; top:6%; width:180px; height:180px; background:url('/assets/logo.png') center/contain no-repeat; opacity:.08; filter:grayscale(1) contrast(1) brightness(1.1); pointer-events:none; }
.hero-inner{ margin-top:-160px; }
.hero .hero-tag{ display:inline-block; background:var(--primary); color:var(--white); padding:6px 10px; border-radius:var(--r-s); font-size:.72rem; letter-spacing:.14rem; text-transform:uppercase; margin-bottom:var(--s-4); }
.hero .lead{ color:var(--charcoal); max-width:70ch; }
.hero-actions{ display:flex; flex-wrap:wrap; gap:var(--s-4); margin-top:var(--s-5); }

/* Metrics */
.metrics{ background:var(--offwhite); border-top:1px solid var(--offwhite); border-bottom:1px solid var(--offwhite); padding:var(--s-6) 0; }
.metrics-grid{ display:grid; gap:var(--s-6); grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); }
.metric{ text-align:center; }
.metric .value{ color:var(--primary-dark); font-size:2.1rem; font-weight:800; line-height:1; margin-bottom:6px; }
.metric .label{ text-transform:uppercase; font-size:.78rem; letter-spacing:.08rem; color:var(--near-black); }

/* Services */
.services-grid{ display:grid; gap:var(--s-6); grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); }
.card{ background:var(--white); border:1px solid var(--offwhite); border-radius:var(--r-m); padding:var(--s-5); transition:box-shadow var(--transition), transform var(--transition), border-color var(--transition); }
.card:hover{ box-shadow:var(--shadow-m); transform:translateY(-4px); border-color:var(--primary); }
.icon{ width:52px; height:52px; border-radius:var(--r-s); background:linear-gradient(145deg, var(--primary-dark), var(--primary)); display:flex; align-items:center; justify-content:center; box-shadow:var(--shadow-xs); margin-bottom:var(--s-3); }
.icon svg{ width:28px; height:28px; stroke:var(--white); stroke-width:2; fill:none; stroke-linecap:round; stroke-linejoin:round; }
.card p{ color:var(--charcoal); font-size:.95rem; }
.more{ display:inline-flex; align-items:center; gap:6px; font-size:.8rem; font-weight:800; letter-spacing:.08rem; text-transform:uppercase; margin-top:var(--s-3); color:var(--primary-dark); text-decoration:none; }
.more:hover{ color:var(--primary); }

/* Banner */
.banner-inner{ display:grid; grid-template-columns:1.3fr 1fr; gap:var(--s-6); align-items:center; }
.banner-media{ position:relative; }
.banner-media img{ width:100%; height:100%; border-radius:var(--r-m); object-fit:cover; box-shadow:var(--shadow-s); }
.banner-badge{ position:absolute; left:16px; bottom:16px; background:rgba(255,255,255,.92); border:1px solid var(--offwhite); padding:8px 10px; border-radius:999px; box-shadow:var(--shadow-xs); }
.banner-copy h2{ margin-bottom:var(--s-3); }
.banner-copy p{ margin-bottom:var(--s-5); }
@media (max-width:900px){ .banner-inner{ grid-template-columns:1fr; } }

/* Portfolio */
.portfolio-grid{ display:grid; gap:var(--s-6); grid-template-columns:repeat(auto-fit,minmax(320px,1fr)); }
.project{ position:relative; border-radius:var(--r-m); overflow:hidden; background:var(--near-black); color:var(--white); box-shadow:var(--shadow-s); transition:transform var(--transition), box-shadow var(--transition); }
.project:hover{ transform:translateY(-4px); box-shadow:var(--shadow-m); }
.project img{ width:100%; height:260px; object-fit:cover; display:block; }
.project-overlay{ position:absolute; inset:auto 0 0 0; height:60%; background:linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(17,17,17,.72) 70%); }
.project-body{ position:absolute; bottom:0; left:0; right:0; padding:var(--s-5); }
.tag{ font-size:.68rem; letter-spacing:.12rem; text-transform:uppercase; color:var(--offwhite); margin-bottom:6px; display:inline-block; }
.project h3{ color:var(--white); margin-bottom:6px; }
.project p{ color:var(--offwhite); margin:0; }
.project-corner-logo{ position:absolute; right:12px; bottom:12px; height:22px; width:auto; opacity:.95; filter:drop-shadow(0 2px 3px rgba(0,0,0,.25)); }

/* About */
.about{ display:grid; grid-template-columns:1fr; gap:var(--s-6); }
.bullets{ margin:var(--s-4) 0 0; padding-left:1.1rem; }
.bullets li{ margin-bottom:.4rem; }

/* CTA */
.cta{ position:relative; background:var(--primary-dark); color:var(--white); border-radius:var(--r-l); padding:var(--s-7) var(--s-6); box-shadow:var(--shadow-m); overflow:hidden; }
.cta p{ color:var(--offwhite); }
.cta-actions{ display:flex; flex-wrap:wrap; gap:var(--s-4); margin-top:var(--s-4); }
.cta-logo{ position:absolute; right:16px; top:16px; opacity:.14; }
.cta-logo img{ height:46px; width:auto; filter:grayscale(1) contrast(1.1) brightness(1.1); }

/* Footer */
.site-footer{ background:var(--near-black); color:var(--offwhite); margin-top:var(--s-8); border-top:1px solid rgba(255,255,255,.06); }
.footer{ padding:var(--s-8) 0 var(--s-6); }
.footer-grid{ display:grid; gap:var(--s-6); grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); margin-bottom:var(--s-6); }
.footer-brand{ display:flex; flex-direction:column; gap:var(--s-3); }
.footer-logo{ height:auto; width:auto; max-height:48px; }
.footer h4{ color:var(--white); margin-bottom:var(--s-4); }
.footer a{ color:var(--offwhite); display:inline-block; margin-bottom:6px; }
.footer a:hover{ color:var(--white); text-decoration:none; }

/* Reduced motion */
@media (prefers-reduced-motion:reduce){ *{ transition:none !important; animation:none !important; } }
EOF

cat > lib/content.ts << 'EOF'
// Static fallback content (used until CMS is configured)
export const staticContent = {
  services: [
    {
      key: 'hotel',
      title: 'Hotel Renovations',
      description: 'Phased guest room, corridor, lobby, and amenity upgrades with minimal disruption and brand‑aligned finishes.',
      icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="8" width="18" height="12" rx="2"/><path d="M7 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"/><path d="M10 12h4"/><path d="M9 16h6"/></svg>`
    },
    {
      key: 'fnb',
      title: 'Restaurant & Bar',
      description: 'Dining and lounge modernizations improving flow, ambiance, and peak‑service throughput.',
      icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 3v8a4 4 0 0 0 4 4h1V3"/><path d="M15 3v12a4 4 0 0 0 4 4h1V3"/><path d="M9 3h6"/></svg>`
    },
    {
      key: 'amenities',
      title: 'Resort Amenities',
      description: 'Upgrades for spa, pool, and recreation—uniting durability, lighting, and guest experience.',
      icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3"/><path d="M2 12h7"/><path d="M15 12h7"/><path d="M12 2v7"/><path d="M12 15v7"/></svg>`
    },
    {
      key: 'rooms',
      title: 'Guest Room Programs',
      description: 'Turnkey FF&E replacement, bath modernization, and energy‑efficient upgrades aligned to brand standards.',
      icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 21V8l9-5 9 5v13"/><path d="M9 21v-6h6v6"/></svg>`
    }
  ],
  projects: [
    {
      key: 'resort',
      image: '/assets/image2.jpg',
      alt: 'Mountain lodge style hotel rendering with timber and stone',
      tag: 'Resort / Adaptive',
      title: 'DoubleTree Mountain Lodge',
      summary: 'Exterior re‑skin, lobby arrival experience, and amenity enhancements.'
    },
    {
      key: 'rooms',
      image: '/assets/image3.jpg',
      alt: 'Modern hotel living area with city view and dining nook',
      tag: 'Guest Rooms',
      title: 'Urban Business Hotel',
      summary: '150‑room phased refresh: finishes, bath reconfiguration, and energy upgrades.'
    },
    {
      key: 'public',
      image: '/assets/image1.jpg',
      alt: 'Contemporary hotel exterior with night lighting and entry canopy',
      tag: 'Public Spaces',
      title: 'City Center Hotel',
      summary: 'Lobby, lounge, and F&B modernization to improve circulation and brand impact.'
    },
    {
      key: 'historic',
      image: '/assets/image4.jpg',
      alt: 'Historic hotel facade with formal entry court',
      tag: 'Historic / Adaptive',
      title: 'Heritage Waterfront Hotel',
      summary: 'System upgrades and finish preservation—guest experience centered.'
    }
  ]
};
EOF

cat > lib/sanity.client.ts << 'EOF'
import { createClient } from 'next-sanity';

export const sanityClient =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && process.env.NEXT_PUBLIC_SANITY_DATASET
    ? createClient({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
        apiVersion: '2025-01-01',
        useCdn: true,
        perspective: 'published'
      })
    : null;
EOF

cat > lib/sanity.content.ts << 'EOF'
import { sanityClient } from './sanity.client';
import { staticContent } from './content';

export async function loadContent() {
  if (!sanityClient) return staticContent;

  const services = await sanityClient.fetch(
    `*[_type=="service"]|order(order asc){
      "key": _id,
      title,
      description,
      icon
    }`
  );

  const projects = await sanityClient.fetch(
    `*[_type=="project"]|order(order asc){
      "key": _id,
      "image": coalesce(imagePath, "/assets/image1.jpg"),
      alt,
      tag,
      title,
      summary
    }`
  );

  return {
    services: services?.length ? services : staticContent.services,
    projects: projects?.length ? projects : staticContent.projects
  };
}
EOF

cat > sanity/schema.ts << 'EOF'
import { defineType, defineField } from 'sanity';

export const service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({ name: 'order', type: 'number', title: 'Order' }),
    defineField({ name: 'title', type: 'string', title: 'Title' }),
    defineField({ name: 'description', type: 'text', title: 'Description' }),
    defineField({
      name: 'icon',
      type: 'text',
      title: 'Icon (inline SVG)',
      description: 'Paste an inline SVG (stroke icons recommended).'
    })
  ]
});

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({ name: 'order', type: 'number', title: 'Order' }),
    defineField({ name: 'title', type: 'string', title: 'Title' }),
    defineField({ name: 'tag', type: 'string', title: 'Tag' }),
    defineField({ name: 'summary', type: 'text', title: 'Summary' }),
    defineField({ name: 'alt', type: 'string', title: 'Image Alt Text' }),
    defineField({
      name: 'imagePath',
      type: 'string',
      title: 'Image Path (public/ path)',
      description: 'Example: /assets/image2.jpg'
    })
  ]
});
EOF

cat > .env.example << 'EOF'
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
EOF

cat > .gitignore << 'EOF'
node_modules
.next
out
.env
.env.local
.env.*.local
.DS_Store
EOF

cat > README.md << 'EOF'
# PARDO Construction LLC — Website Rehaul (Next.js + Sanity CMS)

- Next.js 14 (App Router), React 18
- Palette: #789271 (primary), #46523D (hover), #F5F4F0 (alt), #212021, #111111
- next/image optimization
- Sanity CMS integration with fallback to local content

## Quick start
1) Put images into public/assets:
   - logo.png
   - image1.jpg, image2.jpg, image3.jpg, image4.jpg
2) npm install
3) npm run dev

## CMS (optional)
- Add .env.local:
  NEXT_PUBLIC_SANITY_PROJECT_ID=...
  NEXT_PUBLIC_SANITY_DATASET=production
- Use schemas in sanity/schema.ts
EOF

touch public/assets/.gitkeep

echo "Installing dependencies..."
npm install

git add .
git commit -m "Initial commit: Next.js site + CMS integration (brand palette + logo placements)"
git push -u origin main

echo "Done. Next:"
echo "1) Add images to public/assets: logo.png, image1.jpg..image4.jpg"
echo "2) npm run dev (local) or deploy to Vercel"
EOF