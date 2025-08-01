import React from "react";

const PartnersSection = () => {
  const partners = [
    { name: "CAS", color: "text-blue-400" },
    { name: "Danny", color: "text-red-500" },
    { name: "Wix", color: "text-orange-400" },
    { name: "CXP", color: "text-purple-400" },
    { name: "Netchport", color: "text-gray-300" },
    { name: "thankarth", color: "text-purple-300" },
    { name: "Deeep", color: "text-green-400" },
    { name: "Studio", color: "text-orange-500" },
  ];

  return (
    <section className="py-12 bg-[var(--primary-color900)] mb-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-left mb-8">
          <h2 className="text-white text-2xl md:text-5xl font-bold text-center">Our Partners</h2>
        </div>

        {/* Partners Grid */}
        <div className="flex flex-wrap items-center justify-start gap-x-8 gap-y-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group cursor-pointer transition-all duration-300 active:scale-110 hover:scale-110 active:-translate-y-1 hover:-translate-y-1"
            >
              <span
                className={`${partner.color} text-sm font-bold tracking-wide transition-all duration-300 
                group-hover:brightness-125 group-active:brightness-125 group-hover:drop-shadow-lg group-active:drop-shadow-lg opacity-80 group-hover:opacity-100 group-active:opacity-100`}
              >
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { PartnersSection };
