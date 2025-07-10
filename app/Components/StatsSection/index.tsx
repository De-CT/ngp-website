// components/StatsSection.jsx
import React from "react";

const StatsSection = () => {
  return (
    <div className="w-full pt-6 text-white text-left">
      <div className="flex justify-start gap-4">
        <div className="flex flex-col gap-2 justify-between">
          <h3 className="text-sm font-medium">Our Executed Projects</h3>
          <p className="text-3xl font-normal">100</p>
        </div>
        <div className="px-6 flex flex-col justify-between border-x border-x-[var(--primary-color500)]">
          <h3 className="text-sm font-medium">Lives Impacted</h3>
          <p className="text-3xl font-normal">5000+</p>
        </div>
        <div className="flex flex-col justify-between  w-[30%]">
          <h3 className="text-sm font-medium">Upcoming Projects</h3>
          <p className="text-3xl font-normal">50</p>
        </div>
      </div>
    </div>
  );
};

export { StatsSection };
