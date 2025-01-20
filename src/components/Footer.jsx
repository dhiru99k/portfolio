import React from 'react';
import { motion } from 'framer-motion';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome
import bg from '../image/1.jpg'

const Footer = () => {
  return (
    <footer
      className="text-white py-6"
      style={{
        backgroundImage: `url(${bg})`, // Replace with the correct image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto text-center">
        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-sm">
            © {new Date().getFullYear()} Dheeraj Kumar. All rights reserved. | Built with React and Tailwind CSS.
          </p>
        </motion.div>

        {/* Social Media Links */}
        <div className="mt-6 flex justify-center gap-6">
          <motion.a
            href="https://www.linkedin.com/in/dheeraj-kumar99k"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-2xl hover:text-yellow-300 transition-all duration-300"
          >
            <i className="fab fa-linkedin"></i> {/* LinkedIn Icon */}
          </motion.a>
          <motion.a
            href="https://www.youtube.com/@thehungrychauhan"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-2xl hover:text-yellow-300 transition-all duration-300"
          >
            <i className="fab fa-youtube"></i> {/* YouTube Icon */}
          </motion.a>
          <motion.a
            href="mailto:dk5333341@gmail.com"
            whileHover={{ scale: 1.2 }}
            className="text-2xl hover:text-yellow-300 transition-all duration-300"
          >
            <i className="fas fa-envelope"></i> {/* Email Icon */}
          </motion.a>
        </div>
      </div>

      {/* Back-to-Top Button */}
      <motion.div
        className="fixed bottom-6 right-6"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <button
          className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full shadow-md hover:bg-yellow-500 transition-all duration-300"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Back to Top ↑
        </button>
      </motion.div>
    </footer>
  );
};

export default Footer;
