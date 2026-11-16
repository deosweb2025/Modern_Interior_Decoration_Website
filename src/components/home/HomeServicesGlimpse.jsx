import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { siteData } from "../../data/siteData";
import SectionHeading from "../common/SectionHeading";

export default function HomeServicesGlimpse() {
  const featuredServices = siteData.services.slice(0, 6);

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-[#f7f3eb] via-[#ede4d4] to-[#f7f3eb] relative border-b border-[#c59b27]/25 overflow-hidden">
      {/* Specular Edge Hairlines */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#dfb76c] to-transparent shadow-[0_1px_3px_rgba(196,151,70,0.3)] z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#dfb76c] to-transparent shadow-[0_1px_3px_rgba(196,151,70,0.3)] z-10 pointer-events-none" />

      {/* Subtle Background Radial Ambient Glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 50% 25%, rgba(196, 151, 70, 0.18) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            badge="Bespoke Capabilities"
            title="Curated Interior Solutions Tailored To Your Vision"
            subtitle="Explore our specialized services. Click any service to view dedicated specifications, material palettes, and project photo showcases."
          />

          <Link
            to="/services"
            className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold tracking-wider text-[#9e761b] border border-[#c49746]/50 bg-gradient-to-b from-white/95 via-white/90 to-[#fdfbf7]/85 backdrop-blur-xl shadow-[0_4px_16px_rgba(196,151,70,0.12),inset_0_1px_1px_rgba(255,255,255,0.95)] hover:border-[#c49746]/80 hover:shadow-[0_6px_20px_rgba(196,151,70,0.22)] hover:text-[#785309] transition-all duration-300 mb-12 group overflow-hidden relative"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
            <span className="relative z-10">View All Services</span>
            <ArrowRight className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredServices.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-2xl bg-gradient-to-b from-white/95 via-white/90 to-[#fdfbf7]/80 backdrop-blur-xl border border-[#c49746]/35 hover:border-[#c49746]/80 overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(19,30,52,0.12),0_4px_16px_rgba(196,151,70,0.22),inset_0_1px_2px_rgba(255,255,255,1)] flex flex-col justify-between hover:-translate-y-1.5 shadow-[0_8px_25px_rgba(19,30,52,0.05),0_1px_3px_rgba(196,151,70,0.1),inset_0_1px_1.5px_rgba(255,255,255,0.95)]"
            >
              {/* Card Specular Light Sheen Sweep on Hover */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/35 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none z-20" />

              <div>
                {/* Image Banner */}
                <div className="relative h-56 w-full overflow-hidden bg-black/5">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Specular Top Edge Glint */}
                  <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent z-10 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent pointer-events-none" />
                </div>

                {/* Body Content */}
                <div className="p-6">
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-[#131e34] group-hover:text-[#c49746] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-[#384661] line-clamp-2 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Feature bullet previews */}
                  <ul className="mt-4 space-y-2.5 border-t border-[#c49746]/25 pt-4">
                    {service.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-xs text-[#2a374f] font-medium">
                        <div className="w-4 h-4 rounded-full bg-gradient-to-b from-[#f7f3eb] to-[#ede4d4] border border-[#c49746]/45 flex items-center justify-center shrink-0 text-[#c49746] shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="line-clamp-1">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Action: Link to dedicated /services/:serviceId route */}
              <div className="p-6 pt-0 relative z-10">
                <Link
                  to={`/services/${service.id}`}
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#f7f3eb] via-white to-[#f7f3eb] hover:bg-gradient-to-r hover:from-[#dfb76c] hover:via-[#c49746] hover:to-[#a47629] text-[#131e34] hover:text-white text-xs font-bold tracking-wider transition-all duration-300 group/btn border border-[#c49746]/35 hover:border-[#c49746] shadow-[0_2px_8px_rgba(19,30,52,0.04),inset_0_1px_1px_rgba(255,255,255,0.95)] hover:shadow-[0_6px_20px_rgba(196,151,70,0.35),inset_0_1px_1.5px_rgba(255,255,255,0.6)]"
                >
                  <span>Explore Scope & Designs</span>
                  <ArrowUpRight className="w-4 h-4 text-[#c49746] group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-10 text-center md:hidden">
          <Link
            to="/services"
            className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#dfb76c] via-[#c49746] to-[#a47629] shadow-[0_8px_25px_rgba(196,151,70,0.35),inset_0_1px_1.5px_rgba(255,255,255,0.65),inset_0_-1px_1px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_32px_rgba(196,151,70,0.48),inset_0_1px_2px_rgba(255,255,255,0.85)] hover:brightness-105 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/35 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />
            <span className="relative z-10">View All Services</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
