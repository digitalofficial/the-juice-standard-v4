const items = [
  'GREEN MACHINE',
  'ACAI BOWL',
  'PROTEIN BLAST',
  'TROPICAL SUNRISE',
  'DETOX ELIXIR',
  'GINGER SHOT',
  'BERRY BLISS',
  'CITRUS GLOW',
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="marquee-section" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span className="marquee-item" key={i}>
            <span className="marquee-dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
