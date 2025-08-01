"use client";

import Image from "next/image";
import EventImage from "../../assets/Rectangle 27.svg";
import { useColorTheme } from "@/app/constant";
import { VolunteerProgram } from "../VolunteerProgramSection";
import { AutoSlider } from "../AutoSlider";
import { LeadershipTeam } from "../LeadershipTeam";
import { PartnersSection } from "../PartnersSection";
import { DonateBanner } from "../DonateBanner";

const AboutUs = () => {
  const colors = useColorTheme();
  return (
    <main
      className={`text-white min-h-screen max-lg:py-20`}
      style={{ backgroundColor: colors.primary10 }}
    >
      {/* Breadcrumbs */}
      <div className="px-6 md:px-16 py-4">
        <nav className="text-sm text-gray-400 mb-6">
          <span className="hover:underline cursor-pointer">Home</span> &gt;
          <span className="text-white font-medium"> About Us</span>
        </nav>

        {/* Top Image */}

        <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden relative mb-10">
          <Image
            src={EventImage}
            alt="Event banner"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 px-6 md:px-16 pb-16">
        {/* Left: Event Info */}

        <div>
          <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4">
            Our Mission
          </h2>
          <p className="">
            Our mission is to empower global giving by rewarding generosity,
            inspiring purpose, and creating long-term impact for individuals and
            communities worldwide. We believe that when people give, they should
            also gain — and when they gain, they can give even more. This is the
            ripple effect that drives everything we do.
          </p>
        </div>

        <div>
          <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4">
            Our Vision
          </h2>
          <p className="">
            Vision-NGP envisions a world where philanthropy is both rewarding
            and sustainable, transforming how individuals contribute to society
            and the world at large.
          </p>
        </div>
      </div>

      <VolunteerProgram />

      <section>
        <AutoSlider />
      </section>

      <LeadershipTeam />

      
      <PartnersSection />

      <DonateBanner />

    </main>
  );
};

export default AboutUs;
