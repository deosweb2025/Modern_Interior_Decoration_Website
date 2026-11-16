import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Sparkles, MapPin } from "lucide-react";
import SectionHeading from "../common/SectionHeading";

export default function HomeAboutGlimpse() {
  const highlights = [
    "Bespoke Architectural Planning",
    "Boiling-Waterproof Certified Materials",
    "Transparent Fixed BOQ Estimates",
    "On-Time Handover Guarantee",
  ];

  return (
    <section className="relative py-20 sm:py-28 bg-gradient-to-b from-[#ede4d4] via-[#f7f3eb] to-[#ede4d4] overflow-hidden border-b border-[#c59b27]/30">
      {/* Specular Edge Hairlines */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#dfb76c] to-transparent shadow-[0_1px_3px_rgba(196,151,70,0.3)] z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#dfb76c] to-transparent shadow-[0_1px_3px_rgba(196,151,70,0.3)] z-10 pointer-events-none" />

      {/* 1. Subtle Textural Architectural Marquetry Grid Pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-35 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="arch-pattern"
            width="56"
            height="56"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 56 0 L 0 56 M 0 0 L 56 56"
              fill="none"
              stroke="rgba(197, 155, 39, 0.09)"
              strokeWidth="0.8"
            />
            <circle cx="28" cy="28" r="1.5" fill="rgba(197, 155, 39, 0.22)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#arch-pattern)" />
      </svg>

      {/* 2. Floating Ambient Luxury Light Orbs (GPU-accelerated gentle caustics) */}
      <div className="absolute -top-24 -right-20 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-[#dfb76c]/25 via-[#c49746]/10 to-transparent blur-3xl pointer-events-none animate-float-slow transform-gpu" />
      <div className="absolute -bottom-24 -left-16 w-[480px] h-[480px] rounded-full bg-gradient-to-tr from-[#ede4d4] via-[#dfb76c]/18 to-transparent blur-3xl pointer-events-none animate-float-reverse transform-gpu" />

      {/* 3. Subtle Animated Architectural Compass Watermark */}
      <svg
        className="absolute -right-28 -top-28 w-[580px] h-[580px] pointer-events-none opacity-25 animate-rotate-ultra-slow transform-gpu"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle
          cx="200"
          cy="200"
          r="185"
          stroke="#c59b27"
          strokeWidth="0.8"
          strokeDasharray="4 8"
        />
        <circle
          cx="200"
          cy="200"
          r="140"
          stroke="#c59b27"
          strokeWidth="0.6"
        />
        <circle
          cx="200"
          cy="200"
          r="95"
          stroke="#c59b27"
          strokeWidth="0.7"
          strokeDasharray="3 5"
        />
        <circle
          cx="200"
          cy="200"
          r="50"
          stroke="#c59b27"
          strokeWidth="0.5"
        />
        <line
          x1="15"
          y1="200"
          x2="385"
          y2="200"
          stroke="#c59b27"
          strokeWidth="0.5"
          strokeDasharray="5 7"
        />
        <line
          x1="200"
          y1="15"
          x2="200"
          y2="385"
          stroke="#c59b27"
          strokeWidth="0.5"
          strokeDasharray="5 7"
        />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Overlapping Photos with Architectural Framing */}
          <div className="lg:col-span-6 relative">
            {/* Delicate gold architectural offset frame behind main photo */}
            <div className="absolute -inset-3 sm:-inset-4 rounded-3xl border border-[#c49746]/45 -z-10 pointer-events-none hidden sm:block shadow-[0_0_25px_rgba(196,151,70,0.12)]" />

            {/* Main Editorial Image */}
            <div className="relative z-10 w-4/5 rounded-2xl overflow-hidden border border-[#c49746]/50 shadow-[0_20px_50px_rgba(19,30,52,0.16),0_2px_8px_rgba(196,151,70,0.15)] group">
              <img
                src="/images/pic (14).jpeg"
                alt="Modern Interior Decoration studio craftsmanship"
                className="w-full h-[380px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Glossy specular top edge glint & gradient vignette */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#131e34]/35 via-transparent to-transparent pointer-events-none" />
              {/* Specular sheen sweep on hover */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none z-10" />
            </div>

            {/* Overlapping Secondary Image with High-Gloss Bevel */}
            <div className="absolute -bottom-8 -right-2 sm:right-4 z-20 w-3/5 rounded-2xl overflow-hidden border-4 border-white/95 shadow-[0_22px_55px_rgba(19,30,52,0.22),0_4px_16px_rgba(196,151,70,0.2)] group">
              <img
                src="/images/pic (22).jpeg"
                alt="Detailed interior wood finish"
                className="w-full h-[220px] sm:h-[280px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/90 to-transparent z-10 pointer-events-none" />
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none z-10" />
              {/* Studio Micro Tag */}
              <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-gradient-to-b from-[#1c2c4c]/95 to-[#131e34]/95 border border-[#c49746]/50 text-white backdrop-blur-md text-[10px] sm:text-[11px] font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-[0_4px_12px_rgba(19,30,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.2)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c49746] shadow-[0_0_6px_rgba(196,151,70,0.8)] animate-pulse" />
                <span>Bidhan Park Studio</span>
              </div>
            </div>

            {/* Decorative Gold Floating Jewelry Glass Badge */}
            <div className="absolute top-6 -left-2 sm:-left-4 z-30 px-4 py-3 rounded-2xl bg-gradient-to-b from-white/95 via-white/90 to-[#fdfbf7]/85 border border-[#c49746]/50 backdrop-blur-xl shadow-[0_12px_32px_rgba(19,30,52,0.12),0_4px_14px_rgba(196,151,70,0.22),inset_0_1px_1.5px_rgba(255,255,255,1)] flex items-center gap-3 overflow-hidden group/badge">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/badge:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
              <div className="w-8 h-8 rounded-full bg-gradient-to-b from-white via-[#f7f3eb] to-[#ede4d4] border border-[#c49746]/50 flex items-center justify-center text-[#9e761b] shrink-0 shadow-[0_2px_8px_rgba(196,151,70,0.25),inset_0_1px_1px_rgba(255,255,255,1)]">
                <Sparkles className="w-4 h-4 text-[#c49746] drop-shadow-[0_1px_2px_rgba(196,151,70,0.4)]" />
              </div>
              <div className="relative z-10">
                <span className="text-xs font-bold text-[#131e34] block leading-tight">
                  100% Turnkey Solutions
                </span>
                <span className="text-[10px] text-[#5b6a88] block mt-0.5 font-medium">
                  Kolkata's Fine Living Experts
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Philosophy */}
          <div className="lg:col-span-6 space-y-5">
            <SectionHeading
              className="mb-5 sm:mb-6 max-w-2xl"
              badge="About Our Studio"
              title="Transforming Spaces Into Refined Living Works of Art"
              subtitle="Located at Bidhan Park near the Swimming Pool in Kolkata, Modern Interior Decoration bridges architectural vision with flawless execution."
            />

            <p className="text-[#2a374f] text-sm sm:text-base leading-relaxed font-normal">
              We specialize in custom residential interiors, luxury living room lounge designs, ergonomic modular kitchens, false ceilings, and acoustic wall treatments. Every space is tailored to reflect your personality while ensuring optimum utility and climate-resilient durability.
            </p>

            {/* Architectural Highlight Cards: Polished Glass Plates */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="group/item relative flex items-center gap-3 bg-gradient-to-b from-white/95 via-white/90 to-[#fdfbf7]/80 hover:bg-white border border-[#c49746]/35 hover:border-[#c49746]/75 rounded-xl px-4 py-3 shadow-[0_4px_16px_rgba(19,30,52,0.04),inset_0_1px_1px_rgba(255,255,255,0.95)] hover:shadow-[0_8px_25px_rgba(19,30,52,0.08),0_2px_8px_rgba(196,151,70,0.18),inset_0_1px_1px_rgba(255,255,255,1)] transition-all duration-300 transform hover:-translate-y-0.5 overflow-hidden backdrop-blur-md"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/item:translate-x-full transition-transform duration-700 pointer-events-none" />
                  <div className="w-6 h-6 rounded-full bg-gradient-to-b from-[#f7f3eb] to-[#ede4d4] border border-[#c49746]/45 flex items-center justify-center shrink-0 text-[#c49746] group-hover/item:bg-gradient-to-r group-hover/item:from-[#dfb76c] group-hover/item:to-[#c49746] group-hover/item:text-white transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-[13px] text-[#131e34] font-bold relative z-10">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Row */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#dfb76c] via-[#c49746] to-[#a47629] shadow-[0_8px_25px_rgba(196,151,70,0.35),inset_0_1px_1.5px_rgba(255,255,255,0.65),inset_0_-1px_1px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_32px_rgba(196,151,70,0.48),inset_0_1px_2px_rgba(255,255,255,0.85)] hover:brightness-105 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/35 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />
                <span className="relative z-10">Read Full Story</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 transition-transform duration-300" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider text-[#9e761b] hover:text-[#75520c] transition-colors py-2 px-3 group"
              >
                <MapPin className="w-4 h-4 text-[#c49746] group-hover:scale-110 transition-transform" />
                <span>Visit Studio in Bidhan Park</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
