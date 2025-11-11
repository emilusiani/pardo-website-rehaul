'use client';
import Image from 'next/image';

export default function Header() {
  return (
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
  );
}
