import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Phone, Menu, X, ArrowUpRight, MapPin } from "lucide-react";
import WhatsAppIcon from "../common/WhatsAppIcon";
import BrandLogo from "../common/BrandLogo";
import { siteData } from "../../data/siteData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const [prevPath, setPrevPath] = useState(location.pathname);
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setMobileMenuOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "glass-nav py-3.5 shadow-md shadow-[#131e34]/5"
            : "bg-gradient-to-b from-[#f7f3eb]/95 via-[#ede4d4]/85 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Luxury Brand Logo */}
            <BrandLogo variant="light" size="default" />

            {/* Desktop Navigation - 5 Routes */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-gradient-to-b from-white/95 via-white/85 to-[#f7f3eb]/80 border border-[#c59b27]/30 rounded-full px-4 py-1.5 backdrop-blur-xl shadow-[0_4px_20px_rgba(196,151,70,0.1),inset_0_1px_1px_rgba(255,255,255,0.95)]">
              {siteData.navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative px-3.5 py-1.5 text-xs lg:text-sm font-semibold tracking-wide transition-all duration-300 rounded-full ${
                      isActive
                        ? "text-[#131e34] bg-[#ede4d4] font-bold border border-[#c59b27]/45 shadow-[0_2px_8px_rgba(196,151,70,0.15),inset_0_1px_1px_rgba(255,255,255,0.9)]"
                        : "text-[#384661] hover:text-[#131e34] hover:bg-black/5"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>

            {/* Header Right Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${siteData.contact.phone}`}
                className="flex items-center gap-2 text-xs font-bold text-[#131e34] hover:text-[#c59b27] transition-colors px-3 py-2"
                aria-label="Direct Call"
              >
                <Phone className="w-3.5 h-3.5 text-[#c59b27]" />
                <span>{siteData.contact.displayPhone}</span>
              </a>

              <a
                href={siteData.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-1.5 px-4.5 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#e0be63] via-[#c59b27] to-[#9e761b] shadow-[0_4px_16px_rgba(196,151,70,0.32),inset_0_1px_1px_rgba(255,255,255,0.6)] hover:brightness-105 hover:shadow-[0_6px_20px_rgba(196,151,70,0.45)] transition-all duration-300 transform hover:-translate-y-0.5 overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/35 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                <span className="relative z-10">Get Estimate</span>
                <ArrowUpRight className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={`tel:${siteData.contact.phone}`}
                className="p-2 rounded-full bg-white border border-[#c59b27]/40 text-[#c59b27] shadow-sm"
                aria-label="Call Now"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-white border border-[#c59b27]/30 text-[#131e34] hover:text-[#c59b27] focus:outline-none shadow-sm"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-[#f7f3eb]/98 backdrop-blur-2xl flex flex-col justify-between p-6 overflow-y-auto animate-in fade-in duration-300">
          <div className="flex items-center justify-between pb-6 border-b border-[#c59b27]/25">
            <BrandLogo variant="light" size="default" onClick={() => setMobileMenuOpen(false)} />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full bg-black/5 text-[#384661] hover:text-[#131e34]"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="py-8 flex flex-col gap-3">
            {siteData.navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between py-3 px-4 rounded-xl text-lg font-bold transition-all ${
                    isActive
                      ? "text-[#131e34] bg-[#ede4d4] border border-[#c59b27]/40 shadow-sm"
                      : "text-[#384661] hover:text-[#131e34] hover:bg-black/5"
                  }`
                }
              >
                <span>{item.name}</span>
                <ArrowUpRight className="w-4 h-4 text-[#c59b27]" />
              </NavLink>
            ))}
          </div>

          {/* Mobile Footer Info */}
          <div className="pt-6 border-t border-[#c59b27]/25 space-y-4">
            <div className="flex items-start gap-2.5 text-xs text-[#384661]">
              <MapPin className="w-4 h-4 text-[#c59b27] shrink-0 mt-0.5" />
              <span>{siteData.location.fullAddress}</span>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={`tel:${siteData.contact.phone}`}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white border border-[#c59b27]/40 text-[#131e34] font-bold text-xs uppercase tracking-wider shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#c59b27]" />
                <span>Call Us</span>
              </a>
              <a
                href={siteData.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#e0be63] via-[#c59b27] to-[#9e761b] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#c59b27]/20"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white shrink-0" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
