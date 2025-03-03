import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../../utils"; // Assuming you have utility functions for success/error handling

const SignUp = () => {
  const navigate = useNavigate();

  // State for form inputs
  const [signupInfo, setSignupInfo] = useState({
    email: "",
    password: "",
    name: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission (Signup)
  const handleSignup = async (e) => {
    e.preventDefault();
    const { email, password, name } = signupInfo;

    // Check if fields are empty
    if (!email || !password || !name) {
      return handleError("All fields are required!");
    }

    try {
      const url = `https://deploy-mern-app-1-api.vercel.app/auth/signup`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupInfo),
      });
      const result = await response.json();
      const { success, message, error } = result;

      if (success) {
        handleSuccess(message);
        // Redirect to login page after successful signup
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else if (error) {
        handleError(error?.details[0]?.message || message);
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
            Sign up
          </motion.h2>
        </div>
        <form onSubmit={handleSignup}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="mb-6"
          >
            <label className="block mb-2 font-extrabold">Name</label>
            <input
              className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white dark:bg-gray-800 shadow border-2 border-indigo-900 dark:border-gray-700 rounded focus:ring-2 focus:ring-indigo-600 focus:outline-none transition-all duration-200"
              type="text"
              name="name"
              value={signupInfo.name}
              onChange={handleChange}
              placeholder="Your Name"
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="mb-6"
          >
            <label className="block mb-2 font-extrabold">Email</label>
            <input
              className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white dark:bg-gray-800 shadow border-2 border-indigo-900 dark:border-gray-700 rounded focus:ring-2 focus:ring-indigo-600 focus:outline-none transition-all duration-200"
              type="email"
              name="email"
              value={signupInfo.email}
              onChange={handleChange}
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
              name="password"
              value={signupInfo.password}
              onChange={handleChange}
              placeholder="**********"
            />
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow-lg rounded transition-all duration-200"
          >
            Sign up
          </motion.button>
          <p className="text-center font-extrabold">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/register")}
              className="text-red-500 hover:underline"
            >
              Login
            </button>
          </p>
        </form>
      </motion.div>
      <ToastContainer />
    </motion.div>
  );
};

export default SignUp;
