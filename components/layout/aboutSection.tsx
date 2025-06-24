"use client";

import {
  BrainCogIcon,
  PackageIcon,
  ThumbsUpIcon,
  TrophyIcon,
  UsersIcon,
  ZapIcon,
} from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center">
      <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            What Guides Our Decisions
          </h2>
          <p className="text-muted-foreground">
            Mobil.in is committed to being the leading destination for car
            seekers, offering a wide selection of vehicles to meet customer
            needs. We believe that choosing a car should be easy and fun, with
            simple and informative navigation on the website.
          </p>
        </div>
        {/* Icon Blocks */}
        <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px] lg:py-15">
          <div className="max-w-4xl mx-auto">
            {/* Grid */}
            <div className="grid md:grid-cols-2 gap-6 lg:gap-12">
              <div className="space-y-6 lg:space-y-10">
                {/* Icon Block */}
                <div className="flex">
                  <BrainCogIcon className="flex-shrink-0 mt-2 h-8 w-8" />
                  <div className="ms-5 sm:ms-8">
                    <h3 className="text-base sm:text-lg font-semibold">
                      Creative minds
                    </h3>
                    <p className="mt-1 text-muted-foreground">
                      We choose our teams carefully. Our people are the secret
                      to great work.
                    </p>
                  </div>
                </div>
                {/* End Icon Block */}
                {/* Icon Block */}
                <div className="flex">
                  <PackageIcon className="flex-shrink-0 mt-2 h-8 w-8" />
                  <div className="ms-5 sm:ms-8">
                    <h3 className="text-base sm:text-lg font-semibold">
                      Effortless updates
                    </h3>
                    <p className="mt-1 text-muted-foreground">
                      With an automated system, information about the latest
                      cars and offers is always updated, so customers will not
                      miss the latest information.
                    </p>
                  </div>
                </div>
                {/* End Icon Block */}
                {/* Icon Block */}
                <div className="flex">
                  <ZapIcon className="flex-shrink-0 mt-2 h-8 w-8" />
                  <div className="ms-5 sm:ms-8">
                    <h3 className="text-base sm:text-lg font-semibold">
                      Strong empathy
                    </h3>
                    <p className="mt-1 text-muted-foreground">
                      With experience interacting with thousands of customers,
                      we understand what users want and need when looking for a
                      car.
                    </p>
                  </div>
                </div>
                {/* End Icon Block */}
              </div>
              {/* End Col */}
              <div className="space-y-6 lg:space-y-10">
                {/* Icon Block */}
                <div className="flex">
                  <TrophyIcon className="flex-shrink-0 mt-2 h-8 w-8" />
                  <div className="ms-5 sm:ms-8">
                    <h3 className="text-base sm:text-lg font-semibold">
                      Conquer the best
                    </h3>
                    <p className="mt-1 text-muted-foreground">
                      Our commitment is to deliver vehicles that not only meet
                      but exceed expectations, making Mobil.in your top choice
                      for quality automobiles.
                    </p>
                  </div>
                </div>
                {/* End Icon Block */}
                {/* Icon Block */}
                <div className="flex">
                  <UsersIcon className="flex-shrink-0 mt-2 h-8 w-8" />
                  <div className="ms-5 sm:ms-8">
                    <h3 className="text-base sm:text-lg font-semibold">
                      Designing for people
                    </h3>
                    <p className="mt-1 text-muted-foreground">
                      This website is designed with a focus on user experience,
                      combining function and aesthetics to provide intuitive
                      navigation.
                    </p>
                  </div>
                </div>
                {/* End Icon Block */}
                {/* Icon Block */}
                <div className="flex">
                  <ThumbsUpIcon className="flex-shrink-0 mt-2 h-8 w-8" />
                  <div className="ms-5 sm:ms-8">
                    <h3 className="text-base sm:text-lg font-semibold">
                      Simple and affordable
                    </h3>
                    <p className="mt-1 text-muted-foreground">
                      We offer a wide range of affordable products and services,
                      ensuring everyone can find their dream car without any
                      hassle.
                    </p>
                  </div>
                </div>
                {/* End Icon Block */}
              </div>
              {/* End Col */}
            </div>
            {/* End Grid */}
          </div>
        </div>
        {/* End Icon Blocks */}
      </div>
    </section>
  );
}
