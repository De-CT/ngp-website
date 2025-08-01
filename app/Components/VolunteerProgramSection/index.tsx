import Image from "next/image";
import React from "react";
import globeRed from "../../assets/globeRed.svg";
import lightBulb from "../../assets/lightBulb.svg";
import target from "../../assets/target.svg";
import partnership from "../../assets/partnership.svg";
import brainstorm from "../../assets/brainstorm.svg";

const VolunteerProgram = () => {
  const programs = [
    {
      id: 1,
      title: "Local & Global Opportunities",
      description:
        "Help nonprofits with social media management and digital marketing to expand their reach.",
      icon: globeRed,
      bgColor: "bg-pink-100",
      iconBg: "bg-pink-500",
    },
    {
      id: 2,
      title: "Skills-Based Service",
      description:
        "Apply your professional skills to meaningful nonprofit projects - from marketing to technology solutions.",
      icon: lightBulb,
      bgColor: "bg-orange-100",
      iconBg: "bg-orange-500",
    },

    {
      id: 3,
      title: "Flexible Engagement",
      description:
        "Choose when and how you volunteer with opportunities that fit your schedule and interests.",
      icon: target,
      bgColor: "bg-purple-100",
      iconBg: "bg-purple-500",
    },
    {
      id: 4,
      title: "Global Impact Network",
      description:
        "Connect with like-minded volunteers and nonprofits from around the world to create lasting impact.",
      icon: partnership,
      bgColor: "bg-blue-100",
      iconBg: "bg-blue-500",
    },
    {
      id: 5,
      title: "Community Mobilization",
      description:
        "Help mobilize communities for social causes and create meaningful change at the grassroots level.",
      icon: brainstorm,
      bgColor: "bg-green-100",
      iconBg: "bg-green-500",
    },
  ];

  return (
    <section className="bg-[var(--second-color1000)] px-6 md:px-16 py-24">
      <div className="">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
            Our Volunteer Program
          </h2>
          <p className="text-base max-w-5xl leading-relaxed">
            At Vision-NGP Foundation, we believe that every person can make a
            difference. Our volunteer program provides an opportunity for
            individuals to contribute their time, skills, and passion to
            impactful projects around the world. Here&#39;s how you can get
            involved
          </p>
        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div
              key={program.id}
              className="flex items-start gap-3 relative p-3"
            >
              <Image src={program.icon} alt={program.title} />

              <div className="">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                  {program.title}
                </h3>
                <p className="leading-relaxed text-sm">{program.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { VolunteerProgram };
