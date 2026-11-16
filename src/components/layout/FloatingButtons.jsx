import { Phone } from "lucide-react";
import WhatsAppIcon from "../common/WhatsAppIcon";
import { siteData } from "../../data/siteData";

export default function FloatingButtons() {
  return (
    <aside
      aria-label="Direct Quick Contact Options"
      className="fixed bottom-6 right-5 sm:right-6 z-40 flex flex-col items-end gap-3.5"
    >
      {/* WhatsApp Floating Button */}
      <a
        href={siteData.contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Modern Interior Decoration on WhatsApp"
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 hover:scale-110 active:scale-95 transition-all duration-300"
      >
        {/* Subtle Pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping opacity-60 pointer-events-none" />

        {/* Official WhatsApp SVG Icon */}
        <WhatsAppIcon className="w-7 h-7 fill-white text-white relative z-10" />

        {/* Hover Tooltip on desktop */}
        <span className="hidden sm:block absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-[#131e34] text-[#f7f3eb] text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl border border-[#c59b27]/40">
          Chat on WhatsApp
        </span>
      </a>

      {/* Phone Call Floating Button */}
      <a
        href={`tel:${siteData.contact.phone}`}
        aria-label="Call Modern Interior Decoration directly"
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#9e761b] via-[#c59b27] to-[#e0be63] text-white shadow-xl shadow-[#c59b27]/30 hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <Phone className="w-6 h-6 stroke-[2.4] relative z-10" />

        {/* Hover Tooltip on desktop */}
        <span className="hidden sm:block absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-[#131e34] text-[#f7f3eb] text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl border border-[#c59b27]/40">
          Call +91 99033 93527
        </span>
      </a>
    </aside>
  );
}
