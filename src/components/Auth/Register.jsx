import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "../../utils"; // Assuming you have utility functions for error/success handling.

const Register = () => {
  const [registerInfo, setRegisterInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    password: "",
    confirmPassword: "",
    agreedToTerms: false, // Add a field to handle terms agreement
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRegisterInfo((prevInfo) => ({
      ...prevInfo,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const { fullName, email, phone, location, password, confirmPassword, agreedToTerms } = registerInfo;

    // Basic validation
    if (!fullName || !email || !phone || !location || !password || !confirmPassword) {
      return handleError("All fields are required.");
    }

    if (password !== confirmPassword) {
      return handleError("Passwords do not match.");
    }

    if (!agreedToTerms) {
      return handleError("You must agree to the terms and conditions.");
    }

    try {
      const url = `https://deploy-mern-app-1-api.vercel.app/auth/register`; // Your API URL
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerInfo),
      });

      const result = await response.json();
      const { success, message, error } = result;

      if (success) {
        handleSuccess(message);
        navigate("/login"); // Redirect to login page after successful registration
      } else if (error) {
        const details = error?.details[0]?.message;
        handleError(details || message);
      } else {
        handleError(message);
      }
    } catch (err) {
      handleError(err.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="container px-4 mx-auto"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        className="max-w-lg mx-auto bg-white dark:bg-gray-900 shadow-lg p-8 rounded-lg"
      >
        <div className="text-center mb-6">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold"
          >
            IoT Project Registration
          </motion.h2>
        </div>
        <form onSubmit={handleRegister}>
          {/* Full Name */}
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }} className="mb-4">
            <label className="block mb-2 font-extrabold">Full Name</label>
            <input
              className="w-full p-4 text-lg font-extrabold placeholder-gray-700 bg-white dark:bg-gray-800 shadow border-2 border-gray-700 dark:border-gray-600 rounded focus:ring-2 focus:ring-indigo-600 focus:outline-none transition-all duration-200"
              type="text"
              name="fullName"
              placeholder="Bob Bob"
              value={registerInfo.fullName}
              onChange={handleChange}
            />
          </motion.div>

          {/* Email */}
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }} className="mb-4">
            <label className="block mb-2 font-extrabold">Email</label>
            <input
              className="w-full p-4 text-lg font-extrabold placeholder-gray-700 bg-white dark:bg-gray-800 shadow border-2 border-gray-700 dark:border-gray-600 rounded focus:ring-2 focus:ring-indigo-600 focus:outline-none transition-all duration-200"
              type="email"
              name="email"
              placeholder="example@gmail.com"
              value={registerInfo.email}
              onChange={handleChange}
            />
          </motion.div>

          {/* Phone Number */}
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }} className="mb-4">
            <label className="block mb-2 font-extrabold">Phone Number</label>
            <input
              className="w-full p-4 text-lg font-extrabold placeholder-gray-700 bg-white dark:bg-gray-800 shadow border-2 border-gray-700 dark:border-gray-600 rounded focus:ring-2 focus:ring-indigo-600 focus:outline-none transition-all duration-200"
              type="tel"
              name="phone"
              placeholder="+44 123 456 7890"
              value={registerInfo.phone}
              onChange={handleChange}
            />
          </motion.div>

          {/* Location */}
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }} className="mb-4">
            <label className="block mb-2 font-extrabold">Location</label>
            <input
              className="w-full p-4 text-lg font-extrabold placeholder-gray-700 bg-white dark:bg-gray-800 shadow border-2 border-gray-700 dark:border-gray-600 rounded focus:ring-2 focus:ring-indigo-600 focus:outline-none transition-all duration-200"
              type="text"
              name="location"
              placeholder="New York, USA"
              value={registerInfo.location}
              onChange={handleChange}
            />
          </motion.div>

          {/* Password */}
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }} className="mb-4">
            <label className="block mb-2 font-extrabold">Password</label>
            <input
              className="w-full p-4 text-lg font-extrabold placeholder-gray-700 bg-white dark:bg-gray-800 shadow border-2 border-gray-700 dark:border-gray-600 rounded focus:ring-2 focus:ring-indigo-600 focus:outline-none transition-all duration-200"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={registerInfo.password}
              onChange={handleChange}
            />
          </motion.div>

          {/* Confirm Password */}
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }} className="mb-4">
            <label className="block mb-2 font-extrabold">Confirm Password</label>
            <input
              className="w-full p-4 text-lg font-extrabold placeholder-gray-700 bg-white dark:bg-gray-800 shadow border-2 border-gray-700 dark:border-gray-600 rounded focus:ring-2 focus:ring-indigo-600 focus:outline-none transition-all duration-200"
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={registerInfo.confirmPassword}
              onChange={handleChange}
            />
          </motion.div>

          {/* Terms & Conditions */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="flex items-center mb-6"
          >
            <input
              type="checkbox"
              name="agreedToTerms"
              checked={registerInfo.agreedToTerms}
              onChange={handleChange}
              className="mr-2"
            />
            <span className="font-extrabold text-gray-700 dark:text-gray-300">
              I agree to the{" "}
              <a href="#" className="text-indigo-600 hover:underline">
                terms & conditions
              </a>
            </span>
          </motion.div>

          {/* Register Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-4 text-lg font-extrabold text-white bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow-lg rounded transition-all duration-200"
          >
            Register
          </motion.button>

          {/* Already have an account? */}
          <p className="text-center font-extrabold mt-4">
            Already have an account?{" "}
            <a className="text-red-500 hover:underline" href="/login">
              Sign in
            </a>
          </p>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Register;
