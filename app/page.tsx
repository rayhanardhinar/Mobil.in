import AboutSection from "@/components/layout/aboutSection";
import ContactSection from "@/components/layout/contactSection";
import ServiceSection from "@/components/layout/serviceSection";
import HeroSection from "@/components/layout/heroSection";
import FooterSection from "@/components/layout/footerSection";
import Navbar from "@/components/layout/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
