import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Sparkles, CheckCircle2 } from "lucide-react";
import { siteData } from "../../data/siteData";
import { gsap } from "../../animations/gsapConfig";

export default function CinematicHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = siteData.hero.slides;
  const contentRef = useRef(null);

  // Smooth, stable auto-transition: 4.5 seconds for calm luxury pacing with zero timer churn
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [slides.length]);

  // Hardware-accelerated GPU animation: 3D perspective flip text reveal with elastic bounce
  useEffect(() => {
    if (contentRef.current) {
      const ctx = gsap.context(() => {
        // 1. 3D Perspective Character Flip Reveal: letters flip forward from rotateX(-90deg) with elastic bounce
        gsap.fromTo(
          ".hero-3d-char",
          {
            opacity: 0,
            rotateX: -90,
            y: 18,
            transformOrigin: "50% 100%",
          },
          {
            opacity: 1,
            rotateX: 0,
            y: 0,
            duration: 0.85,
            stagger: 0.028,
            ease: "elastic.out(1, 0.75)",
            overwrite: "auto",
          }
        );

        // 2. Fluid staggered reveal for badge, description, buttons, and studio credentials
        gsap.fromTo(
          ".hero-sub-anim",
          { opacity: 0, y: 14 },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            delay: 0.2,
            stagger: 0.06,
            ease: "power2.out",
            overwrite: "auto",
          }
        );
      }, contentRef);

      return () => ctx.revert();
    }
  }, [currentSlide]);

  return (
    <section className="relative h-[100dvh] min-h-[560px] max-h-screen w-full flex items-center overflow-hidden bg-[#ede4d4]">
      {/* Background Slides with Hardware-Accelerated Crossfade & Ken Burns Zoom */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, idx) => {
          const isActive = idx === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                loading={idx === 0 ? "eager" : "lazy"}
                className={`w-full h-full object-cover object-center transform-gpu will-change-transform transition-transform duration-[4500ms] ease-out filter brightness-100 contrast-[1.03] ${isActive ? "scale-105" : "scale-100"
                  }`}
              />
            </div>
          );
        })}

        {/* Directional Luxury Scrim on Desktop: High-contrast readability on the left, leaves right 60% crystal clear */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#ede4d4]/90 via-[#ede4d4]/50 via-45% to-transparent to-75% hidden sm:block pointer-events-none" />

        {/* Mobile Scrim: Soft balanced vignette so text is 100% crisp while the room details stay visible */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#ede4d4]/90 via-[#ede4d4]/65 via-50% to-[#ede4d4]/35 sm:hidden pointer-events-none" />

        {/* Delicate Architectural Top-Edge Specular Glass Hairline */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent z-20 pointer-events-none" />

        {/* Gentle bottom blend into page body */}
        <div className="absolute bottom-0 left-0 right-0 h-16 z-10 bg-gradient-to-t from-[#ede4d4] to-transparent pointer-events-none" />
      </div>

      {/* Main Content: Lifted slightly upward for golden ratio editorial balance */}
      <div
        ref={contentRef}
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12 sm:pt-16 pb-12 sm:pb-10 flex flex-col justify-center -translate-y-3 sm:-translate-y-3"
      >
        {/* Soft Ethereal Ambient Light Halo behind Content */}
        <div className="absolute -top-16 -left-12 w-[600px] h-[450px] rounded-full bg-gradient-to-br from-white/40 via-[#dfb76c]/12 to-transparent blur-3xl pointer-events-none transform-gpu" />

        <div className="relative z-10 max-w-2xl sm:max-w-3xl">
          {/* Eyebrow / Tag: High-Gloss Polished Jewelry Pill */}
          <div className="hero-sub-anim group relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-b from-white/95 via-white/90 to-[#f7f3eb]/85 border border-[#c49746]/45 backdrop-blur-xl mb-3 sm:mb-4 shadow-[0_4px_20px_rgba(196,151,70,0.15),inset_0_1px_1px_rgba(255,255,255,0.95)] overflow-hidden transition-all duration-300 hover:border-[#c49746]/80 hover:shadow-[0_6px_24px_rgba(196,151,70,0.25)]">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
            <Sparkles className="w-3.5 h-3.5 text-[#c49746] drop-shadow-[0_1px_3px_rgba(196,151,70,0.4)]" />
            <span className="text-[10.5px] sm:text-xs uppercase tracking-[0.18em] text-[#9e761b] font-bold">
              {slides[currentSlide].tag} • Kolkata Studio
            </span>
          </div>

          {/* Heading: Bold Architectural Editorial Scale with 3D Perspective Character Flip Reveal */}
          <h1
            key={currentSlide}
            className="text-[1.85rem] xs:text-[2.15rem] sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-[#131e34] tracking-tight leading-[1.12] drop-shadow-[0_2px_8px_rgba(19,30,52,0.12)] flex flex-wrap"
            style={{
              perspective: "1000px",
              WebkitPerspective: "1000px",
              transformStyle: "preserve-3d",
            }}
          >
            {slides[currentSlide].title.split(" ").map((word, wordIdx) => (
              <span
                key={wordIdx}
                className="inline-flex whitespace-nowrap mr-2 sm:mr-3.5"
                style={{ transformStyle: "preserve-3d" }}
              >
                {word.split("").map((char, charIdx) => (
                  <span
                    key={charIdx}
                    className="hero-3d-char inline-block will-change-transform"
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

          {/* Subheading / Description: Editorial typography with high contrast & comfortable line length */}
          <p className="hero-sub-anim mt-3 sm:mt-4 text-[13px] xs:text-sm sm:text-base md:text-lg text-[#2a374f] font-normal leading-relaxed max-w-xl drop-shadow-[0_1px_2px_rgba(255,255,255,0.6)]">
            {slides[currentSlide].description}
          </p>

          {/* Call to Actions: STRICTLY SIDE-BY-SIDE ON MOBILE (grid-cols-2), Flex on Desktop */}
          <div className="hero-sub-anim mt-5 sm:mt-7 grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap sm:items-center sm:gap-4 w-full sm:w-auto">
            <Link
              to="/gallery"
              className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-7 py-3 sm:py-3.5 rounded-full text-[11.5px] xs:text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#dfb76c] via-[#c49746] to-[#a47629] shadow-[0_8px_25px_rgba(196,151,70,0.35),inset_0_1px_1.5px_rgba(255,255,255,0.65),inset_0_-1px_1px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_32px_rgba(196,151,70,0.48),inset_0_1px_2px_rgba(255,255,255,0.85)] hover:brightness-105 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer overflow-hidden text-center whitespace-nowrap"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/35 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />
              <span className="relative z-10">Explore Portfolio</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 relative z-10 shrink-0 group-hover:translate-x-0.5 transition-transform duration-300" />
            </Link>

            <a
              href={siteData.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-7 py-3 sm:py-3.5 rounded-full text-[11.5px] xs:text-xs sm:text-sm font-bold tracking-wider text-white bg-gradient-to-b from-[#1c2c4c] via-[#131e34] to-[#0e1728] border border-[#c49746]/50 shadow-[0_8px_25px_rgba(19,30,52,0.25),inset_0_1px_1px_rgba(255,255,255,0.22)] hover:border-[#c49746]/85 hover:shadow-[0_12px_30px_rgba(196,151,70,0.28),inset_0_1px_2px_rgba(255,255,255,0.35)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer overflow-hidden text-center whitespace-nowrap"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />
              <span className="relative z-10">Book Consultation</span>
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#e0be63] relative z-10 shrink-0 group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>

          {/* Quick Highlight Credentials: Clean Architectural Trust Line (No Button Fatigue) */}
          <div className="hero-sub-anim mt-5 sm:mt-7 pt-3.5 border-t border-[#c49746]/30 flex flex-wrap items-center gap-x-3.5 sm:gap-x-5 gap-y-2 text-[11px] sm:text-xs text-[#131e34] font-semibold">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#c49746] shrink-0" />
              <span>Turnkey Execution</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-[#c49746]/60 hidden xs:inline-block" />
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#c49746] shrink-0" />
              <span>200+ Verified Projects</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-[#c49746]/60 hidden xs:inline-block" />
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#c49746] shrink-0" />
              <span>203 Bidhan Park Studio</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
