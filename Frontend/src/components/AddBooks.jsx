import React, { useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";

function AddBooks() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
    title: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // Add loading state
  const navigate = useNavigate();

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    // Name Validation
    if (!formData.name) {
      tempErrors.name = "Name is required";
      isValid = false;
    }

    // Price Validation
    if (!formData.price) {
      tempErrors.price = "Price is required";
      isValid = false;
    } else if (isNaN(formData.price) || formData.price <= 0) {
      tempErrors.price = "Price must be a positive number";
      isValid = false;
    }

    // Category Validation
    if (!formData.category) {
      tempErrors.category = "Category is required";
      isValid = false;
    }

    // Image URL Validation
    if (!formData.image) {
      tempErrors.image = "Image URL is required";
      isValid = false;
    } 

    // Title Validation
    if (!formData.title) {
      tempErrors.title = "Title is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true); // Set loading state to true
      try {
        await axiosInstance.post("/book/add", formData);
        navigate("/success");
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false); // Reset loading state
      }
    }
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-12 mt-16">
      <div className="text-center mb-12">
        <h1 className="text-2xl md:text-4xl font-bold text-pink-500">
          Add a New Book
        </h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-400">
          Fill out the form below to add a new book to our collection.
        </p>
      </div>
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-1/2"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-md"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-md"
            />
            {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-md"
            />
            {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
              Image URL
            </label>
            <input
              type="text"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-md"
            />
            {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-md"
            />
            {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
          </div>
          <button
            type="submit"
            className={`w-full bg-pink-500 dark:bg-pink-700 text-white px-4 py-2 rounded-md ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-pink-700 dark:hover:bg-pink-600"
            } duration-300`}
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Book"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddBooks;
