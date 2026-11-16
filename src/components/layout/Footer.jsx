import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import WhatsAppIcon from "../common/WhatsAppIcon";
import BrandLogo from "../common/BrandLogo";
import { siteData } from "../../data/siteData";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#18233c] via-[#101726] to-[#080d16] border-t border-[#c59b27]/30 relative overflow-hidden text-[#c8d2e6]">
      {/* Specular Edge Top Hairline */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#dfb76c] to-transparent shadow-[0_1px_6px_rgba(196,151,70,0.4)] z-20 pointer-events-none" />

      {/* Warm Ambient Spotlight from Top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-44 bg-[radial-gradient(ellipse_at_top,_rgba(223,183,108,0.2),transparent_70%)] blur-2xl pointer-events-none" />

      {/* Floating Ambient Light Orbs */}
      <div className="absolute -top-16 -left-16 w-80 h-80 rounded-full bg-gradient-to-br from-[#dfb76c]/15 via-[#c49746]/5 to-transparent blur-3xl pointer-events-none animate-float-slow transform-gpu" />
      <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full bg-gradient-to-tr from-[#1b2947]/50 via-[#dfb76c]/10 to-transparent blur-3xl pointer-events-none animate-float-reverse transform-gpu" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Brand Column (Col 1-4) */}
          <div className="lg:col-span-4 space-y-5">
            <BrandLogo variant="dark" size="lg" />

            <p className="text-sm leading-relaxed text-[#c8d2e6] max-w-sm">
              Kolkata's trusted studio for bespoke luxury interiors, architectural false ceilings, modular kitchens, and complete turnkey execution. Crafted to endure, styled to inspire.
            </p>

            {/* High-Gloss Action Buttons */}
            <div className="pt-2 flex items-center gap-3 flex-wrap">
              <a
                href={siteData.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-b from-[#2cf175]/25 to-[#20ba59]/20 hover:from-[#2cf175] hover:to-[#20ba59] border border-[#25D366]/50 hover:border-[#25D366] text-[#25D366] hover:text-black text-xs font-bold uppercase tracking-wider shadow-[0_2px_12px_rgba(37,211,102,0.15)] hover:shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 overflow-hidden group/wa"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/wa:translate-x-full transition-transform duration-700 pointer-events-none" />
                <WhatsAppIcon className="w-4 h-4 fill-current relative z-10" />
                <span className="relative z-10">Chat on WhatsApp</span>
              </a>

              <a
                href={`tel:${siteData.contact.phone}`}
                className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.08] hover:bg-gradient-to-r hover:from-[#dfb76c] hover:via-[#c49746] hover:to-[#a47629] border border-[#c49746]/45 hover:border-[#dfb76c] text-[#f7f3eb] hover:text-white text-xs font-bold uppercase tracking-wider shadow-[0_2px_10px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_18px_rgba(196,151,70,0.35)] transition-all duration-300 transform hover:-translate-y-0.5 overflow-hidden group/call"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover/call:translate-x-full transition-transform duration-700 pointer-events-none" />
                <Phone className="w-4 h-4 text-[#dfb76c] group-hover/call:text-white transition-colors relative z-10" />
                <span className="relative z-10">Call Studio</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation (Col 5-6) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading text-xs font-bold tracking-widest text-[#dfb76c] uppercase">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {siteData.navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="hover:text-[#dfb76c] transition-all duration-200 flex items-center gap-2 group text-[#c8d2e6] hover:translate-x-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#dfb76c]/60 group-hover:bg-[#dfb76c] transition-colors" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Portfolio (Col 7-9) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading text-xs font-bold tracking-widest text-[#dfb76c] uppercase">
              Bespoke Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {siteData.services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.id}`}
                    className="hover:text-[#dfb76c] transition-all duration-200 flex items-center justify-between group text-[#c8d2e6] hover:translate-x-1"
                  >
                    <span className="line-clamp-1">{service.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-[#dfb76c] transition-opacity shrink-0 ml-1" />
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  to="/services"
                  className="text-xs font-bold text-[#dfb76c] hover:text-[#f7f3eb] transition-colors inline-flex items-center gap-1.5 group/all"
                >
                  <span>View All Services</span>
                  <span className="group-hover/all:translate-x-1 transition-transform">&rarr;</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio Location & Contacts (Col 10-12) with Animated Rotating Conic Gold Border Beam */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading text-xs font-bold tracking-widest text-[#dfb76c] uppercase flex items-center gap-2">
              <span>Studio Location</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
            </h4>

            {/* Studio Card with Animated Rotating Conic Gold Border Beam */}
            <div className="group relative rounded-2xl p-[1.5px] overflow-hidden transition-all duration-500 shadow-[0_8px_25px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_35px_rgba(196,151,70,0.25)]">
              {/* Animated Rotating Conic Gold Light Beam Border */}
              <div
                className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0_270deg,#c49746_315deg,#dfb76c_340deg,#ffffff_360deg)] animate-border-spin opacity-65 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none transform-gpu"
              />

              {/* Base gold border line */}
              <div className="absolute inset-0 rounded-2xl border border-[#c49746]/45 group-hover:border-[#c49746]/85 transition-colors pointer-events-none" />

              {/* Card Body: Frosted Crystal Glass Surface */}
              <div className="relative z-10 rounded-[calc(1rem-1.5px)] p-5 bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-transparent backdrop-blur-xl space-y-3.5 overflow-hidden">
                {/* Specular Diagonal Sheen Sweep */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                {/* Top Specular Crystal Hairline */}
                <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-[#dfb76c]/60 to-transparent pointer-events-none" />

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white/10 border border-[#dfb76c]/40 flex items-center justify-center shrink-0 mt-0.5 text-[#dfb76c] shadow-xs">
                    <MapPin className="w-3.5 h-3.5 text-[#dfb76c]" />
                  </div>
                  <span className="text-xs text-[#c8d2e6] leading-relaxed">
                    {siteData.location.fullAddress}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white/10 border border-[#dfb76c]/40 flex items-center justify-center shrink-0 text-[#dfb76c] shadow-xs">
                    <Phone className="w-3.5 h-3.5 text-[#dfb76c]" />
                  </div>
                  <a
                    href={`tel:${siteData.contact.phone}`}
                    className="text-xs text-[#c8d2e6] hover:text-[#dfb76c] transition-colors font-medium"
                  >
                    {siteData.contact.displayPhone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white/10 border border-[#dfb76c]/40 flex items-center justify-center shrink-0 text-[#dfb76c] shadow-xs">
                    <Mail className="w-3.5 h-3.5 text-[#dfb76c]" />
                  </div>
                  <a
                    href={`mailto:${siteData.contact.email}`}
                    className="text-xs text-[#c8d2e6] hover:text-[#dfb76c] transition-colors break-all"
                  >
                    {siteData.contact.email}
                  </a>
                </div>

                <div className="flex items-center gap-3 pt-2.5 border-t border-white/10 text-[11px] text-[#a0afca]">
                  <Clock className="w-3.5 h-3.5 text-[#dfb76c]/90 shrink-0" />
                  <span>{siteData.location.hours}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Middle-Positioned Attribution Bar */}
      <div className="border-t border-[#c59b27]/25 bg-[#080d16] py-6 px-4 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
          <p className="text-xs sm:text-sm text-[#c8d2e6] font-medium flex items-center justify-center flex-wrap gap-1">
            <span>Website Designed & Maintained by</span>
            <a
              href="https://www.teamdeoskolkata.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:text-red-700 transition-colors duration-300 ml-1 text-[#f7f3eb]"
            >
              Digital Exposure Online Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
