import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome
import bg from "../image/1.jpg";

const Footer = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <footer
      className="text-white py-10 relative"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Footer Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* About Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-3">About Me</h3>
            <p className="text-sm text-gray-300">
              Passionate web developer specializing in modern, responsive, and performance-optimized applications.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>
                <button onClick={() => navigate("/home")} className="hover:text-yellow-400 transition duration-300">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/about")} className="hover:text-yellow-400 transition duration-300">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/portfolio")} className="hover:text-yellow-400 transition duration-300">
                  Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/contact")} className="hover:text-yellow-400 transition duration-300">
                  Contact
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
          >
            <h3 className="text-xl font-semibold mb-3">Contact</h3>
            <p className="text-sm text-gray-300">
              <i className="fas fa-envelope mr-2 text-yellow-400"></i>
              <a href="mailto:dk5333341@gmail.com" className="hover:text-yellow-400 transition duration-300">
                dk5333341@gmail.com
              </a>
            </p>
            <p className="text-sm text-gray-300 mt-2">
              <i className="fas fa-map-marker-alt mr-2 text-yellow-400"></i>
              India
            </p>
          </motion.div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 flex justify-center md:justify-start gap-6">
          <motion.a
            href="https://www.linkedin.com/in/dheeraj-kumar99k"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-2xl hover:text-yellow-300 transition-all duration-300"
          >
            <i className="fab fa-linkedin"></i>
          </motion.a>
          <motion.a
            href="https://www.youtube.com/@thehungrychauhan"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-2xl hover:text-yellow-300 transition-all duration-300"
          >
            <i className="fab fa-youtube"></i>
          </motion.a>
          <motion.a
            href="mailto:dk5333341@gmail.com"
            whileHover={{ scale: 1.2 }}
            className="text-2xl hover:text-yellow-300 transition-all duration-300"
          >
            <i className="fas fa-envelope"></i>
          </motion.a>
        </div>

        {/* Copyright Notice */}
        <motion.div
          className="mt-8 text-center text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <p>© {new Date().getFullYear()} Dheeraj Kumar. All Rights Reserved.</p>
        </motion.div>

        {/* Back-to-Top Button */}
        <motion.div
          className="fixed bottom-6 right-6"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <button
            className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full shadow-md hover:bg-yellow-500 transition-all duration-300"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Back to Top ↑
          </button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
