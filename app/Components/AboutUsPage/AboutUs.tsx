"use client";

import Image from "next/image";
import EventImage from "../../assets/Rectangle 27.svg";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useColorTheme } from "@/app/constant";

const AboutUs = () => {
  const colors = useColorTheme();
  return (
    <main
      className={`text-white min-h-screen py-10 px-6 md:px-16`}
      style={{backgroundColor: colors.primary10}}
    >
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-400 mb-6">
        <span className="hover:underline cursor-pointer">Home</span> &gt;
        <span className="text-white font-medium">Event Details</span>
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left: Event Info */}
        <div className="md:col-span-2 space-y-6">
          <h1 className="text-3xl font-bold">Affiliate Meetups</h1>
          <p className="text-gray-300">
            Join us for a night of impact-building dialogue! Future+ is excited
            to host this global destination meetup connecting purpose-driven
            individuals, partners, and stakeholders from around the world. We’re
            creating a space that builds momentum for sustainable advancement,
            driven by real solutions that shape the future we want to live in.
          </p>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              Event Highlights and Impact
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                Hear from an exciting lineup of thinkers, inventors, and
                creators.
              </li>
              <li>
                Engage with interactive workshops and breakout groups focused on
                real-world problem solving.
              </li>
              <li>
                Connect with attendees across the globe through hybrid
                networking opportunities and virtual showcases.
              </li>
              <li>
                Participate in panel discussions with notable change-makers in
                the nonprofit, tech, health, and education sectors.
              </li>
              <li>
                Be part of collaborative innovation challenges that generate
                measurable social impact.
              </li>
              <li>
                Explore creative pitches from early-stage startups on track to
                make lasting global contributions.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mt-6 mb-2">Other Details</h2>
            <div className="flex items-center gap-2 text-gray-300">
              <FaCalendarAlt className="text-[#f3c1cb]" />
              <span>Saturday, September 12, 2025 • 6:00PM</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300 mt-2">
              <FaMapMarkerAlt className="text-[#f3c1cb]" />
              <span>
                Grand Ballroom of Eko Hotels & Suites, plot 141 Ahmadu Bello
                Way, Victoria Island, Lagos, Nigeria
              </span>
            </div>
          </div>
        </div>

        {/* Right: Interest Form */}
        <div className="bg-[var(--primary-color900)] p-6 rounded-lg shadow-lg space-y-5 h-fit sticky top-24">
          <h3 className="text-xl font-semibold">I am Interested</h3>
          <p className="text-sm text-gray-300">
            Kindly share details to register
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="input bg-[var(--primary-color800)] resize-none border border-gray-300 focus:border-[#b3244b] focus:ring-2 focus:ring-[#b3244b] rounded-md p-2 w-full"
            />
            <input
              type="tel"
              placeholder="Eg. +2348123456789"
              className="input bg-[var(--primary-color800)] resize-none border border-gray-300 focus:border-[#b3244b] focus:ring-2 focus:ring-[#b3244b] rounded-md p-2 w-full"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="input bg-[var(--primary-color800)] resize-none border border-gray-300 focus:border-[#b3244b] focus:ring-2 focus:ring-[#b3244b] rounded-md p-2 w-full"
            />

            <button
              type="submit"
              className="w-full bg-[var(--primary-color900)] border border-[var(--primary-color200)] hover:bg-[var(--primary-color200)] hover:text-[var(--primary-color900)] text-[var(--primary-color200)] py-3 rounded-md font-medium transition"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
