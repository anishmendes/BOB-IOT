import React from "react";
import { motion } from "framer-motion";
import hero from "../../assets/hero.jpg"

const Hero = () => {
  return (
    <div className="py-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mb-8 flex justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/10 hover:ring-gray-900/20">
            <span className="hidden md:inline">Revolutionizing Football Analytics.</span>
            <a href="#" target="_blank" className="font-semibold text-blue-500 hover:text-lime-800 transition-colors duration-200">
              <span className="absolute inset-0"></span> Learn More <span>→</span>
            </a>
          </p>
        </motion.div>
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Smart Football Playability Checker
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our cutting-edge IoT device monitors temperature, air pressure, and humidity to determine if conditions are optimal for a football match. Stay ahead of the game with real-time weather analysis.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <motion.a 
              href="#"
              className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lime-600 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Try the Demo
            </motion.a>
            <motion.a 
              href="#" 
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-lime-600 transition-colors duration-200"
              whileHover={{ x: 5 }}
            >
              Learn More <span>→</span>
            </motion.a>
          </div>
        </motion.div>
        <div className="mt-10 flow-root sm:mt-20">
          <motion.div 
            className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={hero}
              width="2432"
              height="1442"
              className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
