import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Eye, Sparkles } from "lucide-react";
import { siteData } from "../../data/siteData";
import SectionHeading from "../common/SectionHeading";
import LightboxModal from "../common/LightboxModal";

export default function HomeGalleryGlimpse() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Curate 8 diverse showcase images for Home Glimpse
  const previewItems = siteData.gallery.slice(0, 8);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % previewItems.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? previewItems.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-[#ede4d4] via-[#f7f3eb] to-[#ede4d4] relative border-b border-[#c59b27]/25 overflow-hidden">
      {/* Specular Edge Hairlines */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#dfb76c] to-transparent shadow-[0_1px_3px_rgba(196,151,70,0.3)] z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#dfb76c] to-transparent shadow-[0_1px_3px_rgba(196,151,70,0.3)] z-10 pointer-events-none" />

      {/* 1. Subtle Textural Architectural Drafting Grid Pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="gallery-arch-pattern"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 48 0 L 0 48 M 0 0 L 48 48"
              fill="none"
              stroke="rgba(197, 155, 39, 0.08)"
              strokeWidth="0.7"
            />
            <circle cx="24" cy="24" r="1.2" fill="rgba(197, 155, 39, 0.2)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#gallery-arch-pattern)" />
      </svg>

      {/* 2. Floating Ambient Luxury Light Orbs */}
      <div className="absolute -top-24 -left-20 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#dfb76c]/20 via-[#c49746]/10 to-transparent blur-3xl pointer-events-none animate-float-slow transform-gpu" />
      <div className="absolute -bottom-24 -right-16 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-[#ede4d4] via-[#dfb76c]/18 to-transparent blur-3xl pointer-events-none animate-float-reverse transform-gpu" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            badge="Project Showcase"
            title="Realized Spaces Crafted Across Kolkata"
            subtitle="Click on any photograph to inspect our woodwork, lighting details, and finishes in high-resolution box screen view."
          />

          <Link
            to="/gallery"
            className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold tracking-wider text-[#9e761b] border border-[#c49746]/50 bg-gradient-to-b from-white/95 via-white/90 to-[#fdfbf7]/85 backdrop-blur-xl shadow-[0_4px_16px_rgba(196,151,70,0.12),inset_0_1px_1px_rgba(255,255,255,0.95)] hover:border-[#c49746]/80 hover:shadow-[0_6px_20px_rgba(196,151,70,0.22)] hover:text-[#785309] transition-all duration-300 mb-12 group overflow-hidden relative"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
            <span className="relative z-10">View Full 200+ Gallery</span>
            <ArrowRight className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {previewItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative h-48 sm:h-64 rounded-2xl overflow-hidden cursor-pointer bg-gradient-to-b from-white/95 to-[#fdfbf7]/85 border border-[#c49746]/40 hover:border-[#c49746]/85 transition-all duration-500 shadow-[0_8px_25px_rgba(19,30,52,0.06),0_1px_3px_rgba(196,151,70,0.1)] hover:shadow-[0_20px_45px_rgba(19,30,52,0.16),0_4px_16px_rgba(196,151,70,0.25),inset_0_1px_2px_rgba(255,255,255,1)] hover:-translate-y-1.5"
            >
              {/* Specular Light Sheen Sweep on Hover */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/35 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none z-20" />

              {/* Specular Top Edge Glint */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent z-10 pointer-events-none" />

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Luminous Warm Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#131e34]/95 via-[#131e34]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4" />

              {/* Category pill on hover */}
              <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-[#131e34] border border-[#c49746]/50 shadow-[0_2px_8px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,1)] backdrop-blur-md">
                  {item.category}
                </span>
              </div>

              {/* Eye icon / Box screen trigger */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                <div className="p-3.5 rounded-full bg-gradient-to-r from-[#dfb76c] via-[#c49746] to-[#a47629] text-white shadow-[0_8px_25px_rgba(196,151,70,0.45),inset_0_1px_1.5px_rgba(255,255,255,0.7)] transform scale-90 group-hover:scale-100 transition-all duration-300">
                  <Eye className="w-5 h-5" />
                </div>
              </div>

              {/* Title on hover */}
              <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <p className="text-xs font-bold text-white line-clamp-1 drop-shadow-md">
                  {item.title}
                </p>
                <span className="text-[10px] text-[#dfb76c] font-medium flex items-center gap-1 mt-0.5">
                  <Sparkles className="w-2.5 h-2.5" />
                  <span>Click for Box Screen</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-10 text-center md:hidden">
          <Link
            to="/gallery"
            className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#dfb76c] via-[#c49746] to-[#a47629] shadow-[0_8px_25px_rgba(196,151,70,0.35),inset_0_1px_1.5px_rgba(255,255,255,0.65),inset_0_-1px_1px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_32px_rgba(196,151,70,0.48),inset_0_1px_2px_rgba(255,255,255,0.85)] hover:brightness-105 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/35 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />
            <span className="relative z-10">View Full 200+ Gallery</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Lightbox Modal (Box Screen) */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={previewItems}
        currentIndex={selectedImageIndex}
        onNext={nextImage}
        onPrev={prevImage}
        whatsappNumber={siteData.contact.phone}
      />
    </section>
  );
}
