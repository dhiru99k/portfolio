import React from 'react';
import { motion } from 'framer-motion';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

const Projects = () => {
  const projects = [
    {
      name: "Brain Box",
      description: "An IoT-based smart jar with advanced functionalities.",
      githubLink: "https://github.com/your-username/brain-box", // Replace with your actual GitHub repo URL
    },
    {
      name: "House Price Prediction",
      description: "A real estate model predicting house prices.",
      githubLink: "https://github.com/your-username/house-price-prediction", // Replace with your actual GitHub repo URL
    },
    {
      name: "Amazon Product Scraping",
      description: "Scrapes Amazon data using Python libraries.",
      githubLink: "https://github.com/your-username/amazon-product-scraping", // Replace with your actual GitHub repo URL
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-50 via-lightBlue-100 to-white p-8">
      <h2 className="text-4xl font-extrabold text-center text-blue-600 mb-12">My Projects</h2>
      <div className="grid md:grid-cols-3 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-xl rounded-lg p-6 relative overflow-hidden transition-all duration-300 hover:shadow-2xl"
          >
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">{project.name}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>

            {/* GitHub Icon */}
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="absolute bottom-6 right-6 text-3xl text-gray-700 hover:text-blue-600 transition-all duration-300"
            >
              <i className="fab fa-github"></i>
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
