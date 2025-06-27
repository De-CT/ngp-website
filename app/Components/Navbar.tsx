import React from 'react'
import Image from 'next/image'
import LogoImage from "../assets/missionlogo.svg"
import Link from 'next/link'

interface NavbarProps {
  backgroundColor?: string;
  textColor?: string;
}



const Navbar = ({ backgroundColor, textColor  }: NavbarProps) => {

  const navList = [
    { name: 'Home', link: '/' },
    { name: 'About us', link: '/aboutUs' },
    { name: 'Donation', link: '/donation' },
    { name: 'Event Details', link: '/eventDetails' },
    { name: 'Contact us', link: '/contactUs' },
  ];


  return (
    <div 
      className="w-full h-16 flex items-center justify-between px-4"
      style={{ backgroundColor }} 
    >
      <Image
        src={LogoImage}
        alt="Logo"
        width={100}
        height={100}
        className="rounded-full"
      />

      <div className='flex items-center space-x-4'>
        {navList.map((link, index) => (
          <Link
            key={index}
            href={link.link}
            className='text-sm font-medium hover:underline transition duration-300'
            style={{ color: textColor }}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className='flex items-center space-x-4'>
        <Link href="/" className={`text-sm font-medium hover:underline transition duration-300 border border-black  px-5 py-2  rounded-md`}
         style={{color: textColor}}
        >
          Login
        </Link>
        <Link href="/" className={`text-sm font-medium hover:underline transition duration-300 border bg-[#761C30] px-5 py-2 text-white rounded-md`}>
          Create Account
        </Link>
      </div>
    </div>
  )
}

export default Navbar
