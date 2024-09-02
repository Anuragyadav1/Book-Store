import React, { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted", formData);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-12 mt-16 dark:bg-slate-900 dark:text-white">
      <div className="text-center mb-12">
        <h1 className="text-2xl md:text-4xl font-bold text-pink-500 dark:text-pink-400">
          Get in Touch
        </h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          We'd love to hear from you. Fill out the form below or contact us via email.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="md:w-1/2 w-full">
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 dark:text-gray-300 font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-slate-700 text-gray-900 dark:text-gray-200"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 dark:text-gray-300 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-slate-700 text-gray-900 dark:text-gray-200"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 dark:text-gray-300 font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-slate-700 text-gray-900 dark:text-gray-200"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-pink-500 dark:bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 dark:hover:bg-pink-700 duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="md:w-1/2 w-full md:pl-12 mt-12 md:mt-0">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
              Contact Info
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              <strong>Email:</strong> contact@example.com
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              <strong>Phone:</strong> (123) 456-7890
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              <strong>Address:</strong> 123 Main Road, Anad Vihar, India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
