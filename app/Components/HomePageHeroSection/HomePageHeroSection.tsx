import worldImage from "../../assets/worldImage.svg";
import Image from "next/image";

const HomePageHeroSection = () => {
  return (
   
      <div
        className={`bg-[url(/worldBg.svg)] bg-[var(--primary-color600)] bg-no-repeat bg-right bg-contain h-[660px] w-[98%] mx-auto rounded-[20px] flex justify-between`}
      >
        <div className="w-[70%] absolute flex flex-col items-start mt-16 pl-15 gap-4">
          <h4 className="bg-[var(--primary-color500)] border border-[var(--primary-color300)] rounded-[44px] w-auto px-4 py-2 text-white">
            Welcome to Vision-NGP Foundation
          </h4>
          <h1 className="text-[52px] font-bold  text-white">
            <span>
              {" "}
              The world’s first{" "}
              <span className="text-[#FFC636]">philanthropic platform</span>
            </span>
            <span> that rewards generosity with prosperity.</span>
          </h1>
          <p className="text-base text-white w-[679px]">
            At Vision-NGP, we believe that giving should empower the giver as
            much as the cause. We are the first foundation in the world to
            reward our affiliate members with a 300% cash return on their
            donations within 48 months — while supporting impactful global
            projects that transform lives.
          </p>
          <p className="text-base font-semibold text-white w-[679px]">
            Join a movement where every donation multiplies — in purpose and in
            reward.
          </p>
          <button className="rounded bg-white px-5 py-3 font-bold text-xl">
            Make a donation
          </button>
        </div>
        <div className="w-1/3 absolute right-0 h-[660px]">
          <Image
            src={worldImage}
            alt="Event banner"
            className="absolute top-50 left-[50%]"
          />
          <Image
            src={worldImage}
            alt="Event banner"
            className="absolute top-20 left-[20%]"
            width={50}
            height={50}
          />
          <Image
            src={worldImage}
            alt="Event banner"
            className="absolute top-80 right-[20%]"
            width={60}
            height={60}
          />
          <Image
            src={worldImage}
            alt="Event banner"
            className="absolute top-[70%] right-[8%]"
            width={80}
            height={80}
          />
          <Image
            src={worldImage}
            alt="Event banner"
            className="absolute top-[20%] right-[5%]"
            width={60}
            height={60}
          />
          <Image
            src={worldImage}
            alt="Event banner"
            className="absolute top-[20%] right-[20%]"
            width={60}
            height={60}
          />
          <Image
            src={worldImage}
            alt="Event banner"
            className="absolute top-[15%] left-[40%]"
            width={60}
            height={60}
          />
          <Image
            src={worldImage}
            alt="Event banner"
            className="absolute top-[55%] left-[40%]"
            width={60}
            height={60}
          />
        </div>
      </div>
  )
}

export default HomePageHeroSection
