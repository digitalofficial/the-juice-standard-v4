export default function Logo({ className = '', height = 40 }: { className?: string; height?: number }) {
  const width = Math.round(height * 6.5);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 50"
      width={width}
      height={height}
      className={className}
      aria-label="The Juice Standard"
      role="img"
    >
      {/* Citrus slice icon */}
      <circle cx="25" cy="25" r="20" fill="#BFFF00" opacity="0.9" />
      <circle cx="25" cy="25" r="16" fill="none" stroke="#0A0F05" strokeWidth="1.5" />
      {/* Slice segments */}
      <line x1="25" y1="9" x2="25" y2="41" stroke="#0A0F05" strokeWidth="1.2" />
      <line x1="9" y1="25" x2="41" y2="25" stroke="#0A0F05" strokeWidth="1.2" />
      <line x1="13.5" y1="13.5" x2="36.5" y2="36.5" stroke="#0A0F05" strokeWidth="1.2" />
      <line x1="36.5" y1="13.5" x2="13.5" y2="36.5" stroke="#0A0F05" strokeWidth="1.2" />
      {/* Juice drop overlay */}
      <path
        d="M25 5 Q28 12 31 18 Q33 22 31 25 Q29 28 25 28 Q21 28 19 25 Q17 22 19 18 Q22 12 25 5Z"
        fill="#FF9500"
        opacity="0.85"
      />
      {/* Text */}
      <text
        x="55"
        y="22"
        fontFamily="'Urbanist', sans-serif"
        fontWeight="900"
        fontSize="13"
        letterSpacing="0.12em"
        fill="#F0FFE8"
      >
        THE JUICE
      </text>
      <text
        x="55"
        y="40"
        fontFamily="'Urbanist', sans-serif"
        fontWeight="700"
        fontSize="14"
        letterSpacing="0.18em"
        fill="#BFFF00"
      >
        STANDARD
      </text>
    </svg>
  );
}
