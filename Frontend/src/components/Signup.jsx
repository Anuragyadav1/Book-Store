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

  const onSubmit = async (data) => {
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
      });
  };

  const handleLoginSuccess = () => {
    navigate("/"); // Navigate to home page on successful login
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
              <h3 className="font-bold text-lg">Signup</h3>
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("fullname", { required: true })}
                />
                {errors.fullname && <span className="text-sm text-red-500">This field is required</span>}
              </div>

              {/* Email */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                {errors.email && <span className="text-sm text-red-500">This field is required</span>}
              </div>

              {/* Password */}
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("password", { required: true })}
                />
                {errors.password && <span className="text-sm text-red-500">This field is required</span>}
              </div>

              {/* Submit Button */}
              <div className="flex justify-between mt-6">
                <button className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700">Signup</button>
                <p className="text-xl">
                  Have an account?{" "}
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
