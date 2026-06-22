'use client';

import { useEffect, useRef } from 'react';

export default function Testimonial() {
  const cardRef = useRef<HTMLDivElement>(null);

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

    if (cardRef.current) {
      cardRef.current.classList.add('io-hidden');
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="testimonial-section">
      <div className="testimonial-card" ref={cardRef}>
        <p className="testimonial-quote">
          I start every single morning with a Green Machine from The Juice
          Standard. It&apos;s become my daily ritual -- I genuinely feel the
          difference when I skip it. The quality is unmatched in Tucson.
        </p>
        <p className="testimonial-author">
          <strong>Maria S.</strong> &mdash; Daily regular since 2023
        </p>
      </div>
    </section>
  );
}
