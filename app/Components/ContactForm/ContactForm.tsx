"use client";

import Image from "next/image";
import ContactImage from "../../assets/ContactUsImage/Rectangle 27.svg";
import LocationImage from "../../assets/ContactUsImage/Frame 1133.png";
import LocationPin from "../../assets/locationPinImg.svg";
import MailImg from "../../assets/emailImg.svg";

const ContactForm = () => {
  return (
    <main className="bg-gradient-to-br from-[var(--primary-color900)] to-[var(--primary-color1000)] text-white min-h-screen py-10 max-lg:py-20 px-6 md:px-10 lg:px-14">
      <nav className="text-sm text-gray-400 mb-6">
        <span className="hover:underline cursor-pointer">Home</span> &gt;
        <span className="text-white font-medium"> Contact Us</span>
      </nav>
      <div className="mb-10 mt-2">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4">
          We’d love to hear from you!
        </h1>
        <p className="max-w-3xl">
          Whether you have a question about our work, want to explore
          partnership opportunities, or are interested in volunteering, we’re
          here to help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-[var(--primary-color900)] rounded-lg shadow-md p-6 items-center">
          <h2 className="text-2xl font-bold">Let’s Talk</h2>
          <p className="">
            Get in touch with us using the enquiry form or contact details below
          </p>
          <form className="grid gap-6">
            {/* Name + Subject */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="grid gap-3">
                <label htmlFor="firstName" className="text-sm font-bold">
                  First Name
                </label>
                <input
                  name="firstName"
                  id="firstName"
                  type="text"
                  placeholder="John"
                  className="input bg-[var(--primary-color800)] border border-[var(--primary-color800)] focus:border-[var(--primary-color300)] focus:ring-2 focus:ring-[var(--primary-color300)] rounded-md p-3"
                />
              </div>

              <div className="grid gap-3">
                <label htmlFor="lastName" className="text-sm font-bold">
                  Last Name
                </label>
                <input
                  name="lastName"
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                  className="input bg-[var(--primary-color800)] border border-[var(--primary-color800)] focus:border-[var(--primary-color300)] focus:ring-2 focus:ring-[var(--primary-color300)] rounded-md p-3"
                />
              </div>
            </div>

            {/* Phone + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="grid gap-3">
                <label htmlFor="phoneNum" className="text-sm font-bold">
                  Phone No.
                </label>
                <input
                  name="phoneNum"
                  id="phoneNum"
                  type="number"
                  placeholder="E.g +2348140392049"
                  className="input bg-[var(--primary-color800)] border border-[var(--primary-color800)] focus:border-[var(--primary-color300)] focus:ring-2 focus:ring-[var(--primary-color300)] rounded-md p-3"
                />
              </div>
              <div className="grid gap-3">
                <label htmlFor="emailAddress" className="text-sm font-bold">
                  Email
                </label>
                <input
                  name="emailAddress"
                  id="emailAddress"
                  type="email"
                  placeholder="E.g johndoe@mail.com"
                  className="input bg-[var(--primary-color800)] border border-[var(--primary-color800)] focus:border-[var(--primary-color300)] focus:ring-2 focus:ring-[var(--primary-color300)] rounded-md p-3"
                />
              </div>
            </div>

            {/* Message */}
            <div className="grid gap-3">
              <label htmlFor="message" className="text-sm font-bold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Type something..."
                className="input bg-[var(--primary-color800)] resize-none border border-[var(--primary-color800)] focus:border-[var(--primary-color300)] focus:ring-2 focus:ring-[var(--primary-color300)] rounded-md p-7 w-full"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-[100%] bg-transparent hover:bg-[var(--primary-color800)] text-[var(--primary-color200)] border border-[var(--primary-color200)] px-6 py-3 rounded-md font-semibold transition flex justify-center items-center mx-auto"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Image & Contact Info */}
        <div className="flex flex-col gap-6">
          <div className="w-full h-52 md:h-89 relative rounded-lg overflow-hidden">
            <Image
              src={ContactImage}
              alt="Contact"
              fill
              className="object-cover"
            />
          </div>

          <div className="bg-[var(--primary-color900)] p-6 rounded-lg grid gap-4">
            <div className="flex items-start gap-4 ">
              <div className="w-10 h-10 relative">
                <Image src={MailImg} alt="Email" />
              </div>
              <div>
                <h4 className="font-bold text-xs text-[var(--primary-color300)] mb-1">
                  Quick Contact
                </h4>
                <p className="text-sm ">support@visionngp.org</p>
              </div>
            </div>

            <div className="flex items-start gap-4 border-t border-b border-[var(--primary-color800)] py-4">
              <div className="w-10 h-10 relative">
                <Image src={LocationImage} alt="Email" />
              </div>
              <div>
                <h4 className="font-bold text-xs text-[var(--primary-color300)] mb-1">
                  Phone Number
                </h4>
                <p className="text-sm ">+234 905 000 8142</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 relative">
                <Image src={LocationPin} alt="Email" />
              </div>
              <div>
                <h4 className="font-bold text-xs text-[var(--primary-color300)] mb-1">
                  Locate us
                </h4>
                <p className="text-sm ">
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
