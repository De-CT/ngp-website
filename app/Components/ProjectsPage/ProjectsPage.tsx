"use client";

import Image from "next/image";
import imag1 from "../../assets/eventImage/Rectangle 11 (1).svg";


import type { StaticImageData } from "next/image";

const projectsByYear: Record<string, StaticImageData[]> = {
  2025: [
    imag1,
    imag1,
    imag1,
    imag1,
    imag1,
    imag1,
    imag1,
    imag1,
    imag1,
    imag1,
    imag1,
    imag1,
  ],
  2024: [imag1, imag1, imag1, imag1, imag1, imag1],
  2023: [imag1, imag1, imag1],
};

export default function ProjectsPage() {
  return (
    <main className="bg-gradient-to-br from-[var(--primary-color900)] to-[var(--primary-color1000)] text-white min-h-screen max-lg:pt-20 pb-10 px-6 md:px-10 lg:px-14 space-y-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-2">
        <span className="hover:underline cursor-pointer">Home</span> &gt;
        <span className="mx-1">Our Projects</span>
      </nav>

      {/* Page Header */}
      <div>
        <h1 className="text-4xl font-bold mb-4 mt-8">Our Projects</h1>
        <p className="max-w-7xl">
          We&apos;re passionately committed to creating lasting positive change. Our
          projects are the heart of our mission, directly addressing educational
          disparities, health inequalities, environmental degradation. Each
          initiative is carefully designed to make a tangible impact, fostering
          sustainable solutions and empowering individuals and communities.
        </p>
      </div>

      {Object.entries(projectsByYear)
        .sort((a, b) => Number(b[0]) - Number(a[0]))
        .map(([year, images]) => (
          <section key={year}>
            <h2 className="text-2xl font-semibold my-6">{year}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((imgSrc, idx) => (
                <div
                  key={idx}
                  className="relative w-full aspect-square overflow-hidden rounded-lg shadow"
                >
                  <Image
                    src={imgSrc}
                    alt={`Project ${year} image ${idx + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition duration-300"
                  />
                </div>
              ))}
            </div>
          </section>
        ))}
    </main>
  );
}
