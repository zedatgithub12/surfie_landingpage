import React from "react";
import { Container, Navbar, NavLink } from "react-bootstrap";

import Navbars from "../components/Navbar";
import HeroImage from "../components/HeroImage";
import Footer from "../components/Footer";
import Faq from "../components/Faq";
import How from "../components/How";
import Pricingcom from "../components/Pricingcom";


const Home=()=>{
    return(
       <div>
       
        <Navbars/>  
        <HeroImage/>
        <How/>         
        <Pricingcom/>    
        <Faq/> 
        <Footer/>    
       </div>
    );
};

export default Home;