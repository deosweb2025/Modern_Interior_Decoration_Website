import { siteData } from "../../data/siteData";
import SectionHeading from "../common/SectionHeading";

export default function HomeProcess() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-[#f7f3eb] via-[#ede4d4] to-[#f7f3eb] relative border-b border-[#c59b27]/25 overflow-hidden">
      {/* 1. Background Architectural Interior Image with Luxury Scrim Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/images/pic (25).jpeg"
          alt="Modern Interior Decoration architectural space"
          className="w-full h-full object-cover object-center transform-gpu scale-105 filter brightness-100 contrast-[1.05] opacity-40"
        />
        {/* Ivory Stone Multi-Layered Scrim ensuring 100% text contrast & readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f7f3eb]/80 via-[#ede4d4]/65 to-[#f7f3eb]/85" />
      </div>

      {/* 2. Specular Edge Hairlines */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#dfb76c] to-transparent shadow-[0_1px_3px_rgba(196,151,70,0.3)] z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#dfb76c] to-transparent shadow-[0_1px_3px_rgba(196,151,70,0.3)] z-10 pointer-events-none" />

      {/* 3. Soft Floating Ambient Light Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#c49746]/12 rounded-full blur-3xl pointer-events-none -translate-y-1/2 transform-gpu" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#dfb76c]/15 rounded-full blur-3xl pointer-events-none transform-gpu" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="How We Work"
          title="A Structured 5-Step Path from Concept to Living Reality"
          subtitle="Our proven turnkey project methodology eliminates guesswork, ensures material authenticity, and keeps delivery on schedule."
          center
        />

        {/* 5-Step Process Cards with Animated Glowing Gold Border */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
          {siteData.processSteps.map((step, idx) => (
            <div
              key={step.step}
              className="group relative rounded-2xl p-[1.5px] overflow-hidden transition-all duration-500 hover:-translate-y-2 shadow-[0_8px_25px_rgba(19,30,52,0.06),0_1px_3px_rgba(196,151,70,0.1)] hover:shadow-[0_20px_45px_rgba(19,30,52,0.14),0_4px_16px_rgba(196,151,70,0.22)]"
            >
              {/* Animated Rotating Conic Gold Light Beam Border */}
              <div
                className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#c49746_330deg,#dfb76c_350deg,#ffffff_360deg)] animate-border-spin opacity-35 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none transform-gpu"
                style={{
                  animationDelay: `${idx * -1.4}s`,
                }}
              />

              {/* Base border fallback */}
              <div className="absolute inset-0 rounded-2xl border border-[#c49746]/35 group-hover:border-[#c49746]/70 transition-colors pointer-events-none" />

              {/* Card Body: Frosted Crystal Glass Surface */}
              <div className="relative z-10 rounded-[calc(1rem-1.5px)] h-full p-6 bg-gradient-to-b from-white/95 via-white/90 to-[#fdfbf7]/80 backdrop-blur-xl flex flex-col justify-between overflow-hidden">
                {/* Specular Diagonal Light Sheen Sweep on Hover */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none rounded-[calc(1rem-1.5px)]" />

                {/* Top Edge Specular Hairline */}
                <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none" />

                <div>
                  {/* Step Number & Jewelry Medallion */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#dfb76c] via-[#c49746] to-[#a47629] drop-shadow-[0_1px_2px_rgba(196,151,70,0.25)]">
                      {step.step}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-b from-white via-[#f7f3eb] to-[#ede4d4] border border-[#c49746]/45 flex items-center justify-center text-[10px] font-bold text-[#131e34] shadow-[0_2px_8px_rgba(196,151,70,0.18),inset_0_1px_1px_rgba(255,255,255,1)] group-hover:bg-gradient-to-r group-hover:from-[#dfb76c] group-hover:to-[#c49746] group-hover:text-white group-hover:border-transparent transition-all duration-300">
                      0{idx + 1}
                    </div>
                  </div>

                  <h3 className="font-heading text-base font-bold text-[#131e34] group-hover:text-[#c49746] transition-colors leading-snug">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-xs leading-relaxed text-[#384661] font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Progress Connector Indicator */}
                <div className="mt-6 pt-3.5 border-t border-[#c49746]/25 flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-wider text-[#9e761b] uppercase font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c49746] shadow-[0_0_6px_rgba(196,151,70,0.8)]" />
                    <span>Stage 0{idx + 1}</span>
                  </span>
                  <span className="text-[10px] text-[#9e761b]/60 font-semibold group-hover:text-[#9e761b] transition-colors">
                    Turnkey
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
