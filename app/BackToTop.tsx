'use client';

import { useState, useEffect } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="back-to-top"
          aria-label="Back to top"
          type="button"
        >
          ↑
        </button>
      )}
      <style jsx>{`
        .back-to-top {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: var(--primary);
          color: var(--white);
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .back-to-top:hover {
          background-color: var(--primary-dark);
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
        }

        .back-to-top:active {
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          .back-to-top {
            bottom: 1rem;
            right: 1rem;
            width: 40px;
            height: 40px;
            font-size: 1.25rem;
          }
        }
      `}</style>
    </>
  );
}
