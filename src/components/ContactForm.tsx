'use client';

import { useEffect, useRef, useState } from 'react';

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const [submitted, setSubmitted] = useState(false);

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
      { threshold: 0.1 }
    );

    if (formRef.current) {
      formRef.current.classList.add('io-hidden');
      observer.observe(formRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Magnetic hover effect
  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    function handleMove(e: MouseEvent) {
      if (!btn) return;
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    }

    function handleLeave() {
      if (!btn) return;
      btn.style.transform = 'translate(0, 0)';
    }

    btn.addEventListener('mousemove', handleMove);
    btn.addEventListener('mouseleave', handleLeave);

    return () => {
      btn.removeEventListener('mousemove', handleMove);
      btn.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <section className="contact-section" id="contact">
      <span className="section-label">Catering & Contact</span>
      <h2 className="section-title">Let&apos;s make something fresh.</h2>
      <p style={{ color: 'var(--muted)', marginBottom: '0.5rem' }}>
        Planning an event or have a question? Drop us a line and we&apos;ll get
        back to you within 24 hours.
      </p>

      <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input
              className="form-input"
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              className="form-input"
              type="email"
              id="email"
              name="email"
              placeholder="you@email.com"
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="phone">
              Phone
            </label>
            <input
              className="form-input"
              type="tel"
              id="phone"
              name="phone"
              placeholder="(520) 555-0000"
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="order-type">
              Order Type
            </label>
            <select
              className="form-select"
              id="order-type"
              name="orderType"
              required
            >
              <option value="">Select an option</option>
              <option value="catering">Catering</option>
              <option value="bulk-order">Bulk Order</option>
              <option value="event">Event / Party</option>
              <option value="general">General Inquiry</option>
            </select>
          </div>
        </div>

        <div className="form-group full-width">
          <label className="form-label" htmlFor="details">
            Details
          </label>
          <textarea
            className="form-textarea"
            id="details"
            name="details"
            placeholder="Tell us about your event, group size, dates, or anything else..."
            rows={5}
          />
        </div>

        <button className="submit-btn" type="submit" ref={btnRef}>
          {submitted ? 'Sent!' : 'Send Message'}
          {!submitted && (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          )}
        </button>
      </form>
    </section>
  );
}
