import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axiosInstance from "../api/axiosInstance";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider"; // Import useAuth
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Login({ onClose }) {
  const [loading, setLoading] = useState(false); // Loading state
  const [authUser, setAuthUser] = useAuth(); // Use the Auth context
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate(); // Initialize navigate

  const onSubmit = async (data) => {
    setLoading(true); // Set loading state
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axiosInstance
      .post("/user/login", userInfo)
      .then((res) => {
        setLoading(false); // Stop loading
        if (res.data) {
          toast.success("Logged in Successfully");
          setAuthUser(res.data.user); // Set authUser in the Auth context
          localStorage.setItem("Users", JSON.stringify(res.data.user)); // Store user data in localStorage
          onClose(); // Close modal on success
          navigate("/"); // Navigate to home page after successful login
        }
      })
      .catch((err) => {
        setLoading(false); // Stop loading on error
        if (err.response) {
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="modal-box relative">
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={onClose} // Close modal on click
        >
          ✕
        </button>

        <h3 className="font-bold text-lg">Login</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <span className="text-sm text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <span className="text-sm text-red-500">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-between items-center mt-6">
            <button
              type="submit"
              className={`bg-pink-500 text-white rounded-md px-4 py-2 ${
                loading ? "opacity-50 cursor-not-allowed" : "hover:bg-pink-700"
              }`}
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
