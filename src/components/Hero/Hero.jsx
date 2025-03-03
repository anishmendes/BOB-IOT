// Hero.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import hero from "../../assets/hero.jpg"; // Make sure the path is correct

const Hero = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const url = "https://deploy-mern-app-1-api.vercel.app/products";
      const headers = {
        'Authorization': localStorage.getItem('token')
      };
      const response = await fetch(url, { headers });
      const result = await response.json();
      
      // Check if result is an array before setting the products
      if (Array.isArray(result)) {
        setProducts(result);
      } else {
        console.error('API response is not an array:', result);
        setProducts([]);
      }
    } catch (err) {
      console.error('Error fetching products:', err);
      setProducts([]);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="py-12 sm:py-24 bg-light dark:bg-dark text-dark dark:text-light">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero Section Content */}
        <motion.div
          className="mb-8 flex justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-secondary dark:text-primary ring-1 ring-inset ring-gray-900/10 hover:ring-gray-900/20">
            <span className="hidden md:inline">Revolutionizing Football Analytics.</span>
            <a href="#" target="_blank" className="font-semibold text-primary dark:text-secondary hover:text-secondary dark:hover:text-primary transition-colors duration-200">
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
          <h1 className="text-4xl font-bold tracking-tight text-dark dark:text-light sm:text-6xl">
            Smart Football Playability Checker
          </h1>
          <p className="mt-6 text-lg leading-8 text-secondary dark:text-primary">
            Our cutting-edge IoT device monitors temperature, wind speed, and humidity to determine if conditions are optimal for a football match. Stay ahead of the game with real-time weather analysis.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <motion.a href="#" className="rounded-md bg-primary dark:bg-secondary px-3.5 py-2.5 text-sm font-semibold text-light dark:text-dark shadow-sm hover:bg-secondary dark:hover:bg-primary transition duration-300">
              Try the Demo
            </motion.a>
            <motion.a href="#" className="text-sm font-semibold leading-6 text-dark dark:text-light hover:text-secondary dark:hover:text-primary transition-colors duration-200">
              Learn More <span>→</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Display Products */}
        <div className="mt-10 flow-root sm:mt-20">
          <motion.div className="-m-2 rounded-xl bg-secondary/5 dark:bg-primary/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.02 }}>
            <img src={hero} width="2432" height="1442" className="rounded-md shadow-2xl ring-1 ring-gray-900/10" />
          </motion.div>
        </div>

        {/* Safely map through products */}
        <div className="mt-8">
          {Array.isArray(products) && products.length > 0 ? (
            <ul>
              {products.map((product, index) => (
                <li key={index} className="py-4">
                  <span className="font-semibold">{product.name}</span> - ${product.price}
                </li>
              ))}
            </ul>
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
