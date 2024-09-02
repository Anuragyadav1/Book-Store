import React, { useState } from "react";
import AboutUs from "../components/AboutUs";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {

  return (
         <>
            <Navbar />
            <div className=" min-h-screen">
            <AboutUs />
           </div>
         
            
           <Footer />
        
         </>
  );
}

export default About;
