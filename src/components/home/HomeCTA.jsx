import { Phone, Sparkles } from "lucide-react";
import WhatsAppIcon from "../common/WhatsAppIcon";
import { siteData } from "../../data/siteData";

export default function HomeCTA() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-[#ede4d4] via-[#f7f3eb] to-[#dfd3bf] relative overflow-hidden border-b border-[#c59b27]/25">
      {/* 1. Background Ambient Radial Glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-45"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 50% 50%, rgba(196, 151, 70, 0.22) 0%, transparent 70%)",
        }}
      />

      {/* 2. Specular Edge Hairlines */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#dfb76c] to-transparent shadow-[0_1px_3px_rgba(196,151,70,0.3)] z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#dfb76c] to-transparent shadow-[0_1px_3px_rgba(196,151,70,0.3)] z-10 pointer-events-none" />

      {/* 3. Soft Floating Ambient Light Orbs */}
      <div className="absolute -top-24 -left-20 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#dfb76c]/20 via-[#c49746]/10 to-transparent blur-3xl pointer-events-none animate-float-slow transform-gpu" />
      <div className="absolute -bottom-24 -right-16 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-[#ede4d4] via-[#dfb76c]/18 to-transparent blur-3xl pointer-events-none animate-float-reverse transform-gpu" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Card Outer Container with Animated Rotating Conic Gold Light Beam */}
        <div className="group relative rounded-3xl p-[2px] overflow-hidden transition-all duration-500 shadow-[0_16px_50px_rgba(19,30,52,0.18),0_1px_3px_rgba(196,151,70,0.15)] hover:shadow-[0_28px_70px_rgba(19,30,52,0.28),0_4px_30px_rgba(196,151,70,0.4)]">
          {/* Animated Rotating Conic Gold Light Beam Border */}
          <div className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0_270deg,#c49746_315deg,#dfb76c_340deg,#ffffff_360deg)] animate-border-spin opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none transform-gpu" />

          {/* Base gold border line */}
          <div className="absolute inset-0 rounded-3xl border border-[#c49746]/45 group-hover:border-[#c49746]/85 transition-colors pointer-events-none" />

          {/* Inner Card Body: Deep Midnight Navy Gloss Surface */}
          <div className="relative z-10 rounded-[calc(1.5rem-2px)] p-8 sm:p-14 bg-gradient-to-br from-[#1b2947] via-[#131e34] to-[#0e1728] backdrop-blur-2xl flex flex-col items-center overflow-hidden">
            {/* Specular Diagonal Light Sheen Sweep on Hover */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none rounded-[calc(1.5rem-2px)]" />

            {/* Specular Top Crystal Hairline */}
            <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#dfb76c]/70 to-transparent pointer-events-none" />

            {/* Ambient Internal Spotlight from Top Center */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_top,_rgba(223,183,108,0.2),transparent_70%)] pointer-events-none" />

            {/* Subtle Gold Accent Line Ornament */}
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#dfb76c] to-transparent mx-auto mb-6 rounded-full shadow-[0_0_12px_rgba(223,183,108,0.6)]" />

            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-[#c49746]/40 text-[#dfb76c] text-xs font-semibold uppercase tracking-wider mb-6 shadow-[0_2px_12px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.15)]">
              <Sparkles className="w-3.5 h-3.5 text-[#dfb76c]" />
              <span>Ready for Turnkey Transformation?</span>
            </div>

            {/* Heading */}
            <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto drop-shadow-sm">
              Let’s Design Your Dream Space in Kolkata
            </h2>

            {/* Subtitle */}
            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-[#c8d2e6] max-w-2xl mx-auto leading-relaxed">
              Whether you are moving into a new apartment or renovating an existing residence in Kolkata, our team delivers uncompromised luxury within your designated timeline.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 relative z-20">
              <a
                href={siteData.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-gradient-to-b from-[#2cf175] to-[#20ba59] hover:from-[#35ff81] hover:to-[#22c760] shadow-[0_4px_20px_rgba(37,211,102,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:shadow-[0_6px_28px_rgba(37,211,102,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 overflow-hidden group/btn"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 pointer-events-none" />
                <WhatsAppIcon className="w-4 h-4 fill-black" />
                <span>Share Blueprints on WhatsApp</span>
              </a>

              <a
                href={`tel:${siteData.contact.phone}`}
                className="relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider text-white bg-white/10 backdrop-blur-md border border-[#dfb76c]/50 hover:border-[#dfb76c] hover:bg-gradient-to-r hover:from-[#dfb76c] hover:via-[#c49746] hover:to-[#a47629] hover:text-white transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.15)] hover:shadow-[0_6px_22px_rgba(196,151,70,0.4)] transform hover:-translate-y-0.5 overflow-hidden group/call"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover/call:translate-x-full transition-transform duration-700 pointer-events-none" />
                <Phone className="w-4 h-4 text-[#dfb76c] group-hover/call:text-white transition-colors" />
                <span>Call +91 99033 93527</span>
              </a>
            </div>

            {/* Sub-label */}
            <p className="mt-7 text-xs text-[#a0afca] flex items-center justify-center gap-2 flex-wrap">
              <span>Bidhan Park, Kolkata (Near Swimming Pool)</span>
              <span className="w-1 h-1 rounded-full bg-[#dfb76c]/60" />
              <span>No Obligation Initial Consultation</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
