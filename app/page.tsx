import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HomePage from "./Components/HomePage/HomePage";
import HomePageHeroSection from "./Components/HomePageHeroSection/HomePageHeroSection";


export default function Home() {
  return (
    <>
      <Navbar />

      <HomePageHeroSection />

      <HomePage />

      <Footer view={true} />
    </>
  );
}
