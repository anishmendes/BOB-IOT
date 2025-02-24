import React from "react";
import { motion } from "framer-motion";

const Register = () => {
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
        <form>
          {/* Full Name */}
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }} className="mb-4">
            <label className="block mb-2 font-extrabold">Full Name</label>
            <input
              className="w-full p-4 text-lg font-extrabold placeholder-gray-700 bg-white dark:bg-gray-800 shadow border-2 border-gray-700 dark:border-gray-600 rounded focus:ring-2 focus:ring-indigo-600 focus:outline-none transition-all duration-200"
              type="text"
              placeholder="Bob Bob"
            />
          </motion.div>

          {/* Email */}
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }} className="mb-4">
            <label className="block mb-2 font-extrabold">Email</label>
            <input
              className="w-full p-4 text-lg font-extrabold placeholder-gray-700 bg-white dark:bg-gray-800 shadow border-2 border-gray-700 dark:border-gray-600 rounded focus:ring-2 focus:ring-indigo-600 focus:outline-none transition-all duration-200"
              type="email"
              placeholder="example@gmail.com"
            />
          </motion.div>

          {/* Phone Number */}
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }} className="mb-4">
            <label className="block mb-2 font-extrabold">Phone Number</label>
            <input
              className="w-full p-4 text-lg font-extrabold placeholder-gray-700 bg-white dark:bg-gray-800 shadow border-2 border-gray-700 dark:border-gray-600 rounded focus:ring-2 focus:ring-indigo-600 focus:outline-none transition-all duration-200"
              type="tel"
              placeholder="+44 123 456 7890"
            />
          </motion.div>

          {/* Location */}
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }} className="mb-4">
            <label className="block mb-2 font-extrabold">Location</label>
            <input
              className="w-full p-4 text-lg font-extrabold placeholder-gray-700 bg-white dark:bg-gray-800 shadow border-2 border-gray-700 dark:border-gray-600 rounded focus:ring-2 focus:ring-indigo-600 focus:outline-none transition-all duration-200"
              type="text"
              placeholder="New York, USA"
            />
          </motion.div>

          {/* Password */}
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }} className="mb-4">
            <label className="block mb-2 font-extrabold">Password</label>
            <input
              className="w-full p-4 text-lg font-extrabold placeholder-gray-700 bg-white dark:bg-gray-800 shadow border-2 border-gray-700 dark:border-gray-600 rounded focus:ring-2 focus:ring-indigo-600 focus:outline-none transition-all duration-200"
              type="password"
              placeholder="Enter your password"
            />
          </motion.div>

          {/* Confirm Password */}
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }} className="mb-4">
            <label className="block mb-2 font-extrabold">Confirm Password</label>
            <input
              className="w-full p-4 text-lg font-extrabold placeholder-gray-700 bg-white dark:bg-gray-800 shadow border-2 border-gray-700 dark:border-gray-600 rounded focus:ring-2 focus:ring-indigo-600 focus:outline-none transition-all duration-200"
              type="password"
              placeholder="Confirm your password"
            />
          </motion.div>

          {/* Terms & Conditions */}
          <div className="flex items-center mb-6">
            <input type="checkbox" className="mr-2" />
            <span className="font-extrabold text-gray-700 dark:text-gray-300">
              I agree to the <a href="#" className="text-indigo-600 hover:underline">terms & conditions</a>
            </span>
          </div>

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