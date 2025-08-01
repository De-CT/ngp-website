import Link from "next/link";
import React from "react";

const DonateBanner = () => {
  return (
    <section
      className={`bg-[url(/mapbase.svg)] bg-[var(--primary-color600)]  bg-no-repeat bg-center bg-cover w-[95%] md:w-[90%] mx-auto max-md:rounded-2xl flex flex-col  justify-between text-center rounded-4xl py-8`}
    >
      <div className="flex flex-col items-center justify-center h-full p-6 space-y-4 lg:w-3/5 mx-auto">
        <h2 className="text-2xl md:text-4xl font-semibold mb-2 text-white">
          Secure a rewarding future even as you impact lives — Donate Now!
        </h2>
        <p className="text-white mt-5">
          Behind every donation is a story of hope restored, a need met, a life
          uplifted. If you feel the tug on your heart, don’t wait. Give today,
          and be the reason someone smiles tomorrow.
        </p>
        <div className="inset-0 active:bg-gradient-to-r hover:bg-gradient-to-r from-[#FFC636] via-[#F85535] to-[#2789CA] rounded p-[2px]">
          <button className="bg-white text-lg text-[var(--primary-color600)]  px-6 py-2 rounded font-bold">
            <Link
              href="https://visionngp.com"
            >
              Get started
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export { DonateBanner };
