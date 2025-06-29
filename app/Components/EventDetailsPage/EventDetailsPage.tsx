// app/events/page.tsx or pages/events.tsx

import Image from "next/image";
import imag1 from "../../assets/eventImage/Rectangle 11 (1).svg";
import imag2 from "../../assets/eventImage/Rectangle 11 (2).svg";
import imag3 from "../../assets/eventImage/Rectangle 11 (3).svg";

const events = {
  "2025": [
    { date: "17", month: "SEPT", title: "Affiliate Meetup", img: imag1 },
    { date: "16", month: "SEPT", title: "Affiliate Meetup", img: imag2 },
    { date: "15", month: "SEPT", title: "Affiliate Meetup", img: imag3 },
    { date: "14", month: "SEPT", title: "Affiliate Meetup", img: imag1 },
    { date: "13", month: "SEPT", title: "Affiliate Meetup", img: imag1 },
    { date: " 12", month: "SEPT", title: "Affiliate Meetup", img: imag1 },
  ],
  "2024": [
    { date: "20", month: "SEPT", title: "Affiliate Meetup", img: imag1 },
    { date: "19", month: "SEPT", title: "Affiliate Meetup", img: imag1 },
    { date: "18", month: "SEPT", title: "Affiliate Meetup", img: imag1 },
  ],
};

export default function EventDetailsPage() {
  return (
    <div className="min-h-screen bg-[#1f0f1b] text-white px-6 py-12">
      {/* Header */}
      <div className="flex flex-start flex-col mb-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-3">View Our Events</h1>
        <p className="text-gray-300 text-sm md:text-base max-w-xl">
          Stay connected and be a part of the Upline MVPs influential global
          network by attending our events. We host a variety of events
          throughout the year, including:
        </p>
      </div>

      {/* Loop through years */}
      {Object.entries(events)
        .sort((a, b) => Number(b[0]) - Number(a[0]))
       .map(([year, yearEvents]) => (
        <div key={year} className="mb-12 p-12">
          <h2 className="text-2xl font-semibold mb-6">{year}</h2>

          {/* Grid of events */}
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {yearEvents.map((event, index) => (
              <div
                key={index}
                className="bg-[#47111D] rounded-lg overflow-hidden shadow-md"
              >
                <div className="h-40 w-[90%] relative flex mx-auto mt-3 rounded-md">
                  <Image
                    src={event.img}
                    alt={event.title}
                    layout="fill"
                    objectFit="cover rounded-md"
                  />
                </div>
                <div className="flex p-4 space-x-4">
                  <div className="pr-4 border-r-1 border-[#C6909C]">
                    <p className="text-sm text-white font-medium mb-1">
                      {event.month}
                    </p>
                    <p className="text-xl font-bold text-white  mb-1">
                      {event.date}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">
                      <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                      Join us to connect, learn, and grow with fellow affiliates
                      worldwide.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
