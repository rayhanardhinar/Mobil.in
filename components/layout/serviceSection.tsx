import { Card, CardContent } from "@/components/ui/card";
import {
  RocketIcon,
  ShieldCheckIcon,
  ZapIcon,
  BarChartIcon,
} from "lucide-react";

const features = [
  {
    icon: RocketIcon,
    title: "Quick Approval",
    description:
      "Secure the best financing deals with our streamlined loan processing.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Certified Inspections",
    description:
      "200-point checks ensure every car meets our rigorous quality standards.",
  },
  {
    icon: ZapIcon,
    title: "Instant Matching",
    description:
      " Get personalized car recommendations in seconds with our AI-powered search.",
  },
  {
    icon: BarChartIcon,
    title: "Smart Comparisons",
    description:
      " Side-by-side analytics help you pick the perfect car for your needs.",
  },
];

export default function ServiceSection() {
  return (
    <div id="service" className="min-h-screen flex items-center">
      <section className="container mx-auto space-y-8 px-4 py-24 md:px-6 2xl:max-w-[1400px]">
        <div data-aos="fade-up" className="space-y-4 text-center">
          <h2 className="text-3xl font-bold">
            Your Seamless Car Buying Experience
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl">
            Innovative tools that make finding and buying your dream car easier
            than ever. Engineered for customers, driven by excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {features.map((feature) => (
            <Card data-aos="zoom-in" key={feature.title} className="p-0">
              <CardContent className="space-y-2 p-6">
                <feature.icon className="text-primary h-12 w-12" />
                <h3 className="font-bold">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
