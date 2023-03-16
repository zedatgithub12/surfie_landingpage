import React from "react";
import Aboutus from "../components/Aboutus";
import Footer from "../components/Footer";
import Navbars from "../components/Navbar";

const About=()=>{
    return(
       <div>
        <Navbars/>      
       <Aboutus/>
       <Footer/> 
       </div>
    );
};
export default About;