import React from "react";
import { motion } from "framer-motion";
import fitness from '../image/fitness.jpg';
import recipe from '../image/recipe.png';

const projects = [
  {
    id: 1,
    title: "Recipe Sharing Platform",
    description:
      "A platform to share and explore amazing recipes from around the world.",
    image: recipe,
  },
  {
    id: 2,
    title: "Fitness Tracker",
    description:
      "Track your workouts, nutrition, and progress with interactive graphs.",
    image: fitness,
  },
];

const UpcomingProjects = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900">
            Upcoming <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">
            Discover the exciting projects I’m working on to bring innovative solutions to life.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.8 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transform transition duration-300 hover:scale-105"
            >
              <div className="relative w-full h-72">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-75"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                <p className="text-gray-700 mt-3">{project.description}</p>
                <a
                  href="#"
                  className="mt-6 inline-block px-6 py-3 text-white bg-blue-600 rounded-lg font-semibold hover:bg-blue-800 transition duration-300"
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
