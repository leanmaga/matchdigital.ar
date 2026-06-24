import TopBanner from "@/components/TopBanner";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WorkSection from "@/components/WorkSection";
import ClientsSection from "@/components/ClientsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="landing-page min-h-screen overflow-hidden bg-black text-white">
      <Navbar />
      <section id="hero">
        {" "}
        <HeroSection />{" "}
      </section>
      <section id="about">
        {" "}
        <AboutSection />{" "}
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <section id="work">
        {" "}
        <WorkSection />{" "}
      </section>
      <section id="clients">
        <ClientsSection />
      </section>
      <section id="faq">
        {" "}
        <FAQSection />{" "}
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <FooterSection />
    </main>
  );
}
