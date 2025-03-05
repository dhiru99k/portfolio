import React from "react";
import { motion } from "framer-motion";
import prof from "../image/profile.jpg";

const Profile = () => {
  const skills = [
    { name: "C++", level: 50 },
    { name: "Python", level: 50 },
    { name: "React.js", level: 50 },
    { name: "Tailwind CSS", level: 70 },
    { name: "Machine Learning", level: 60 },
    { name: "Data Science", level: 65 },
    { name: "SQL", level: 65 },
    { name: "Adobe Photoshop", level: 60 },
    { name: "Adobe Premiere Pro", level: 50 },
  ];

  const education = [
    { degree: "B.Tech (CSE)", place: "Arya College of Engineering & IT", year: "2019–2023", score: "90%" },
    { degree: "Senior Secondary", place: "Kendriya Vidyalaya No. 1", year: "2017–2018", score: "68.2%" },
    { degree: "Secondary", place: "Kendriya Vidyalaya, Misa Camp", year: "2015–2016", score: "85%" },
  ];

  return (
    <section className="min-h-screen bg-gray-50 p-10">
      {/* Hero Section */}
      <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center mb-12">
        <h2 className="text-5xl font-extrabold text-blue-700">About Me</h2>
        <p className="text-gray-600 mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          Hi, I'm <span className="font-semibold text-black">Dheeraj Kumar</span>, a software developer and data science enthusiast.
        </p>
      </motion.div>

      {/* Profile Image and Description */}
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="flex flex-col md:flex-row items-center justify-center gap-12 bg-white shadow-md p-10 rounded-xl">
        <img src={prof} alt="Profile" className="rounded-full w-44 h-44 object-cover border-4 border-blue-500 shadow-lg" />
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

      {/* Skills Section with Progress Bars */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="mt-16">
        <h3 className="text-3xl font-semibold text-blue-700 mb-6 text-center">Skills</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500 hover:shadow-lg transition">
              <div className="flex justify-between mb-2">
                <span className="text-lg font-semibold text-blue-700">{skill.name}</span>
                <span className="text-blue-600 font-medium">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Profile;