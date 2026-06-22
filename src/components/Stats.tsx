'use client';

import { useEffect, useRef, useCallback } from 'react';

const stats = [
  { number: '50,000+', label: 'Smoothies Made' },
  { number: '100%', label: 'Organic Ingredients' },
  { number: '4.9', label: 'Star Rating' },
];

export default function Stats() {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const setRef = useCallback((el: HTMLDivElement | null, index: number) => {
    itemsRef.current[index] = el;
  }, []);

  useEffect(() => {
    const supportsScrollDriven = CSS.supports('animation-timeline', 'view()');
    if (supportsScrollDriven) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('io-hidden');
            entry.target.classList.add('io-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    itemsRef.current.forEach((item) => {
      if (item) {
        item.classList.add('io-hidden');
        observer.observe(item);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section">
      <div className="stats-grid">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="stat-item"
            ref={(el) => setRef(el, i)}
          >
            <span className="stat-number">{stat.number}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
