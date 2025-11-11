'use client';
import Image from 'next/image';
import { useRef } from 'react';

export default function Header() {
  const menuRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMenuToggle = () => {
    if (menuRef.current && buttonRef.current) {
      const isOpen = menuRef.current.classList.toggle('open');
      buttonRef.current.setAttribute('aria-expanded', String(isOpen));
    }
  };

  const handleNavClick = () => {
    // Close mobile menu when navigation link is clicked
    if (menuRef.current && buttonRef.current) {
      menuRef.current.classList.remove('open');
      buttonRef.current.setAttribute('aria-expanded', 'false');
    }
  };

  return (
    <header className="site-header" role="banner">
      <div className="wrap nav">
        <a href="#home" className="brand" aria-label="Pardo Construction LLC, Home" onClick={handleNavClick}>
          <Image className="logo" src="/assets/logo.png" alt="Pardo Construction LLC logo" width={160} height={44} />
          <span className="sr-only">PARDO Construction, LLC</span>
        </a>
        <button
          ref={buttonRef}
          className="nav-toggle"
          aria-expanded="false"
          aria-controls="primary-nav"
          onClick={handleMenuToggle}
        >
          Menu
        </button>
        <nav id="primary-nav" aria-label="Primary">
          <ul ref={menuRef} className="menu">
            <li><a href="#home" aria-current="page" onClick={handleNavClick}>Home</a></li>
            <li><a href="#services" onClick={handleNavClick}>Services</a></li>
            <li><a href="#portfolio" onClick={handleNavClick}>Portfolio</a></li>
            <li><a href="#about" onClick={handleNavClick}>About</a></li>
            <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
