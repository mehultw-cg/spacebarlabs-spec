import { HeroSectionNew } from "@/components/sections/HeroSectionNew";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { AboutUsSection } from "@/components/sections/AboutUsSection";
import { ServicesSectionNew } from "@/components/sections/ServicesSectionNew";
import { Footer } from "@/components/global/footer";
import { ScrollBackground } from "@/components/global/ScrollBackground";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent">
      <ScrollBackground>
        <div className="dark:bg-black/20">
        {/* Hero Section */}
        <HeroSectionNew />

        {/* Services Section */}
        {/* <ServicesSection /> */}

        {/* New Services Section */}
        <ServicesSectionNew />

        {/* Pricing Section */}
        <PricingSection />

        {/* Why Us Section */}
        <WhyUsSection />

        {/* Tech Stack Section */}
        <TechStackSection />

        {/* About Us Section (includes Contact) */}
        <AboutUsSection />

        {/* Footer - Placeholder for now */}
        {/* <footer className="py-12 px-4 border-t bg-black text-white border-neutral-800">
          <div className="max-w-7xl mx-auto text-center text-neutral-500">
            <p>&copy; 2025 SpaceBar Labs. All rights reserved.</p>
          </div>
        </footer> */}
        <Footer />
        </div>
      </ScrollBackground>
    </main>
  );
}
