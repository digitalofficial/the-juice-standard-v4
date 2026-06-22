import Logo from './Logo';

export default function Hero() {
  return (
    <div className="hero-wrapper">
      <section className="hero" id="home">
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
    </div>
  );
}
