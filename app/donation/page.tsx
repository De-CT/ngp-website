import  Navbar  from "../Components/Navbar";
import DonationPage from "../Components/DonationPage/DonationPage";
import Footer from"../Components/Footer";

const Donation = () => {
  return (
    <div>
     <Navbar backgroundColor="#1f0f1b" textColor="#ffffff"/> 
        <DonationPage />
       <Footer view={false}/>
    </div>
  )
}

export default Donation
