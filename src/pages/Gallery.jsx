import { useState, useRef } from "react";
import { Eye, Filter, Plus, ChevronUp, Sparkles, Phone } from "lucide-react";
import PageHeader from "../components/common/PageHeader";
import LightboxModal from "../components/common/LightboxModal";
import WhatsAppIcon from "../components/common/WhatsAppIcon";
import { siteData } from "../data/siteData";

const INITIAL_VISIBLE_COUNT = 12; // 12 images initially
const LOAD_INCREMENT = 12;

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const gridRef = useRef(null);
  const categories = siteData.galleryCategories;

  const filteredImages =
    activeCategory === "All"
      ? siteData.gallery
      : siteData.gallery.filter((item) => item.category === activeCategory);

  // Images currently visible on the page
  const displayedImages = filteredImages.slice(0, visibleCount);

  const canLoadMore = visibleCount < filteredImages.length;
  const canLoadLess = visibleCount > INITIAL_VISIBLE_COUNT;

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setVisibleCount(INITIAL_VISIBLE_COUNT); // Reset count on filter change
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + LOAD_INCREMENT, filteredImages.length));
  };

  const handleLoadLess = () => {
    setVisibleCount(INITIAL_VISIBLE_COUNT);
    // Smooth scroll back to top of gallery grid
    if (gridRef.current) {
      gridRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f7f3eb] via-[#ede4d4] to-[#dfd3bf]">
      {/* 1. Page Header with Clearly Visible Background Image & Glossy Crystal Stats */}
      <PageHeader
        badge={siteData.pageHeaders.gallery.badge}
        title={siteData.pageHeaders.gallery.title}
        description={siteData.pageHeaders.gallery.description}
        image={siteData.pageHeaders.gallery.image}
        theme="gallery"
        stats={[
          { label: "On-Site Photos", value: "214 Real" },
          { label: "Active Filter", value: activeCategory },
          { label: "Kolkata Sites", value: "100% Real" },
        ]}
      />

      {/* 2. Filter Bar with Glossy Glassmorphic Design */}
      <section className="py-5 bg-gradient-to-r from-white/95 via-[#f7f3eb]/95 to-white/95 border-b border-[#c49746]/35 sticky top-[69px] z-30 backdrop-blur-xl shadow-[0_4px_20px_rgba(19,30,52,0.06)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2.5 overflow-x-auto pb-1 scrollbar-none">
            <span className="flex items-center gap-1.5 text-xs text-[#131e34] font-bold uppercase tracking-wider pr-3 shrink-0">
              <Filter className="w-3.5 h-3.5 text-[#c49746]" />
              <span>Filter:</span>
            </span>

            {categories.map((category) => {
              const count =
                category === "All"
                  ? siteData.gallery.length
                  : siteData.gallery.filter((i) => i.category === category).length;

              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleCategoryChange(category)}
                  className={`group/filter relative px-4 sm:px-5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 flex items-center gap-2 cursor-pointer overflow-hidden ${
                    isActive
                      ? "bg-gradient-to-r from-[#dfb76c] via-[#c49746] to-[#a47629] text-white shadow-[0_4px_14px_rgba(196,151,70,0.35)] font-bold scale-[1.02]"
                      : "bg-white/85 text-[#384661] hover:text-[#131e34] hover:bg-white border border-[#c49746]/30 hover:border-[#c49746]/70 shadow-xs hover:shadow-sm"
                  }`}
                >
                  <span className="relative z-10">{category}</span>
                  <span
                    className={`relative z-10 text-[10px] px-1.5 py-0.5 rounded-full font-bold transition-colors ${
                      isActive ? "bg-black/25 text-white" : "bg-[#ede4d4] text-[#131e34]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Image Grid with Animated Conic Gold Border Beams */}
      <section ref={gridRef} className="py-16 sm:py-24 scroll-mt-28 relative overflow-hidden">
        {/* Specular Edge Hairlines */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#dfb76c] to-transparent shadow-[0_1px_3px_rgba(196,151,70,0.3)] z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#dfb76c] to-transparent shadow-[0_1px_3px_rgba(196,151,70,0.3)] z-10 pointer-events-none" />

        {/* Ambient Radial Glow & Light Orbs */}
        <div
          className="absolute inset-0 pointer-events-none opacity-45"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 50% 25%, rgba(196, 151, 70, 0.22) 0%, transparent 70%)",
          }}
        />
        <div className="absolute -top-24 -left-20 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#dfb76c]/18 via-[#c49746]/10 to-transparent blur-3xl pointer-events-none animate-float-slow transform-gpu" />
        <div className="absolute -bottom-24 -right-20 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#ede4d4] via-[#dfb76c]/18 to-transparent blur-3xl pointer-events-none animate-float-reverse transform-gpu" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#c49746]/25">
            <p className="text-xs sm:text-sm text-[#384661]">
              Showing <strong className="text-[#131e34]">{displayedImages.length}</strong> of{" "}
              <strong className="text-[#131e34]">{filteredImages.length}</strong> verified Kolkata project photographs
            </p>
            <p className="text-xs text-[#9e761b] font-bold hidden sm:flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#c49746]" />
              <span>Click any photo to open full-screen box view</span>
            </p>
          </div>

          {/* Grid with Animated Conic Gold Border Beams */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {displayedImages.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => openLightbox(idx)}
                className="group relative rounded-2xl p-[2px] overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 shadow-[0_8px_25px_rgba(19,30,52,0.07),0_1px_3px_rgba(196,151,70,0.12)] hover:shadow-[0_20px_45px_rgba(19,30,52,0.18),0_4px_20px_rgba(196,151,70,0.3)] flex flex-col"
              >
                {/* Animated Rotating Conic Gold Light Beam Border */}
                <div
                  className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0_270deg,#c49746_315deg,#dfb76c_340deg,#ffffff_360deg)] animate-border-spin opacity-55 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none transform-gpu"
                  style={{ animationDelay: `${(idx % 12) * -0.8}s` }}
                />

                {/* Base gold border line */}
                <div className="absolute inset-0 rounded-2xl border border-[#c49746]/45 group-hover:border-[#c49746]/85 transition-colors pointer-events-none" />

                {/* Inner Card Body */}
                <div className="relative z-10 rounded-[calc(1rem-2px)] overflow-hidden h-64 sm:h-72 w-full bg-[#131e34]">
                  {/* Top Specular Crystal Hairline */}
                  <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent z-20 pointer-events-none" />

                  {/* Specular Light Sheen Sweep on Hover */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-20 pointer-events-none" />

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131e34]/95 via-[#131e34]/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 z-10" />

                  {/* Category tag */}
                  <div className="absolute top-3.5 left-3.5 z-20">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md text-[#131e34] border border-[#c49746]/45 shadow-[0_2px_8px_rgba(0,0,0,0.15)]">
                      {item.category}
                    </span>
                  </div>

                  {/* Center Box screen trigger icon on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#dfb76c] via-[#c49746] to-[#a47629] text-white flex items-center justify-center shadow-[0_4px_18px_rgba(196,151,70,0.45)] transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Eye className="w-5 h-5 stroke-[2.5]" />
                    </div>
                  </div>

                  {/* Bottom title & hint */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <h4 className="text-sm font-bold text-white truncate drop-shadow-sm">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-[#dfb76c] mt-0.5 font-medium flex items-center gap-1">
                      <span>Click to view in box screen</span>
                      <span>&rarr;</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More & Load Less Action Buttons */}
          {(canLoadMore || canLoadLess) && (
            <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
              {canLoadMore && (
                <button
                  type="button"
                  onClick={handleLoadMore}
                  className="relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#dfb76c] via-[#c49746] to-[#a47629] hover:brightness-105 shadow-[0_4px_16px_rgba(196,151,70,0.3)] hover:shadow-[0_6px_22px_rgba(196,151,70,0.45)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer overflow-hidden group/btn"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 pointer-events-none" />
                  <Plus className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">
                    Load More ({filteredImages.length - visibleCount} Remaining)
                  </span>
                </button>
              )}

              {canLoadLess && (
                <button
                  type="button"
                  onClick={handleLoadLess}
                  className="relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#131e34] bg-white/90 hover:bg-[#ede4d4] border border-[#c49746]/45 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer backdrop-blur-md overflow-hidden group/less"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/less:translate-x-full transition-transform duration-700 pointer-events-none" />
                  <ChevronUp className="w-4 h-4 text-[#9e761b] relative z-10" />
                  <span className="relative z-10">Load Less</span>
                </button>
              )}
            </div>
          )}

          {/* Consultation Invite Banner with Rotating Conic Gold Light Beam */}
          <div className="mt-20 group relative rounded-3xl p-[2px] overflow-hidden transition-all duration-500 shadow-[0_16px_50px_rgba(19,30,52,0.18),0_1px_3px_rgba(196,151,70,0.15)] hover:shadow-[0_28px_70px_rgba(19,30,52,0.28),0_4px_30px_rgba(196,151,70,0.4)]">
            {/* Animated Rotating Conic Gold Light Beam Border */}
            <div className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0_270deg,#c49746_315deg,#dfb76c_340deg,#ffffff_360deg)] animate-border-spin opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none transform-gpu" />

            <div className="absolute inset-0 rounded-3xl border border-[#c49746]/45 group-hover:border-[#c49746]/85 transition-colors pointer-events-none" />

            <div className="relative z-10 rounded-[calc(1.5rem-2px)] p-8 sm:p-14 bg-gradient-to-br from-[#1b2947] via-[#131e34] to-[#0e1728] backdrop-blur-2xl text-center text-white overflow-hidden flex flex-col items-center">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none rounded-[calc(1.5rem-2px)]" />
              <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#dfb76c]/70 to-transparent pointer-events-none" />

              {/* Gold Accent Line */}
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#dfb76c] to-transparent mx-auto mb-6 rounded-full shadow-[0_0_12px_rgba(223,183,108,0.6)]" />

              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-[#c49746]/40 text-[#dfb76c] text-xs font-semibold uppercase tracking-wider mb-5 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#dfb76c]" />
                <span>Verified Kolkata Craftsmanship</span>
              </div>

              <h3 className="font-heading text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight max-w-2xl mx-auto">
                Want a Similar Interior Design for Your Space?
              </h3>

              <p className="mt-4 text-sm sm:text-base text-[#c8d2e6] max-w-xl mx-auto leading-relaxed">
                Send our team your favorite photo from this gallery on WhatsApp for an immediate concept review and transparent cost estimate.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 relative z-20">
                <a
                  href={siteData.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-gradient-to-b from-[#2cf175] to-[#20ba59] hover:from-[#35ff81] hover:to-[#22c760] shadow-[0_4px_20px_rgba(37,211,102,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:shadow-[0_6px_28px_rgba(37,211,102,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 overflow-hidden group/btn cursor-pointer"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 pointer-events-none" />
                  <WhatsAppIcon className="w-4 h-4 fill-black" />
                  <span>Inquire on WhatsApp</span>
                </a>

                <a
                  href={`tel:${siteData.contact.phone}`}
                  className="relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider text-white bg-white/10 backdrop-blur-md border border-[#dfb76c]/50 hover:border-[#dfb76c] hover:bg-gradient-to-r hover:from-[#dfb76c] hover:via-[#c49746] hover:to-[#a47629] hover:text-white transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.15)] hover:shadow-[0_6px_22px_rgba(196,151,70,0.4)] transform hover:-translate-y-0.5 overflow-hidden group/call cursor-pointer"
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

      {/* 4. Full Box Screen / Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        images={filteredImages}
        currentIndex={selectedImageIndex}
        onClose={() => setLightboxOpen(false)}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </main>
  );
}
