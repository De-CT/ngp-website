import worldImage from "../../assets/worldImage.svg";
import Image from "next/image";
import { ChevronRightIcon } from "../icons/ChevronRightIcon";
import { StatsSection } from "../StatsSection";

const HomePageHeroSection = () => {
  return (
    <div
      className={`bg-[url(/worldBg.svg)] bg-[var(--primary-color600)] bg-no-repeat bg-right bg-contain h-[850px] md:h-[660px] w-[98%] mx-auto rounded-[20px] flex justify-between relative`}
    >
      <div className=" md:w-[70%] lg:w-[75%] absolute flex flex-col items-start mt-24 md:mt-16 p-6 md:pl-15 gap-4 z-20">
        <h4 className="bg-[var(--primary-color500)] border border-[var(--primary-color300)] rounded-[44px] w-auto px-4 py-2 font-semibold text-white">
          Welcome to Vision-NGP Foundation
        </h4>
        <h1 className="text-3xl lg:text-[44px] xl:text-[52px] font-bold text-white">
          <span>
            {" "}
            The world’s first{" "}
            <span className="text-[#FFC636]">philanthropic platform</span>
          </span>
          <span> that rewards generosity with prosperity.</span>
        </h1>
        <p className="text-base text-white lg:w-[679px] font-semibold md:font-medium">
          At Vision-NGP, we believe that giving should empower the giver as much
          as the cause. We are the first foundation in the world to reward our
          affiliate members with a 300% cash return on their donations within 48
          months — while supporting impactful global projects that transform
          lives.
        </p>
        <p className="text-base font-semibold text-white lg:w-[679px]">
          Join a movement where every donation multiplies — in purpose and in
          reward.
        </p>
        <div className="inset-0 bg-gradient-to-r from-[#FFC636] via-[#F85535] to-[#2789CA] rounded p-[2px]">
          <button className="rounded flex gap-1 items-center bg-white px-5 py-3 font-bold text-lg">
            Make a donation
            <ChevronRightIcon />
          </button>
        </div>

        <StatsSection />
      </div>
      <div className="md:w-1/3 w-full absolute md:right-0 h-[660px] z-10">
        <Image
          src={worldImage}
          alt="Event banner"
          className="absolute top-[55%] md:top-50 left-[40%] md:left-[50%] max-md:opacity-45 "
        />
        <Image
          src={worldImage}
          alt="Event banner"
          className="absolute top-[60%] md:top-20 left-[10%] md:left-[20%] max-md:opacity-45 "
          width={50}
          height={50}
        />
        <Image
          src={worldImage}
          alt="Event banner"
          className="absolute top-80 left-[20%] md:right-[20%] max-md:opacity-45 "
          width={60}
          height={60}
        />
        <Image
          src={worldImage}
          alt="Event banner"
          className="absolute top-[90%] md:top-[70%] right-[8%] max-md:opacity-45 "
          width={80}
          height={80}
        />
        <Image
          src={worldImage}
          alt="Event banner"
          className="absolute top-[65%] md:top-[20%] right-[5%] max-md:opacity-45 "
          width={60}
          height={60}
        />
        <Image
          src={worldImage}
          alt="Event banner"
          className="absolute top-[40%] md:top-[20%] right-[20%] max-md:opacity-45 "
          width={60}
          height={60}
        />
        <Image
          src={worldImage}
          alt="Event banner"
          className="absolute top-[35%] md:top-[15%] left-[40%] max-md:opacity-45 "
          width={60}
          height={60}
        />
        <Image
          src={worldImage}
          alt="Event banner"
          className="absolute top-[75%] md:top-[55%] left-[40%] max-md:opacity-45 "
          width={60}
          height={60}
        />
      </div>
    </div>
  );
};

export default HomePageHeroSection;
