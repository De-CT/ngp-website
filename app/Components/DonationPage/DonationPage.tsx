// app/donation/page.tsx or pages/donation.tsx

import Image from "next/image";
import Hero from "../../assets/Rectangle 11.svg";

const tierData = [
  {
    title: "Starter Impact",
    price: "₦250,000",
    description:
      "Donations are securely processed and transparently tracked via your affiliate dashboard.",
    highlight: true,
  },
  {
    title: "Community Builder",
    price: "₦500,000",
    description:
      "Donations are securely processed and transparently tracked via your affiliate dashboard.",
  },
  {
    title: "Community Builder",
    price: "₦750,000",
    description:
      "Donations are securely processed and transparently tracked via your affiliate dashboard.",
  },
  {
    title: "Global Partner",
    price: "₦1M & Above",
    description:
      "Donations are securely processed and transparently tracked via your affiliate dashboard.",
  },
  {
    title: "Legacy Leader",
    price: "₦10M & Above",
    description:
      "Donations are securely processed and transparently tracked via your affiliate dashboard.",
  },
];


export default function DonationPage() {
  return (
    <div className="bg-gradient-to-br from-[var(--primary-color900)] to-[var(--primary-color1000)] text-white min-h-screen px-6 md:px-10 lg:px-14 max-md:py-20 pb-10 space-y-10">
      {/* Header */}
      <nav className="text-sm text-gray-400 ">
        <span className="hover:underline cursor-pointer">Home</span> &gt;
        <span className="mx-1">Donations</span>
      </nav>

      <div className="max-w-4xl flex-start">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Be the change – donate today!
        </h1>
        <p className="text-gray-300 mb-6 text-sm md:text-base">
          Your donation isn&#39;t just a gift. It’s a commitment to change and
          to others in meaningful rewards.
        </p>
      </div>
      {/* Hero Image */}
      <div className="w-[100%] rounded-lg mb-12">
        <Image
          src={Hero}
          alt="Donation"
          width={1200}
          height={700}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Donation Tiers */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold">Donation Tiers</h2>
        <p className="mt-2 max-w-2xl mx-auto text-sm md:text-base">
          Each donation powers real impact and positions you as a 5000+ team
          ally for 6 months.
        </p>
        <p className="mt-1 max-w-2xl mx-auto text-sm md:text-base">
          All donations are securely processed and transparently tracked in your
          affiliate dashboard.
        </p>
      </div>

      {/* Tier Cards Grid */}
      <div
        className="max-w-6xl mx-auto flex flex-wrap mb-10 gap-6"
        style={{ justifyContent: "space-around" }}
      >
        {tierData.slice(0, 3).map((tier, index) => (
          <div
            key={index}
            className="inset-0 hover:bg-gradient-to-r bg-[var(--primary-color900)] from-[#FFC636] via-[#F85535] to-[#2789CA] rounded p-[2px] md:w-[48%]  lg:w-[30%]"
          >
            <div
              className={`rounded p-10 bg-[var(--primary-color900)] flex flex-col justify-between shadow-md  `}
            >
              <div>
                <h3 className="text-lg font-semibold mb-2">{tier.title}</h3>
                <p className="text-3xl font-bold mb-4">{tier.price}</p>
                <p className="text-gray-300 text-sm">{tier.description}</p>
              </div>
              <button className="mt-6 bg-transparent hover:bg-[var(--primary-color700)] hover:border hover:border-[var(--primary-color900)] border border-[var(--second-color200)] transition-colors px-4 py-4 rounded text-white text-sm font-medium">
                Donate Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Premium Tier Row */}
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6 mb-8">
        {tierData.slice(3, 5).map((tier, index) => (
          <div
            key={index}
            className="inset-0 hover:bg-gradient-to-r bg-[var(--primary-color900)] from-[#FFC636] via-[#F85535] to-[#2789CA] rounded p-[2px] md:w-[48%] lg:w-[30%]"
          >
            <div
              className={`rounded p-10 bg-[var(--primary-color900)] flex flex-col justify-between shadow-md`}
            >
              <div>
                <h3 className="text-lg font-semibold mb-2">{tier.title}</h3>
                <p className="text-3xl font-bold mb-4">{tier.price}</p>
                <p className="text-gray-300 text-sm">{tier.description}</p>
              </div>
              <button className="mt-6 bg-transparent hover:bg-[var(--primary-color700)] hover:border hover:border-[var(--primary-color900)] border border-[var(--second-color200)] transition-colors px-4 py-4 rounded text-white text-sm font-medium">
                Donate Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
