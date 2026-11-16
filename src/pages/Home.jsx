import CinematicHero from "../components/home/CinematicHero";
import HomeStatsStrip from "../components/home/HomeStatsStrip";
import HomeAboutGlimpse from "../components/home/HomeAboutGlimpse";
import HomeServicesGlimpse from "../components/home/HomeServicesGlimpse";
import HomeGalleryGlimpse from "../components/home/HomeGalleryGlimpse";
import HomeProcess from "../components/home/HomeProcess";
import HomeWhyChooseUs from "../components/home/HomeWhyChooseUs";
import HomeLocationGlimpse from "../components/home/HomeLocationGlimpse";
import HomeCTA from "../components/home/HomeCTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 1. Cinematic Hero with 3-second auto-changing slides */}
      <CinematicHero />

      {/* 2. Quick stats indicator */}
      <HomeStatsStrip />

      {/* 3. Glimpse of About Page */}
      <HomeAboutGlimpse />

      {/* 4. Glimpse of Services Page */}
      <HomeServicesGlimpse />

      {/* 5. Glimpse of Gallery Page with Box Screen Modal */}
      <HomeGalleryGlimpse />

      {/* 6. Proven 5-Step Process */}
      <HomeProcess />

      {/* 7. Why Choose Modern Interior Decoration */}
      <HomeWhyChooseUs />

      {/* 8. Studio Location & Google Maps Glimpse */}
      <HomeLocationGlimpse />

      {/* 9. Final Call to Action */}
      <HomeCTA />
    </main>
  );
}
