"use client";

import { useState } from "react";
import Image from "next/image";

import image1 from "../../assets/material-symbols_clean-hands.svg";
import image2 from "../../assets/ix_health-filled.svg";
import image3 from "../../assets/material-symbols_clean-hands.svg";
import image4 from "../../assets/f7_house-fill.svg";
import image5 from "../../assets/material-symbols_cast-for-education-rounded.svg";
import image6 from "../../assets/emojione-monotone_building-construction.svg";

import one from "../../assets/WanttodonateHereishowitworks/1.svg";
import two from "../../assets/WanttodonateHereishowitworks/2.svg";
import three from "../../assets/WanttodonateHereishowitworks/3.svg";
import four from "../../assets/WanttodonateHereishowitworks/4.svg";
import { ChevronDownIcon } from "../icons";
import { ChevronUpIcon } from "../icons/ChevronUpIcon";
import { AutoSlider } from "../AutoSlider";
import { EventsCalendar } from "../EventsCalendar";

export default function HomePage() {
  const features = [
    { icon: image1, title: "Access to clean water" },
    { icon: image2, title: "Community health and wellness" },
    { icon: image3, title: "Micro enterprise funding" },
    { icon: image4, title: "Housing and food security" },
    { icon: image5, title: "Education and youth empowerment" },
    { icon: image6, title: "Sustainable development project" },
  ];

  const howItWorks = [
    {
      step: one,
      title: "Make a donation",
      desc: "Select your donation amount and choose a cause. Every contribution counts toward global projects.",
    },
    {
      step: two,
      title: "Become a Pillar",
      desc: "Once you donate, you’re automatically enrolled as an affiliate. You'll receive a unique referral link to share.",
    },
    {
      step: three,
      title: "Track & Earn Rewards",
      desc: "Access your secure dashboard to track your 300% cash reward, projected to be fully returned within 48 months",
    },
    {
      step: four,
      title: "Invite & Share",
      desc: "Refer others to join and multiply your impact. The more you share, the faster your reward cycle accelerates.",
    },
  ];

  const faqs = [
    {
      question: "What is Vision-NGP Foundation?",
      answer:
        "Vision-NGP Foundation is a nonprofit organization that combines philanthropy with a reward-based system, offering donors a 300% reward on their donations over 48 months. We work on global projects in education, healthcare, clean water, and more.",
    },
    {
      question: "How does the affiliate program work?",
      answer:
        "You can donate through our secure online platform using card or bank transfer.",
    },
    {
      question: "Can I donate to specific projects?",
      answer:
        "Yes, all donations are tax deductible under current Nigerian law.",
    },
    {
      question: "Are donations tax-deductible?",
      answer:
        "Absolutely! Visit our volunteer page to sign up and get involved.",
    },
    {
      question: "How do I become an affiliate?",
      answer:
        "Funds go directly to support projects and outreach operations across communities.",
    },
  ];

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-white text-gray-800 space-y-16 py-12 ">
      {/* Header Features */}
      <section className="text-center w-[90%] mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Focusing on What Truly Matters
        </h2>
        <p className="max-w-4xl mx-auto text-gray-500 mb-8">
          Vision-NGP Foundation is a visionary nonprofit organization redefining
          the way the world experiences philanthropy. We bridge purpose-driven
          donations with innovative financial reward systems to empower both the
          donor and the communities we serve.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 bg-[#F6EFF1]">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-row max-md:flex-col items-center max-md:justify-center md:space-x-2 p-10 border-2 border-[#F6EFF1]"
            >
              <div className="text-red-700">
                <Image src={item.icon} alt={item.title} />
              </div>
              <h3 className="font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[#F8F2F4] md:px-16 py-10 px-6 w-full rounded-lg space-y-6">
        <h2 className="max-md:text-2xl text-5xl font-bold  mb-4">
          Want to donate? <br /> Here&lsquo;s how it works
        </h2>
        <div className="grid md:grid-cols-2 p-2">
          {howItWorks.map((step, index) => (
            <div
              key={index}
              className="bg-white flex flex-row relative max-md:h-[200px] h-[268px] items-end border lg:px-6 border-[#F8F2F4] overflow-hidden"
            >
              <div className="flex flex-col flex-start max-md:w-[80%] w-[70%] p-5 relative -top-5">
                <h4 className="font-bold text-[20px] md:text-[32px]">
                  {step.title}
                </h4>
                <p className="text-sm text-gray-500 text-left">{step.desc}</p>
              </div>

              <div
                className={`absolute max-md:-bottom-15 -bottom-20 max-md:text-[200px] text-[270px] ${
                  index === 0
                    ? "right-0 text-[var(--primary-color100)]"
                    : "-right-15 text-[#F8F2F4]"
                } font-bold  `}
              >
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <EventsCalendar />
      </section>

      {/* Donate Banner */}
      <section
        className={`bg-[url(/mapbase.svg)] bg-[var(--primary-color600)]  bg-no-repeat bg-center bg-cover w-[95%] md:w-[90%] mx-auto max-md:rounded-2xl flex flex-col  justify-between text-center rounded-4xl py-8`}
      >
        <div className="flex flex-col items-center justify-center h-full p-6 space-y-4 lg:w-3/5 mx-auto">
          <h2 className="text-2xl md:text-4xl font-semibold mb-2 text-white">
            Secure a rewarding future even as you impact lives — Donate Now!
          </h2>
          <p className="text-white mt-5">
            Behind every donation is a story of hope restored, a need met, a
            life uplifted. If you feel the tug on your heart, don’t wait. Give
            today, and be the reason someone smiles tomorrow.
          </p>
          <div className="inset-0 bg-gradient-to-r from-[#FFC636] via-[#F85535] to-[#2789CA] rounded p-[2px]">
            <button className="bg-white text-lg text-[var(--primary-color600)]  px-6 py-2 rounded font-bold">
              Get started
            </button>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section>
        <AutoSlider />
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto space-y-4 px-6 md:px-10">
        <h3 className="text-2xl font-bold mb-8 text-center">
          Frequently Asked Questions
        </h3>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-[var(--second-color300)] pb-3"
          >
            <button
              className="w-full flex justify-between items-center font-medium text-left"
              onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
            >
              <span>{faq.question}</span>
              {openFAQ === index ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </button>
            {openFAQ === index && (
              <p className="mt-2 text-sm text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </section>
    </main>
  );
}
