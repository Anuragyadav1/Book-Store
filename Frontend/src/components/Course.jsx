import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axiosInstance from "../api/axiosInstance";

function Course() {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const getBook = async () => {
      try {
        const { data } = await axiosInstance.get("/book/get");
        setBook(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false); // Stop loading once data is fetched
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        {/* Static Content */}
        <div className="mt-24 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            Discover our diverse collection of books and dive into a world of knowledge and adventure. We’re excited to help you find your next great read!
          </p>
        </div>

        {/* Dynamic Content */}
        <div className="mt-12">
          {loading ? (
            // Loader Symbol
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900 dark:border-white"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {book.length > 0 ? (
                book.map((item) => <Cards key={item.id} item={item} />)
              ) : (
                <div>No books available</div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Course;
