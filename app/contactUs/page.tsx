import  Navbar  from "../Components/Navbar";
import Footer from"../Components/Footer";
import ContactForm from "../Components/ContactForm/ContactForm";


const contactUs = () => {
  return (
    <div className="bg-[#47111D] ">
      <Navbar textColor="white"/>
         <ContactForm />
      <Footer view={false} />
    </div>
  )
}

export default contactUs
