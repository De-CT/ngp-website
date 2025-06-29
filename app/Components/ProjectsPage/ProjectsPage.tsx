'use client';

import Image from 'next/image';
import Project1 from '../../assets/envelope new message.svg';
import Project2 from '../../assets/envelope new message.svg';
import Project3 from '../../assets/envelope new message.svg';
import Project4 from '../../assets/envelope new message.svg';
import Project5 from '../../assets/envelope new message.svg';
import Project6 from '../../assets/envelope new message.svg';
import Project7 from '../../assets/envelope new message.svg';
import Project8 from '../../assets/envelope new message.svg';
import Project9 from '../../assets/envelope new message.svg';
import Project10 from '../../assets/envelope new message.svg';
import Project11 from '../../assets/envelope new message.svg';
import Project12 from '../../assets/envelope new message.svg';


import type { StaticImageData } from 'next/image';

const projectsByYear: Record<string, StaticImageData[]> = {
  2025: [
    Project1, Project2, Project3, Project4,
    Project5, Project6, Project7, Project8,
    Project9, Project10, Project11, Project12,
  ],
  2024: [
    Project1, Project2, Project3, Project4,
    Project5, Project6,
  ],
  2023: [
    Project7, Project8, Project9,
  ]
};

export default function ProjectsPage() {
  return (
    <main className="bg-[#47111D] text-white min-h-screen py-10 px-6 md:px-16 space-y-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-2">
        <span className="hover:underline cursor-pointer">Home</span> &gt; 
        <span className="mx-1">Our Projects</span>
      </nav>

      {/* Page Header */}
      <div>
        <h1 className="text-4xl font-bold mb-4">Our Projects</h1>
        <p className="text-gray-300 max-w-3xl">
          VisionNGP passionately carries out impactful volunteer programs. Our projects are birthed out of a mission to serve underserved communities through clean water solutions, food drives, education & wellness, and empowerment initiatives.
        </p>
      </div>

      
      {Object.entries(projectsByYear)
        .sort((a, b) => Number(b[0]) - Number(a[0])) 
        .map(([year, images]) => (
          <section key={year}>
            <h2 className="text-2xl font-semibold my-6">{year}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((imgSrc, idx) => (
                <div key={idx} className="relative w-full aspect-square overflow-hidden rounded-lg shadow">
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
