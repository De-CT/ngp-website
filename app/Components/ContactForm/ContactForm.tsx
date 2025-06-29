"use client";

import Image from "next/image";
import ContactImage from "../../assets/ContactUsImage/Rectangle 27.svg";
import LocationImage from "../../assets/ContactUsImage/Frame 1133.png";

const ContactForm = () => {
  return (
    <main className="bg-[#1f0f1b] text-white min-h-screen py-10 px-6 md:px-16">
      <nav className="text-sm text-gray-400 mb-6">
        <span className="hover:underline cursor-pointer">Home</span> &gt;
        <span className="text-white font-medium">Contact Us</span>
      </nav>
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-4">We’d love to hear from you!</h1>
        <p className="text-gray-300 max-w-2xl">
          Whether you have a question about our work, want to explore
          partnership opportunities, or are interested in volunteering, we’re
          here to help.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-[#4b1c2b] p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Let’s Talk</h2>
          <p className="pt-4 mb-4">
            Get in touch with us using the enquiry form or contact details below
          </p>
          <form className="space-y-5">
            {/* Name + Subject */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="input bg-[#761C30] border border-gray-300 focus:border-[#b3244b] focus:ring-2 focus:ring-[#b3244b] rounded-md p-3"
              />
              <input
                type="text"
                placeholder="Subject"
                className="input bg-[#761C30] border border-gray-300 focus:border-[#b3244b] focus:ring-2 focus:ring-[#b3244b] rounded-md p-3"
              />
            </div>

            {/* Phone + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Eg. +234 8123456789"
                className="input bg-[#761C30] border border-gray-300 focus:border-[#b3244b] focus:ring-2 focus:ring-[#b3244b] rounded-md p-3"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="input bg-[#761C30]  border border-gray-300 focus:border-[#b3244b] focus:ring-2 focus:ring-[#b3244b] rounded-md p-3"
              />
            </div>

            {/* Message */}
            <textarea
              rows={5}
              placeholder="Type something..."
              className="input bg-[#761C30] resize-none border border-gray-300 focus:border-[#b3244b] focus:ring-2 focus:ring-[#b3244b] rounded-md p-7 w-full"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-[100%] bg-transparent hover:bg-[#761C30] text-white border border-whiite px-6 py-3 rounded-md font-medium transition flex justify-center items-center mx-auto"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Image & Contact Info */}
        <div className="flex flex-col gap-6">
          <div className="w-full h-52 md:h-96 relative rounded-lg overflow-hidden">
            <Image
              src={ContactImage}
              alt="Contact"
              fill
              className="object-cover"
            />
          </div>

          <div className="bg-[#4b1c2b] p-6 rounded-lg space-y-5">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 relative">
                <Image
                  src={LocationImage}
                  alt="Email"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold">Email Contact</h4>
                <p className="text-sm text-gray-300">support@visionngp.org</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 relative">
                <Image
                  src={LocationImage}
                  alt="Email"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold">Phone Number</h4>
                <p className="text-sm text-gray-300">+234 905 000 8142</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 relative">
                <Image
                  src={LocationImage}
                  alt="Email"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold">Location</h4>
                <p className="text-sm text-gray-300">
                  No 20 Ogunlana Street, Off Ogunmefun, Yaba, Lagos Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactForm;
