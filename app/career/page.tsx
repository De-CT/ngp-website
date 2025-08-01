import Navbar from "../Components/Navbar"
import CareerPage from "../Components/CareerPage/CareerPage"
import Footer from "../Components/Footer"

const Career = () => {
  return (
    <div>
      <Navbar backgroundColor="var(--primary-color900)" textColor="#ffffff"/>
      <div className="min-h-screen text-white ">
        <CareerPage />
      </div>
      <Footer view={false} />
    </div>
  )
}

export default Career
