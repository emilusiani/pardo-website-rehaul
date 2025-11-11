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
