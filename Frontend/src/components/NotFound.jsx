import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div
      className={`h-screen flex flex-col items-center justify-center ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-2xl mt-4">Oops! Page not found.</p>
      <Link
        to="/"
        className={`mt-6 px-4 py-2 rounded-md text-white ${
          theme === "dark" ? "bg-pink-700 hover:bg-pink-800" : "bg-pink-500 hover:bg-pink-600"
        }`}
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
