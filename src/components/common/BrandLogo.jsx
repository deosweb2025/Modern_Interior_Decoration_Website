import { useId } from "react";
import { Link } from "react-router-dom";

/**
 * LogoIcon: Master High-Definition Vector Recreation of Client's "Md" Emblem
 * Features:
 * - Upright Capital "M" in warm architectural gold with right leg resting on red disc
 * - 3D Tilted Architectural Red Ellipse Platform with silver-white bevel extrusion
 * - Lowercase "d" in matching architectural gold grounded on baseline
 * - Cast ground shadow providing dimensional realism
 */
export function LogoIcon({ className = "w-11 h-8", ...props }) {
  const id = useId();
  const goldGradId = `clientGoldGrad-${id}`;
  const redGradId = `clientRedGrad-${id}`;
  const rimGradId = `clientRimGrad-${id}`;
  const shadowFilterId = `clientShadow-${id}`;

  return (
    <svg
      viewBox="0 0 160 110"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <defs>
        {/* Warm Architectural Gold Metallic Gradient */}
        <linearGradient id={goldGradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fae9c0" />
          <stop offset="35%" stopColor="#e8cd87" />
          <stop offset="70%" stopColor="#d4af37" />
          <stop offset="100%" stopColor="#b88d22" />
        </linearGradient>

        {/* Vibrant Crimson Architectural Red Gradient */}
        <linearGradient id={redGradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ea3b2d" />
          <stop offset="45%" stopColor="#c92317" />
          <stop offset="100%" stopColor="#9a1309" />
        </linearGradient>

        {/* 3D Extrusion Bevel Rim Gradient */}
        <linearGradient id={rimGradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#c8cdd4" />
          <stop offset="100%" stopColor="#7a8290" />
        </linearGradient>

        {/* Subtle Drop Shadow */}
        <filter id={shadowFilterId} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* 1. Ground Cast Shadow */}
      <ellipse cx="88" cy="99" rx="65" ry="8" fill="#000000" opacity="0.32" />

      {/* 2. 3D Angled Red Ellipse Disc (Platform) */}
      <g transform="translate(68, 60) rotate(-24)">
        {/* 3D Extrusion Rim (Thickness) */}
        <ellipse cx="2.2" cy="3.2" rx="52" ry="17.5" fill={`url(#${rimGradId})`} />
        {/* Red Surface Face */}
        <ellipse cx="0" cy="0" rx="52" ry="17.5" fill={`url(#${redGradId})`} />
        {/* Specular Glint Highlight */}
        <path d="M -36 -3 Q 0 -11 36 -3 Q 0 -7 -36 -3 Z" fill="#ffffff" opacity="0.28" />
      </g>

      {/* 3. Capital "M" (Standing upright, right leg resting on red disc) */}
      <g filter={`url(#${shadowFilterId})`}>
        <path
          d="M 12 94 L 12 10 L 24 10 L 44 58 L 64 10 L 76 10 L 76 56 L 64 56 L 64 32 L 48 70 L 40 70 L 24 32 L 24 94 Z"
          fill={`url(#${goldGradId})`}
        />
      </g>

      {/* 4. Lowercase "d" (Standing to the right, overlapping red disc) */}
      <g filter={`url(#${shadowFilterId})`}>
        {/* Vertical Stem */}
        <rect x="126" y="36" width="12" height="58" fill={`url(#${goldGradId})`} rx="0.5" />
        {/* Circular Bowl */}
        <path
          d="M 127 55 A 19.5 19.5 0 1 0 127 93.5 L 127 81.5 A 8 8 0 1 1 127 67 Z"
          fill={`url(#${goldGradId})`}
          fillRule="evenodd"
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
      ? "w-10 h-7"
      : size === "lg"
      ? "w-14 h-10 sm:w-16 sm:h-11"
      : "w-12 h-8 sm:w-13 sm:h-9";

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
      {/* High-Gloss Client "Md" Emblem */}
      <div className="relative shrink-0 transition-transform duration-300 group-hover:scale-105">
        <LogoIcon className={`${iconSizeClass} drop-shadow-[0_4px_12px_rgba(0,0,0,0.18)]`} />
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
