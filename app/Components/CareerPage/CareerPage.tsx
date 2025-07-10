"use client";

import Image from "next/image";
import HeroImage from "../../assets/Creative Brainstorming with Lightbulb (1).svg";
import GlobalTeam from "../../assets/GlobalTeam.svg";
import WorkWithPurpose from "../../assets/WorkWithPurpose.svg";
import Rewards from "../../assets/Rewards.svg";
import SendAMail from "../../assets/envelope new message.svg";

const JOBOPENINGS = [
  {
    title: "Program Manager",
    description:
      "Oversee and manage global initiatives that drive the foundation’s mission forward.",
  },
  {
    title: "Fundraising Officer",
    description:
      "Develop and implement fundraising strategies to secure resources for impactful projects",
  },
  {
    title: "Marketing Specialist",
    description:
      "Lead communication efforts to engage the public, volunteers, and donors.",
  },
  {
    title: "Volunteer Coordinatoor",
    description:
      "Manage volunteer operations, ensuring effective engagement and support.",
  },
];

const WHYJOINUS = [
  {
    image: WorkWithPurpose,
    title: "Work With Purpose",
    desc: "Be part of a team that is making a real difference in global communities. Work on innovative projects that challenge you and enable you to leave a legacy of impact.",
  },
  {
    image: GlobalTeam,
    title: "Global Team",
    desc: "Enjoy a collaborative, inclusive work environment that fosters growth and development.",
  },
  {
    image: Rewards,
    title: "Rewards",
    desc: "Competitive compensation and benefits, including flexible working arrangements.",
  },
];

export default function CareersPage() {
  return (
    <main className=" bg-gradient-to-br from-[var(--primary-color-900)] to-[var(--primary-color-1000)]  text-white min-h-screen max-md:py-10 space-y-10">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-400 px-6 md:px-10 lg:px-20">
        <span className="hover:underline cursor-pointer">Home</span> &gt;
        <span className="mx-1">Career</span>
      </nav>

      {/* Page Header */}
      <div className="px-6 md:px-10 lg:px-20">
        <h1 className="text-4xl font-bold mb-3">
          Join Our Journey As We Impact Lives
        </h1>
        <p className="text-gray-300 max-w-3xl">
          As a VisionNGP member, you’ll be part of a committed, fast-moving team
          dedicated to sustainable impact for communities across Africa. Check
          out available opportunities below.
        </p>
      </div>

      {/* Hero Image */}
      <div className="w-[95%] mx-auto md:w-[90%] h-[300px] md:h-[431px] rounded-2xl overflow-hidden relative px-6 md:px-10">
        <Image
          src={HeroImage}
          alt="Team collaboration"
          fill
          className="object-cover rounded-2xl"
        />
      </div>

      {/* Why Join Us */}
      <div className="px-6 md:px-10 lg:px-20">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Why Join Us
        </h2>
        <div className="flex max-md:flex-wrap max-md:gap-6 rounded-lg">
          {WHYJOINUS.map((item) => (
            <div
              key={item.title}
              className="space-y-2 bg-gradient-to-br from-[#3A0C17] to-[#1C070C] rounded-lg p-5 md:p-10 md:w-1/3"
            >
              <Image
                src={item.image}
                alt="Work with purpose icon"
                className="rounded-2xl"
              />
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-sm md:text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Openings */}
      <div className="bg-[var(--primary-color900)] px-6 py-10 md:py-20 md:px-10 lg:px-20">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
          Our Current Openings
        </h2>
        <hr className="mb-10 border-[var(--primary-color800)]" />
        <div className="space-y-4">
          <div className="">
            {JOBOPENINGS.map((job, index) => (
              <div
                key={index}
                className="flex max-md:flex-col gap-4 justify-between md:items-center bg-[#3A0C17] p-4 rounded-xl mb-4 "
              >
                <div className="">
                  <h4 className="text-xl md:text-lg font-bold">{job.title}</h4>
                  <p className="font-normal text-base">{job.description}</p>
                </div>

                <div className="inset-0 hover:bg-gradient-to-r bg-[var(--primary-color600)] from-[#FFC636] via-[#F85535] to-[#2789CA] rounded p-[2px] max-md:self-end">
                  <button className="bg-[var(--primary-color600)] px-4 py-2 text-sm rounded font-semibold ">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Information */}

      {/* Note */}
      <div className="px-6 md:px-10 lg:px-20 flex gap-4 items-center md:mb-10">
        <Image
          src={SendAMail}
          alt="Work with purpose icon"
          className="rounded-2xl"
        />
        <div className="text-sm text-white">
          <strong>NOTE:</strong> Interested candidates can submit their resume
          and letter of interest to:
          <a
            href="mailto:careers@visionngp.org"
            className="text-red-300 underline ml-1"
          >
            careers@visionngp.org
          </a>
          <br />
          Please include the position title in your subject line. We look
          forward to hearing from you!
        </div>
      </div>
    </main>
  );
}
