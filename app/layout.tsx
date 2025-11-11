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
