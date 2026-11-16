import { Link } from "react-router-dom";
import { ArrowUpRight, Check, Sparkles, Phone } from "lucide-react";
import PageHeader from "../components/common/PageHeader";
import SectionHeading from "../components/common/SectionHeading";
import WhatsAppIcon from "../components/common/WhatsAppIcon";
import { siteData } from "../data/siteData";

export default function Services() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f7f3eb] via-[#ede4d4] to-[#dfd3bf]">
      {/* 1. Page Header with Distinct Design and Services Blueprint Backdrop */}
      <PageHeader
        badge={siteData.pageHeaders.services.badge}
        title={siteData.pageHeaders.services.title}
        description={siteData.pageHeaders.services.description}
        image={siteData.pageHeaders.services.image}
        theme="services"
        stats={[
          { label: "Design Disciplines", value: "9 Core" },
          { label: "Hardware Grade", value: "German/EU" },
          { label: "Warranty Support", value: "Verified" },
        ]}
      />

      {/* 2. Services Grid with Animated Rotating Conic Gold Border Beams */}
      <section className="py-20 sm:py-28 relative border-b border-[#c59b27]/25 overflow-hidden">
        {/* Specular Edge Hairlines */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#dfb76c] to-transparent shadow-[0_1px_3px_rgba(196,151,70,0.3)] z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#dfb76c] to-transparent shadow-[0_1px_3px_rgba(196,151,70,0.3)] z-10 pointer-events-none" />

        {/* Subtle Background Radial Ambient Glow & Light Orbs */}
        <div
          className="absolute inset-0 pointer-events-none opacity-45"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 50% 25%, rgba(196, 151, 70, 0.22) 0%, transparent 70%)",
          }}
        />
        <div className="absolute -top-24 -left-20 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#dfb76c]/18 via-[#c49746]/10 to-transparent blur-3xl pointer-events-none animate-float-slow transform-gpu" />
        <div className="absolute -bottom-24 -right-20 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#ede4d4] via-[#dfb76c]/18 to-transparent blur-3xl pointer-events-none animate-float-reverse transform-gpu" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Disciplines"
            title="Tailored Interior Architecture & Turnkey Solutions"
            subtitle="Select any service below to view in-depth scope of work, technical specifications, material selections, and on-site project galleries."
          />

          {/* 9 Service Cards (Balanced 3x3 Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {siteData.services.map((service, idx) => (
              <div
                key={service.id}
                className="group relative rounded-2xl p-[2px] overflow-hidden transition-all duration-500 hover:-translate-y-2 shadow-[0_10px_30px_rgba(19,30,52,0.08),0_2px_8px_rgba(196,151,70,0.18)] hover:shadow-[0_24px_50px_rgba(19,30,52,0.18),0_6px_25px_rgba(196,151,70,0.35)] flex flex-col justify-between"
              >
                {/* Animated Rotating Conic Gold Light Beam Border */}
                <div
                  className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0_270deg,#c49746_315deg,#dfb76c_340deg,#ffffff_360deg)] animate-border-spin opacity-65 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none transform-gpu"
                  style={{ animationDelay: `${idx * -1.2}s` }}
                />

                {/* Base gold border line */}
                <div className="absolute inset-0 rounded-2xl border border-[#c49746]/50 group-hover:border-[#c49746]/90 transition-colors pointer-events-none" />

                {/* Card Body: Frosted Crystal Glass Surface */}
                <div className="relative z-10 rounded-[calc(1rem-2px)] bg-gradient-to-b from-white/95 via-white/90 to-[#fdfbf7]/80 backdrop-blur-xl flex flex-col justify-between overflow-hidden h-full">
                  {/* Specular Diagonal Light Sheen Sweep on Hover */}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none z-20" />

                  {/* Top Edge Specular Crystal Hairline */}
                  <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none z-20" />

                  <div>
                    {/* Service Photo with High-Gloss Finish & Divider Line */}
                    <div className="relative h-60 w-full overflow-hidden bg-black/5 border-b border-[#c49746]/35">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      {/* Top Specular Edge Glint */}
                      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent z-10 pointer-events-none" />

                      {/* Specular Diagonal Glass Sheen Sweep on Hover */}
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-tr from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none z-10" />

                      {/* Crystal Clear Glossy Surface Glaze */}
                      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/10 pointer-events-none" />

                      {/* Crisp Gold Divider Line After Image */}
                      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#dfb76c] to-transparent shadow-[0_1px_3px_rgba(196,151,70,0.35)] z-10 pointer-events-none" />

                      {/* Architectural Assurance Badge */}
                      <div className="absolute top-3 left-3 z-10">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-[#131e34] border border-[#c49746]/40 shadow-sm">
                          Verified Craftsmanship
                        </span>
                      </div>
                    </div>

                    {/* Service Information */}
                    <div className="p-6 sm:p-7">
                      <h3 className="font-heading text-xl font-bold text-[#131e34] group-hover:text-[#c49746] transition-colors leading-snug">
                        {service.title}
                      </h3>

                      <p className="mt-3 text-sm text-[#384661] line-clamp-3 leading-relaxed">
                        {service.shortDescription}
                      </p>

                      {/* Features list */}
                      <div className="mt-5 pt-5 border-t border-[#c49746]/20 space-y-2">
                        <span className="text-[10px] font-mono tracking-widest text-[#9e761b] uppercase block mb-2 font-bold">
                          Key Inclusions
                        </span>
                        {service.features.slice(0, 3).map((feat, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-[#384661]">
                            <Check className="w-3.5 h-3.5 text-[#c49746] shrink-0 stroke-[2.5]" />
                            <span className="line-clamp-1">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Action: Route into /services/:serviceId */}
                  <div className="p-6 sm:p-7 pt-0">
                    <Link
                      to={`/services/${service.id}`}
                      className="relative w-full inline-flex items-center justify-between px-5 py-3.5 rounded-xl bg-gradient-to-r from-white via-[#f7f3eb] to-[#ede4d4] group-hover/btn:from-[#dfb76c] group-hover/btn:via-[#c49746] group-hover/btn:to-[#a47629] group-hover/btn:text-white text-xs font-bold uppercase tracking-wider text-[#131e34] transition-all duration-300 group/btn border border-[#c49746]/40 group-hover/btn:border-[#dfb76c] shadow-[0_2px_8px_rgba(196,151,70,0.12)] hover:shadow-[0_4px_16px_rgba(196,151,70,0.3)] overflow-hidden"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 pointer-events-none" />
                      <span className="relative z-10">View Specifications & Photos</span>
                      <ArrowUpRight className="w-4 h-4 text-[#c49746] group-hover/btn:text-white transition-colors relative z-10" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Material & Execution Standards Table */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-[#f7f3eb] via-[#ede4d4] to-[#f7f3eb] relative border-b border-[#c59b27]/25 overflow-hidden">
        {/* Specular Edge Hairlines */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#dfb76c] to-transparent shadow-[0_1px_3px_rgba(196,151,70,0.3)] z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#dfb76c] to-transparent shadow-[0_1px_3px_rgba(196,151,70,0.3)] z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            badge="Material Benchmarks"
            title="Uncompromising Material & Engineering Standards"
            subtitle="Every Modern Interior project adheres to rigorous material specifications tested for Kolkata's humid subtropical climate."
            center
          />

          <div className="group relative rounded-3xl p-[2px] overflow-hidden shadow-[0_12px_40px_rgba(19,30,52,0.08),0_1px_3px_rgba(196,151,70,0.15)]">
            {/* Animated Rotating Conic Gold Light Beam Border */}
            <div className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0_270deg,#c49746_315deg,#dfb76c_340deg,#ffffff_360deg)] animate-border-spin opacity-50 pointer-events-none transform-gpu" />

            <div className="absolute inset-0 rounded-3xl border border-[#c49746]/45 pointer-events-none" />

            <div className="relative z-10 rounded-[calc(1.5rem-2px)] overflow-x-auto bg-gradient-to-b from-white/95 via-white/90 to-[#fdfbf7]/80 backdrop-blur-xl">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-[#ede4d4] via-[#f7f3eb] to-[#ede4d4] border-b border-[#c49746]/35 text-xs font-bold uppercase tracking-wider text-[#131e34]">
                    <th className="p-4 sm:p-5">Component</th>
                    <th className="p-4 sm:p-5">Material Standard</th>
                    <th className="p-4 sm:p-5">Brand / Grade</th>
                    <th className="p-4 sm:p-5">Key Advantage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#c49746]/20 text-[#384661] text-xs sm:text-sm">
                  <tr className="hover:bg-white/80 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-[#131e34]">Carcass Woodwork</td>
                    <td className="p-4 sm:p-5">IS:710 Boiling Water Proof (BWP) Marine Ply</td>
                    <td className="p-4 sm:p-5">Century / Greenply / Austin</td>
                    <td className="p-4 sm:p-5 text-[#9e761b] font-medium">Zero swelling, borer & termite proof</td>
                  </tr>
                  <tr className="hover:bg-white/80 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-[#131e34]">Hardware & Hinges</td>
                    <td className="p-4 sm:p-5">Clip-on Soft Close Hinges & Tandem Drawers</td>
                    <td className="p-4 sm:p-5">Blum / Hettich / Hafele</td>
                    <td className="p-4 sm:p-5 text-[#9e761b] font-medium">Smooth silent motion rated for 100k cycles</td>
                  </tr>
                  <tr className="hover:bg-white/80 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-[#131e34]">Surface Finishes</td>
                    <td className="p-4 sm:p-5">1mm+ Anti-Fingerprint Acrylic / Textured Laminates</td>
                    <td className="p-4 sm:p-5">Merino / Century / Stylam</td>
                    <td className="p-4 sm:p-5 text-[#9e761b] font-medium">Scratch-resistant, easy to wipe clean</td>
                  </tr>
                  <tr className="hover:bg-white/80 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-[#131e34]">False Ceilings</td>
                    <td className="p-4 sm:p-5">Moisture Guard Gypsum Boards & G.I. Framework</td>
                    <td className="p-4 sm:p-5">Saint-Gobain Gyproc</td>
                    <td className="p-4 sm:p-5 text-[#9e761b] font-medium">Sag-free, seamless joints, fire retardant</td>
                  </tr>
                  <tr className="hover:bg-white/80 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-[#131e34]">Electrical & LED</td>
                    <td className="p-4 sm:p-5">Concealed FRLS Copper Wiring & Aluminum Profiles</td>
                    <td className="p-4 sm:p-5">Havells / Polycab / Philips</td>
                    <td className="p-4 sm:p-5 text-[#9e761b] font-medium">Zero fire hazard, warm flicker-free illumination</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WhatsApp & Call Quick Consultation Banner */}
      <section className="py-20 bg-gradient-to-b from-[#ede4d4] via-[#f7f3eb] to-[#dfd3bf] relative overflow-hidden border-b border-[#c59b27]/25 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="group relative rounded-3xl p-[2px] overflow-hidden transition-all duration-500 shadow-[0_16px_50px_rgba(19,30,52,0.18),0_1px_3px_rgba(196,151,70,0.15)] hover:shadow-[0_28px_70px_rgba(19,30,52,0.28),0_4px_30px_rgba(196,151,70,0.4)]">
            {/* Animated Rotating Conic Gold Light Beam Border */}
            <div className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0_270deg,#c49746_315deg,#dfb76c_340deg,#ffffff_360deg)] animate-border-spin opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none transform-gpu" />

            <div className="absolute inset-0 rounded-3xl border border-[#c49746]/45 group-hover:border-[#c49746]/85 transition-colors pointer-events-none" />

            <div className="relative z-10 rounded-[calc(1.5rem-2px)] p-8 sm:p-14 bg-gradient-to-br from-[#1b2947] via-[#131e34] to-[#0e1728] backdrop-blur-2xl text-white overflow-hidden flex flex-col items-center">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none rounded-[calc(1.5rem-2px)]" />
              <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#dfb76c]/70 to-transparent pointer-events-none" />

              {/* Gold Ornament Bar */}
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#dfb76c] to-transparent mx-auto mb-6 rounded-full shadow-[0_0_12px_rgba(223,183,108,0.6)]" />

              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-[#c49746]/40 text-[#dfb76c] text-xs font-semibold uppercase tracking-wider mb-5 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#dfb76c]" />
                <span>Kolkata Studio Custom Estimates</span>
              </div>

              <h3 className="font-heading text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight max-w-2xl mx-auto">
                Need a Custom Interior Estimate for Your Kolkata Property?
              </h3>

              <p className="mt-4 text-sm sm:text-base text-[#c8d2e6] max-w-xl mx-auto leading-relaxed">
                Send us your floor plan or schedule a site visit with our master design team in Bidhan Park (Near Swimming Pool).
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 relative z-20">
                <a
                  href={siteData.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-gradient-to-b from-[#2cf175] to-[#20ba59] hover:from-[#35ff81] hover:to-[#22c760] shadow-[0_4px_20px_rgba(37,211,102,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:shadow-[0_6px_28px_rgba(37,211,102,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 overflow-hidden group/btn"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 pointer-events-none" />
                  <WhatsAppIcon className="w-4 h-4 fill-black" />
                  <span>Consult on WhatsApp</span>
                </a>

                <a
                  href={`tel:${siteData.contact.phone}`}
                  className="relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider text-white bg-white/10 backdrop-blur-md border border-[#dfb76c]/50 hover:border-[#dfb76c] hover:bg-gradient-to-r hover:from-[#dfb76c] hover:via-[#c49746] hover:to-[#a47629] hover:text-white transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.15)] hover:shadow-[0_6px_22px_rgba(196,151,70,0.4)] transform hover:-translate-y-0.5 overflow-hidden group/call"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover/call:translate-x-full transition-transform duration-700 pointer-events-none" />
                  <Phone className="w-4 h-4 text-[#dfb76c] group-hover/call:text-white transition-colors" />
                  <span>Call {siteData.contact.displayPhone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
