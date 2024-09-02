import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";
function Course() {
  const [book, setBook] = useState([]);

  // const dummyBooks = [
  //   {
  //     name: 'The Great Gatsby',
  //     price: 10.99,
  //     category: 'Classic',
  //     image: 'https://cdn.pixabay.com/photo/2016/03/27/19/32/book-1283865_1280.jpg',
  //     title: 'The Great Gatsby'
  //   },
  //   {
  //     name: 'To Kill a Mockingbird',
  //     price: 8.99,
  //     category: 'Classic',
  //     image: 'https://cdn.pixabay.com/photo/2015/12/05/08/25/fantasy-1077863_1280.jpg',
  //     title: 'To Kill a Mockingbird'
  //   },
  //   {
  //     name: '1984',
  //     price: 6.99,
  //     category: 'Dystopian',
  //     image: 'https://cdn.pixabay.com/photo/2016/11/18/16/56/book-1835799_1280.jpg',
  //     title: '1984'
  //   },
  //   {
  //     name: 'Moby Dick',
  //     price: 12.99,
  //     category: 'Adventure',
  //     image: 'https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_1280.jpg',
  //     title: 'Moby Dick'
  //   }
  // ];
  

  // useEffect(() => {
  //   // Function to set dummy data
  //   const seedData = () => {
  //     setBook(dummyBooks);
  //   };
    
  //   seedData();  // Call seedData once after initial render
  // }, []);  // Empty dependency array means this runs once after initial render


  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book/get");
        
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-24 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
          Discover our diverse collection of books and dive into a world of knowledge and adventure. We’re excited to help you find your next great read!
          
          </p>
          {/* <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link> */}
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
