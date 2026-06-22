'use client';

import { useEffect, useRef, useCallback } from 'react';

interface MenuItem {
  name: string;
  price: string;
}

interface MenuCategory {
  title: string;
  icon: string;
  description: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    title: 'Signature Smoothies',
    icon: '\uD83E\uDD64',
    description: 'Blended fresh to order with organic fruits, greens, and superfoods.',
    items: [
      { name: 'Green Machine', price: '$10' },
      { name: 'Tropical Sunrise', price: '$11' },
      { name: 'Berry Bliss', price: '$10' },
      { name: 'Peanut Butter Power', price: '$12' },
    ],
  },
  {
    title: 'Acai Bowls',
    icon: '\uD83C\uDF53',
    description: 'Thick acai blend topped with granola, fresh fruit, and honey.',
    items: [
      { name: 'Classic Acai', price: '$13' },
      { name: 'Pitaya Paradise', price: '$14' },
      { name: 'Coconut Dream', price: '$13' },
      { name: 'PB & Acai', price: '$14' },
    ],
  },
  {
    title: 'Cold-Pressed Juice',
    icon: '\uD83C\uDF4A',
    description: 'Hydraulically pressed for maximum nutrients and flavor.',
    items: [
      { name: 'Citrus Glow', price: '$9' },
      { name: 'Beet Revival', price: '$9' },
      { name: 'Green Detox', price: '$10' },
      { name: 'Carrot Zinger', price: '$9' },
    ],
  },
  {
    title: 'Wellness Shots',
    icon: '\u26A1',
    description: 'Concentrated boosts of ginger, turmeric, and more.',
    items: [
      { name: 'Ginger Fire', price: '$5' },
      { name: 'Turmeric Gold', price: '$5' },
      { name: 'Immunity Boost', price: '$6' },
      { name: 'Apple Cider Kick', price: '$5' },
    ],
  },
  {
    title: 'Protein Shakes',
    icon: '\uD83D\uDCAA',
    description: 'Post-workout recovery with plant or whey protein.',
    items: [
      { name: 'Chocolate Gains', price: '$12' },
      { name: 'Vanilla Recovery', price: '$12' },
      { name: 'Banana Builder', price: '$11' },
      { name: 'Mocha Fuel', price: '$13' },
    ],
  },
  {
    title: 'Seasonal Specials',
    icon: '\u2728',
    description: 'Limited-time creations featuring local, seasonal produce.',
    items: [
      { name: 'Desert Bloom', price: '$13' },
      { name: 'Prickly Pear Fizz', price: '$11' },
      { name: 'Mesquite Cacao', price: '$14' },
      { name: 'Sonoran Sunrise', price: '$12' },
    ],
  },
];

export default function MenuSection() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const setCardRef = useCallback((el: HTMLDivElement | null, index: number) => {
    cardsRef.current[index] = el;
  }, []);

  useEffect(() => {
    // IO fallback for browsers without animation-timeline
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

    cardsRef.current.forEach((card) => {
      if (card) {
        card.classList.add('io-hidden');
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, []);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--holo-x', `${x}%`);
    card.style.setProperty('--holo-y', `${y}%`);
  }

  return (
    <section className="section" id="menu">
      <span className="section-label">Our Menu</span>
      <h2 className="section-title">Crafted with care, served with soul.</h2>
      <div className="menu-grid">
        {menuData.map((category, i) => (
          <div
            key={category.title}
            className="holo-card"
            ref={(el) => setCardRef(el, i)}
            onMouseMove={handleMouseMove}
            onMouseLeave={(e) => {
              e.currentTarget.style.setProperty('--holo-x', '50%');
              e.currentTarget.style.setProperty('--holo-y', '50%');
            }}
          >
            <div className="card-icon">{category.icon}</div>
            <h3 className="card-title">{category.title}</h3>
            <p className="card-description">{category.description}</p>
            <ul className="card-items">
              {category.items.map((item) => (
                <li key={item.name}>
                  <span className="item-name">{item.name}</span>
                  <span className="item-price">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
