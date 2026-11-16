import { Link } from "react-router-dom";
import { Sparkles, Shield, HeartHandshake, Layers, MapPin, ArrowRight, ShieldCheck } from "lucide-react";
import PageHeader from "../components/common/PageHeader";
import SectionHeading from "../components/common/SectionHeading";
import { siteData } from "../data/siteData";

export default function About() {
  const studioValues = [
    {
      icon: Shield,
      title: "Material Integrity",
      description:
        "We strictly insist on IS:710 boiling water proof marine ply, genuine German hardware (Blum & Hettich), anti-fingerprint acrylics, and certified fire-retardant electrical wiring.",
      badge: "Certified Authentic",
    },
    {
      icon: Layers,
      title: "Turnkey Precision",
      description:
        "From structural space demolition to final cushion staging, our clients enjoy a seamless experience managed by an experienced dedicated project lead.",
      badge: "End-to-End Execution",
    },
    {
      icon: HeartHandshake,
      title: "Honest Transparency",
      description:
        "Zero surprise charges or sudden additions. All quantities, material brands, and delivery milestones are established transparently before work begins on site.",
      badge: "Fixed BOQ Guarantee",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f7f3eb] via-[#ede4d4] to-[#dfd3bf]">
      {/* 1. Page Header with Distinct Design, Heritage Image & Glossy Crystal Stats */}
      <PageHeader
        badge={siteData.pageHeaders.about.badge}
        title={siteData.pageHeaders.about.title}
        description={siteData.pageHeaders.about.description}
        image={siteData.pageHeaders.about.image}
        theme="about"
        stats={[
          { label: "Founded in", value: "Kolkata" },
          { label: "Turnkey Projects", value: "350+" },
          { label: "Verified Craftsmen", value: "25+" },
        ]}
      />

      {/* 2. Story Section with Dual Photo Grid */}
      <section className="py-20 sm:py-28 relative border-b border-[#c59b27]/25 overflow-hidden">
        {/* Specular Edge Hairlines */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#dfb76c] to-transparent shadow-[0_1px_3px_rgba(196,151,70,0.3)] z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#dfb76c] to-transparent shadow-[0_1px_3px_rgba(196,151,70,0.3)] z-10 pointer-events-none" />

        {/* Ambient Radial Glow & Floating Orbs */}
        <div
          className="absolute inset-0 pointer-events-none opacity-45"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 50% 30%, rgba(196, 151, 70, 0.22) 0%, transparent 70%)",
          }}
        />
        <div className="absolute -top-20 -left-20 w-[450px] h-[450px] rounded-full bg-gradient-to-br from-[#dfb76c]/18 via-[#c49746]/10 to-transparent blur-3xl pointer-events-none animate-float-slow transform-gpu" />
        <div className="absolute -bottom-24 -right-20 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-[#ede4d4] via-[#dfb76c]/18 to-transparent blur-3xl pointer-events-none animate-float-reverse transform-gpu" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Mosaic (Col 1-6) */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6">
              {/* Left Column of Mosaic */}
              <div className="space-y-4 sm:space-y-6">
                {/* Photo 1: Interior Carpentry */}
                <div className="group relative rounded-2xl p-[2px] overflow-hidden transition-all duration-500 hover:-translate-y-1.5 shadow-[0_12px_35px_rgba(19,30,52,0.1),0_1px_3px_rgba(196,151,70,0.15)] hover:shadow-[0_20px_45px_rgba(19,30,52,0.18),0_4px_20px_rgba(196,151,70,0.3)]">
                  <div className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0_270deg,#c49746_315deg,#dfb76c_340deg,#ffffff_360deg)] animate-border-spin opacity-55 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none transform-gpu" />
                  <div className="absolute inset-0 rounded-2xl border border-[#c49746]/40 pointer-events-none" />
                  <div className="relative z-10 rounded-[calc(1rem-2px)] overflow-hidden">
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-20 pointer-events-none" />
                    <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent z-20 pointer-events-none" />
                    <img
                      src="/images/pic (2).jpeg"
                      alt="Interior carpentry and woodwork"
                      className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-3 left-3 z-20">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-[#131e34] border border-[#c49746]/40 shadow-sm">
                        Bespoke Joinery
                      </span>
                    </div>
                  </div>
                </div>

                {/* Stat Card 1: 100% Quality Tested Materials */}
                <div className="group relative rounded-2xl p-[2px] overflow-hidden transition-all duration-500 hover:-translate-y-1.5 shadow-[0_8px_25px_rgba(19,30,52,0.06),0_1px_3px_rgba(196,151,70,0.12)] hover:shadow-[0_16px_35px_rgba(19,30,52,0.12),0_3px_15px_rgba(196,151,70,0.25)]">
                  <div
                    className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0_270deg,#c49746_315deg,#dfb76c_340deg,#ffffff_360deg)] animate-border-spin opacity-65 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none transform-gpu"
                    style={{ animationDelay: "-1.5s" }}
                  />
                  <div className="absolute inset-0 rounded-2xl border border-[#c49746]/40 pointer-events-none" />
                  <div className="relative z-10 rounded-[calc(1rem-2px)] bg-gradient-to-b from-white/95 via-white/90 to-[#fdfbf7]/80 backdrop-blur-xl p-6 sm:p-7 text-center overflow-hidden flex flex-col items-center justify-center">
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                    <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none" />

                    <div className="w-11 h-11 rounded-xl bg-gradient-to-b from-white via-[#f7f3eb] to-[#ede4d4] border border-[#c49746]/45 flex items-center justify-center text-[#c49746] mb-3 shadow-[0_2px_8px_rgba(196,151,70,0.18),inset_0_1px_1px_rgba(255,255,255,1)] group-hover:scale-110 transition-transform">
                      <ShieldCheck className="w-5 h-5 stroke-[2] text-[#c49746]" />
                    </div>
                    <span className="font-heading text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-[#9e761b] via-[#c49746] to-[#9e761b] bg-clip-text text-transparent">
                      100%
                    </span>
                    <p className="text-xs text-[#131e34] uppercase tracking-wider mt-1.5 font-bold">
                      Quality Tested Materials
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column of Mosaic (staggered pt-6 sm:pt-10) */}
              <div className="space-y-4 sm:space-y-6 pt-6 sm:pt-10">
                {/* Stat Card 2: Bidhan Park Studio & Workshop */}
                <div className="group relative rounded-2xl p-[2px] overflow-hidden transition-all duration-500 hover:-translate-y-1.5 shadow-[0_8px_25px_rgba(19,30,52,0.06),0_1px_3px_rgba(196,151,70,0.12)] hover:shadow-[0_16px_35px_rgba(19,30,52,0.12),0_3px_15px_rgba(196,151,70,0.25)]">
                  <div
                    className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0_270deg,#c49746_315deg,#dfb76c_340deg,#ffffff_360deg)] animate-border-spin opacity-65 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none transform-gpu"
                    style={{ animationDelay: "-3s" }}
                  />
                  <div className="absolute inset-0 rounded-2xl border border-[#c49746]/40 pointer-events-none" />
                  <div className="relative z-10 rounded-[calc(1rem-2px)] bg-gradient-to-b from-white/95 via-white/90 to-[#fdfbf7]/80 backdrop-blur-xl p-6 sm:p-7 text-center overflow-hidden flex flex-col items-center justify-center">
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                    <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none" />

                    <div className="w-11 h-11 rounded-xl bg-gradient-to-b from-white via-[#f7f3eb] to-[#ede4d4] border border-[#c49746]/45 flex items-center justify-center text-[#c49746] mb-3 shadow-[0_2px_8px_rgba(196,151,70,0.18),inset_0_1px_1px_rgba(255,255,255,1)] group-hover:scale-110 transition-transform">
                      <MapPin className="w-5 h-5 stroke-[2] text-[#c49746]" />
                    </div>
                    <span className="font-heading text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-[#9e761b] via-[#c49746] to-[#9e761b] bg-clip-text text-transparent">
                      Bidhan Park
                    </span>
                    <p className="text-xs text-[#131e34] uppercase tracking-wider mt-1.5 font-bold">
                      Studio & Workshop
                    </p>
                    <span className="text-[10px] text-[#9e761b] font-semibold mt-0.5">
                      Near Swimming Pool
                    </span>
                  </div>
                </div>

                {/* Photo 2: Luxury Bedroom Execution */}
                <div className="group relative rounded-2xl p-[2px] overflow-hidden transition-all duration-500 hover:-translate-y-1.5 shadow-[0_12px_35px_rgba(19,30,52,0.1),0_1px_3px_rgba(196,151,70,0.15)] hover:shadow-[0_20px_45px_rgba(19,30,52,0.18),0_4px_20px_rgba(196,151,70,0.3)]">
                  <div
                    className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0_270deg,#c49746_315deg,#dfb76c_340deg,#ffffff_360deg)] animate-border-spin opacity-55 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none transform-gpu"
                    style={{ animationDelay: "-4.5s" }}
                  />
                  <div className="absolute inset-0 rounded-2xl border border-[#c49746]/40 pointer-events-none" />
                  <div className="relative z-10 rounded-[calc(1rem-2px)] overflow-hidden">
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-20 pointer-events-none" />
                    <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent z-20 pointer-events-none" />
                    <img
                      src="/images/pic (18).jpeg"
                      alt="Luxury bedroom and wardrobe execution"
                      className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-3 left-3 z-20">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-[#131e34] border border-[#c49746]/40 shadow-sm">
                        Turnkey Luxury
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content (Col 7-12) */}
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                badge="Our Studio Story"
                title="Building Refined Living Spaces Across Kolkata"
                subtitle="Rooted in passion, driven by precision joinery and contemporary aesthetics."
              />

              <p className="text-sm sm:text-base text-[#384661] leading-relaxed">
                Founded with a mission to bring world-class interior craftsmanship to Kolkata homes and offices, <strong>Modern Interior Decoration</strong> operates out of its primary studio at <strong>203 Bidhan Park (Near Swimming Pool), Kolkata 700090</strong>.
              </p>

              <p className="text-sm sm:text-base text-[#384661] leading-relaxed">
                We believe interior decoration is an intimate harmony between ergonomics, durable engineering, and personal identity. By eliminating middlemen and maintaining direct oversight over carpentry, electrical circuitry, false ceilings, and finishes, we ensure zero compromises in build quality.
              </p>

              {/* The Modern Interior Promise Card with Animated Gold Light Beam */}
              <div className="group relative rounded-2xl p-[2px] overflow-hidden transition-all duration-500 hover:-translate-y-1 shadow-[0_8px_30px_rgba(19,30,52,0.08),0_1px_3px_rgba(196,151,70,0.15)] hover:shadow-[0_16px_40px_rgba(19,30,52,0.15),0_3px_15px_rgba(196,151,70,0.28)]">
                <div
                  className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0_270deg,#c49746_315deg,#dfb76c_340deg,#ffffff_360deg)] animate-border-spin opacity-65 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none transform-gpu"
                  style={{ animationDelay: "-2s" }}
                />
                <div className="absolute inset-0 rounded-2xl border border-[#c49746]/40 pointer-events-none" />
                <div className="relative z-10 rounded-[calc(1rem-2px)] bg-gradient-to-b from-white/95 via-white/90 to-[#fdfbf7]/80 backdrop-blur-xl p-6 sm:p-7 space-y-3 overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                  <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none" />
                  <h4 className="font-heading text-base font-bold text-[#131e34] flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#c49746] drop-shadow-[0_1px_2px_rgba(196,151,70,0.35)]" />
                    <span>The Modern Interior Promise</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-[#384661] leading-relaxed">
                    Every drawer slide, laminate edge banding, cove LED angle, and wardrobe hinge is calibrated to microscopic tolerances. We build homes meant to be lived in effortlessly for decades.
                  </p>
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/services"
                  className="relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#dfb76c] via-[#c49746] to-[#a47629] hover:brightness-105 transition-all shadow-[0_4px_16px_rgba(196,151,70,0.3)] hover:shadow-[0_6px_22px_rgba(196,151,70,0.45)] overflow-hidden group/btn"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 pointer-events-none" />
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/gallery"
                  className="relative inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold tracking-wider text-[#9e761b] bg-white/70 hover:bg-white border border-[#c49746]/40 hover:border-[#c49746]/80 backdrop-blur-md transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 overflow-hidden group/gal"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/gal:translate-x-full transition-transform duration-700 pointer-events-none" />
                  <span>View Full 200+ Gallery</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values with Animated Glowing Conic Gold Border Beam */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-[#f7f3eb] via-[#ede4d4] to-[#f7f3eb] relative border-b border-[#c59b27]/25 overflow-hidden">
        {/* Specular Edge Hairlines */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#dfb76c] to-transparent shadow-[0_1px_3px_rgba(196,151,70,0.3)] z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#dfb76c] to-transparent shadow-[0_1px_3px_rgba(196,151,70,0.3)] z-10 pointer-events-none" />

        {/* Ambient Light Orbs */}
        <div className="absolute -top-24 -left-20 w-[450px] h-[450px] rounded-full bg-gradient-to-br from-[#dfb76c]/20 via-[#c49746]/10 to-transparent blur-3xl pointer-events-none animate-float-slow transform-gpu" />
        <div className="absolute -bottom-24 -right-16 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-[#ede4d4] via-[#dfb76c]/18 to-transparent blur-3xl pointer-events-none animate-float-reverse transform-gpu" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            badge="Studio Values"
            title="The Principles Guiding Every Blueprint"
            subtitle="How we maintain consistent excellence across all residential and commercial interior projects."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {studioValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="group relative rounded-2xl p-[2px] overflow-hidden transition-all duration-500 hover:-translate-y-2 shadow-[0_10px_30px_rgba(19,30,52,0.08),0_2px_8px_rgba(196,151,70,0.18)] hover:shadow-[0_24px_50px_rgba(19,30,52,0.18),0_6px_25px_rgba(196,151,70,0.35)]"
                >
                  {/* Animated Rotating Conic Gold Light Beam Border */}
                  <div
                    className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0_270deg,#c49746_315deg,#dfb76c_340deg,#ffffff_360deg)] animate-border-spin opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none transform-gpu"
                    style={{ animationDelay: `${idx * -2.2}s` }}
                  />

                  {/* Base gold border line */}
                  <div className="absolute inset-0 rounded-2xl border border-[#c49746]/50 group-hover:border-[#c49746]/90 transition-colors pointer-events-none" />

                  {/* Card Body: Frosted Crystal Glass Surface */}
                  <div className="relative z-10 rounded-[calc(1rem-2px)] h-full p-8 sm:p-9 bg-gradient-to-b from-white/95 via-white/90 to-[#fdfbf7]/80 backdrop-blur-xl flex flex-col justify-between overflow-hidden">
                    {/* Specular Diagonal Light Sheen Sweep on Hover */}
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none rounded-[calc(1rem-2px)]" />

                    {/* Top Edge Specular Crystal Hairline */}
                    <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none" />

                    <div>
                      <div className="flex items-center justify-between mb-6">
                        {/* Jeweled Medallion Icon */}
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-b from-white via-[#f7f3eb] to-[#ede4d4] border border-[#c49746]/45 flex items-center justify-center text-[#9e761b] group-hover:scale-110 group-hover:border-[#c49746]/80 group-hover:shadow-[0_4px_16px_rgba(196,151,70,0.3)] transition-all duration-300 shadow-[0_4px_12px_rgba(196,151,70,0.16),inset_0_1px_1px_rgba(255,255,255,1)]">
                          <Icon className="w-7 h-7 stroke-[1.8] text-[#c49746] group-hover:text-[#9e761b] transition-colors drop-shadow-[0_1px_2px_rgba(196,151,70,0.35)]" />
                        </div>

                        {/* Architectural Accent Badge */}
                        <span className="text-[10px] font-mono tracking-widest text-[#9e761b] uppercase font-bold px-2.5 py-1 rounded-md bg-[#ede4d4]/60 border border-[#c49746]/30">
                          {val.badge}
                        </span>
                      </div>

                      <h3 className="font-heading text-lg sm:text-xl font-bold text-[#131e34] group-hover:text-[#c49746] transition-colors">
                        {val.title}
                      </h3>

                      <p className="mt-3 text-xs sm:text-sm text-[#384661] leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Studio Location Invitation */}
      <section className="py-20 bg-gradient-to-b from-[#ede4d4] via-[#f7f3eb] to-[#dfd3bf] relative overflow-hidden border-b border-[#c59b27]/25">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="group relative rounded-3xl p-[2px] overflow-hidden transition-all duration-500 shadow-[0_16px_50px_rgba(19,30,52,0.18),0_1px_3px_rgba(196,151,70,0.15)] hover:shadow-[0_28px_70px_rgba(19,30,52,0.28),0_4px_30px_rgba(196,151,70,0.4)]">
            {/* Animated Rotating Conic Gold Light Beam Border */}
            <div className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0_270deg,#c49746_315deg,#dfb76c_340deg,#ffffff_360deg)] animate-border-spin opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none transform-gpu" />

            <div className="absolute inset-0 rounded-3xl border border-[#c49746]/45 group-hover:border-[#c49746]/85 transition-colors pointer-events-none" />

            <div className="relative z-10 rounded-[calc(1.5rem-2px)] p-8 sm:p-12 bg-gradient-to-br from-[#1b2947] via-[#131e34] to-[#0e1728] backdrop-blur-2xl text-white overflow-hidden">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none rounded-[calc(1.5rem-2px)]" />
              <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#dfb76c]/70 to-transparent pointer-events-none" />

              <div className="w-12 h-12 rounded-xl bg-gradient-to-b from-white via-[#f7f3eb] to-[#ede4d4] border border-[#c49746]/45 flex items-center justify-center text-[#c49746] mx-auto mb-5 shadow-[0_2px_10px_rgba(196,151,70,0.25)]">
                <MapPin className="w-6 h-6 stroke-[1.8] text-[#c49746]" />
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                Visit Us in Bidhan Park, Kolkata
              </h3>

              <p className="mt-3 text-sm sm:text-base text-[#c8d2e6] max-w-xl mx-auto leading-relaxed">
                Our studio is situated at <strong>203 Bidhan Park (Landmark: Near Swimming Pool), Kolkata 700090</strong>. We welcome you to experience laminate textures, veneer catalogs, and hardware samples firsthand.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 relative z-20">
                <Link
                  to="/contact"
                  className="relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#dfb76c] via-[#c49746] to-[#dfb76c] hover:brightness-105 transition-all shadow-[0_4px_16px_rgba(196,151,70,0.35)] overflow-hidden group/loc"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent -translate-x-full group-hover/loc:translate-x-full transition-transform duration-700 pointer-events-none" />
                  <span>Get Studio Location & Contact</span>
                </Link>

                <a
                  href={siteData.location.googleMapsDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider text-white bg-white/10 backdrop-blur-md border border-[#dfb76c]/50 hover:border-[#dfb76c] hover:bg-white/20 transition-all shadow-md overflow-hidden group/map"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover/map:translate-x-full transition-transform duration-700 pointer-events-none" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
