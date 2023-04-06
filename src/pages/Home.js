import React from "react";
import Navbars from "../components/Navbar";
import HeroImage from "../components/HeroImage";
import Footer from "../components/Footer";
import How from "../components/How";

import Pricingcom from "../components/Pricingcom";




const Home=()=>{
    return(
       <div style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }} >
       
        <Navbars/>  
        <HeroImage/>
        <How/>          
        <Pricingcom/>           
        <Footer/> 
       
       </div>
    );
};

export default Home;