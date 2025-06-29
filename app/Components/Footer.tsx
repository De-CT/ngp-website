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

      <div className=" px-6 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center pb-8 border-b border-[#b48a91]">
          <div>
            <h2 className="font-bold text-2xl md:text-[52px] mb-2">Connect With Us</h2>
            <p className="text-sm text-[#663e47] max-w-md">
              Reach out to us for support, questions, or to learn more about our
              services
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center md:w-auto rounded-md shadow-sm">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-2 rounded-l-md w-full md:w-64 focus:outline-none  bg-white border border-[#b48a91]"
            />
            <button className="bg-[#730c1b] text-white px-4 py-2 rounded-r-md ml-2">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 py-10">
          {/* Logo & Contact */}
          <div className="col-span-1">
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
            <div className="flex items-center mt-4 text-[#500718] space-x-2">
              <FaPhone />
              <span>+234 81 32984 74389</span>
            </div>
            <div className="flex items-center mt-2 text-[#500718] space-x-2">
              <FaEnvelope />
              <span>hello@visionNGPfoundation.com</span>
            </div>
          </div>

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
