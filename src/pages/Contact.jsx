import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Navigation } from "lucide-react";
import PageHeader from "../components/common/PageHeader";
import WhatsAppIcon from "../components/common/WhatsAppIcon";
import { siteData } from "../data/siteData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    propertyType: "Apartment / Flat",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Build pre-filled WhatsApp message URL so user can immediately send their details
    const text = `*New Interior Inquiry - Modern Interior Decoration*%0A%0A*Name:* ${encodeURIComponent(
      formData.name
    )}%0A*Phone:* ${encodeURIComponent(
      formData.phone
    )}%0A*Email:* ${encodeURIComponent(
      formData.email || "Not provided"
    )}%0A*Property Type:* ${encodeURIComponent(
      formData.propertyType
    )}%0A*Message:* ${encodeURIComponent(formData.message)}`;

    const whatsappUrl = `https://wa.me/91${siteData.contact.whatsapp}?text=${text}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
  };

  const contactCards = [
    {
      id: "phone",
      icon: Phone,
      title: "Call Studio",
      subtitle: "Direct consultation & scheduling",
      action: siteData.contact.displayPhone,
      href: `tel:${siteData.contact.phone}`,
      tag: "Available 10 AM – 8:30 PM",
      isWhatsapp: false,
    },
    {
      id: "whatsapp",
      icon: WhatsAppIcon,
      title: "WhatsApp",
      subtitle: "Send floor plans & design photos",
      action: `+91 ${siteData.contact.whatsapp}`,
      href: siteData.contact.whatsappUrl,
      tag: "Instant Chat Response",
      isWhatsapp: true,
      external: true,
    },
    {
      id: "email",
      icon: Mail,
      title: "Email",
      subtitle: "Tenders, BOQ & corporate plans",
      action: siteData.contact.email,
      href: `mailto:${siteData.contact.email}`,
      tag: "Official Communication",
      isWhatsapp: false,
    },
    {
      id: "address",
      icon: MapPin,
      title: "Bidhan Park Studio",
      subtitle: "203 Bidhan Park, Kolkata",
      action: "Near Swimming Pool, 700090",
      href: siteData.location.googleMapsDirections,
      tag: "Open in Google Maps",
      isWhatsapp: false,
      isDirections: true,
      external: true,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f7f3eb] via-[#ede4d4] to-[#dfd3bf]">
      {/* 1. Page Header with Distinct Design, Ambient Backdrop & Glossy Crystal Stats */}
      <PageHeader
        badge={siteData.pageHeaders.contact.badge}
        title={siteData.pageHeaders.contact.title}
        description={siteData.pageHeaders.contact.description}
        image={siteData.pageHeaders.contact.image}
        theme="contact"
        stats={[
          { label: "Studio Hours", value: "10am - 8:30pm" },
          { label: "Days Open", value: "7 Days/Wk" },
          { label: "Response Time", value: "< 2 Hours" },
        ]}
      />

      {/* 2. Contact Information Cards with Animated Rotating Conic Gold Border Beams */}
      <section className="py-16 sm:py-24 border-b border-[#c59b27]/25 relative overflow-hidden">
        {/* Specular Edge Hairlines */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#dfb76c] to-transparent shadow-[0_1px_3px_rgba(196,151,70,0.3)] z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#dfb76c] to-transparent shadow-[0_1px_3px_rgba(196,151,70,0.3)] z-10 pointer-events-none" />

        {/* Ambient Glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 50% 30%, rgba(196, 151, 70, 0.2) 0%, transparent 70%)",
          }}
        />
        <div className="absolute -top-20 -left-20 w-[450px] h-[450px] rounded-full bg-gradient-to-br from-[#dfb76c]/18 via-[#c49746]/10 to-transparent blur-3xl pointer-events-none animate-float-slow transform-gpu" />
        <div className="absolute -bottom-24 -right-20 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-[#ede4d4] via-[#dfb76c]/18 to-transparent blur-3xl pointer-events-none animate-float-reverse transform-gpu" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.id}
                  className="group relative rounded-2xl p-[2px] overflow-hidden transition-all duration-500 hover:-translate-y-2 shadow-[0_8px_25px_rgba(19,30,52,0.06),0_1px_3px_rgba(196,151,70,0.12)] hover:shadow-[0_20px_45px_rgba(19,30,52,0.15),0_4px_20px_rgba(196,151,70,0.28)] flex flex-col justify-between"
                >
                  {/* Animated Rotating Conic Gold Light Beam Border */}
                  <div
                    className={`absolute inset-[-150%] animate-border-spin opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none transform-gpu ${
                      card.isWhatsapp
                        ? "bg-[conic-gradient(from_0deg,transparent_0_270deg,#25D366_315deg,#6ee7b7_340deg,#ffffff_360deg)]"
                        : "bg-[conic-gradient(from_0deg,transparent_0_270deg,#c49746_315deg,#dfb76c_340deg,#ffffff_360deg)]"
                    }`}
                    style={{ animationDelay: `${idx * -1.5}s` }}
                  />

                  {/* Base gold/emerald border line */}
                  <div
                    className={`absolute inset-0 rounded-2xl border transition-colors pointer-events-none ${
                      card.isWhatsapp
                        ? "border-[#25D366]/40 group-hover:border-[#25D366]/90"
                        : "border-[#c49746]/45 group-hover:border-[#c49746]/90"
                    }`}
                  />

                  {/* Card Body: Frosted Crystal Glass Surface */}
                  <div className="relative z-10 rounded-[calc(1rem-2px)] p-7 bg-gradient-to-b from-white/95 via-white/90 to-[#fdfbf7]/80 backdrop-blur-xl flex flex-col justify-between overflow-hidden h-full">
                    {/* Specular Diagonal Light Sheen Sweep on Hover */}
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none rounded-[calc(1rem-2px)]" />

                    {/* Top Edge Specular Crystal Hairline */}
                    <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none" />

                    <div>
                      {/* Jeweled Medallion Icon */}
                      <div
                        className={`w-13 h-13 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 ${
                          card.isWhatsapp
                            ? "bg-gradient-to-b from-white via-[#ecfdf5] to-[#d1fae5] border border-[#25D366]/45 text-[#15803d] shadow-[0_4px_12px_rgba(37,211,102,0.2),inset_0_1px_1px_rgba(255,255,255,1)] group-hover:shadow-[0_4px_16px_rgba(37,211,102,0.35)]"
                            : "bg-gradient-to-b from-white via-[#f7f3eb] to-[#ede4d4] border border-[#c49746]/45 text-[#9e761b] shadow-[0_4px_12px_rgba(196,151,70,0.16),inset_0_1px_1px_rgba(255,255,255,1)] group-hover:shadow-[0_4px_16px_rgba(196,151,70,0.3)]"
                        }`}
                      >
                        <Icon
                          className={`w-6 h-6 ${
                            card.isWhatsapp ? "text-[#25D366] fill-[#25D366]" : "stroke-[1.8] text-[#c49746]"
                          }`}
                        />
                      </div>

                      <h3 className="font-heading text-base font-bold text-[#131e34] uppercase tracking-wider group-hover:text-[#c49746] transition-colors">
                        {card.title}
                      </h3>

                      <p className="text-xs text-[#5b6a88] mt-1">{card.subtitle}</p>

                      <a
                        href={card.href}
                        target={card.external ? "_blank" : undefined}
                        rel={card.external ? "noopener noreferrer" : undefined}
                        className={`mt-4 block font-heading font-bold transition-colors ${
                          card.id === "email"
                            ? "text-sm break-all text-[#131e34] hover:text-[#c49746]"
                            : card.isWhatsapp
                            ? "text-lg text-[#15803d] hover:underline"
                            : "text-lg text-[#131e34] hover:text-[#c49746]"
                        }`}
                      >
                        {card.action}
                      </a>
                    </div>

                    <div className="mt-5 pt-3 border-t border-[#c49746]/20">
                      {card.isDirections ? (
                        <a
                          href={card.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] text-[#9e761b] font-bold hover:text-[#c49746] transition-colors flex items-center justify-between group/link"
                        >
                          <span>{card.tag}</span>
                          <Navigation className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                        </a>
                      ) : (
                        <span
                          className={`text-[10px] block font-bold ${
                            card.isWhatsapp ? "text-[#15803d]" : "text-[#9e761b]"
                          }`}
                        >
                          {card.tag}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Interactive Form & Map Section with High-Gloss Architecture */}
      <section className="py-20 sm:py-28 relative border-b border-[#c59b27]/25 overflow-hidden">
        {/* Specular Edge Hairlines */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#dfb76c] to-transparent shadow-[0_1px_3px_rgba(196,151,70,0.3)] z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#dfb76c] to-transparent shadow-[0_1px_3px_rgba(196,151,70,0.3)] z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Form Container (Col 1-6) */}
            <div className="lg:col-span-6 group relative rounded-3xl p-[2px] overflow-hidden transition-all duration-500 shadow-[0_12px_40px_rgba(19,30,52,0.08),0_1px_3px_rgba(196,151,70,0.15)] hover:shadow-[0_20px_50px_rgba(19,30,52,0.15),0_4px_20px_rgba(196,151,70,0.28)]">
              {/* Animated Rotating Conic Gold Light Beam Border */}
              <div className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0_270deg,#c49746_315deg,#dfb76c_340deg,#ffffff_360deg)] animate-border-spin opacity-55 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none transform-gpu" />

              <div className="absolute inset-0 rounded-3xl border border-[#c49746]/45 group-hover:border-[#c49746]/85 transition-colors pointer-events-none" />

              <div className="relative z-10 rounded-[calc(1.5rem-2px)] p-8 sm:p-10 bg-gradient-to-b from-white/95 via-white/90 to-[#fdfbf7]/80 backdrop-blur-xl overflow-hidden">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
                <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none" />

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#ede4d4]/60 border border-[#c49746]/30 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c49746] animate-pulse" />
                  <span className="text-[10px] font-mono tracking-widest text-[#9e761b] uppercase font-bold">
                    Consultation Request
                  </span>
                </div>

                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#131e34]">
                  Request an On-Site Estimate
                </h2>

                <p className="mt-2 text-xs sm:text-sm text-[#384661] leading-relaxed">
                  Fill out the details below. We will review your property requirements and connect with you on WhatsApp / phone.
                </p>

                {submitted && (
                  <div className="mt-6 p-4 rounded-xl bg-[#25D366]/15 border border-[#25D366]/40 text-[#15803d] text-xs flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-[#25D366]" />
                    <span>Your request has been prepared! If WhatsApp did not open automatically, please click the WhatsApp button below.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-[#131e34] uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#c49746]/35 text-[#131e34] text-sm focus:border-[#c49746] focus:ring-2 focus:ring-[#c49746]/20 focus:outline-none transition-all shadow-xs"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#131e34] uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 9903393527"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#c49746]/35 text-[#131e34] text-sm focus:border-[#c49746] focus:ring-2 focus:ring-[#c49746]/20 focus:outline-none transition-all shadow-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#131e34] uppercase tracking-wider mb-1.5">
                        Property Type
                      </label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#c49746]/35 text-[#131e34] text-sm focus:border-[#c49746] focus:ring-2 focus:ring-[#c49746]/20 focus:outline-none transition-all shadow-xs"
                      >
                        <option value="2 BHK / 3 BHK Apartment">2 BHK / 3 BHK Apartment</option>
                        <option value="Luxury Bungalow / Duplex">Luxury Bungalow / Duplex</option>
                        <option value="Modular Kitchen Only">Modular Kitchen Only</option>
                        <option value="False Ceiling & Lighting">False Ceiling & Lighting</option>
                        <option value="Commercial Office / Retail">Commercial Office / Retail</option>
                        <option value="Complete Turnkey Renovation">Complete Turnkey Renovation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#131e34] uppercase tracking-wider mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. yourname@gmail.com"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#c49746]/35 text-[#131e34] text-sm focus:border-[#c49746] focus:ring-2 focus:ring-[#c49746]/20 focus:outline-none transition-all shadow-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#131e34] uppercase tracking-wider mb-1.5">
                      Tell Us About Your Project & Approximate Area (sq. ft.)
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your design style, rooms to renovate, or timeline..."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#c49746]/35 text-[#131e34] text-sm focus:border-[#c49746] focus:ring-2 focus:ring-[#c49746]/20 focus:outline-none transition-all resize-none shadow-xs"
                    />
                  </div>

                  <button
                    type="submit"
                    className="relative w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-gradient-to-r from-[#dfb76c] via-[#c49746] to-[#a47629] text-white font-bold text-xs uppercase tracking-wider hover:brightness-105 shadow-[0_4px_20px_rgba(196,151,70,0.35)] hover:shadow-[0_6px_25px_rgba(196,151,70,0.5)] transition-all duration-300 cursor-pointer overflow-hidden group/submit"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent -translate-x-full group-hover/submit:translate-x-full transition-transform duration-700 pointer-events-none" />
                    <Send className="w-4 h-4 relative z-10" />
                    <span className="relative z-10">Submit & Connect on WhatsApp</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Google Map & Directions (Col 7-12) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="group relative rounded-3xl p-[2px] overflow-hidden transition-all duration-500 shadow-[0_12px_40px_rgba(19,30,52,0.08),0_1px_3px_rgba(196,151,70,0.15)] hover:shadow-[0_20px_50px_rgba(19,30,52,0.15),0_4px_20px_rgba(196,151,70,0.28)]">
                {/* Animated Rotating Conic Gold Light Beam Border */}
                <div
                  className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0_270deg,#c49746_315deg,#dfb76c_340deg,#ffffff_360deg)] animate-border-spin opacity-55 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none transform-gpu"
                  style={{ animationDelay: "-2.5s" }}
                />

                <div className="absolute inset-0 rounded-3xl border border-[#c49746]/45 group-hover:border-[#c49746]/85 transition-colors pointer-events-none" />

                <div className="relative z-10 rounded-[calc(1.5rem-2px)] p-8 sm:p-9 bg-gradient-to-b from-white/95 via-white/90 to-[#fdfbf7]/80 backdrop-blur-xl space-y-4 overflow-hidden">
                  <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none" />

                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#ede4d4]/60 border border-[#c49746]/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c49746] animate-pulse" />
                    <span className="text-[10px] font-mono tracking-widest text-[#9e761b] uppercase font-bold">
                      Interactive Map
                    </span>
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#131e34]">
                    Find Our Kolkata Studio
                  </h3>

                  <p className="text-xs sm:text-sm text-[#384661] leading-relaxed">
                    Located near the landmark Swimming Pool in Bidhan Park, Baranagar / Kolkata, West Bengal - 700090.
                  </p>

                  <div className="h-80 sm:h-96 w-full rounded-2xl overflow-hidden border border-[#c49746]/40 relative bg-[#ede4d4] shadow-inner">
                    {/* Floating Verification Badge */}
                    <div className="absolute top-3 left-3 z-10 pointer-events-none">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#c49746]/40 shadow-sm text-[#131e34] text-xs font-semibold">
                        <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping" />
                        <span className="w-2 h-2 rounded-full bg-[#10b981] -ml-4" />
                        <span>Bidhan Park Studio</span>
                      </div>
                    </div>

                    <iframe
                      title="Modern Interior Decoration Kolkata Studio Map"
                      src={siteData.location.mapEmbedUrl}
                      className="w-full h-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </div>

                  <div className="pt-3 border-t border-[#c49746]/20 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-[#5b6a88]">
                      <Clock className="w-4 h-4 text-[#c49746]" />
                      <span>Open 7 Days: 10:00 AM – 8:30 PM</span>
                    </div>

                    <a
                      href={siteData.location.googleMapsDirections}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-white via-[#f7f3eb] to-[#ede4d4] hover:bg-[#c49746] hover:text-white text-xs font-bold uppercase tracking-wider text-[#9e761b] transition-all duration-300 border border-[#c49746]/40 shadow-xs hover:shadow-sm"
                    >
                      <span>Get Directions</span>
                      <Navigation className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
