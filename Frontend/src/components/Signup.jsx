import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axiosInstance from "../api/axiosInstance";
import toast from "react-hot-toast";
import Login from "./Login"; // Import the Login component

function Signup() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isLoginModalOpen, setLoginModalOpen] = useState(false); // State to control login modal
  const [isLoading, setIsLoading] = useState(false); // Loading state for signup

  const onSubmit = async (data) => {
    setIsLoading(true); // Start loading
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axiosInstance
      .post("/user/signup", userInfo)
      .then((res) => {
        if (res.data) {
          toast.success("Signup Successful");
          navigate("/"); // Navigate after signup
          localStorage.setItem("Users", JSON.stringify(res.data.user));
        }
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Error: " + err.response.data.message);
        }
      })
      .finally(() => {
        setIsLoading(false); // Stop loading
      });
  };

  const handleLoginSuccess = () => {
    navigate("/"); // Navigate to home page on successful login
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center p-4">
        <div className="w-full max-w-lg md:w-[600px]">
          <div className="modal-box p-6 md:p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
              <h3 className="font-bold text-lg text-center">Signup</h3>

              {/* Full Name */}
              <div className="mt-4 space-y-2">
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  className="w-full px-3 py-2 border rounded-md outline-none focus:border-blue-500"
                  {...register("fullname", { required: true })}
                />
                {errors.fullname && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              {/* Email */}
              <div className="mt-4 space-y-2">
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border rounded-md outline-none focus:border-blue-500"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              {/* Password */}
              <div className="mt-4 space-y-2">
                <label className="block text-sm font-medium">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-3 py-2 border rounded-md outline-none focus:border-blue-500"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex justify-between items-center mt-6">
                <button
                  type="submit"
                  className={`bg-pink-500 text-white rounded-md px-4 py-2 flex items-center justify-center transition-colors ${
                    isLoading
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-pink-700"
                  }`}
                  disabled={isLoading} // Disable button while loading
                >
                  {isLoading && (
                    <span className="loader border-t-transparent border-4 border-white rounded-full w-4 h-4 mr-2"></span>
                  )}
                  {isLoading ? "Signing up..." : "Signup"}
                </button>
                <p className="text-sm text-center">
                  Already have an account?{" "}
                  <button
                    type="button"
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() => setLoginModalOpen(true)} // Open login modal
                  >
                    Login
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      {isLoginModalOpen && (
        <Login
          onClose={() => setLoginModalOpen(false)} // Close modal callback
          onSuccess={handleLoginSuccess} // Callback for successful login
        />
      )}
    </>
  );
}

export default Signup;
