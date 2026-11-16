import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Check, Sparkles, Hammer, ShieldCheck, Phone, Eye } from "lucide-react";
import WhatsAppIcon from "../components/common/WhatsAppIcon";
import { siteData } from "../data/siteData";
import LightboxModal from "../components/common/LightboxModal";

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = siteData.services.find((s) => s.id === serviceId);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const galleryImages = (service.gallery || [service.image]).map((img, i) => ({
    id: i + 1,
    image: img,
    title: `${service.title} - Showcase ${i + 1}`,
    category: service.title,
  }));

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const whatsappInquiryUrl = `https://wa.me/91${siteData.contact.whatsapp}?text=${encodeURIComponent(
    `Hello Modern Interior Decoration, I am interested in your ${service.title} service. Please share more details and estimated pricing.`
  )}`;

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f7f3eb] via-[#ede4d4] to-[#dfd3bf] pt-24 pb-20">
      {/* 1. Header Banner */}
      <section className="relative py-16 sm:py-24 overflow-hidden border-b border-[#c59b27]/30 bg-[#ede4d4]">
        <div className="absolute inset-0 z-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover filter brightness-100 contrast-[1.03]"
          />
          {/* Directional Scrim on Desktop */}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#ede4d4]/90 via-[#ede4d4]/50 via-45% to-transparent to-75% hidden sm:block" />
          {/* Mobile Scrim */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#ede4d4] via-[#ede4d4]/65 to-transparent sm:hidden" />
          {/* Bottom edge blend */}
          <div className="absolute bottom-0 left-0 right-0 h-16 z-10 bg-gradient-to-t from-[#ede4d4] to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-[#5b6a88] mb-6 font-semibold">
            <Link to="/" className="hover:text-[#131e34] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/services" className="hover:text-[#131e34] transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-[#9e761b] font-bold">{service.title}</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-[#c59b27]/40 text-[#9e761b] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Dedicated Specialty</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#131e34] tracking-tight leading-tight">
              {service.title}
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-[#384661] font-normal leading-relaxed">
              {service.shortDescription}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-b from-white/95 to-[#fdfbf7]/85 border border-[#c49746]/40 text-xs text-[#131e34] shadow-[0_2px_8px_rgba(19,30,52,0.05),inset_0_1px_1px_rgba(255,255,255,0.9)]">
                <Sparkles className="w-4 h-4 text-[#c49746]" />
                <span>Bespoke Turnkey Precision</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-b from-white/95 to-[#fdfbf7]/85 border border-[#c49746]/40 text-xs text-[#131e34] shadow-[0_2px_8px_rgba(19,30,52,0.05),inset_0_1px_1px_rgba(255,255,255,0.9)]">
                <ShieldCheck className="w-4 h-4 text-[#c49746]" />
                <span>Quality Tested Materials</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Detailed Scope & Specifications */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Content (Col 1-8) */}
            <div className="lg:col-span-8 space-y-10">
              {/* Detailed narrative */}
              <div className="space-y-4">
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#131e34]">
                  Architectural Concept & Execution
                </h2>
                <p className="text-[#384661] text-sm sm:text-base leading-relaxed">
                  {service.longDescription}
                </p>
              </div>

              {/* Inclusions & Features */}
              <div className="p-8 rounded-2xl bg-white/90 border border-[#c59b27]/30 space-y-6 shadow-md shadow-[#131e34]/5">
                <h3 className="font-heading text-xl font-bold text-[#131e34] flex items-center gap-2">
                  <Hammer className="w-5 h-5 text-[#c59b27]" />
                  <span>Scope of Work & Features</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="p-1 rounded-full bg-[#c59b27]/20 text-[#9e761b] shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm text-[#131e34] font-medium">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Material specifications */}
              <div className="p-8 rounded-2xl bg-white/90 border border-[#c59b27]/30 space-y-4 shadow-md shadow-[#131e34]/5">
                <h3 className="font-heading text-xl font-bold text-[#131e34] flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#c59b27]" />
                  <span>Materials & Technical Grade</span>
                </h3>
                <p className="text-sm text-[#384661] leading-relaxed">
                  {service.materials}
                </p>
                <p className="text-xs text-[#5b6a88]">
                  All woodwork, electrical fixtures, and glass are sourced directly from authorized Kolkata distributors with genuine warranty certificates.
                </p>
              </div>

              {/* Service Gallery with Box Screen Lightbox */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-xl font-bold text-[#131e34]">
                    Related Project Photos
                  </h3>
                  <span className="text-xs text-[#9e761b] font-semibold">Click photo for box screen view</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {galleryImages.map((item, idx) => (
                    <div
                      key={item.id}
                      onClick={() => openLightbox(idx)}
                      className="group relative h-40 sm:h-48 rounded-xl overflow-hidden cursor-pointer bg-white border border-[#c59b27]/30 hover:border-[#c59b27] transition-all shadow-md hover:shadow-xl"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-[#131e34]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Eye className="w-6 h-6 text-[#e0be63]" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar: Quick Contact & Service Consultation (Col 9-12) */}
            <div className="lg:col-span-4 sticky top-28 space-y-6">
              <div className="p-8 rounded-2xl bg-white/95 border-2 border-[#c59b27]/40 shadow-xl space-y-6">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#9e761b] uppercase font-bold">
                    Direct Studio Inquiry
                  </span>
                  <h3 className="font-heading text-xl font-bold text-[#131e34] mt-1">
                    Book {service.title}
                  </h3>
                  <p className="text-xs text-[#384661] mt-2 leading-relaxed">
                    Speak directly with Yusuf Sekh and our interior team to discuss floor plans and material preferences.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <a
                    href={whatsappInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#25D366] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#20ba59] transition-all shadow-lg shadow-[#25D366]/20"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-black" />
                    <span>Inquire on WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${siteData.contact.phone}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#131e34] border border-[#c59b27]/40 text-white font-bold text-xs tracking-wider hover:bg-[#1b2947] transition-all shadow-md"
                  >
                    <Phone className="w-4 h-4 text-[#e0be63]" />
                    <span>Call +91 99033 93527</span>
                  </a>
                </div>

                <div className="pt-4 border-t border-[#c59b27]/20 text-xs text-[#384661] space-y-2">
                  <p>• Studio: 203 Bidhan Park, Kolkata</p>
                  <p>• Landmark: Near Swimming Pool</p>
                  <p>• Free On-Site Measurement & Consultation</p>
                </div>
              </div>

              {/* Other Services Links */}
              <div className="p-6 rounded-2xl bg-white/90 border border-[#c59b27]/30 space-y-3 shadow-md">
                <h4 className="font-heading text-sm font-bold text-[#131e34] uppercase tracking-wider">
                  Explore Other Disciplines
                </h4>
                <div className="space-y-2">
                  {siteData.services
                    .filter((s) => s.id !== service.id)
                    .slice(0, 4)
                    .map((other) => (
                      <Link
                        key={other.id}
                        to={`/services/${other.id}`}
                        className="block text-xs text-[#384661] hover:text-[#c59b27] transition-colors py-1 truncate font-medium"
                      >
                        &rarr; {other.title}
                      </Link>
                    ))}
                </div>
                <Link
                  to="/services"
                  className="inline-block text-xs text-[#9e761b] font-bold hover:underline pt-2"
                >
                  View All Services &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        images={galleryImages}
        currentIndex={selectedImageIndex}
        onClose={() => setLightboxOpen(false)}
        onNext={nextImage}
        onPrev={prevImage}
        whatsappNumber={siteData.contact.phone}
      />
    </main>
  );
}
