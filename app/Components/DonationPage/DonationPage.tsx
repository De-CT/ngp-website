// app/donation/page.tsx or pages/donation.tsx

import Image from "next/image";
import Hero from "../../assets/Rectangle 11.svg"

const tierData = [
  {
    title: "Starter Impact",
    price: "₦250,000",
    description: "Donations are securely processed and transparently tracked via your affiliate dashboard.",
    highlight: true,
  },
  {
    title: "Community Builder",
    price: "₦500,000",
    description: "Donations are securely processed and transparently tracked via your affiliate dashboard.",
  },
  {
    title: "Community Builder",
    price: "₦750,000",
    description: "Donations are securely processed and transparently tracked via your affiliate dashboard.",
  },
];

const premiumTiers = [
  {
    title: "Global Partner",
    price: "₦1M & Above",
    description: "Donations are securely processed and transparently tracked via your affiliate dashboard.",
  },
  {
    title: "Legacy Leader",
    price: "₦10M & Above",
    description: "Donations are securely processed and transparently tracked via your affiliate dashboard.",
  },
];

export default function DonationPage() {
  return (
    <div className="bg-[#1f0f1b] text-white min-h-screen px-6 py-12 font-sans">
      <nav className="text-sm text-gray-400 mb-6">
        <span className="hover:underline cursor-pointer">Home</span> &gt;
        <span className="text-white font-medium">Donation</span>
      </nav>

      {/* Header */}
      <div className="max-w-4xl flex-start">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Be the change – donate today!</h1>
        <p className="text-gray-300 mb-6 text-sm md:text-base">
          Your donation isn&#39;t just a gift. It’s a commitment to change and to others in meaningful rewards.
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
        <p className="text-gray-400 mt-2 max-w-2xl mx-auto text-sm md:text-base">
          Each donation powers real impact and positions you as a 5000+ team ally for 6 months. All donations are securely processed and transparently tracked in your affiliate dashboard.
        </p>
      </div>

      {/* Tier Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {tierData.map((tier, index) => (
          <div
            key={index}
            className={`rounded-lg p-10 border ${tier.highlight ? "border-yellow-500" : "border-[#342544]"
              } bg-[#761C30] flex flex-col justify-between shadow-md`}
          >
            <div>
              <h3 className="text-lg font-semibold mb-2">{tier.title}</h3>
              <p className="text-3xl font-bold mb-4">{tier.price}</p>
              <p className="text-gray-300 text-sm">{tier.description}</p>
            </div>
            <button className="mt-6 bg-[#47111D] hover:bg-[#761C30] transition-colors px-4 py-2 rounded text-white text-sm font-medium">
              Donate Now
            </button>
          </div>
        ))}
      </div>

      {/* Premium Tier Row */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        {premiumTiers.map((tier, index) => (
          <div
            key={index}
            className="rounded-lg p-6 border border-[#342544] bg-[#761C30] flex flex-col justify-between shadow-md"
          >
            <div>
              <h3 className="text-lg font-semibold mb-2">{tier.title}</h3>
              <p className="text-3xl font-bold mb-4">{tier.price}</p>
              <p className="text-gray-300 text-sm">{tier.description}</p>
            </div>
            <button className="mt-6 bg-[#47111D] hover:bg-[#761C30] transition-colors px-4 py-2 rounded text-white text-sm font-medium">
              Donate Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
