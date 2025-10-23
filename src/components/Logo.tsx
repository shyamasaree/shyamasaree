import React from 'react';

interface LogoProps {
  variant?: 'full' | 'icon' | 'monogram';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  size = 'md',
  className = '',
  showTagline = false,
}) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16',
    xl: 'h-24',
  };

  // Icon - Elegant woman in saree (inspired by your examples)
  const IconSVG = () => (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${sizeClasses[size]} ${className}`}
      aria-label="Shyamasaree Icon"
    >
      {/* Decorative circular frame with gold border */}
      <circle cx="40" cy="40" r="38" stroke="#D4AF37" strokeWidth="2" fill="none" opacity="0.5" />

      {/* Woman silhouette - elegant pose */}
      <g transform="translate(40, 40)">
        {/* Head with bun */}
        <circle cx="0" cy="-20" r="6" fill="#8B0000" />
        <circle cx="2" cy="-24" r="3" fill="#8B0000" opacity="0.8" /> {/* Bun */}

        {/* Neck */}
        <rect x="-1.5" y="-14" width="3" height="6" fill="#8B0000" />

        {/* Upper body - saree blouse */}
        <path
          d="M-8 -8 L-6 0 L6 0 L8 -8 Q6 -10, 0 -10 Q-6 -10, -8 -8 Z"
          fill="#8B0000"
        />

        {/* Saree drape over shoulder - signature pallu */}
        <path
          d="M-8 -6 Q-12 0, -10 8 L-10 20"
          stroke="#D4AF37"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />

        {/* Waist and lower body */}
        <path
          d="M-6 0 L-7 12 L-5 24"
          stroke="#8B0000"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M6 0 L7 12 L5 24"
          stroke="#8B0000"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Saree bottom with pleats */}
        <path
          d="M-5 24 L-6 28 L-4 28 Z"
          fill="#8B0000"
        />
        <path
          d="M-2 24 L-3 28 L-1 28 Z"
          fill="#D4AF37"
          opacity="0.8"
        />
        <path
          d="M1 24 L0 28 L2 28 Z"
          fill="#8B0000"
        />
        <path
          d="M4 24 L3 28 L5 28 Z"
          fill="#8B0000"
        />

        {/* Small decorative dot - jewelry */}
        <circle cx="0" cy="-20" r="1" fill="#D4AF37" opacity="0.7" />
      </g>

      {/* Decorative bottom pattern */}
      <path
        d="M15 70 L25 70 M30 70 L50 70 M55 70 L65 70"
        stroke="#D4AF37"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  );

  // Monogram - Clean, sophisticated SS
  const MonogramSVG = () => (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${sizeClasses[size]} ${className}`}
      aria-label="Shyamasaree Monogram"
    >
      {/* Clean background */}
      <rect x="10" y="10" width="80" height="80" rx="8" fill="#FFF8DC" />
      <rect x="10" y="10" width="80" height="80" rx="8" stroke="#8B0000" strokeWidth="2" fill="none" />

      {/* Simple, elegant S letters */}
      <text
        x="50"
        y="65"
        fontSize="48"
        fontFamily="'Playfair Display', serif"
        fontWeight="700"
        fill="#8B0000"
        textAnchor="middle"
      >
        S
      </text>

      {/* Gold accent line */}
      <line x1="30" y1="72" x2="70" y2="72" stroke="#D4AF37" strokeWidth="2" />
    </svg>
  );

  // Full wordmark logo - Clean text-only design (like top brands)
  const FullLogo = () => (
    <div className={`flex flex-col ${className}`}>
      {/* Brand name - elegant serif */}
      <div className="leading-none">
        <span
          className={`
            ${size === 'sm' ? 'text-2xl' : ''}
            ${size === 'md' ? 'text-4xl' : ''}
            ${size === 'lg' ? 'text-5xl' : ''}
            ${size === 'xl' ? 'text-6xl' : ''}
            font-bold
          `}
          style={{
            fontFamily: "'Playfair Display', serif",
            letterSpacing: '0.08em',
            color: '#8B0000',
          }}
        >
          SHYAMASAREE
        </span>
      </div>

      {/* Subtle decorative line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-40 my-1" />

      {/* Tagline */}
      {showTagline && (
        <p
          className={`
            text-[#D4AF37] text-center
            ${size === 'sm' ? 'text-[9px]' : ''}
            ${size === 'md' ? 'text-[10px]' : ''}
            ${size === 'lg' ? 'text-xs' : ''}
            ${size === 'xl' ? 'text-sm' : ''}
          `}
          style={{
            fontFamily: "'Inter', sans-serif",
            letterSpacing: '0.25em',
            fontWeight: '500',
          }}
        >
          DRAPE THE LEGACY
        </p>
      )}
    </div>
  );

  // Render based on variant
  switch (variant) {
    case 'icon':
      return <IconSVG />;
    case 'monogram':
      return <MonogramSVG />;
    case 'full':
    default:
      return <FullLogo />;
  }
};

// Export individual variants for convenience
export const LogoIcon = (props: Omit<LogoProps, 'variant'>) => (
  <Logo {...props} variant="icon" />
);

export const LogoMonogram = (props: Omit<LogoProps, 'variant'>) => (
  <Logo {...props} variant="monogram" />
);

export const LogoFull = (props: Omit<LogoProps, 'variant'>) => (
  <Logo {...props} variant="full" />
);

export default Logo;
