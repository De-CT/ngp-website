import Navbar from "../Components/Navbar"
import CareerPage from "../Components/CareerPage/CareerPage"
import Footer from "../Components/Footer"

const Career = () => {
  return (
    <div>
      <Navbar backgroundColor="#5F1627" textColor="#ffffff"/>
      <div className="min-h-screen bg-[#5F1627] text-white px-6 py-12">
        <CareerPage />
      </div>
      <Footer view={false} />
    </div>
  )
}

export default Career
