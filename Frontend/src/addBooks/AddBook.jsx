import React, { useState } from "react";
import AddBooks from "../components/AddBooks";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AddBook() {

  return (
         <>
            <Navbar />
            <div className=" min-h-screen">
            <AddBooks />
           </div>
         
            
           <Footer />
        
         </>
  );
}

export default AddBook;
