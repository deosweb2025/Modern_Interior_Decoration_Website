import { Award, ShieldCheck, FileCheck, Clock, Sparkles, Headphones } from "lucide-react";
import { siteData } from "../../data/siteData";
import SectionHeading from "../common/SectionHeading";

export default function HomeWhyChooseUs() {
  const iconMap = {
    Award: Award,
    ShieldCheck: ShieldCheck,
    FileCheck: FileCheck,
    Clock: Clock,
    Sparkles: Sparkles,
    Headphones: Headphones,
  };

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-[#ede4d4] via-[#f7f3eb] to-[#ede4d4] relative border-b border-[#c59b27]/25 overflow-hidden">
      {/* 1. Background Architectural Ambient Radial Glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-45"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 50% 30%, rgba(196, 151, 70, 0.22) 0%, transparent 70%)",
        }}
      />

      {/* 2. Specular Edge Hairlines */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#dfb76c] to-transparent shadow-[0_1px_3px_rgba(196,151,70,0.3)] z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#dfb76c] to-transparent shadow-[0_1px_3px_rgba(196,151,70,0.3)] z-10 pointer-events-none" />

      {/* 3. Soft Floating Ambient Light Orbs */}
      <div className="absolute -top-24 -left-20 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#dfb76c]/20 via-[#c49746]/10 to-transparent blur-3xl pointer-events-none animate-float-slow transform-gpu" />
      <div className="absolute -bottom-24 -right-16 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-[#ede4d4] via-[#dfb76c]/18 to-transparent blur-3xl pointer-events-none animate-float-reverse transform-gpu" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="The Modern Interior Distinction"
          title="Why Kolkata Homeowners & Businesses Trust Us"
          subtitle="We take pride in uncompromised material honesty, craftsmanship, and transparent turnkey execution."
          center
        />

        {/* 6 Distinction Cards with Animated Glowing Gold Border */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10">
          {siteData.whyChooseUs.map((item, idx) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl p-[2px] overflow-hidden transition-all duration-500 hover:-translate-y-2 shadow-[0_8px_25px_rgba(19,30,52,0.06),0_1px_3px_rgba(196,151,70,0.12)] hover:shadow-[0_20px_45px_rgba(19,30,52,0.15),0_4px_20px_rgba(196,151,70,0.28)]"
              >
                {/* Animated Rotating Conic Gold Light Beam Border */}
                <div
                  className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0_270deg,#c49746_315deg,#dfb76c_340deg,#ffffff_360deg)] animate-border-spin opacity-55 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none transform-gpu"
                  style={{
                    animationDelay: `${idx * -1.2}s`,
                  }}
                />

                {/* Base gold border line */}
                <div className="absolute inset-0 rounded-2xl border border-[#c49746]/40 group-hover:border-[#c49746]/80 transition-colors pointer-events-none" />

                {/* Card Body: Frosted Crystal Glass Surface */}
                <div className="relative z-10 rounded-[calc(1rem-2px)] h-full p-7 sm:p-8 bg-gradient-to-b from-white/95 via-white/90 to-[#fdfbf7]/80 backdrop-blur-xl flex flex-col justify-between overflow-hidden">
                  {/* Specular Diagonal Light Sheen Sweep on Hover */}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none rounded-[calc(1rem-2px)]" />

                  {/* Top Edge Specular Crystal Hairline */}
                  <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none" />

                  <div>
                    {/* Jewelry Icon Medallion */}
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-b from-white via-[#f7f3eb] to-[#ede4d4] border border-[#c49746]/45 flex items-center justify-center text-[#9e761b] group-hover:scale-110 group-hover:border-[#c49746]/80 group-hover:shadow-[0_4px_16px_rgba(196,151,70,0.3)] transition-all duration-300 mb-6 shadow-[0_4px_12px_rgba(196,151,70,0.16),inset_0_1px_1px_rgba(255,255,255,1)]">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.8] text-[#c49746] group-hover:text-[#9e761b] transition-colors drop-shadow-[0_1px_2px_rgba(196,151,70,0.35)]" />
                    </div>

                    <h3 className="font-heading text-lg sm:text-xl font-bold text-[#131e34] group-hover:text-[#c49746] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-[#384661] leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
