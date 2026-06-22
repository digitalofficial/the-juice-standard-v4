'use client';

import { useEffect } from 'react';
import Logo from './Logo';

export default function Hero() {
  useEffect(() => {
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.3) {
        heroSection.classList.add('scrolled-past');
      } else {
        heroSection.classList.remove('scrolled-past');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero" id="home">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=1600&h=900&fit=crop" alt="Colorful fresh juices and smoothies" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} fetchPriority="high" />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,15,5,0.75), rgba(10,15,5,0.55), rgba(10,15,5,0.85))' }} />
      <div className="hero-content">
        <Logo height={48} />
        <h1>
          Fuel your day
          <br />
          the right way.
        </h1>
        <p>
          Cold-pressed juices, superfood smoothies, and wellness shots crafted
          daily in Tucson, AZ.
        </p>
        <a href="#menu" className="hero-cta">
          See the Menu
          <svg
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10 4v12M4 10l6 6 6-6" />
          </svg>
        </a>
      </div>
    </section>
  );
}
