"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Link } from "react-scroll";

export default function HeroSection() {
  return (
    <div id="hero" className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px]">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Content */}
          <div data-aos="fade-right" className="flex-1 order-2 lg:order-1">
            <div className="mx-auto max-w-2xl text-center lg:text-left">
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-7xl">
                Mobil.in
              </h1>
            </div>
            <div className="mx-auto mt-5 max-w-3xl text-center lg:text-left">
              <p className="text-muted-foreground text-xl">
                One Showroom, Endless Possibilities - Find Your Ideal Car in Our
                Premium Collection
              </p>
            </div>
            <div className="mt-8 flex justify-center lg:justify-start gap-3">
              <Button size={"lg"}>
                <Link to="contact" smooth={true} duration={900}>
                  Contact Us
                </Link>
              </Button>

              <Button size={"lg"} variant={"outline"}>
                <Link to="about" smooth={true} duration={900}>
                  Learn More
                </Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div data-aos="fade-left" className="flex-1 order-1 lg:order-2">
            <Image
              src="https://images.unsplash.com/photo-1548618607-fe992dd33eff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Hero Image"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
