import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ContactForm from "../Components/ContactForm/ContactForm";

const contactUs = () => {
  return (
    <div>
      <Navbar
        backgroundColor="var(--primary-color900)"
        textColor="white"
      />
      <ContactForm />
      <Footer view={false} />
    </div>
  );
};

export default contactUs;
