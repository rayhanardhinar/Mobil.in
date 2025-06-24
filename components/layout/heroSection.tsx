import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";

export default function HeroSection() {
  return (
    <>
      {/* Hero */}
      <div>
        <div className="container mx-auto px-4 py-24 md:px-6 lg:py-32 2xl:max-w-[1400px]">
          {/* Title */}
          <div className="mx-auto mt-5 max-w-2xl text-center">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-7xl">
              Mobil.in
            </h1>
          </div>
          {/* End Title */}
          <div className="mx-auto mt-5 max-w-3xl text-center">
            <p className="text-muted-foreground text-xl">
              Temukan Mobil Impianmu Tanpa Ribet! Jelajahi ratusan pilihan mobil
              dari berbagai showroom terpercaya, hanya di satu platform.
            </p>
          </div>
          {/* Buttons */}
          <div className="mt-8 flex justify-center gap-3">
            <Button size={"lg"}>Get started</Button>
            <Button size={"lg"} variant={"outline"}>
              Learn more
            </Button>
          </div>
          {/* End Buttons */}
        </div>
      </div>
      {/* End Hero */}
    </>
  );
}
