import { useState, useEffect, useRef } from "react";
import { Sparkles, ShieldCheck, Award, Eye } from "lucide-react";

const statsConfig = [
  {
    target: 350,
    suffix: "+",
    label: "Completed Projects",
    subtext: "Across Kolkata & Bengal",
    icon: Sparkles,
  },
  {
    target: 100,
    suffix: "%",
    label: "Client Satisfaction",
    subtext: "Verified 5-Star Reviews",
    icon: ShieldCheck,
  },
  {
    target: 12,
    suffix: "+ Yrs",
    label: "Turnkey Expertise",
    subtext: "Master Artisans & Engineers",
    icon: Award,
  },
  {
    target: 214,
    suffix: "+",
    label: "Verified Project Photos",
    subtext: "Authentic On-Site Portfolio",
    icon: Eye,
  },
];

function StatCounterCard({ stat, index, isVisible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let animationFrameId;
    const startDelay = index * 110; // Staggered start per card
    const duration = 1800; // 1.8s luxury easing

    const timeout = setTimeout(() => {
      let startTime = null;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Smooth cubic ease-out for luxurious deceleration
        const ease = 1 - Math.pow(1 - progress, 3);
        const currentCount = Math.round(ease * stat.target);
        setCount(currentCount);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animate);
        } else {
          setCount(stat.target);
        }
      };

      animationFrameId = requestAnimationFrame(animate);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible, stat.target, index]);

  const Icon = stat.icon;

  return (
    <div className="group relative rounded-2xl p-5 sm:p-6 lg:p-7 transition-all duration-500 transform hover:-translate-y-2 flex flex-col items-center text-center overflow-hidden bg-gradient-to-b from-white/95 via-white/90 to-[#fdfbf7]/80 backdrop-blur-xl border border-[#c49746]/40 hover:border-[#c49746]/80 shadow-[0_10px_30px_rgba(19,30,52,0.06),0_1px_3px_rgba(196,151,70,0.12),inset_0_1px_2px_rgba(255,255,255,0.95)] hover:shadow-[0_20px_45px_rgba(19,30,52,0.12),0_4px_18px_rgba(196,151,70,0.24),inset_0_1px_2px_rgba(255,255,255,1)]">
      {/* Specular Diagonal Light Glint Sweep on Hover */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/45 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none rounded-2xl" />

      {/* Radiant Ambient Gold Glow inside Card on Hover */}
      <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-gradient-to-br from-[#dfb76c]/25 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Top Edge Specular Crystal Bevel Line */}
      <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-90 pointer-events-none" />

      {/* Luxury Jewelry Icon Medallion */}
      <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-b from-white via-[#f7f3eb] to-[#ede4d4] border border-[#c49746]/45 flex items-center justify-center text-[#9e761b] mb-3.5 group-hover:scale-110 group-hover:border-[#c49746]/80 group-hover:shadow-[0_4px_16px_rgba(196,151,70,0.3)] transition-all duration-300 shadow-[0_4px_12px_rgba(196,151,70,0.16),inset_0_1px_1px_rgba(255,255,255,1)]">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#c49746] group-hover:text-[#9e761b] transition-colors drop-shadow-[0_1px_2px_rgba(196,151,70,0.35)]" />
      </div>

      {/* Number with Counting Animation & Glossy Gold Suffix */}
      <div className="font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-[#131e34] tracking-tight flex items-baseline justify-center tabular-nums leading-none drop-shadow-[0_1px_2px_rgba(19,30,52,0.1)]">
        <span>{count}</span>
        <span className="text-2xl sm:text-3xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#dfb76c] via-[#c49746] to-[#a47629] ml-1 font-bold drop-shadow-[0_1px_2px_rgba(196,151,70,0.25)]">
          {stat.suffix}
        </span>
      </div>

      {/* Golden Micro Accent Line with Center Specular Dot */}
      <div className="relative flex items-center justify-center my-3 w-12 group-hover:w-20 transition-all duration-500">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#c59b27]/70 to-transparent" />
        <span className="absolute w-1 h-1 rounded-full bg-[#c49746] shadow-[0_0_6px_rgba(196,151,70,0.8)]" />
      </div>

      {/* Stat Label */}
      <p className="text-xs sm:text-[13px] font-bold text-[#131e34] uppercase tracking-[0.15em] leading-snug drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
        {stat.label}
      </p>

      {/* Supporting Subtext */}
      <p className="text-[11.5px] sm:text-xs text-[#5b6a88] font-medium mt-1 leading-normal">
        {stat.subtext}
      </p>
    </div>
  );
}

export default function HomeStatsStrip() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(
    () => typeof window === "undefined" || !("IntersectionObserver" in window)
  );

  useEffect(() => {
    let observer;
    const fallbackTimer = setTimeout(() => setIsVisible(true), 2500);

    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            clearTimeout(fallbackTimer);
            if (observer) observer.disconnect();
          }
        },
        { threshold: 0.15 }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
    }

    return () => {
      clearTimeout(fallbackTimer);
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-r from-[#e8decb] via-[#f7f3eb] to-[#e8decb] border-y border-[#c59b27]/30 py-10 sm:py-14 overflow-hidden shadow-xs"
    >
      {/* Background Architectural Ambient Radial Glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 50% 50%, rgba(196, 151, 70, 0.22) 0%, transparent 70%)",
        }}
      />
      {/* Delicate Watermark Micro-Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #c49746 1px, transparent 0)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Subtle Specular Hairlines Top & Bottom */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#dfb76c] to-transparent shadow-[0_1px_3px_rgba(196,151,70,0.3)]" />
      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#dfb76c] to-transparent shadow-[0_1px_3px_rgba(196,151,70,0.3)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {statsConfig.map((stat, idx) => (
            <StatCounterCard
              key={idx}
              stat={stat}
              index={idx}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
