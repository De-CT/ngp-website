import Navbar from "../Components/Navbar"
import ProjectsPage from "../Components/ProjectsPage/ProjectsPage"
import Footer from "../Components/Footer"

const OurProject = () => {
  return (
    <div>
      <Navbar backgroundColor="var(--primary-color900)" textColor="#ffffff"/>
      <div className="min-h-screen text-white ">
       <ProjectsPage />
      </div>
      <Footer view={false} />
    </div>
  )
}

export default OurProject
      
