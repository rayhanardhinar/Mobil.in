"use client";

import AboutSection from "@/components/layout/aboutSection";
import ContactSection from "@/components/layout/contactSection";
import ServiceSection from "@/components/layout/serviceSection";
import HeroSection from "@/components/layout/heroSection";
import FooterSection from "@/components/layout/footerSection";
import Navbar from "@/components/layout/navbar";
import ModeToggle from "@/components/ui/modeToggle";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    const initAos = async () => {
      await import("aos");
      AOS.init({
        duration: 1500,
        once: false,
        mirror: true,
        easing: "ease",
        anchorPlacement: "top-bottom",
      });
    };
    initAos();
  }, []);
  return (
    <div className="w-full max-w-[100vw] overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ContactSection />
      <FooterSection />
      <div className="fixed bottom-4 right-4 z-50 block md:hidden">
        <ModeToggle />
      </div>
    </div>
  );
}
