import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
//import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import DarkMode from "./Components/Navbar/DarkMode";
import Hero from "./Components/Hero/Hero";
import Products from "./Components/Products/Products";
import TopProducts from "./Components/TopProducts/TopProducts";
import Banner from "./Components/Banner/Banner";
import Subscribe from "./Components/Subscribe/Subscribe";
import Testimonials from "./Components/Testimonials/Testimonials";
import Footer from "./Components/Footer/Footer";
function App() {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    Aos.init({
      offset:100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    }); 
  }, []);
  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark;text-white duration-200">
        <Navbar handleOrderPopup={handleOrderPopup}/>
        <DarkMode/>
        <Hero handleOrderPopup={handleOrderPopup}/>
        <Products/>
        <TopProducts handleOrderPopup={handleOrderPopup}/>
        <Banner/>
        <Subscribe/>
        <Testimonials/>
        <Footer/>
        {/*<Hero handleOrderPopup={handleOrderPopup}/>*/}
        {/*<DarkMode/>*/}
      </div>
      
    </>
  );
};

export default App;
