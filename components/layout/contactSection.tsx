import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BrainCircuit, MessageSquare, Wrench } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
  return (
    <div
      id="contact"
      className="min-h-screen container mx-auto px-4 py-24 md:px-6 lg:py-32 2xl:max-w-[1400px]"
    >
      {/* Title */}
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-3xl font-bold sm:text-4xl">Contact us</h1>
        <p className="text-muted-foreground mt-3">
          We&apos;d love to talk about how we can help you.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-lg">
        <Card className="p-0">
          <CardContent className="p-6">
            <h2 className="mb-8 text-xl font-semibold">Fill in the form</h2>
            <form>
              <div className="grid gap-4 lg:gap-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
                  <div>
                    <Label htmlFor="firstname" className="mb-2">
                      First Name
                    </Label>
                    <Input
                      type="text"
                      id="firstname"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastname" className="mb-2">
                      Last Name
                    </Label>
                    <Input
                      type="text"
                      id="lastname"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
                  <div>
                    <Label htmlFor="email" className="mb-2">
                      Email
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="mb-2">
                      Phone Number
                    </Label>
                    <Input
                      type="tel"
                      id="phone"
                      placeholder="Enter your phone"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="mb-2">
                    Details
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your car requirements (model, budget, features needed)"
                    rows={4}
                  />
                </div>
              </div>

              <div className="mt-6 grid">
                <Button type="submit" size="lg">
                  Send inquiry
                </Button>
              </div>

              <div className="mt-3 text-center">
                <p className="text-muted-foreground text-sm">
                  We&apos;ll get back to you in 1-2 business days.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
