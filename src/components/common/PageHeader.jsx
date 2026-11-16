import { useEffect, useRef } from "react";
import { Sparkles, MapPin, Layers, Image as ImageIcon } from "lucide-react";
import { gsap } from "../../animations/gsapConfig";

export default function PageHeader({
  badge,
  title,
  description,
  image,
  theme = "default", // "about", "services", "gallery", "contact"
  stats,
}) {
  const headerRef = useRef(null);

  useEffect(() => {
    if (headerRef.current) {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // 1. Badge glide in
        tl.fromTo(
          ".page-header-badge",
          { opacity: 0, y: -12, scale: 0.94 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5 }
        );

        // 2. 3D Perspective Character Flip Reveal: flips forward from rotateX(-90deg) with elastic bounce
        tl.fromTo(
          ".page-header-3d-char",
          {
            opacity: 0,
            rotateX: -90,
            y: 16,
            transformOrigin: "50% 100%",
          },
          {
            opacity: 1,
            rotateX: 0,
            y: 0,
            duration: 0.85,
            stagger: 0.022,
            ease: "elastic.out(1, 0.75)",
          },
          "-=0.2"
        );

        // 3. Gold divider line smooth expansion from left
        tl.fromTo(
          ".page-header-line",
          { scaleX: 0, transformOrigin: "left center" },
          { scaleX: 1, duration: 0.65, ease: "power2.out" },
          "-=0.35"
        );

        // 4. Description fade in
        tl.fromTo(
          ".page-header-desc",
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.55 },
          "-=0.3"
        );

        // 5. Stats pills staggered reveal
        if (stats && stats.length > 0) {
          tl.fromTo(
            ".page-header-stat",
            { opacity: 0, y: 12 },
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
            "-=0.3"
          );
        }
      }, headerRef);

      return () => ctx.revert();
    }
  }, [title, stats]);

  return (
    <section
      ref={headerRef}
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-[#ede4d4] border-b border-[#c59b27]/30"
    >
      {/* 1. Specular Edge Hairlines */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#dfb76c] to-transparent shadow-[0_1px_3px_rgba(196,151,70,0.3)] z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#dfb76c] to-transparent shadow-[0_1px_3px_rgba(196,151,70,0.3)] z-20 pointer-events-none" />

      {/* 2. Soft Floating Ambient Light Orb */}
      <div className="absolute top-10 left-10 w-[450px] h-[450px] rounded-full bg-gradient-to-br from-[#dfb76c]/20 via-[#c49746]/10 to-transparent blur-3xl pointer-events-none animate-float-slow transform-gpu z-10" />

      {/* Dynamic Background Image - Crisp, Colorful & Clearly Visible */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center filter brightness-100 contrast-[1.03] scale-105 transform motion-safe:transition-transform motion-safe:duration-10000 motion-safe:hover:scale-110"
        />

        {/* Directional Scrim on Desktop: High contrast for left text, leaves right side 100% crystal clear */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#ede4d4]/95 via-[#ede4d4]/65 via-45% to-transparent to-75% hidden sm:block" />

        {/* Mobile Scrim: Soft bottom-up gradient so mobile text is legible while upper photo remains clear */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#ede4d4] via-[#ede4d4]/70 to-transparent sm:hidden" />

        {/* Subtle bottom edge blend into page content */}
        <div className="absolute bottom-0 left-0 right-0 h-16 z-10 bg-gradient-to-t from-[#ede4d4] to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl sm:max-w-3xl">
          {/* Badge */}
          {badge && (
            <div className="page-header-badge group inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-white/95 via-[#fdfbf7]/90 to-white/95 border border-[#c49746]/50 backdrop-blur-xl mb-6 shadow-[0_4px_16px_rgba(196,151,70,0.2),inset_0_1px_1px_rgba(255,255,255,1)] relative overflow-hidden transition-all duration-300 hover:shadow-[0_6px_22px_rgba(196,151,70,0.3)] hover:-translate-y-0.5">
              {/* Specular Diagonal Sheen Sweep on Hover */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />

              {theme === "about" && (
                <Sparkles className="w-3.5 h-3.5 text-[#c49746] drop-shadow-[0_1px_2px_rgba(196,151,70,0.4)]" />
              )}
              {theme === "services" && (
                <Layers className="w-3.5 h-3.5 text-[#c49746] drop-shadow-[0_1px_2px_rgba(196,151,70,0.4)]" />
              )}
              {theme === "gallery" && (
                <ImageIcon className="w-3.5 h-3.5 text-[#c49746] drop-shadow-[0_1px_2px_rgba(196,151,70,0.4)]" />
              )}
              {theme === "contact" && (
                <MapPin className="w-3.5 h-3.5 text-[#c49746] drop-shadow-[0_1px_2px_rgba(196,151,70,0.4)]" />
              )}
              <span className="text-xs uppercase tracking-widest text-[#9e761b] font-bold">
                {badge}
              </span>
            </div>
          )}

          {/* Heading in Midnight Navy with Single Unified Font & 3D Perspective Reveal */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#131e34] tracking-tight leading-[1.12] drop-shadow-sm flex flex-wrap"
            style={{
              perspective: "1000px",
              WebkitPerspective: "1000px",
              transformStyle: "preserve-3d",
            }}
          >
            {title.split(" ").map((word, wordIdx) => (
              <span
                key={wordIdx}
                className="inline-flex whitespace-nowrap mr-2.5 sm:mr-3.5"
                style={{ transformStyle: "preserve-3d" }}
              >
                {word.split("").map((char, charIdx) => (
                  <span
                    key={charIdx}
                    className="page-header-3d-char inline-block will-change-transform"
                    style={{
                      transformStyle: "preserve-3d",
                      WebkitTransformStyle: "preserve-3d",
                      transformOrigin: "50% 100%",
                      WebkitTransformOrigin: "50% 100%",
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                    }}
                  >
                    {char}
                  </span>
                ))}
              </span>
            ))}
          </h1>

          {/* Gold Divider Line */}
          <div className="page-header-line relative w-24 h-1.5 bg-gradient-to-r from-[#c49746] via-[#dfb76c] to-transparent my-6 rounded-full shadow-[0_0_12px_rgba(223,183,108,0.5)]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full pointer-events-none" />
          </div>

          {/* Description */}
          {description && (
            <p className="page-header-desc text-base sm:text-lg text-[#1e2a44] font-medium leading-relaxed max-w-xl">
              {description}
            </p>
          )}

          {/* Optional Header Stats Pill with Animated Conic Gold Border & Frosted Crystal Glass */}
          {stats && (
            <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-5 pt-5 border-t border-[#c49746]/30">
              {stats.map((item, idx) => (
                <div
                  key={idx}
                  className="page-header-stat group/stat relative rounded-2xl p-[1.5px] overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-[0_6px_20px_rgba(19,30,52,0.07),0_1px_3px_rgba(196,151,70,0.15)] hover:shadow-[0_12px_28px_rgba(19,30,52,0.14),0_2px_12px_rgba(196,151,70,0.3)]"
                >
                  {/* Animated Rotating Conic Gold Light Beam Border */}
                  <div
                    className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0_270deg,#c49746_315deg,#dfb76c_340deg,#ffffff_360deg)] animate-border-spin opacity-45 group-hover/stat:opacity-100 transition-opacity duration-500 pointer-events-none transform-gpu"
                    style={{ animationDelay: `${idx * -1.5}s` }}
                  />

                  {/* Base gold border line */}
                  <div className="absolute inset-0 rounded-2xl border border-[#c49746]/40 group-hover/stat:border-[#c49746]/80 transition-colors pointer-events-none" />

                  {/* Inner Pill Body: Frosted Crystal Glass */}
                  <div className="relative z-10 rounded-[calc(1rem-1.5px)] bg-gradient-to-b from-white/95 via-white/90 to-[#fdfbf7]/80 backdrop-blur-xl px-5 py-2.5 sm:py-3 flex flex-col justify-center overflow-hidden">
                    {/* Specular Diagonal Sheen Sweep on Hover */}
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/stat:translate-x-full transition-transform duration-700 pointer-events-none" />

                    {/* Top Specular Crystal Hairline */}
                    <div className="absolute top-0 left-3 right-3 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none" />

                    <span className="text-xl sm:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-[#9e761b] via-[#c49746] to-[#9e761b] bg-clip-text text-transparent drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
                      {item.value}
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-[#131e34] tracking-widest uppercase font-bold mt-0.5">
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
