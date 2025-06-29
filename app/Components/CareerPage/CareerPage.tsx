'use client';

import Image from 'next/image';
import HeroImage from '../../assets/Creative Brainstorming with Lightbulb (1).svg';
import { FaHeart, FaGlobe, FaGift } from 'react-icons/fa';

export default function CareersPage() {
  return (
    <main className="bg-[#5F1627] text-white min-h-screen py-10 px-6 md:px-16 space-y-10">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-400">
        <span className="hover:underline cursor-pointer">Home</span> &gt;
        <span className="mx-1">Career</span>
      </nav>

      {/* Page Header */}
      <div>
        <h1 className="text-4xl font-bold mb-3">Join Our Journey As We Impact Lives</h1>
        <p className="text-gray-300 max-w-3xl">
          As a VisionNGP member, you’ll be part of a committed, fast-moving team dedicated to sustainable impact for communities across Africa. Check out available opportunities below.
        </p>
      </div>

      {/* Hero Image */}
      <div className="w-full h-64 md:h-[400px] rounded-lg overflow-hidden relative">
        <Image src={HeroImage} alt="Team collaboration" fill className="object-cover" />
      </div>

      {/* Why Join Us */}
      <div >
        <h2 className="text-2xl font-semibold mb-4">Why Join Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#3e1422] p-6 rounded-lg">
          <div className="space-y-2">
            <FaHeart className="text-[#f3c1cb] text-3xl" />
            <h3 className="text-lg font-bold">Work With Purpose</h3>
            <p className="text-sm text-gray-300">Join a cause that changes lives and empowers communities across Africa and beyond.</p>
          </div>
          <div className="space-y-2">
            <FaGlobe className="text-[#f3c1cb] text-3xl" />
            <h3 className="text-lg font-bold">Global Team</h3>
            <p className="text-sm text-gray-300">Enjoy collaboration with talented individuals from diverse backgrounds across the globe.</p>
          </div>
          <div className="space-y-2">
            <FaGift className="text-[#f3c1cb] text-3xl" />
            <h3 className="text-lg font-bold">Rewards</h3>
            <p className="text-sm text-gray-300">Receive competitive compensation, benefits, and meaningful work experience.</p>
          </div>
        </div>
      </div>

      {/* Openings */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Our Current Openings</h2>
        <hr className="my-12" />
        <div className="space-y-4 bg-[#4b1c2b] p-6 rounded-lg h-[700px] overflow-y-auto">
          <div className='h-[1200px]'>

            {[
              'Program Manager',
              'Fundraising Officer',
              'Marketing Specialist',
              'Media/Communications Lead',
              'Volunteer Coordinator',
            ].map((title, index) => (
              <div key={index} className="flex justify-between items-center bg-[#330d1f] p-4 rounded-md">
                <p className="font-medium">{title}</p>
                <button className="bg-[#991b3d] hover:bg-[#b3244b] px-4 py-2 text-sm rounded-md font-semibold">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Information */}

      {/* Note */}
      <div className="text-sm text-white">
        <strong>NOTE:</strong> Interested candidates can submit their resume and letter of interest to:
        <a href="mailto:careers@visionngp.org" className="text-red-300 underline ml-1">careers@visionngp.org</a>
        <br />
        Please include the position title in your subject line. We look forward to hearing from you!
      </div>
    </main>
  );
}
