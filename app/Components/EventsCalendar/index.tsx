// components/EventsCalendar.tsx
"use client";

import Image from "next/image";
import React from "react";

import gallery1 from "../../assets/Rectangle 22.svg";
import gallery2 from "../../assets/Rectangle 24.svg";
import { Icons } from "..";

const events = [
  {
    title: "Global Summits & Conferences:",
    description:
      "Join leaders and change-makers from around the world in global summits discussing the future of philanthropy and social good",
    image: gallery1,
    active: true,
  },
  {
    title: "Affiliate Meetups",
    description:
      "A hands-on workshop designed for dental students to practice and enhance their clinical skills.",
    image: gallery2,
    active: false,
  },
  {
    title: "Community Days",
    description:
      "Participate in community outreach programs, including volunteer-driven events and donation drives.",
    image: gallery1,
    active: false,
  },
  {
    title: "Online Webinar",
    description:
      "Engage in online events focused on spreading awareness and educating people about our mission and impact.",
    image: gallery2,
    active: false,
  },
];

const EventsCalendar = () => {
  return (
    <section className="w-[95%] md:w-[90%] mx-auto py-10 bg-white">
      <div className="mb-8 flex max-md:flex-wrap gap-4 items-center">
        <h2 className="text-3xl md:text-[30px] lg:text-[38px] xl:text-[52px] font-bold ">
          Events Calendar
        </h2>
        <p className="text-sm text-[var(--second-color1000)] lg:w-[550px]">
          Stay connected and be a part of the Vision-NGP Foundation’s global
          network by attending our events. We host a variety of events
          throughout the year, including:
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-stretch">
        {/* Left Image Section */}
        <div
          className="relative rounded-xl max-md:h-[400px] bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url("${gallery1.src}")` }}
        >
          {/* <Image
            src={gallery1}
            alt="Global Summit"
            fill
            className="object-cover rounded-xl"
          /> */}
          <div className="absolute bottom-0 left-0 w-full rounded-b-xl bg-gradient-to-t from-black/70 to-transparent text-white p-6">
            <h3 className="text-xl font-bold mb-2">
              Global Summits & Conferences:
            </h3>
            <p className="text-sm mb-4">
              Join leaders and change-makers from around the world in global
              summits discussing the future of philanthropy and social good
            </p>
            <button className="px-4 py-2 bg-white flex gap-2 text-black rounded-md text-base font-semibold hover:bg-gray-200 transition">
              Learn More <Icons.ChevronRightIcon />
            </button>
          </div>
        </div>

        {/* Right Event Cards */}
        <div className="flex flex-col gap-4">
          {events.map((event, idx) => (
            <div
              key={idx}
              className={`flex gap-4 px-2 pt-5 pb-1 ${
                idx > 0 ? "border-t border-[var(--second-color300)]" : ""
              } ${
                event.active
                  ? " border-[var(--second-color300)]"
                  : "bg-white hover:bg-[#F8F2F4]"
              } transition`}
            >
              <div className="w-[80px] h-[80px] relative flex-shrink-0 rounded overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-lg ">{event.title}</h4>
                <p className="text-sm ">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { EventsCalendar };
