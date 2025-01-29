import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Recipe Sharing Platform",
    description:
      "A platform to share and explore amazing recipes from around the world.",
    image: "https://via.placeholder.com/500",
  },
  {
    id: 2,
    title: "Fitness Tracker",
    description:
      "Track your workouts, nutrition, and progress with interactive graphs.",
    image: "https://via.placeholder.com/500",
  },
];

const UpcomingProjects = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-gray-800">
            Upcoming <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
            Discover the exciting projects I’m working on to bring innovative solutions to life.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.8 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform transition duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <a
                  href="#"
                  className="mt-4 inline-block text-blue-600 font-semibold hover:text-blue-800 transition duration-300"
                >
                  Learn More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingProjects;
