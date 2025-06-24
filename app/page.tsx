import AboutSection from "@/components/layout/aboutSection";
import ContactSection from "@/components/layout/contactSection";
import ServiceSection from "@/components/layout/serviceSection";
import HeroSection from "@/components/layout/heroSection";
import FooterSection from "@/components/layout/footerSection";
import Navbar from "@/components/layout/navbar";
import ModeToggle from "@/components/ui/modeToggle";
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ContactSection />
      <FooterSection />
      <div className="fixed bottom-4 right-4 z-50 block md:hidden">
        <ModeToggle />
      </div>
    </>
  );
}
