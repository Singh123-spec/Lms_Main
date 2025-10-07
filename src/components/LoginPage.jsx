// LoginPage.jsx
import React from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import loginIllustration from "../assets/loginIllustration.png";
import logo from "../assets/mindvex.png";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      <div className=" md:w-1/2 flex flex-col justify-center items-center p-6 md:p-12 bg-white">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img src={logo} alt="Mindvex LMS" className="h-12" />
          </div>

          {/* Title */}
          <h2 className="text-xl font-semibold text-center mb-8">
            Login into your account
          </h2>

          {/* Email Input */}
          <div className="mb-4 relative">
            <input
              type="email"
              placeholder="alex@email.com"
              className="w-full border rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <FaEnvelope className="absolute left-3 top-3.5 text-purple-600" />
          </div>

          {/* Password Input */}
          <div className="mb-4 relative">
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <FaLock className="absolute left-3 top-3.5 text-purple-600" />
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end mb-6">
            <a href="#" className="text-sm text-purple-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg">
            Login
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:flex justify-center items-center mt-4 mr-32">
        <img
          src={loginIllustration}
          alt="Login Illustration"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
}
