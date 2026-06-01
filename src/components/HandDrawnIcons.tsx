/* Hand-drawn restaurant glyphs — recreated from the orange window decals
   at the Tamales Los Girasoles dining room. Single-stroke, marker-style. */

type IconProps = { className?: string; style?: React.CSSProperties; size?: number };

const base = (size = 48) => ({
  width: size,
  height: size,
  viewBox: "0 0 64 64",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

export const IconSun = ({ size, className, style }: IconProps) => (
  <svg {...base(size)} className={className} style={style} aria-hidden>
    <circle cx="32" cy="32" r="9" />
    {Array.from({ length: 12 }).map((_, i) => {
      const a = (i * Math.PI) / 6;
      const x1 = 32 + Math.cos(a) * 16;
      const y1 = 32 + Math.sin(a) * 16;
      const x2 = 32 + Math.cos(a) * 26;
      const y2 = 32 + Math.sin(a) * 26;
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
    })}
  </svg>
);

export const IconChili = ({ size, className, style }: IconProps) => (
  <svg {...base(size)} className={className} style={style} aria-hidden>
    <path d="M18 50 C 22 30, 38 22, 52 18 C 46 32, 36 46, 18 50 Z" />
    <path d="M48 20 C 50 14, 46 10, 42 12" />
  </svg>
);

export const IconHeart = ({ size, className, style }: IconProps) => (
  <svg {...base(size)} className={className} style={style} aria-hidden>
    <path d="M32 52 C 12 38, 12 18, 24 16 C 30 16, 32 22, 32 24 C 32 22, 34 16, 40 16 C 52 18, 52 38, 32 52 Z" />
  </svg>
);

export const IconAvocado = ({ size, className, style }: IconProps) => (
  <svg {...base(size)} className={className} style={style} aria-hidden>
    <ellipse cx="32" cy="34" rx="16" ry="20" />
    <circle cx="32" cy="36" r="7" fill="currentColor" />
  </svg>
);

export const IconOnion = ({ size, className, style }: IconProps) => (
  <svg {...base(size)} className={className} style={style} aria-hidden>
    <path d="M32 14 C 30 8, 26 6, 22 8 M32 14 C 34 8, 38 6, 42 8" />
    <path d="M18 36 C 18 50, 26 56, 32 56 C 38 56, 46 50, 46 36 C 46 24, 38 18, 32 18 C 26 18, 18 24, 18 36 Z" />
    <path d="M26 22 C 24 32, 24 44, 28 54" />
    <path d="M38 22 C 40 32, 40 44, 36 54" />
  </svg>
);

export const IconFlame = ({ size, className, style }: IconProps) => (
  <svg {...base(size)} className={className} style={style} aria-hidden>
    <path d="M22 54 C 14 46, 16 36, 24 30 C 22 38, 28 38, 28 32 C 28 24, 34 18, 34 10 C 42 18, 50 30, 48 42 C 46 50, 38 56, 30 56 C 27 56, 24 55, 22 54 Z" />
  </svg>
);

export const IconPot = ({ size, className, style }: IconProps) => (
  <svg {...base(size)} className={className} style={style} aria-hidden>
    <path d="M14 26 H 50 L 47 52 H 17 Z" />
    <line x1="10" y1="26" x2="54" y2="26" />
    <rect x="26" y="14" width="12" height="6" rx="2" />
    <line x1="32" y1="20" x2="32" y2="26" />
  </svg>
);

export const IconSunflower = ({ size, className, style }: IconProps) => (
  <svg {...base(size)} className={className} style={style} aria-hidden>
    <circle cx="32" cy="32" r="7" />
    {Array.from({ length: 10 }).map((_, i) => {
      const a = (i * Math.PI) / 5;
      const cx = 32 + Math.cos(a) * 14;
      const cy = 32 + Math.sin(a) * 14;
      return (
        <ellipse
          key={i}
          cx={cx}
          cy={cy}
          rx="4"
          ry="8"
          transform={`rotate(${(a * 180) / Math.PI + 90} ${cx} ${cy})`}
        />
      );
    })}
  </svg>
);

export const IconCleaver = ({ size, className, style }: IconProps) => (
  <svg {...base(size)} className={className} style={style} aria-hidden>
    <rect x="8" y="18" width="34" height="22" rx="2" />
    <circle cx="14" cy="38" r="1.5" fill="currentColor" />
    <line x1="42" y1="22" x2="58" y2="18" />
    <line x1="42" y1="36" x2="56" y2="34" />
  </svg>
);

export const IconLime = ({ size, className, style }: IconProps) => (
  <svg {...base(size)} className={className} style={style} aria-hidden>
    <ellipse cx="32" cy="32" rx="20" ry="10" transform="rotate(-30 32 32)" />
  </svg>
);

export const IconDots = ({ size, className, style }: IconProps) => (
  <svg {...base(size)} className={className} style={style} aria-hidden>
    <circle cx="20" cy="24" r="3" fill="currentColor" />
    <circle cx="40" cy="36" r="4.5" fill="currentColor" />
    <circle cx="28" cy="46" r="2" fill="currentColor" />
  </svg>
);

const ALL = [
  IconSun, IconChili, IconHeart, IconAvocado, IconOnion,
  IconFlame, IconPot, IconSunflower, IconCleaver, IconLime, IconDots,
];

type ScatterProps = {
  count?: number;
  color?: string;
  opacity?: number;
  className?: string;
  seed?: number;
};

/* Scatters the orange glyphs across a relatively-positioned parent.
   Use inside a `relative overflow-hidden` container; place at the back of the stack. */
export function HandDrawnScatter({
  count = 14,
  color = "#F47B3E",
  opacity = 0.18,
  className = "",
  seed = 1,
}: ScatterProps) {
  // deterministic pseudo-random so SSR/CSR match
  const rand = (i: number, salt: number) => {
    const x = Math.sin((i + 1) * 9301 + salt * 49297 + seed * 233280) * 43758.5453;
    return x - Math.floor(x);
  };

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{ color }}
    >
      {Array.from({ length: count }).map((_, i) => {
        const Icon = ALL[Math.floor(rand(i, 1) * ALL.length)];
        const top = rand(i, 2) * 100;
        const left = rand(i, 3) * 100;
        const size = 28 + Math.floor(rand(i, 4) * 44);
        const rot = Math.floor(rand(i, 5) * 60) - 30;
        return (
          <Icon
            key={i}
            size={size}
            style={{
              position: "absolute",
              top: `${top}%`,
              left: `${left}%`,
              transform: `translate(-50%, -50%) rotate(${rot}deg)`,
              opacity,
            }}
          />
        );
      })}
    </div>
  );
}
