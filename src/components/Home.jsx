import React from "react";
import { motion } from "framer-motion";
import prof from "../image/profile.jpg";
import bgImage from "../image/1.jpg";
import Section from "./Section";
import Skills from "./Skills";
import UpcomingProjects from "./UpcomingProjects";

const Home = () => {
  return (
    <div className="bg-gray-50">
      {/* About Me Section */}
      <Section
        id="about"
        className="py-20 relative text-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <motion.h2
            className="text-5xl font-extrabold text-white mb-6 drop-shadow-md"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About <span className="text-blue-400"> Me</span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-200 max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            A passionate software developer focused on creating scalable and
            efficient solutions, blending creativity with technology.
          </motion.p>

          {/* Profile & Info Section */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            {/* Profile Picture */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <img
                src={prof}
                alt="Profile"
                className="rounded-full w-52 h-52 md:w-64 md:h-64 object-cover border-4 border-white shadow-xl"
              />
              <div className="absolute bottom-2 right-2 bg-blue-600 text-white text-sm px-4 py-1 rounded-full shadow-md">
                Software Developer
              </div>
            </motion.div>

            {/* About Text */}
            <motion.div
              className="max-w-xl bg-white p-8 rounded-xl shadow-xl bg-opacity-90"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h3 className="text-3xl font-bold text-blue-800 mb-4">
                Hi, I'm Dheeraj Kumar!
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                I specialize in building high-performance web applications,
                combining modern technologies with a user-first approach. I am
                passionate about **React, Node.js, and AI**, and I enjoy
                bringing ideas to life through coding.
              </p>
              <div className="mt-6">
                <a
                  href="#"
                  className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-full shadow-md hover:from-blue-700 hover:to-blue-900 transition duration-300"
                >
                  Contact Me
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Skills />

      {/* Upcoming Projects Section */}
      <UpcomingProjects />
    </div>
  );
};

export default Home;
