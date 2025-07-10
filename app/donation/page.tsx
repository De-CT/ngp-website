"use client";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import DonationPage from "../Components/DonationPage/DonationPage";

const Donation = () => {
  return (
    <div>
      <Navbar backgroundColor="var(--primary-color900)" textColor="#ffffff" />
      <DonationPage />
      <Footer view={false} />
    </div>
  );
};

export default Donation;
