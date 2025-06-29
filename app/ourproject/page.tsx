import Navbar from "../Components/Navbar"
import ProjectsPage from "../Components/ProjectsPage/ProjectsPage"
import Footer from "../Components/Footer"

const OurProject = () => {
  return (
    <div>
      <Navbar backgroundColor="#5F1627" textColor="#ffffff"/>
      <div className="min-h-screen bg-[#5F1627] text-white px-6 py-12">
       <ProjectsPage />
      </div>
      <Footer view={false} />
    </div>
  )
}

export default OurProject
      
