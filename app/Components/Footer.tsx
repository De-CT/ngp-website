"use client";

import Image from "next/image";
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import LogoImage from "../assets/missionlogo.svg";
import { useColorTheme } from "../constant";

interface ViewProps {
  view: boolean;
}

const Footer = ({ view }: ViewProps) => {
  const colors = useColorTheme();
  return (
    <footer
      className="text-[#500718] pt-10"
      style={{ backgroundColor: colors.primary }}
    >
      {/* Connect With Us */}

      <div className=" px-6 md:px-10 lg:px-14">
        <div className="flex flex-col md:flex-row gap-4 justify-between pb-8 border-b border-[#b48a91]">
          <div>
            <h2 className="font-bold text-3xl md:text-[34px] lg:text-[38px] xl:text-[52px] mb-2">
              Connect With Us
            </h2>
            <p className="text-sm text-[#663e47] max-w-xs">
              Reach out to us for support, questions, or to learn more about our
              services
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center md:w-auto rounded-md ">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 w-full md:w-64 lg:w-[320px] xl:w-[400px] focus:outline-none  bg-white border border-white shadow-sm rounded-md"
            />
            <button className="bg-[#730c1b] text-white text-sm px-4 py-3 rounded-md ml-2 font-bold lg:w-[140px] xl:w-[177px]">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-between ">
          <div className="max-md:w-full w-1/3">
            <Image
              src={LogoImage}
              alt="Logo"
              width={100}
              height={100}
              className="rounded-full"
            />
            <p className="text-sm text-[#663e47] mt-2 font-medium">
              We redefine the future of global philanthropy by merging
              purposeful giving with sustainable financial empowerment.
            </p>
            <div className="flex items-center text-sm mt-4 text-[#500718] space-x-2">
              <FaPhone />
              <span>+234 81 32984 74389</span>
            </div>
            <div className="flex items-center text-sm mt-2 text-[#500718] space-x-2">
              <FaEnvelope />
              <span>hello@visionNGPfoundation.com</span>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-10 ">
            {/* Logo & Contact */}

            {/* Company */}
            <div>
              <h3 className="font-semibold mb-2">Company</h3>
              <ul className="space-y-1 text-sm text-[#663e47]">
                <li>About Us</li>
                <li>Service</li>
                <li>Career</li>
                <li>Our Projects</li>
                <li>Contact Us</li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-2">Services</h3>
              <ul className="space-y-1 text-sm text-[#663e47]">
                <li>Donation</li>
                <li>Affiliation</li>
              </ul>
            </div>

            {/* Others */}
            <div>
              <h3 className="font-semibold mb-2">Others</h3>
              <ul className="space-y-1 text-sm text-[#663e47]">
                <li>Privacy Policy</li>
                <li>Terms & Condition</li>
              </ul>
            </div>

            {/* Social Icons */}
            <div>
              <h3 className="font-semibold mb-2">Connect with Us</h3>
              <div className="flex space-x-3 mt-2 text-[#500718] text-lg">
                <FaFacebook className="hover:text-[#3b5998]" />
                <FaInstagram className="hover:text-[#E1306C]" />
                <FaTwitter className="hover:text-[#1DA1F2]" />
                <FaYoutube className="hover:text-[#FF0000]" />
                <FaLinkedin className="hover:text-[#0077B5]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      {view && (
        <div className="w-full bg-white text-center py-3 text-[#500718] text-sm">
          {" "}
          © Copyrighted by visionNGPfoundation 2025
        </div>
      )}
    </footer>
  );
};

export default Footer;
