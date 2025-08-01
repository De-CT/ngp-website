import Image from "next/image";
import React from "react";
import gallery1 from "../../assets/Rectangle 22.svg";

const LeadershipTeam = () => {
  const leaders = [
    {
      name: "Pastor Kenneth E. Adams",
      title: "Founder & CEO",
      description:
        "With over 20 years of experience in nonprofit leadership, Pastor, Kenneth has been at the forefront of global philanthropy and social change.",
      image: gallery1,
    },
    {
      name: "Evelyn E. Adams",
      title: "Chief Operations Officer",
      description: "",
      image: gallery1,
    },
    {
      name: "Maureen Fashina",
      title: "Director of Global Partnerships",
      description: "",
      image: gallery1,
    },
    {
      name: "Joy Eholor",
      title: "Chief Financial Officer",
      description: "",
      image: gallery1,
    },
    {
      name: "Jasmine E. Adams",
      title: "Director of Volunteer Engagement",
      description: "",
      image: gallery1,
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-5xl font-bold text-white mb-6">
            Our Leadership Team
          </h2>
          <p className="text-base max-w-4xl mx-auto leading-relaxed">
            Our senior pastor is committed to developing godly men and women who
            will impact our community through evangelism and discipleship. Meet
            our leadership team.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="flex flex-wrap gap-5 max-w-5xl mx-auto justify-center">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="inset-0 active:bg-gradient-to-r active:p-[2px]  hover:bg-gradient-to-r bg-[var(--primary-color900)] from-[#FFC636] via-[#F85535] to-[#2789CA] group relative overflow-hidden rounded shadow-2xl hover:shadow-3xl active:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 active:-translate-y-2 w-full md:w-[48%] lg:w-[32%] select-none"
            >
              {/* Image Container */}
              <div className="relative h-105 bg-gradient-to-b from-gray-800 to-gray-900 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10"></div>
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover object-center group-hover:scale-110 group-active:scale-110 rounded transition-transform duration-700"
                />

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-white text-xl font-bold mb-2 leading-tight">
                    {leader.name}
                  </h3>
                  <p className="text-xs font-normal uppercase tracking-wider">
                    - {leader.title}
                  </p>
                  {leader.description && (
                    <p className="text-xs mt-3 hidden leading-relaxed opacity-0 group-hover:opacity-100 group-active:opacity-100 group-active:block group-hover:block transition-all duration-1000">
                      {leader.description}
                    </p>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { LeadershipTeam };
