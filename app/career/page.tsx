import Navbar from "../Components/Navbar"
import CareerPage from "../Components/CareerPage/CareerPage"
import Footer from "../Components/Footer"

const Career = () => {
  return (
    <div className="bg-[var(--primary-color1000)]">
      <Navbar backgroundColor="bg-[var(--primary-color1000)]" textColor="#ffffff"/>
      <div className="min-h-screen text-white max-md:py-12">
        <CareerPage />
      </div>
      <Footer view={false} />
    </div>
  )
}

export default Career
