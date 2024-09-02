import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Success() {
  return (
    <>
    <Navbar/>
    <div className=" min-h-screen max-w-screen-2xl container mx-auto md:px-20 px-4 py-12 text-center bg-white dark:bg-gray-900 mt-16">
      <h1 className="text-2xl md:text-4xl font-bold text-pink-500 dark:text-pink-300">
        Success!
      </h1>
      <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
        Your book has been added successfully.
      </p>
      <Link to="/add-book">
        <button className="mt-6 bg-pink-500 dark:bg-pink-700 text-white px-4 py-2 rounded-md hover:bg-pink-700 dark:hover:bg-pink-600 duration-300">
          Add Another Book
        </button>
      </Link>
      <br />
      <br />
      <div><b>or</b></div>
      <Link to="/course">
        <button className="mt-6 bg-pink-500 dark:bg-pink-700 text-white px-4 py-2 rounded-md hover:bg-pink-700 dark:hover:bg-pink-600 duration-300">
          Explore the books
        </button>
      </Link>
  </div>
 <Footer/>
  </>
  );
}

export default Success;
