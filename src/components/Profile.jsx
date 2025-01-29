import React from "react";
import { motion } from "framer-motion";
import prof from "../image/profile.jpg";

const Profile = () => {
  const skills = [
    { name: "C++", icon: "fas fa-cogs" },
    { name: "Python", icon: "fab fa-python" },
    { name: "React.js", icon: "fab fa-react" },
    { name: "Tailwind CSS", icon: "fab fa-css3-alt" },
    { name: "Machine Learning", icon: "fas fa-brain" },
    { name: "Data Science", icon: "fas fa-chart-line" },
    { name: "SQL", icon: "fas fa-database" },
    { name: "Adobe Photoshop", icon: "fab fa-adobe" },
    { name: "Adobe Premiere Pro", icon: "fab fa-adobe" },
  ];

  const education = [
    { degree: "B.Tech (CSE)", place: "Arya College of Engineering & IT", year: "2019–2023", score: "90%" },
    { degree: "Senior Secondary", place: "Kendriya Vidyalaya No. 1", year: "2017–2018", score: "68.2%" },
    { degree: "Secondary", place: "Kendriya Vidyalaya, Misa Camp", year: "2015–2016", score: "85%" },
  ];

  return (
    <section className="min-h-screen bg-gray-100 p-10">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-700">About Me</h2>
        <p className="text-gray-600 mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          Hi, I'm <span className="font-semibold text-black">Dheeraj Kumar</span>, a software developer and data science enthusiast.
        </p>
      </motion.div>

      {/* Profile Image and Description */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col md:flex-row items-center justify-center gap-12 bg-white shadow-md p-10 rounded-xl"
      >
        <img
          src={prof}
          alt="Profile"
          className="rounded-full w-44 h-44 object-cover border-4 border-blue-500 shadow-lg"
        />
        <div className="max-w-xl text-center md:text-left">
          <p className="text-gray-800 text-lg">
            Passionate about web development, machine learning, and solving real-world problems. Love exploring new technologies, sports, and content creation.
          </p>
        </div>
      </motion.div>

      {/* Education Section */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="mt-16">
        <h3 className="text-3xl font-semibold text-blue-700 mb-6 text-center">Education</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <motion.div key={index} className="bg-white shadow-md p-6 rounded-lg border-l-4 border-blue-500 hover:shadow-lg transition">
              <h4 className="text-xl font-bold text-blue-700">{edu.degree}</h4>
              <p className="text-blue-600">{edu.place}</p>
              <p className="text-blue-500">{edu.year} - {edu.score}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="mt-16">
        <h3 className="text-3xl font-semibold text-blue-700 mb-6 text-center">Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="bg-white text-blue-700 px-6 py-4 rounded-lg shadow-md hover:shadow-lg transition flex items-center justify-center border-l-4 border-blue-500"
            >
              <i className={`${skill.icon} text-3xl mr-3`}></i>
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Profile;
