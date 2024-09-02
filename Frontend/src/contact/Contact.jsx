import React, { useState } from "react";
import ContactUs from "../components/ContactUs";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {

  return (
         <>
            <Navbar />
            <div className=" min-h-screen">
            <ContactUs />
           </div>
         
            
           <Footer />
        
         </>
  );
}

export default Contact;
