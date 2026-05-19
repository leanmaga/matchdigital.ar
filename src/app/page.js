import TopBanner from "@/components/TopBanner";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WorkSection from "@/components/WorkSection";
import ClientsSection from "@/components/ClientsSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main className="landing-page min-h-screen overflow-hidden bg-black text-white">
      <TopBanner />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WorkSection />
      <ClientsSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
