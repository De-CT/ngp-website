import Navbar from "./Components/Navbar"
import Footer from  "./Components/Footer"

export default function Home() {
  return (
    <div>
      <Navbar/> 
        <h1>welcome world.</h1>
      <Footer view={true}/>
    </div>
  );
}


