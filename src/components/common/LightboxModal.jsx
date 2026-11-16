import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { siteData } from "../../data/siteData";

export default function LightboxModal({
  isOpen,
  currentImage,
  images,
  currentIndex = 0,
  totalImages,
  onClose,
  onNext,
  onPrev,
}) {
  const activeImg = currentImage || (images && images[currentIndex]);
  const total = totalImages || (images ? images.length : 1);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !activeImg) return null;

  const whatsappInquiryUrl = `https://wa.me/91${siteData.contact.whatsapp}?text=${encodeURIComponent(
    `Hello Modern Interior Decoration, I am interested in this design from your gallery: ${activeImg.title} (${activeImg.category}). Could you share estimated pricing and timeline?`
  )}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Gallery Image Lightbox View"
      className="fixed inset-0 z-50 bg-[#0e1726]/95 backdrop-blur-2xl flex flex-col justify-between animate-in fade-in duration-300"
    >
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#c59b27]/30 z-10 bg-[#131e34]/90">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider bg-[#c59b27]/20 text-[#e0be63] border border-[#c59b27]/45 shadow-sm">
            {activeImg.category || "Interior Design"}
          </span>
          <span className="text-xs text-[#c8d2e6] font-mono">
            {currentIndex + 1} / {total}
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none"
          aria-label="Close box screen view"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Box Canvas */}
      <div className="relative flex-grow flex items-center justify-center p-4 sm:p-8 overflow-hidden select-none">
        {/* Previous Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 sm:left-8 z-20 p-3 sm:p-4 rounded-full bg-[#1b2947]/90 border border-[#c59b27]/40 text-[#f7f3eb] hover:text-[#e0be63] hover:border-[#e0be63] transition-all transform active:scale-95 shadow-xl"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Center Frame */}
        <div className="relative max-w-5xl max-h-[75vh] flex items-center justify-center">
          <img
            src={activeImg.image}
            alt={activeImg.title}
            className="max-w-full max-h-[72vh] object-contain rounded-xl shadow-2xl border border-[#c59b27]/40 transition-all duration-300"
          />
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 sm:right-8 z-20 p-3 sm:p-4 rounded-full bg-[#1b2947]/90 border border-[#c59b27]/40 text-[#f7f3eb] hover:text-[#e0be63] hover:border-[#e0be63] transition-all transform active:scale-95 shadow-xl"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Bar: Title, Details & Quick Enquiry CTA */}
      <div className="px-6 py-4 border-t border-[#c59b27]/30 bg-[#131e34]/90 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4 z-10">
        <div>
          <h3 className="font-heading text-base sm:text-lg font-bold text-[#f7f3eb] tracking-wide">
            {activeImg.title}
          </h3>
          <p className="text-xs text-[#a0afca] mt-0.5">
            Designed & Executed by Modern Interior Decoration, Kolkata
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#25D366] text-black hover:bg-[#20ba59] transition-all shadow-lg shadow-[#25D366]/20"
          >
            <WhatsAppIcon className="w-4 h-4 fill-black text-black" />
            <span>Enquire on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
