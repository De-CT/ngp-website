import Navbar from "../Components/Navbar";
import AboutUsPage from "../Components/AboutUsPage/AboutUs";
import Footer from "../Components/Footer";
import { useColorTheme } from "../constant";

const AboutUs = () => {
  const colors = useColorTheme();

  return (
    <div>
      <Navbar backgroundColor={colors.primary10} textColor="#ffffff" />
      <AboutUsPage />
      <Footer view={false} />
    </div>
  );
};

export default AboutUs;
