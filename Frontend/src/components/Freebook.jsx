import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axiosInstance from "../api/axiosInstance";
import Cards from "./Cards";

function Freebook() {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [sliderKey, setSliderKey] = useState(0); // Key to force re-render
  
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axiosInstance.get("/book/get");
        const data = res.data.filter((data) => data.category === "Free");
        setBook(data);
        setSliderKey(sliderKey + 1); // Re-render slider when data is set
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false); // Stop loading once data is fetched
      }
    };
    getBook();
  }, []);

  const settings = {
    dots: true,
    infinite: true, // Allow infinite scroll
    speed: 500,
    slidesToShow: 3, // Show 3 slides on large screens
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,  // Large screens and up
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,  // Tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,  // Mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
      <div className="text-center md:text-left">
        <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
        <p>
          Dive into our collection of free books available for you to explore. Whether you're looking for engaging reads or informative texts, we have a selection to suit your interests.
        </p>
      </div>

      <div className="mt-6">
        {loading ? (
          // Loader Symbol
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900 dark:border-white"></div>
          </div>
        ) : (
          <Slider key={sliderKey} {...settings}>
            {book.length > 0 ? (
              book.map((item) => <Cards item={item} key={item.id} />)
            ) : (
              <div>No books available</div>
            )}
          </Slider>
        )}
      </div>
    </div>
  );
}

export default Freebook;
