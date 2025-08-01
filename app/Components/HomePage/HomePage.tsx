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
import { DonateBanner } from "../DonateBanner";

export default function HomePage() {
  const features = [
    { icon: image1, title: "Access to clean and drinkable water" },
    { icon: image2, title: "Community health and wellness" },
    { icon: image3, title: "Micro enterprise funding, training and empowerment" },
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
      title: "Become an affiliate",
      desc: "Once you donate, you’re automatically enrolled as an affiliate. You'll receive a unique referral link to share.",
    },
    {
      step: three,
      title: "Track & Earn Rewards",
      desc: "Access your secure dashboard to track any of the following rewards; lifestyle voucher rewards, travel voucher rewards, health voucher rewards, shopping voucher rewards, cash royalty voucher rewardswh, all these and much more, within the projected period of your donation",
    },
    {
      step: four,
      title: "Invite & Share",
      desc: "Refer others to join and multiply this first of a kind impact. The more you share the faster the reward cycle acccelerates and lives and communities are transformed.",
    },
  ];

  const faqs = [
    {
      question: "Why are we the first of our kind",
      answer:
        "Simple !! We are the world’s first philanthropic foundation that rewards generosity with prosperity.",
    },
    {
      question: "Why are different from other foundations and NGO’s",
      answer:
        "Simple !!  As a visionary nonprofit organization, we have redefined the way the world experiences philanthropy, by bridging purpose-driven donations with innovative financial reward systems to empower both the donor and the communities we serve.",
    },
    {
      question: "What can affiliates donate?",
      answer:
        "Affiliates are welcome to donate a wide range of valuable resources, including—but not limited to—cars, tractors, books, clothing, food items, land, stocks, cash, professional expertise, and time. Every contribution, whether material or skill-based, plays a vital role in advancing our mission and making a lasting impact.",
    },
    {
      question: "What innovation have we brought",
      answer:
        "Affiliates are welcome to donate a wide range of valuable resources, including—but not limited to—cars, tractors, books, clothing, food items, land, stocks, cash, professional expertise, and time. Every contribution, whether material or skill-based, plays a vital role in advancing our mission and making a lasting impact.",
    },
    {
      question: "What is Vision-NGP Foundation?",
      answer:
        "Vision-NGP Foundation is a nonprofit organization that combines philanthropy with a reward-based system, offering donors travel rewards voucher, helath rewards voucher and a cash royalty reward as much as 300% of their cash donations over a period of 48 months. We work on global projects in education, healthcare, clean water, and more.",
    },

    {
      question: "Can I donate to specific projects?",
      answer:
        "Yes, you can choose to direct your donation to specific initiatives such as clean water access, education programs, or disaster relief. Your contribution will go directly to the project you choose.",
    },
    {
      question: "Are donations tax-deductible?",
      answer:
        "Yes, donations made to Vision-NGP Foundation are tax-deductible, as we are a registered nonprofit organization. Be sure to keep your donation receipt for tax purposes.",
    },
    {
      question: "How do I become an affiliate?",
      answer:
        "To become an affiliate, simply sign up through our website, make a donation, and start sharing the mission of the Vision-NGP Foundation with others. You’ll receive a personalized dashboard to track your donations, rewards, and referrals.",
    },
    {
      question: "How does the affiliate program work?",
      answer:
        "Affiliates donate to the foundation and receive 300% of their donation back over a 48-month period. Affiliates can also refer others to join and earn rewards based on their referrals.",
    },
    {
      question: "How can I volunteer with the foundation?",
      answer:
        "Volunteers can apply to join our program through our website. We offer both local and international volunteer opportunities, where you can make a meaningful impact in communities around the world.",
    },
    {
      question: "How do I stay updated on the foundation’s activities",
      answer:
        "You can subscribe to our newsletter, follow us on social media, and check our events calendar for the latest updates on our projects and initiatives.",
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
      <DonateBanner />

      {/* Gallery */}
      <section>
        <AutoSlider />
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto space-y-4 px-6 md:px-10">
        <h3 className="text-2xl md:text-[30px] lg:text-[38px] xl:text-[52px] font-bold mb-8 text-center">
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
              <h4
                className={`text-lg md:text-xl ${
                  openFAQ === index ? "font-bold" : "font-semibold"
                } text-gray-600`}
              >
                {faq.question}
              </h4>
              {openFAQ === index ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </button>
            {openFAQ === index && (
              <p className="my-2 mb-4 text-base md:text-lg text-gray-600">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </section>
    </main>
  );
}
