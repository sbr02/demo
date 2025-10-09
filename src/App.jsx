import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Plans from "./components/Plans";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";


const App = () => {
  const [dark, setDark] = useState(false);
  const toggleTheme = () => setDark(!dark);

  return (
    <div className={`transition-colors duration-300 ${dark ? "bg-black" : "bg-white"}`}>
      <Navbar dark={dark} toggleTheme={toggleTheme} />

      {/* Home Section */}
      <div className="min-h-screen">
        <Home dark={dark}/>
      </div>

      {/* About Section */}
      <div className="min-h-screen">
        <About dark={dark}/>
      </div>

      <div className="min-h-screen">
        <Services dark={dark}/>
      </div>

      <div className="min-h-screen">
        <Plans dark={dark}/>
      </div>

      <div className="min-h-screen">
        <Testimonials dark={dark}/>
      </div>

      <Contact dark={dark}/>
      
      <Footer/>
      
    </div>
  );
};

export default App;

