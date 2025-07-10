// app/events/page.tsx or pages/events.tsx

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
    <div className="min-h-screen bg-gradient-to-br from-[var(--primary-color900)] to-[var(--primary-color1000)] text-white px-6 max-md:pt-20 pb-10">
      {/* Header */}

      <nav className="text-sm text-gray-400 ">
        <span className="hover:underline cursor-pointer">Home</span> &gt;
        <span className="mx-1">Events</span>
      </nav>
      <div className="flex flex-start flex-col mb-10">
        <h1 className="text-3xl md:text-5xl font-bold mt-7 mb-3">
          View Our Events
        </h1>
        <p className=" text-sm md:text-base max-w-xl">
          Stay connected and be a part of the Upline MVPs influential global
          network by attending our events. We host a variety of events
          throughout the year, including:
        </p>
        <hr className="mt-8 border-2 border-[var(--primary-color800)]" />
      </div>

      {/* Loop through years */}
      {Object.entries(events)
        .sort((a, b) => Number(b[0]) - Number(a[0]))
        .map(([year, yearEvents]) => (
          <div key={year} className=" mb-12">
            <h2 className="text-2xl font-semibold mb-6">{year}</h2>

            {/* Grid of events */}
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {yearEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-[var(--primary-color800)] rounded-xl p-3 overflow-hidden shadow-md"
                >
                  <div className="mx-auto rounded-2xl h-40" style={{backgroundImage: `url("${event.img.src}")`}}>
                    {/* <Image
                      src={event.img}
                      alt={event.title}
                      className="h-40 w-full"
                      objectFit="cover rounded-md"
                    /> */}
                  </div>
                  <div className="flex pt-4 pb-2 space-x-4">
                    <div className="pr-4 border-r-1 border-[var(--primary-color700)]">
                      <p className="text-sm text-white font-bold mb-1">
                        {event.month}
                      </p>
                      <p className="text-4xl font-bold text-white  mb-1">
                        {event.date}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">{event.title}</h3>
                      <p className="text-sm">
                        Join us to connect, learn, and grow with fellow
                        affiliates worldwide.
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
