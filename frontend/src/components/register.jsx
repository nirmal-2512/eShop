import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="flex min-h-screen text-white">
      {/* Left side illustration (hidden on small screens) */}
      <div className="hidden md:flex w-3/5 bg-purple-200 items-center justify-center text-white">
        <img src="" alt="Login Illustration" className="max-w-sm" />
      </div>

      {/* Right side login form */}
      <div className="flex flex-col justify-center items-center w-full md:w-2/5 px-6 md:px-12 bg-purple-800">
        {/* Logo */}
        <Link
          to="/"
          className="absolute top-6 left-6 flex items-center space-x-2"
        >
          <span className="text-lg font-semibold"></span>
        </Link>

        {/* Welcome Text */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Welcome to eShop! 👋</h2>
          <p className="text-white">
            Please sign in to your account and start the adventure
          </p>
        </div>

        {/* Login Form */}
        <form className="w-full max-w-sm space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Full Name
            </label>
            <input
              type="name"
              id="name"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-primary  bg-gray-200 text-black"
            />
          </div>

          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium mb-1"
            >
              Username
            </label>
            <input
              type="username"
              id="username"
              placeholder="username"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-primary  bg-gray-200 text-black"
            />
          </div>

          <div>
            <label htmlFor="contact" className="block text-sm font-medium mb-1">
              Username
            </label>
            <input
              type="contact"
              id="contact"
              placeholder="Phone Number"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-primary  bg-gray-200 text-black"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1 ">
              Email or Username
            </label>
            <input
              type="text"
              id="email"
              placeholder="Enter your email or username"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-primary bg-gray-200 text-black"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-primary  bg-gray-200 text-black"
            />
          </div>

          {/* Options */}
          <div className="flex justify-between items-center">
            <label className="flex items-center space-x-2 text-sm">
              <input type="checkbox" className="h-4 w-4" />
              <span>Remember me</span>
            </label>
            <Link
              to="/forgot-password"
              className="text-sm text-primary hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary text-black py-2 rounded-lg hover:bg-purple-400 transition bg-purple-200"
          >
            Create account
          </button>
        </form>

        {/* Register */}
        <div className="mt-6 text-sm text-gray-100">
          Already have an account?{" "}
          <Link to="/register" className="text-blue-400 hover:underline">
            Login to your account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
