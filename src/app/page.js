import TopBanner from "@/components/TopBanner";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WorkSection from "@/components/WorkSection";
import ClientsSection from "@/components/ClientsSection";
import InstagramProfile from "@/components/InstagramProfile";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main className="landing-page min-h-screen overflow-hidden bg-black text-white">
      <TopBanner />
      <HeroSection />
      <InstagramProfile />
      <ServicesSection />
      <WorkSection />
      <ClientsSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
