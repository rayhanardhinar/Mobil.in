import AboutSection from "@/components/layout/aboutSection";
import ContactSection from "@/components/layout/contactSection";
import FeatureSection from "@/components/layout/featureSection";
import HeroSection from "@/components/layout/heroSection";
import IconSection from "@/components/layout/iconSection";
import FooterSection from "@/components/layout/footerSection";
import Navbar from "@/components/layout/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <IconSection />
      <FeatureSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
