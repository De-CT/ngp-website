import Navbar from "../Components/Navbar";
import EventDetailsPage from "../Components/EventDetailsPage/EventDetailsPage";
import Footer from "../Components/Footer";  

const EventDetails = () => {
  return (
    <div>
      <Navbar backgroundColor="#1f0f1b" textColor="#ffffff" />
        <EventDetailsPage />
      <Footer view={false} />
    </div>
  )
}

export default EventDetails
