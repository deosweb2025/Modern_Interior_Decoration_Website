import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import { siteData } from "../../data/siteData";
import SectionHeading from "../common/SectionHeading";

export default function HomeLocationGlimpse() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-[#f7f3eb] via-[#ede4d4] to-[#f7f3eb] relative border-b border-[#c59b27]/25 overflow-hidden">
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
          badge="Visit Our Kolkata Studio"
          title="Conveniently Located in Bidhan Park, Kolkata"
          subtitle="Stop by our design studio near the Swimming Pool in Bidhan Park to explore physical material samples, finish boards, and discuss your blueprints in person."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
          {/* Studio Info Card (Col 1-5) */}
          <div className="lg:col-span-5 group relative rounded-2xl p-[2px] overflow-hidden transition-all duration-500 hover:-translate-y-1.5 shadow-[0_8px_25px_rgba(19,30,52,0.06),0_1px_3px_rgba(196,151,70,0.12)] hover:shadow-[0_20px_45px_rgba(19,30,52,0.15),0_4px_20px_rgba(196,151,70,0.28)] flex flex-col">
            {/* Animated Rotating Conic Gold Light Beam Border */}
            <div className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0_270deg,#c49746_315deg,#dfb76c_340deg,#ffffff_360deg)] animate-border-spin opacity-55 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none transform-gpu" />

            {/* Base gold border line */}
            <div className="absolute inset-0 rounded-2xl border border-[#c49746]/40 group-hover:border-[#c49746]/80 transition-colors pointer-events-none" />

            {/* Card Body: Frosted Crystal Glass Surface */}
            <div className="relative z-10 rounded-[calc(1rem-2px)] h-full p-7 sm:p-8 bg-gradient-to-b from-white/95 via-white/90 to-[#fdfbf7]/80 backdrop-blur-xl flex flex-col justify-between overflow-hidden">
              {/* Specular Diagonal Light Sheen Sweep on Hover */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none rounded-[calc(1rem-2px)]" />

              {/* Top Edge Specular Crystal Hairline */}
              <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none" />

              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#ede4d4]/60 border border-[#c49746]/30 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c49746] animate-pulse" />
                    <span className="text-[10px] font-mono tracking-widest text-[#9e761b] uppercase font-bold">
                      Head Studio & Workshop
                    </span>
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#131e34] mt-1">
                    Modern Interior Decoration
                  </h3>
                </div>

                <div className="space-y-4 pt-1">
                  {/* Studio Address */}
                  <div className="group/item flex items-start gap-3.5 p-2 rounded-xl transition-colors hover:bg-white/60">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-b from-white via-[#f7f3eb] to-[#ede4d4] border border-[#c49746]/45 flex items-center justify-center text-[#c49746] shrink-0 shadow-[0_2px_8px_rgba(196,151,70,0.18),inset_0_1px_1px_rgba(255,255,255,1)] group-hover/item:border-[#c49746]/80 group-hover/item:scale-105 transition-all">
                      <MapPin className="w-5 h-5 stroke-[1.8] text-[#c49746] drop-shadow-[0_1px_2px_rgba(196,151,70,0.35)]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#131e34] uppercase tracking-wider">
                        Studio Address
                      </h4>
                      <p className="text-sm text-[#384661] mt-1 leading-relaxed">
                        {siteData.location.fullAddress}
                      </p>
                      <span className="inline-block mt-1 text-xs text-[#9e761b] font-semibold">
                        Landmark: Near Swimming Pool
                      </span>
                    </div>
                  </div>

                  {/* Consultation Hours */}
                  <div className="group/item flex items-start gap-3.5 p-2 rounded-xl transition-colors hover:bg-white/60">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-b from-white via-[#f7f3eb] to-[#ede4d4] border border-[#c49746]/45 flex items-center justify-center text-[#c49746] shrink-0 shadow-[0_2px_8px_rgba(196,151,70,0.18),inset_0_1px_1px_rgba(255,255,255,1)] group-hover/item:border-[#c49746]/80 group-hover/item:scale-105 transition-all">
                      <Clock className="w-5 h-5 stroke-[1.8] text-[#c49746] drop-shadow-[0_1px_2px_rgba(196,151,70,0.35)]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#131e34] uppercase tracking-wider">
                        Consultation Hours
                      </h4>
                      <p className="text-sm text-[#384661] mt-1 font-medium">
                        {siteData.location.hours}
                      </p>
                    </div>
                  </div>

                  {/* Direct Studio Contact */}
                  <div className="group/item flex items-start gap-3.5 p-2 rounded-xl transition-colors hover:bg-white/60">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-b from-white via-[#f7f3eb] to-[#ede4d4] border border-[#c49746]/45 flex items-center justify-center text-[#c49746] shrink-0 shadow-[0_2px_8px_rgba(196,151,70,0.18),inset_0_1px_1px_rgba(255,255,255,1)] group-hover/item:border-[#c49746]/80 group-hover/item:scale-105 transition-all">
                      <Phone className="w-5 h-5 stroke-[1.8] text-[#c49746] drop-shadow-[0_1px_2px_rgba(196,151,70,0.35)]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#131e34] uppercase tracking-wider">
                        Direct Studio Contact
                      </h4>
                      <a
                        href={`tel:${siteData.contact.phone}`}
                        className="text-sm text-[#384661] hover:text-[#c49746] transition-colors block mt-1 font-semibold"
                      >
                        {siteData.contact.displayPhone}
                      </a>
                    </div>
                  </div>

                  {/* Official Email */}
                  <div className="group/item flex items-start gap-3.5 p-2 rounded-xl transition-colors hover:bg-white/60">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-b from-white via-[#f7f3eb] to-[#ede4d4] border border-[#c49746]/45 flex items-center justify-center text-[#c49746] shrink-0 shadow-[0_2px_8px_rgba(196,151,70,0.18),inset_0_1px_1px_rgba(255,255,255,1)] group-hover/item:border-[#c49746]/80 group-hover/item:scale-105 transition-all">
                      <Mail className="w-5 h-5 stroke-[1.8] text-[#c49746] drop-shadow-[0_1px_2px_rgba(196,151,70,0.35)]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#131e34] uppercase tracking-wider">
                        Official Email
                      </h4>
                      <a
                        href={`mailto:${siteData.contact.email}`}
                        className="text-sm text-[#384661] hover:text-[#c49746] transition-colors block mt-1 break-all font-medium"
                      >
                        {siteData.contact.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Directions Action */}
              <div className="pt-6 border-t border-[#c49746]/25 mt-6">
                <a
                  href={siteData.location.googleMapsDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-[#dfb76c] via-[#c49746] to-[#a47629] text-white font-bold text-xs uppercase tracking-wider hover:brightness-105 transition-all shadow-[0_4px_16px_rgba(196,151,70,0.3)] hover:shadow-[0_6px_22px_rgba(196,151,70,0.45)] active:scale-[0.99] relative overflow-hidden group/btn"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 pointer-events-none" />
                  <Navigation className="w-4 h-4" />
                  <span>Get Google Maps Directions</span>
                </a>
              </div>
            </div>
          </div>

          {/* Embedded Interactive Google Map (Col 6-12) */}
          <div className="lg:col-span-7 group relative rounded-2xl p-[2px] overflow-hidden transition-all duration-500 hover:-translate-y-1.5 shadow-[0_8px_25px_rgba(19,30,52,0.06),0_1px_3px_rgba(196,151,70,0.12)] hover:shadow-[0_20px_45px_rgba(19,30,52,0.15),0_4px_20px_rgba(196,151,70,0.28)] flex flex-col">
            {/* Animated Rotating Conic Gold Light Beam Border */}
            <div
              className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0_270deg,#c49746_315deg,#dfb76c_340deg,#ffffff_360deg)] animate-border-spin opacity-55 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none transform-gpu"
              style={{ animationDelay: "-2.5s" }}
            />

            {/* Base gold border line */}
            <div className="absolute inset-0 rounded-2xl border border-[#c49746]/40 group-hover:border-[#c49746]/80 transition-colors pointer-events-none" />

            {/* Map Inner Container */}
            <div className="relative z-10 rounded-[calc(1rem-2px)] overflow-hidden h-[420px] lg:h-full min-h-[420px] bg-[#ede4d4] flex flex-col">
              {/* Top Edge Specular Crystal Hairline */}
              <div className="absolute top-0 left-4 right-4 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent z-10 pointer-events-none" />

              {/* Floating Studio Verification Badge */}
              <div className="absolute top-4 left-4 z-10 pointer-events-none">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#c49746]/40 shadow-[0_4px_12px_rgba(19,30,52,0.1)] text-[#131e34] text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping" />
                  <span className="w-2 h-2 rounded-full bg-[#10b981] -ml-4" />
                  <span>Kolkata Studio Verified</span>
                </div>
              </div>

              <iframe
                title="Modern Interior Decoration Kolkata Location Map"
                src={siteData.location.mapEmbedUrl}
                className="w-full h-full min-h-[420px] border-0 flex-1"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
