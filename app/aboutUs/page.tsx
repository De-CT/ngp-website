import  Navbar  from "../Components/Navbar";
import AboutUsPage from "../Components/AboutUsPage/AboutUs";
import Footer from"../Components/Footer";

const AboutUs = () => {
  return (
    <div>
      <Navbar backgroundColor="#1f0f1b" textColor="#ffffff"/> 
        <AboutUsPage />
       <Footer view={false}/>
    </div>
  )
}

export default AboutUs
