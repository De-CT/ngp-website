"use client";

import React, { useState } from "react";
import Image from "next/image";
import LogoImage from "../assets/missionlogo.svg";
import Link from "next/link";
import { Icons } from ".";

interface NavbarProps {
  backgroundColor?: string;
  textColor?: string;
}

const Navbar = ({ backgroundColor, textColor }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navList = [
    { name: "About us", link: "/aboutUs" },
    { name: "Career", link: "/career" },
    { name: "Donation", link: "/donation" },
    { name: "Event Details", link: "/eventDetails" },
    { name: "Our Project", link: "/ourproject" },
    { name: "Contact us", link: "/contactUs" },
  ];

  return (
    <div
      className="w-full h-16 flex max-md:flex-col items-center justify-between lg:px-4 z-50 max-lg:fixed"
      style={{ backgroundColor: backgroundColor ? backgroundColor : undefined }}
    >
      <div className="w-full fixed justify-center max-lg:bg-white">
        <div
          className={`w-full items-center justify-between p-4 shadow-lg lg:hidden ${
            menuOpen ? "hidden " : "flex"
          }`}
        >
          <Link href="/">
            <Image
              src={LogoImage}
              alt="Logo"
              width={100}
              height={100}
              className="rounded-full"
            />
          </Link>
          <div className=" bg-white md:relative md:right-2 lg:hidden z-30 ">
            <button className="p-2" onClick={() => setMenuOpen(!menuOpen)}>
              <Icons.MenuIcon />
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`z-30 min-h-screen relative   ${
            menuOpen ? "block " : " hidden"
          }`}
        >
          <div
            className={`w-full items-center justify-between p-4 shadow-lg flex`}
          >
            <Link href="/">
              <Image
                src={LogoImage}
                alt="Logo"
                width={100}
                height={100}
                className="rounded-full"
              />
            </Link>
            <div className=" bg-white z-30 ">
              <button className="p-2" onClick={() => setMenuOpen(!menuOpen)}>
                <Icons.CloseIcon />
              </button>
            </div>
          </div>
          <div
            className={` bg-white flex flex-col items-center space-y-2 transition-transform  ${
              menuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <Link
              href={"/"}
              className="text-lg font-medium hover:underline transition duration-300 px-3 py-3 "
              style={{ color: "var(--primary-900)" }}
              onClick={()=> setMenuOpen(false)}
            >
              Home
            </Link>
            {navList.map((link, index) => (
              <Link
                key={index}
                href={link.link}
                className="text-lg font-medium hover:underline transition duration-300 px-3 py-3 "
                style={{ color: "var(--primary-900)" }}
                              onClick={()=> setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col md:hidden"></div>

      <Link href="/" className="max-lg:hidden">
        <Image
          src={LogoImage}
          alt="Logo"
          width={100}
          height={100}
          className="rounded-full"
        />
      </Link>

      <div className="flex max-lg:hidden bg-white items-center space-x-4">
        {navList.map((link, index) => (
          <Link
            key={index}
            href={link.link}
            className="text-sm font-medium hover:underline transition duration-300"
            style={{ color: textColor }}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="flex max-lg:hidden items-center space-x-4">
        <Link
          href="/"
          className={`text-sm font-medium hover:underline transition duration-300 border border-black  px-5 py-2  rounded-md`}
          style={{ color: textColor }}
        >
          Login
        </Link>
        <Link
          href="/"
          className={`text-sm font-medium hover:underline transition duration-300 border bg-[#761C30] px-5 py-2 text-white rounded-md`}
        >
          Create Account
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
