import { useId } from "react";
import { Link } from "react-router-dom";

/**
 * LogoIcon: Precision Vector Emblem for Modern Interior Decoration
 * Represents architectural structural columns, vaulted ceiling chevron slants,
 * golden keystone diamond apex, and an architectural foundation line.
 */
export function LogoIcon({ className = "w-10 h-10", ...props }) {
  const id = useId();
  const goldGradId = `brandGoldGrad-${id}`;
  const goldLightId = `brandGoldLight-${id}`;
  const darkBgId = `brandDarkBg-${id}`;
  const glowId = `brandGlow-${id}`;

  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <defs>
        {/* Metallic Architectural Gold Gradient */}
        <linearGradient id={goldGradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fae5b5" />
          <stop offset="30%" stopColor="#dfb76c" />
          <stop offset="70%" stopColor="#c49746" />
          <stop offset="100%" stopColor="#9e761b" />
        </linearGradient>

        {/* Champagne Specular Light Gold Gradient */}
        <linearGradient id={goldLightId} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#c49746" />
          <stop offset="45%" stopColor="#fae5b5" />
          <stop offset="75%" stopColor="#dfb76c" />
          <stop offset="100%" stopColor="#e0be63" />
        </linearGradient>

        {/* Midnight Obsidian Architectural Core */}
        <linearGradient id={darkBgId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e2c47" />
          <stop offset="50%" stopColor="#111a2d" />
          <stop offset="100%" stopColor="#080e1a" />
        </linearGradient>

        {/* Subtle Specular Depth */}
        <filter id={glowId} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.45" />
        </filter>
      </defs>

      {/* Outer Architectural Medallion Frame with Rounded Squircle Silhouette */}
      <rect
        x="4"
        y="4"
        width="92"
        height="92"
        rx="22"
        fill={`url(#${darkBgId})`}
        stroke={`url(#${goldGradId})`}
        strokeWidth="2.2"
      />

      {/* Inner Micro-Hairline Precision Architectural Border */}
      <rect
        x="8.5"
        y="8.5"
        width="83"
        height="83"
        rx="17.5"
        fill="none"
        stroke={`url(#${goldLightId})`}
        strokeWidth="0.8"
        strokeOpacity="0.5"
      />

      {/* Architectural Corner Accent Points */}
      <circle cx="13.5" cy="13.5" r="1.2" fill="#dfb76c" opacity="0.65" />
      <circle cx="86.5" cy="13.5" r="1.2" fill="#dfb76c" opacity="0.65" />
      <circle cx="13.5" cy="86.5" r="1.2" fill="#dfb76c" opacity="0.65" />
      <circle cx="86.5" cy="86.5" r="1.2" fill="#dfb76c" opacity="0.65" />

      {/* The Architectural "M" Geometric Monogram */}
      <g filter={`url(#${glowId})`}>
        {/* Left Column (Fluted architectural pillar) */}
        <path d="M22 74 L22 30 L31 24 L31 74 Z" fill={`url(#${goldLightId})`} />

        {/* Right Column (Fluted architectural pillar) */}
        <path d="M69 74 L69 24 L78 30 L78 74 Z" fill={`url(#${goldGradId})`} />

        {/* Left Diagonal Chevron (Vaulted ceiling beam / light facet) */}
        <path d="M31 24 L50 56 L44 60 L22 30 Z" fill={`url(#${goldLightId})`} />

        {/* Right Diagonal Chevron (Vaulted ceiling beam / shadow facet) */}
        <path d="M69 24 L78 30 L56 60 L50 56 Z" fill={`url(#${goldGradId})`} />

        {/* Central Architectural Keystone / Diamond Apex */}
        <polygon points="50,16 56.5,23.5 50,31 43.5,23.5" fill="#fae5b5" />

        {/* Horizontal Foundation Baseline / Floor Plane */}
        <line
          x1="18"
          y1="78"
          x2="82"
          y2="78"
          stroke={`url(#${goldGradId})`}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

/**
 * BrandLogo: Primary branding component for Modern Interior Decoration
 */
export default function BrandLogo({
  variant = "light", // "light" | "dark"
  size = "default", // "sm" | "default" | "lg"
  showText = true,
  className = "",
  onClick,
}) {
  const isDark = variant === "dark";
  const iconSizeClass =
    size === "sm"
      ? "w-9 h-9"
      : size === "lg"
      ? "w-11 h-11 sm:w-12 sm:h-12"
      : "w-10 h-10 sm:w-11 sm:h-11";

  const titleSizeClass =
    size === "sm" ? "text-base" : size === "lg" ? "text-lg sm:text-xl" : "text-base sm:text-lg";

  const subSizeClass =
    size === "sm"
      ? "text-[8.5px] tracking-[0.22em]"
      : size === "lg"
      ? "text-[10px] tracking-[0.28em]"
      : "text-[9px] sm:text-[10px] tracking-[0.25em]";

  return (
    <Link
      to="/"
      onClick={onClick}
      className={`group inline-flex items-center gap-3 select-none ${className}`}
      aria-label="Modern Interior Decoration Home"
    >
      {/* High-Gloss Jeweled Medallion Emblem */}
      <div className="relative shrink-0 transition-transform duration-300 group-hover:scale-105">
        <LogoIcon className={`${iconSizeClass} drop-shadow-[0_4px_14px_rgba(196,151,70,0.22)]`} />
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col">
          <span
            className={`font-heading font-extrabold tracking-wider leading-tight transition-colors duration-300 ${
              isDark
                ? "text-[#f7f3eb] group-hover:text-white"
                : "text-[#131e34] group-hover:text-[#c59b27]"
            } ${titleSizeClass}`}
          >
            MODERN
          </span>
          <span
            className={`font-bold uppercase transition-colors duration-300 ${
              isDark ? "text-[#dfb76c]" : "text-[#9e761b]"
            } ${subSizeClass}`}
          >
            INTERIOR DECORATION
          </span>
        </div>
      )}
    </Link>
  );
}
