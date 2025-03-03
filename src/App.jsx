import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import SignUp from "./components/Auth/SignUp";
import Register from "./components/Auth/Register"; 
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  // Private route component that checks authentication
  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/signup" />;
  };

  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/signup" element={<SignUp setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
          
          {/* Private Routes */}
          <Route path="/home" element={<PrivateRoute element={<div>Home Page</div>} />} />
          
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
