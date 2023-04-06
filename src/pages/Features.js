import React from "react";
import Platforms from "../components/Platforms";
import Navbars from "../components/Navbar";
import Footer from "../components/Footer";

const Features = () => {
  return (
    <div style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }} >
     
     <Navbars className=""/>  
      <Platforms />
      <Footer/> 
    </div>
  );
};
export default Features;
