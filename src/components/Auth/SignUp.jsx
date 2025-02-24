import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate(); // Hook for navigation

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
            Sign in
          </motion.h2>
        </div>
        <form>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="mb-6"
          >
            <label className="block mb-2 font-extrabold">Email</label>
            <input
              className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white dark:bg-gray-800 shadow border-2 border-indigo-900 dark:border-gray-700 rounded focus:ring-2 focus:ring-indigo-600 focus:outline-none transition-all duration-200"
              type="email"
              placeholder="Anishdon@gmail.com"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="mb-6"
          >
            <label className="block mb-2 font-extrabold">Password</label>
            <input
              className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white dark:bg-gray-800 shadow border-2 border-indigo-900 dark:border-gray-700 rounded focus:ring-2 focus:ring-indigo-600 focus:outline-none transition-all duration-200"
              type="password"
              placeholder="**********"
            />
          </motion.div>
          <div className="flex flex-wrap -mx-4 mb-6 items-center justify-between">
            <div className="w-full lg:w-auto px-4 mb-4 lg:mb-0">
              <label>
                <input type="checkbox" />
                <span className="ml-1 font-extrabold">Remember me</span>
              </label>
            </div>
            <div className="w-full lg:w-auto px-4">
              <a className="inline-block font-extrabold hover:underline text-indigo-600" href="#">
                Forgot your password?
              </a>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow-lg rounded transition-all duration-200"
          >
            Sign in
          </motion.button>
          <p className="text-center font-extrabold">
            Don’t have an account?{" "}
            <button
              onClick={() => navigate("/register")}
              className="text-red-500 hover:underline"
            >
              Sign up
            </button>
          </p>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default SignUp;
