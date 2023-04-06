import React from "react";
import Pricingcom from "../components/Pricingcom";
import Footer from "../components/Footer";
import Navbars from "../components/Navbar";
const Pricing = () => {
  return (
    <div style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}>
       <Navbars/>  
      <Pricingcom/>
      <Footer />
    </div>
  );
};
export default Pricing;
