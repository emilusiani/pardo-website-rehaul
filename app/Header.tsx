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

  return (
    <header className="site-header" role="banner">
      <div className="wrap nav">
        <a href="#home" className="brand" aria-label="Pardo Construction LLC, Home">
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
